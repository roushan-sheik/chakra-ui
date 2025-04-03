'use client';
import { createContext, useState, useEffect, useContext, type PropsWithChildren, useCallback, useMemo } from 'react';

import { type ID, type LogParameters } from '../models';
import { isClient, isDevOrStaging } from '@/utils/function/env';
import { noop } from '@/utils/function/noop';

import ReactGA from 'react-ga4';

interface LoggerContextProps {
  isInitialized: boolean;
  debug: boolean;
  identify: (userId: ID, params: LogParameters) => void;
  group: (groupId: ID, params: LogParameters) => void;
  trackEvent: (event: string, params?: LogParameters) => void;
  metadata: LogParameters;
  appName: string;
}

const defaultAnalyticsContext: LoggerContextProps = {
  isInitialized: false,
  debug: false,
  identify: noop,
  group: noop,
  trackEvent: noop,
  metadata: {},
  appName: '',
};

const LoggerContext = createContext<LoggerContextProps>(defaultAnalyticsContext);

/**
 * Hook to access the root logger context
 *
 * @example
 * ```tsx
 * const { trackEvent, debug, metadata } = useLoggerRootContext();
 *
 * // Track a custom event
 * trackEvent('button_click', { buttonId: 'submit' });
 * ```
 */
export const useLoggerRootContext = () => useContext(LoggerContext);

/**
 * Gets screen information for logging purposes
 *
 * @example
 * ```tsx
 * const screenInfo = getScreenInfo();
 * // Returns { screenWidth: 1920, screenHeight: 1080 } in client environment
 * ```
 */
const getScreenInfo = () => {
  if (isClient() === false) {
    return {};
  }

  return {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  };
};

interface LoggerProviderProps {
  gaTrackingId: string;
  debug?: boolean;
  metadata?: LogParameters;
  appName: string;
}

/**
 * Provider component for Google Analytics logging
 *
 * @example
 * ```tsx
 * // In your app root
 * <LoggerProvider
 *   gaTrackingId="G-XXXXXXXXXX"
 *   appName="MyApp"
 *   debug={process.env.NODE_ENV === 'development'}
 * >
 *   <App />
 * </LoggerProvider>
 * ```
 */
export const LoggerProvider = ({
  gaTrackingId,
  children,
  debug = false,
  metadata,
  appName,
}: PropsWithChildren<LoggerProviderProps>) => {
  const [screenMetadata, setScreenMetadata] = useState(getScreenInfo);
  const [isInitialized, setIsInitialized] = useState(false);
  // Check if environment is DEV or STAGING
  const isDevelopmentEnv = isDevOrStaging();

  useEffect(() => {
    if (!gaTrackingId) {
      return;
    }

    // Only initialize GA in production
    if (!isDevelopmentEnv) {
      ReactGA.initialize(gaTrackingId);
    }
    setIsInitialized(true);
  }, [gaTrackingId, isDevelopmentEnv]);

  /**
   * Identifies a user in Google Analytics
   *
   * @example
   * ```tsx
   * // Identify a user with additional parameters
   * identify('user123', { userType: 'premium' });
   * ```
   */
  const identify = useCallback(
    (userId: ID, params: LogParameters = {}) => {
      if (isDevelopmentEnv) {
        console.info('[Debug Logger] Identify User:', { userId, ...params });
        return;
      }
      ReactGA.set({ userId, ...params });
    },
    [isDevelopmentEnv],
  );

  /**
   * Tracks a group in Google Analytics
   *
   * @example
   * ```tsx
   * // Track a group with additional parameters
   * group('team123', { teamSize: 5, teamType: 'engineering' });
   * ```
   */
  const group = useCallback(
    (groupId: ID, params: LogParameters = {}) => {
      if (isDevelopmentEnv) {
        console.info('[Debug Logger] Group Identified:', {
          category: 'Group',
          action: 'Group Identified',
          label: String(groupId),
          groupId,
          ...params,
        });
        return;
      }
      ReactGA.event({
        category: 'Group',
        action: 'Group Identified',
        label: String(groupId),
        ...params,
      });
    },
    [isDevelopmentEnv],
  );

  /**
   * Tracks an event in Google Analytics
   *
   * @example
   * ```tsx
   * // Track a simple event
   * trackEvent('button_click');
   *
   * // Track an event with parameters
   * trackEvent('form_submit', { formId: 'contact', formStatus: 'success' });
   * ```
   */
  const trackEvent = useCallback(
    (event: string, params?: LogParameters) => {
      const eventData = {
        category: 'User',
        action: event,
        ...params,
      };

      if (isDevelopmentEnv) {
        console.info('[Debug Logger] Event:', eventData);
        return;
      }

      ReactGA.event(eventData);
    },
    [isDevelopmentEnv],
  );

  const memoizedMetadata = useMemo(() => {
    return {
      ...metadata,
      ...screenMetadata,
    };
  }, [screenMetadata, metadata]);

  useEffect(() => {
    if (isClient() === false) {
      return;
    }

    const resizeCallback = () => {
      setScreenMetadata(getScreenInfo());
    };

    window.addEventListener('resize', resizeCallback);
    return () => {
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);

  return (
    <LoggerContext.Provider
      value={{
        appName,
        isInitialized,
        debug: isDevelopmentEnv || debug,
        identify,
        group,
        trackEvent,
        metadata: memoizedMetadata,
      }}
    >
      {children}
    </LoggerContext.Provider>
  );
};
