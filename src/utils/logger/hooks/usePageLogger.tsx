'use client';
import { type ComponentType, type PropsWithChildren, createContext, useContext } from 'react';

import { type Logger } from '../models';
import { useLogger } from '@/utils/logger/hooks/useLogger';

const PageLoggerContext = createContext<Logger | undefined>(undefined);
const usePageLoggerContext = () => useContext(PageLoggerContext);

interface PageLoggerPropsWithPageName {
  pageName: string;
  logger?: never;
}
interface PageLoggerPropsWithLogger {
  pageName?: never;
  logger?: Logger;
}

/**
 * A Context that holds a logger mapped to a specific page.
 *
 * You can either create a logger by directly entering a page name, or insert an existing logger from outside to pass it to child components.
 *
 * Within child components, use the usePageLogger hook or components like LoggingEvent, LoggingClick, etc. to send events.
 *
 * @example
 * ```tsx
 * // A logger with the context of that page is created.
 * <PageLogger pageName="Page Name" />
 *
 * // Passes the logger being used externally directly to the children.
 * // Can be used for child components created using Portal outside the PageLogger Context.
 * const logger = usePageLogger();
 * <PageLogger logger={logger} />
 * ```
 */
export const PageLogger = ({
  pageName,
  logger,
  children,
}: PropsWithChildren<PageLoggerPropsWithPageName | PageLoggerPropsWithLogger>) => {
  const pageLogger = useLogger(pageName ?? '');

  return <PageLoggerContext.Provider value={logger ?? pageLogger}>{children}</PageLoggerContext.Provider>;
};

export const withPageLogger = <T,>(WrappedComponent: ComponentType<T>, pageName: string) => {
  return (props: T) => {
    return (
      <PageLogger pageName={pageName}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <WrappedComponent {...(props as any)} />
      </PageLogger>
    );
  };
};

/**
 * Uses the logger declared in the PageLogger Context located in the parent to send events.
 *
 * If there is no PageLogger Context in the parent, it does not send any events and ignores them.
 */
export const usePageLogger = () => {
  return usePageLoggerContext();
};
