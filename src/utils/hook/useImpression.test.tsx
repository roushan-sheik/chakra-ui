import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import useImpression from './useImpression';

describe('useImpression hook', () => {
  const mockIntersectionObserver = vi.fn();
  const mockDisconnect = vi.fn();
  const mockObserve = vi.fn();

  beforeEach(() => {
    mockDisconnect.mockClear();
    mockObserve.mockClear();
    mockIntersectionObserver.mockClear();

    mockIntersectionObserver.mockImplementation((callback) => ({
      disconnect: mockDisconnect,
      observe: mockObserve,
      callback,
    }));

    // Mock IntersectionObserver
    global.IntersectionObserver = mockIntersectionObserver;
  });

  it('should return a ref function', () => {
    const { result } = renderHook(() => useImpression({}));

    expect(typeof result.current).toBe('function');
  });

  it('should create IntersectionObserver with correct options', () => {
    const rootMargin = 50;
    const threshold = 0.5;

    renderHook(() => useImpression({ rootMargin, threshold }));

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { rootMargin: '50px', threshold: 0.5 });
  });

  it('should disconnect previous observer and observe new element when ref changes', () => {
    const { result } = renderHook(() => useImpression({}));

    const element1 = document.createElement('div');
    result.current(element1);

    expect(mockObserve).toHaveBeenCalledWith(element1);
    expect(mockDisconnect).toHaveBeenCalledTimes(1);

    const element2 = document.createElement('div');
    result.current(element2);

    expect(mockObserve).toHaveBeenCalledWith(element2);
    expect(mockDisconnect).toHaveBeenCalledTimes(2);
  });

  it('should call onImpressionStart when element becomes visible', () => {
    const onImpressionStart = vi.fn();

    const { result } = renderHook(() => useImpression({ onImpressionStart }));

    const element = document.createElement('div');
    result.current(element);

    // Get the observer instance and callback
    const observer = mockIntersectionObserver.mock.results[0].value;

    // Simulate intersection (element is visible)
    observer.callback([{ isIntersecting: true, intersectionRatio: 1 }]);

    expect(onImpressionStart).toHaveBeenCalled();
  });

  it('should call onImpressionEnd when element becomes invisible', () => {
    const onImpressionEnd = vi.fn();

    const { result } = renderHook(() => useImpression({ onImpressionEnd }));

    const element = document.createElement('div');
    result.current(element);

    // Get the observer instance and callback
    const observer = mockIntersectionObserver.mock.results[0].value;

    // Simulate intersection (element is not visible)
    observer.callback([{ isIntersecting: false, intersectionRatio: 0 }]);

    expect(onImpressionEnd).toHaveBeenCalled();
  });

  it('should respect threshold when determining visibility', () => {
    const onImpressionStart = vi.fn();
    const onImpressionEnd = vi.fn();
    const threshold = 0.5;

    const { result } = renderHook(() => useImpression({ onImpressionStart, onImpressionEnd, threshold }));

    const element = document.createElement('div');
    result.current(element);

    // Get the observer instance and callback
    const observer = mockIntersectionObserver.mock.results[0].value;

    // Below threshold (should call onImpressionEnd)
    observer.callback([{ isIntersecting: true, intersectionRatio: 0.4 }]);
    expect(onImpressionEnd).toHaveBeenCalledTimes(1);
    expect(onImpressionStart).not.toHaveBeenCalled();

    // Above threshold (should call onImpressionStart)
    observer.callback([{ isIntersecting: true, intersectionRatio: 0.6 }]);
    expect(onImpressionStart).toHaveBeenCalledTimes(1);
  });

  it('should not observe if IntersectionObserver is not available', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global.IntersectionObserver = undefined as any;

    const { result } = renderHook(() => useImpression({}));

    const element = document.createElement('div');

    // Should not throw an error
    expect(() => result.current(element)).not.toThrow();
  });
});
