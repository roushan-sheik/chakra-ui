import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useEventListener } from './useEventListener';

describe('useEventListener hook', () => {
  const eventMap: Record<string, (event: Event) => void> = {};

  beforeEach(() => {
    // Reset event map
    Object.keys(eventMap).forEach((key) => {
      delete eventMap[key];
    });

    // Mock event listeners
    vi.spyOn(window, 'addEventListener').mockImplementation((event, handler) => {
      eventMap[event as string] = handler as (event: Event) => void;
    });

    vi.spyOn(window, 'removeEventListener').mockImplementation((event) => {
      delete eventMap[event as string];
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should add event listener to window when element is null', () => {
    // In the actual implementation, when element is null, it adds the event to window, so it should be called
    const handler = vi.fn();
    renderHook(() => useEventListener('click', handler, null));

    expect(window.addEventListener).toHaveBeenCalledWith('click', expect.any(Function), undefined);

    // Trigger the event
    eventMap.click({} as Event);
    expect(handler).toHaveBeenCalled();
  });

  it('should add event listener to provided element', () => {
    const element = document.createElement('div');
    const elementAddEventListenerSpy = vi.spyOn(element, 'addEventListener');
    const elementRemoveEventListenerSpy = vi.spyOn(element, 'removeEventListener');
    const handler = vi.fn();

    const { unmount } = renderHook(() => useEventListener('click', handler, element));

    expect(elementAddEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), undefined);

    // Trigger the event manually
    const eventHandler = elementAddEventListenerSpy.mock.calls[0][1] as EventListener;
    eventHandler({} as Event);
    expect(handler).toHaveBeenCalled();

    // Unmount should clean up
    unmount();
    expect(elementRemoveEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), undefined);
  });

  it('should update handler on re-render', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    const { rerender } = renderHook(({ handler }) => useEventListener('click', handler, window), {
      initialProps: { handler: handler1 },
    });

    // Trigger event with first handler
    eventMap.click({} as Event);
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).not.toHaveBeenCalled();

    // Update handler
    rerender({ handler: handler2 });

    // Trigger event with new handler
    eventMap.click({} as Event);
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('should handle custom options', () => {
    const handler = vi.fn();
    const options = { capture: true, passive: true };

    renderHook(() => useEventListener('click', handler, window, options));

    expect(window.addEventListener).toHaveBeenCalledWith('click', expect.any(Function), options);
  });

  it('should handle boolean options', () => {
    const handler = vi.fn();
    const options = true; // useCapture

    renderHook(() => useEventListener('click', handler, window, options));

    expect(window.addEventListener).toHaveBeenCalledWith('click', expect.any(Function), options);
  });

  // Additional test cases
  it('should handle invalid element gracefully', () => {
    const handler = vi.fn();
    // Create an object without addEventListener method
    const invalidElement = {} as HTMLElement;

    renderHook(() => useEventListener('click', handler, invalidElement));

    // Should not throw error and should not add event listener
    expect(window.addEventListener).not.toHaveBeenCalled();
    expect(handler).not.toHaveBeenCalled();
  });

  it('should update eventListener when element changes', () => {
    const handler = vi.fn();
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');

    const element1AddEventListenerSpy = vi.spyOn(element1, 'addEventListener');
    const element2AddEventListenerSpy = vi.spyOn(element2, 'addEventListener');
    const element1RemoveEventListenerSpy = vi.spyOn(element1, 'removeEventListener');

    const { rerender } = renderHook(({ element }) => useEventListener('click', handler, element), {
      initialProps: { element: element1 },
    });

    expect(element1AddEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), undefined);

    // Change the element
    rerender({ element: element2 });

    // Should remove listener from element1
    expect(element1RemoveEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), undefined);

    // Should add listener to element2
    expect(element2AddEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), undefined);
  });

  it('should update eventListener when options change', () => {
    const handler = vi.fn();
    const element = document.createElement('div');
    const elementAddEventListenerSpy = vi.spyOn(element, 'addEventListener');
    const elementRemoveEventListenerSpy = vi.spyOn(element, 'removeEventListener');

    const { rerender } = renderHook(({ options }) => useEventListener('click', handler, element, options), {
      initialProps: { options: { capture: false } },
    });

    expect(elementAddEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), { capture: false });

    // Change options
    rerender({ options: { capture: true } });

    // Should have removed listener with old options
    expect(elementRemoveEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), { capture: false });

    // Should have added listener with new options
    expect(elementAddEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), { capture: true });
  });
});
