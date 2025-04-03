import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import Slot from './Slot';
import { useImpressionRef } from '../logger/hooks/useImpressionRef';
import { useCombinedRefs } from '../hook/useCombinedRef';

export interface ImpressionAreaProps extends Omit<IntersectionObserverInit, 'threshold'> {
  onImpressionStart?: () => void;
  onImpressionEnd?: () => void;
  /**
   * Determines what percentage of the element needs to be visible to be considered "visible".
   * For example, if 0.5 is given, onImpressionStart is called when 50% or more is visible,
   * and onImpressionEnd is called when less than 50% is visible.
   * @default 0
   */
  areaThreshold?: number;
  /**
   * Determines how many milliseconds an element must be visible or hidden before updating the value.
   * For example, if the value is 2000, events won't be called if the element's visibility state
   * changes within 2 seconds but returns to its original state.
   * @default 0
   */
  timeThreshold?: number;
  className?: string;
  style?: React.CSSProperties;
  role?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'false' | 'true';
}

export const ImpressionArea = forwardRef<HTMLDivElement, PropsWithChildren<ImpressionAreaProps>>(
  (
    {
      root,
      rootMargin,
      areaThreshold,
      timeThreshold,
      className,
      children,
      onImpressionStart,
      onImpressionEnd,
      style,
      ...otherProps
    },
    forwardedRef,
  ) => {
    const impressionRef = useImpressionRef<HTMLDivElement>({
      onImpressionStart,
      onImpressionEnd,
      areaThreshold,
      timeThreshold,
      root,
      rootMargin,
    });

    const ref = useCombinedRefs(forwardedRef, impressionRef);

    return (
      <Slot className={className} ref={ref} style={style} {...otherProps}>
        {children}
      </Slot>
    );
  },
);

ImpressionArea.displayName = 'ImpressionArea';

export default ImpressionArea;
