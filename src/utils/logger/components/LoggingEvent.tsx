'use client';
import { cloneElement, useEffect, Children, type ReactElement } from 'react';

import { usePageLogger } from '../hooks/usePageLogger';
import { type LogParameters } from '../models';

export interface LoggingEventProps {
  logName: string;
  action: string;
  targetEventName: string;
  params?: LogParameters;
  children: ReactElement;
}

/**
 * Sends an event log when the specified event occurs in the child component.
 *
 * If the parent element is not using the Page Logger Context, no action is performed.
 */
const LoggingEvent = ({ children, logName, action, targetEventName, params = {} }: LoggingEventProps) => {
  const logger = usePageLogger();

  useEffect(() => {
    Children.only(children);
  }, [children]);

  return cloneElement(children, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [targetEventName]: (...args: any[]) => {
      logger?.event(logName, action, params);

      if (typeof children.props[targetEventName] === 'function') {
        return children.props[targetEventName](...args);
      }
    },
  });
};

export default LoggingEvent;
