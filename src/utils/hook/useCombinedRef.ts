import type { MutableRefObject, Ref } from 'react';
import { useCallback } from 'react';

type CallbackRef<T> = (ref: T | null) => void;

/**
 * A custom hook that combines multiple React refs into a single ref.
 *
 * This hook is useful when you need to apply multiple refs to a single element,
 * such as when using both a local ref and a ref forwarded from a parent component,
 * or when integrating with libraries that require refs.
 *
 * @param refs - An array of React refs (either object refs or callback refs)
 * @returns A single callback ref that updates all provided refs
 *
 * @example
 * ```tsx
 * import { useRef, forwardRef } from 'react';
 * import { useCombinedRefs } from 'utils/hook/useCombinedRef';
 *
 * const MyComponent = forwardRef((props, forwardedRef) => {
 *   // Local ref for internal use
 *   const internalRef = useRef(null);
 *
 *   // Combine both refs
 *   const combinedRef = useCombinedRefs(internalRef, forwardedRef);
 *
 *   // Now you can use combinedRef on an element
 *   // and both internalRef and forwardedRef will be updated
 *   return <div ref={combinedRef}>Content</div>;
 * });
 * ```
 */
export function useCombinedRefs<T>(...refs: Array<Ref<T> | CallbackRef<T>>): Ref<T> {
  return useCallback(
    (value: T) => {
      for (const ref of refs) {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          (ref as MutableRefObject<T>).current = value;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}
