import { useCallback, useMemo } from 'react';

import { useLoggerRootContext } from '../Logger';
import { type LogParameters, type Logger } from '../models';

/**
 * Hook that provides logging functionality for a specific page
 *
 * @deprecated
 * do not use this hook directly, use usePageLogger instead or make new logger
 *
 * @example
 * ```tsx
 * // Internal usage example
 * const logger = useLogger('ProductPage');
 *
 * // Log a page view
 * logger.view({ productId: '123' });
 *
 * // Log a custom event
 * logger.event('product_details', 'viewed', { productId: '123' });
 *
 * // Log a click event
 * logger.click('add_to_cart_button', { productId: '123' });
 * ```
 */
export const useLogger = (pageName: string): Logger => {
  const { trackEvent, debug, metadata, isInitialized, appName } = useLoggerRootContext();

  /**
   * Logs a page view event
   *
   * @example
   * ```tsx
   * // Log a simple page view
   * view();
   *
   * // Log a page view with additional parameters
   * view({ section: 'products', filter: 'popular' });
   * ```
   */
  const view = useCallback(
    (parameters?: LogParameters): Promise<void> | null => {
      if (debug === true) {
        console.table({ pageName, ...metadata, ...parameters });
      }

      // Track page view with GA
      try {
        trackEvent('page_view', {
          page_title: pageName,
          app_name: appName,
          ...metadata,
          ...parameters,
        });
        return Promise.resolve();
      } catch (error) {
        console.error('Error tracking page view:', error);
        return null;
      }
    },
    [trackEvent, pageName, metadata, debug, appName],
  );

  /**
   * Logs a custom event with a specific action
   *
   * @example
   * ```tsx
   * // Log a custom event
   * event('product_card', 'viewed', { productId: '123' });
   *
   * // Log a form submission event
   * event('contact_form', 'submitted', { formStatus: 'success' });
   * ```
   */
  const event = useCallback(
    (title: string, action: string, parameters?: LogParameters): Promise<void> | null => {
      if (debug === true) {
        const logPayload = { title, action, pageName, ...metadata, ...parameters };
        console.table(logPayload);
      }

      try {
        trackEvent(title, {
          action,
          pageName,
          ...metadata,
          ...parameters,
        });
        return Promise.resolve();
      } catch (error) {
        console.error('Error tracking event:', error);
        return null;
      }
    },
    [trackEvent, pageName, metadata, debug],
  );

  const actionEvent = useMemo(() => {
    /**
     * Creates an action event function for a specific action type
     *
     * @example
     * ```tsx
     * // Internal usage
     * const clickEvent = createActionEvent('clicked');
     * clickEvent('submit_button', { formId: 'contact' });
     * ```
     */
    function createActionEvent(action: string) {
      return (name: string, parameters?: LogParameters): Promise<void> | null => {
        return event(name, action, parameters);
      };
    }

    return {
      click: createActionEvent('clicked'),
      confirmed: createActionEvent('confirmed'),
      created: createActionEvent('created'),
      updated: createActionEvent('updated'),
      selected: createActionEvent('selected'),
      filled: createActionEvent('filled'),
      impressed: createActionEvent('impressed'),
      unimpressed: createActionEvent('unimpressed'),
      searched: createActionEvent('searched'),
    };
  }, [event]);

  return useMemo(() => {
    return { view, event, isInitialized, ...actionEvent };
  }, [actionEvent, event, view, isInitialized]);
};
