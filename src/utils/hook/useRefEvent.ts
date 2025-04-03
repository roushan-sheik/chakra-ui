import type { DependencyList } from 'react';
import { useCallback, useRef } from 'react';
import { usePreservedCallback } from './usePreservedCallback';
import { noop } from '@/utils/function/noop';

export type EffectRef<E extends HTMLElement = HTMLElement> = (element: E | null) => void;

export type CleanupCallback = () => void;
export type RefCallback<E extends HTMLElement = HTMLElement> = (element: E) => CleanupCallback | void;

/**
 * A custom hook for attaching effects to DOM elements via ref callbacks.
 *
 * This hook is similar to useEffect, but instead of running on component mount,
 * it runs when the referenced DOM element is attached to the DOM and provides
 * a cleanup function that runs when the element is detached.
 *
 * @param callback - A function that receives the DOM element and optionally returns a cleanup function
 * @param deps - Dependency array that triggers the effect to re-run when changed
 * @returns A ref callback function to be attached to a DOM element
 *
 * @example
 * ```tsx
 * import { useRefEffect } from 'utils/hook/useRefEvent';
 *
 * function ScrollObserver() {
 *   const scrollRef = useRefEffect((element) => {
 *     // Set up scroll observation
 *     const handleScroll = () => console.log('Element scrolled!');
 *     element.addEventListener('scroll', handleScroll);
 *
 *     // Return cleanup function
 *     return () => {
 *       element.removeEventListener('scroll', handleScroll);
 *     };
 *   }, []);
 *
 *   return <div ref={scrollRef} style={{ height: '200px', overflow: 'auto' }}>
 *     {Content}
 *   </div>;
 * }
 * ```
 */
export function useRefEffect<E extends HTMLElement = HTMLElement>(
  callback: RefCallback<E>,
  deps: DependencyList,
): EffectRef<E> {
  const preservedCallback = usePreservedCallback(callback);
  const disposeRef = useRef<CleanupCallback>(noop);

  const effect = useCallback(
    (element: E | null) => {
      disposeRef.current();
      disposeRef.current = noop;

      if (element != null) {
        const cleanup = callback(element);

        if (typeof cleanup === 'function') {
          disposeRef.current = cleanup;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [preservedCallback, ...deps],
  );

  return effect;
}
