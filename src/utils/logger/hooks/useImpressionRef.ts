import { noop } from '@/utils/function/noop';
import type { ImpressionAreaProps } from '@/utils/react/ImpressionArea';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { usePreservedCallback } from '../../hook/usePreservedCallback';
import { useVisibilityEvent } from '../../hook/useVisibilityEvent';
import { useRefEffect } from '../../hook/useRefEvent';
import { debounce } from '@/utils/function/debounce';

type Options = Pick<
  ImpressionAreaProps,
  'rootMargin' | 'onImpressionStart' | 'onImpressionEnd' | 'timeThreshold' | 'areaThreshold' | 'root'
>;

/**
 * A custom hook that creates a ref to track element impressions (visibility).
 *
 * This hook uses the Intersection Observer API to detect when an element enters
 * or exits the viewport, and triggers callbacks when these events occur.
 * It also considers document visibility state to pause tracking when the page is hidden.
 *
 * @param options - Configuration options for the impression tracking
 * @param options.onImpressionStart - Callback fired when element becomes visible
 * @param options.onImpressionEnd - Callback fired when element is no longer visible
 * @param options.timeThreshold - Minimum time (ms) element must be visible/hidden before triggering callbacks
 * @param options.areaThreshold - Minimum percentage (0-1) of element that must be visible
 * @param options.root - Element that is used as the viewport for checking visibility
 * @param options.rootMargin - Margin around the root element
 * @returns A ref to attach to the element you want to track
 *
 * @example
 * ```tsx
 * import { useImpressionRef } from 'utils/logger/hooks/useImpressionRef';
 *
 * function TrackableComponent() {
 *   const handleImpressionStart = () => {
 *     console.log('Element is now visible');
 *     // Track analytics event, start animation, etc.
 *   };
 *
 *   const handleImpressionEnd = () => {
 *     console.log('Element is no longer visible');
 *     // Pause animations, stop video playback, etc.
 *   };
 *
 *   const ref = useImpressionRef({
 *     onImpressionStart: handleImpressionStart,
 *     onImpressionEnd: handleImpressionEnd,
 *     timeThreshold: 1000, // Only trigger after 1 second
 *     areaThreshold: 0.5, // Element must be 50% visible
 *   });
 *
 *   return <div ref={ref}>Tracked content</div>;
 * }
 * ```
 */
export function useImpressionRef<Element extends HTMLElement>({
  onImpressionStart: _onImpressionStart = noop,
  onImpressionEnd: _onImpressionEnd = noop,
  timeThreshold = 0,
  root,
  rootMargin,
  areaThreshold: intersectThreshold = 0,
}: Options) {
  const onImpressionStart = usePreservedCallback(_onImpressionStart);
  const onImpressionEnd = usePreservedCallback(_onImpressionEnd);

  const isIntersectingRef = useRef(false);

  const setDebouncedIsImpressed = useSetDebouncedBooleanValue({
    onValueChange: (isImpressed) => {
      if (isImpressed) {
        onImpressionStart();
      } else {
        onImpressionEnd();
      }
    },
    timeThreshold,
  });

  const intersectionObserverRef = useIntersectionObserver<Element>(
    ({ isIntersecting }) => {
      if (document.visibilityState === 'hidden') {
        return;
      }

      isIntersectingRef.current = isIntersecting;
      setDebouncedIsImpressed(isIntersecting);
    },
    {
      root,
      rootMargin,
      threshold: intersectThreshold,
    },
  );

  useVisibilityEvent((visibilityState) => {
    if (!isIntersectingRef.current) {
      return;
    }

    setDebouncedIsImpressed(visibilityState === 'visible');
  });

  return intersectionObserverRef;
}

/**
 * A utility hook that creates an intersection observer to track element visibility.
 *
 * @param callback - Function called when intersection state changes
 * @param options - IntersectionObserver configuration options
 * @returns A ref to attach to the element to observe
 */
function useIntersectionObserver<Element extends HTMLElement>(
  _callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit,
) {
  const callback = usePreservedCallback(_callback);
  const observer = useMemo(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) {
        return;
      }

      callback(entry);
    }, options);

    return observer;
  }, [callback, options]);

  const ref = useRefEffect<Element>(
    (element) => {
      observer?.observe(element);

      return () => {
        observer?.unobserve(element);
      };
    },
    [callback, options],
  );

  return ref;
}

/**
 * A utility hook that creates a debounced boolean state setter.
 *
 * @param options - Configuration options
 * @param options.onValueChange - Callback to run when debounced value changes
 * @param options.timeThreshold - Debounce delay in milliseconds
 * @returns A function to update the debounced value
 */
function useSetDebouncedBooleanValue(options: {
  onValueChange: (newValue: boolean) => void;
  timeThreshold: Options['timeThreshold'];
}) {
  const { onValueChange, timeThreshold } = options;
  const handleValueChange = usePreservedCallback(onValueChange);
  const ref = useRef({ value: false, cancelPrevDebounce: noop });

  const setDebouncedValue = useCallback(
    (newValue: boolean) => {
      if (newValue === ref.current.value) {
        return;
      }

      // The 'debounce' function should be imported or defined elsewhere
      const debounced = debounce(() => {
        handleValueChange(newValue);
        ref.current.value = newValue;
      }, timeThreshold);

      ref.current.cancelPrevDebounce();
      debounced();
      ref.current.cancelPrevDebounce = debounced.cancel;
    },
    [handleValueChange, timeThreshold],
  );

  useEffect(() => {
    const current = ref.current;
    return () => {
      current.cancelPrevDebounce();
    };
  }, []);

  return setDebouncedValue;
}
