import { useEffect, useRef } from 'react';

/**
 * Attach an event listener to a specified target (defaults to window).
 * Automatically cleans up on component unmount or when dependencies change.
 *
 * @param eventName - The event name (e.g., 'click', 'resize')
 * @param handler   - The callback invoked when the event is fired
 * @param element   - The target to attach the listener (defaults to window)
 * @param options   - Event listener options (capture, passive, etc.)
 *
 * @example
 * useEventListener('resize', handleResize); // listens on window
 *
 * const btnRef = useRef<HTMLButtonElement>(null);
 * useEventListener('click', handleClick, btnRef.current);
 */
export function useEventListener<T extends HTMLElement | Window | null>(
  eventName: keyof WindowEventMap,
  handler: (event: Event) => void,
  element?: T,
  options?: boolean | AddEventListenerOptions,
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const target = element ?? window;
    if (!target?.addEventListener) {
      return;
    }

    const eventListener = (event: Event) => savedHandler.current(event);
    target.addEventListener(eventName, eventListener, options);

    return () => {
      target.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
}
