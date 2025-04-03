'use client';
import { type ReactNode } from 'react';

import { type LogParameters } from '../models';
import { usePageLogger } from '@/utils/logger';
import { ImpressionArea } from '@/utils/react/ImpressionArea';

interface BaseProps {
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
  children: ReactNode;
  params?: LogParameters;
  className?: string;
}

interface OnlyImpressionProps extends BaseProps {
  logName: string;
  impressionLogName?: never;
  unimpressionLogName?: never;
}

interface ImpressionStartAndEndProps extends BaseProps {
  logName?: never;
  impressionLogName: string;
  unimpressionLogName: string;
}

/**
 * Sends impressed and unimpressed event logs when the child component appears or disappears from the screen.
 *
 * If the parent element is not using the Page Logger Context, no action is performed.
 *
 * @example
 * ```tsx
 *
 * // Only sends an event log for onImpressionStart
 * <LoggingImpression logName="impression start">
 *   <div />
 * </LoggingImpression>
 *
 * // Sends event logs for both onImpressionStart and onImpressionEnd
 * <LoggingImpression
 *  impressionLogName="impression start"
 *  unimpressionLogName="impression end"
 * >
 *   <div />
 * </LoggingImpression>
 * ```
 */
const LoggingImpression = ({
  children,
  impressionLogName,
  unimpressionLogName,
  logName,
  areaThreshold,
  timeThreshold,
  params,
  className,
}: OnlyImpressionProps | ImpressionStartAndEndProps) => {
  const pageLogger = usePageLogger();

  if (impressionLogName == null) {
    return (
      <ImpressionArea
        areaThreshold={areaThreshold}
        className={className}
        timeThreshold={timeThreshold}
        onImpressionStart={() => {
          pageLogger?.impressed(logName, params);
        }}
      >
        {children}
      </ImpressionArea>
    );
  }

  return (
    <ImpressionArea
      areaThreshold={areaThreshold}
      className={className}
      timeThreshold={timeThreshold}
      onImpressionEnd={() => {
        pageLogger?.unimpressed(unimpressionLogName, params);
      }}
      onImpressionStart={() => {
        pageLogger?.impressed(impressionLogName, params);
      }}
    >
      {children}
    </ImpressionArea>
  );
};

export default LoggingImpression;
