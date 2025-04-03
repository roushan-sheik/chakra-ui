import { useEffect } from 'react';
import { usePreservedCallback } from './usePreservedCallback';

type VisibilityState = Document['visibilityState'];

/**
 * A custom hook that subscribes to document visibility changes.
 *
 * This hook is useful for responding to when a user navigates away from or returns to your page,
 * such as pausing animations or media playback when the tab is not visible.
 *
 * @param callback - Function that will be called whenever the document's visibility state changes
 *
 * @example
 * ```tsx
 * import { useVisibilityEvent } from 'utils/hook/useVisibilityEvent';
 *
 * function VideoPlayer({ src }) {
 *   const videoRef = useRef(null);
 *
 *   useVisibilityEvent((visibilityState) => {
 *     if (visibilityState === 'hidden') {
 *       // Pause video when tab is not visible
 *       videoRef.current?.pause();
 *     } else if (visibilityState === 'visible') {
 *       // Resume video when tab becomes visible again
 *       videoRef.current?.play();
 *     }
 *   });
 *
 *   return <video ref={videoRef} src={src} />;
 * }
 * ```
 */
export function useVisibilityEvent(callback: (visibilityState: VisibilityState) => void) {
  const handleVisibilityChange = usePreservedCallback(() => {
    callback(document.visibilityState);
  });

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleVisibilityChange]);
}
