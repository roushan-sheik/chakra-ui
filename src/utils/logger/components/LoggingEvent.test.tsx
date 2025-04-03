import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import LoggingEvent from './LoggingEvent';
import { LoggerProvider } from '../Logger';
import { usePageLogger } from '../hooks/usePageLogger';
import type { Logger } from '../models';

// Mock usePageLogger
vi.mock('../hooks/usePageLogger', () => {
  const actual = vi.importActual('../hooks/usePageLogger');
  return {
    ...actual,
    usePageLogger: vi.fn(),
    // PageLogger is a real component that we need to use
    // So we'll use the actual implementation
  };
});

describe('LoggingEvent component', () => {
  const mockLogger: Logger = {
    event: vi.fn(),
    view: vi.fn(),
    click: vi.fn(),
    confirmed: vi.fn(),
    created: vi.fn(),
    updated: vi.fn(),
    selected: vi.fn(),
    filled: vi.fn(),
    impressed: vi.fn(),
    unimpressed: vi.fn(),
    searched: vi.fn(),
    isInitialized: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (usePageLogger as ReturnType<typeof vi.fn>).mockReturnValue(mockLogger);
  });

  it('should attach an event handler to the child component', () => {
    const { getByText } = render(
      <LoggingEvent action="clicked" logName="test_button" targetEventName="onClick">
        <button>Click Me</button>
      </LoggingEvent>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(mockLogger.event).toHaveBeenCalledWith('test_button', 'clicked', {});
  });

  it('should preserve the original event handler', () => {
    const onClickHandler = vi.fn();

    const { getByText } = render(
      <LoggingEvent action="clicked" logName="test_button" targetEventName="onClick">
        <button onClick={onClickHandler}>Click Me</button>
      </LoggingEvent>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(mockLogger.event).toHaveBeenCalledWith('test_button', 'clicked', {});
    expect(onClickHandler).toHaveBeenCalled();
  });

  it('should pass additional parameters to the event', () => {
    const { getByText } = render(
      <LoggingEvent
        action="clicked"
        logName="test_button"
        params={{ buttonId: '123', category: 'primary' }}
        targetEventName="onClick"
      >
        <button>Click Me</button>
      </LoggingEvent>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(mockLogger.event).toHaveBeenCalledWith('test_button', 'clicked', {
      buttonId: '123',
      category: 'primary',
    });
  });

  it('should not log if logger is not available', () => {
    (usePageLogger as ReturnType<typeof vi.fn>).mockReturnValue(undefined);

    const { getByText } = render(
      <LoggingEvent action="clicked" logName="test_button" targetEventName="onClick">
        <button>Click Me</button>
      </LoggingEvent>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(mockLogger.event).not.toHaveBeenCalled();
  });

  it('should work with different event types', () => {
    const onFocusHandler = vi.fn();

    const { getByTestId } = render(
      <LoggingEvent action="focused" logName="test_input" targetEventName="onFocus">
        <input data-testid="input" onFocus={onFocusHandler} />
      </LoggingEvent>,
    );

    const input = getByTestId('input');
    fireEvent.focus(input);

    expect(mockLogger.event).toHaveBeenCalledWith('test_input', 'focused', {});
    expect(onFocusHandler).toHaveBeenCalled();
  });

  it('should work within a PageLogger context', () => {
    // For this test we'll use the real PageLogger
    // but mock usePageLogger when called from LoggingEvent component

    const { getByText } = render(
      <LoggerProvider appName="TestApp" gaTrackingId="test-id">
        <div>
          <LoggingEvent action="custom_action" logName="test_button" targetEventName="onClick">
            <button>Click Me</button>
          </LoggingEvent>
        </div>
      </LoggerProvider>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(mockLogger.event).toHaveBeenCalledWith('test_button', 'custom_action', {});
  });
});
