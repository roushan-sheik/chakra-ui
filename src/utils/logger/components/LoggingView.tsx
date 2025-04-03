'use client';
import { type ReactNode, useEffect, useState, useRef } from 'react';

import { usePageLogger } from '../hooks/usePageLogger';
import { type LogParameters } from '../models';

interface Props {
  params?: LogParameters;
  children: ReactNode;
}

/**
 * Component that logs a page view event when mounted
 *
 * @example
 * ```tsx
 * // Basic usage
 * <LoggingView>
 *   <YourPageContent />
 * </LoggingView>
 *
 * // With additional parameters
 * <LoggingView params={{ referrer: 'homepage', section: 'products' }}>
 *   <YourPageContent />
 * </LoggingView>
 * ```
 */
const LoggingView = ({ params, children }: Props) => {
  const logger = usePageLogger();
  const [hasLogged, setHasLogged] = useState(false);
  const prevParamsRef = useRef<LogParameters | undefined>(params);

  useEffect(() => {
    if (logger?.isInitialized === false) {
      return;
    }

    // Log view on initial mount
    if (!hasLogged) {
      logger?.view(params);
      setHasLogged(true);
      prevParamsRef.current = params;
      return;
    }

    // Log again if params have changed
    const paramsChanged = prevParamsRef.current !== params;
    if (paramsChanged) {
      logger?.view(params);
      prevParamsRef.current = params;
    }
  }, [logger, params, hasLogged]);

  return <>{children}</>;
};

export default LoggingView;
