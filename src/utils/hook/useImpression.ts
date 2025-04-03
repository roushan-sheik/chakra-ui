import { useCallback, useMemo } from 'react';

interface Options {
  onImpressionStart?: () => void;
  onImpressionEnd?: () => void;
  rootMargin?: number;
  threshold?: number;
}

/**
 * Calls the event handlers appropriately when the HTML element contained in the ref enters the screen.
 *
 * @example
 * ```tsx
 * const impressionRef = useImpression({
 *   onImpressionStart: () => console.log('div visible!'),
 *   onImpressionEnd: () => console.log('div hidden!'),
 * });
 *
 * return <div ref={impressionRef} />
 * ```
 */
export default function useImpression({ onImpressionStart, onImpressionEnd, rootMargin = 0, threshold = 0 }: Options) {
  const handleImpressionStart = useCallback(() => {
    onImpressionStart?.();
  }, [onImpressionStart]);

  const handleImpressionEnd = useCallback(() => {
    onImpressionEnd?.();
  }, [onImpressionEnd]);

  const handleImpression = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const currentRatio = entry.intersectionRatio;

      const isHide = threshold === 0 ? !entry.isIntersecting : currentRatio < threshold;

      if (isHide) {
        handleImpressionEnd();
      } else {
        handleImpressionStart();
      }
    },
    [handleImpressionEnd, handleImpressionStart, threshold],
  );

  const intersectionObserver = useMemo(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    return new IntersectionObserver(handleImpression, {
      rootMargin: `${rootMargin}px`,
      threshold,
    });
  }, [handleImpression, rootMargin, threshold]);

  const ref = useCallback(
    (element: Element | null) => {
      if (intersectionObserver === undefined) {
        return;
      }

      intersectionObserver.disconnect();
      if (element !== null) {
        intersectionObserver.observe(element);
      }
    },
    [intersectionObserver],
  );

  return ref;
}
