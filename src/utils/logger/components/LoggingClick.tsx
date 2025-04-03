import LoggingEvent, { type LoggingEventProps } from './LoggingEvent';

type Props = Omit<LoggingEventProps, 'action' | 'targetEventName'>;

/**
 * Sends a click event log when the onClick event occurs in the child component.
 *
 * If the parent element is not using the Page Logger Context, no action is performed.
 *
 * @example
 * ```tsx
 * // Basic usage with a button
 * <LoggingClick logName="signup_button">
 *   <button>Sign Up</button>
 * </LoggingClick>
 *
 * // With additional parameters
 * <LoggingClick
 *   logName="product_card"
 *   params={{ productId: '123', category: 'electronics' }}
 * >
 *   <ProductCard />
 * </LoggingClick>
 *
 * // With an existing onClick handler
 * <LoggingClick logName="download_button">
 *   <button onClick={() => downloadFile()}>Download</button>
 * </LoggingClick>
 * ```
 */
const LoggingClick = (props: Props) => {
  return <LoggingEvent {...props} action="click" targetEventName="onClick" />;
};

export default LoggingClick;
