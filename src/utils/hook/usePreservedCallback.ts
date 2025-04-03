import { useCallback, useEffect, useRef } from 'react';

/**
 * A custom hook that preserves the reference to a callback function across renders.
 *
 * This hook ensures that the latest version of the callback is always used without
 * causing dependent effects or callbacks to re-execute when the callback changes.
 *
 * @param callback - The callback function to preserve
 * @returns A stable callback function that always calls the most recent version of the provided callback
 *
 * @example
 * ```tsx
 * import { useState, useEffect } from 'react';
 * import { usePreservedCallback } from 'utils/hook/usePreservedCallback';
 *
 * function MyComponent({ onDataChange }) {
 *   const [data, setData] = useState(null);
 *
 *   // This callback reference won't change between renders
 *   const handleDataChange = usePreservedCallback((newData) => {
 *     onDataChange(newData);
 *   });
 *
 *   useEffect(() => {
 *     const subscription = subscribeToData(handleDataChange);
 *     return () => subscription.unsubscribe();
 *     // handleDataChange won't change between renders, so this effect runs only once
 *   }, [handleDataChange]);
 *
 *   return <div>{data}</div>;
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePreservedCallback<Callback extends (...args: any[]) => any>(callback: Callback) {
  const callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useCallback((...args: any[]) => {
    return callbackRef.current(...args);
  }, []) as Callback;
}
