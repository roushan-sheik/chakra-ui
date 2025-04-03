import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import LoggingClick from './LoggingClick';
import LoggingEvent from './LoggingEvent';
import * as pageLoggerModule from '../hooks/usePageLogger';
import React from 'react';
import type { LogParameters } from '../models';

// Mock LoggingEvent
vi.mock('./LoggingEvent', () => {
  return {
    default: vi.fn((props) => props.children),
    __esModule: true,
  };
});

describe('LoggingClick component', () => {
  it('should render LoggingEvent with correct props', () => {
    const mockChildren = <button>Click Me</button>;
    const mockProps = {
      logName: 'test_button',
      params: { buttonId: '123' },
    };

    render(<LoggingClick {...mockProps}>{mockChildren}</LoggingClick>);

    expect(LoggingEvent).toHaveBeenCalledWith(
      {
        ...mockProps,
        children: mockChildren,
        action: 'click',
        targetEventName: 'onClick',
      },
      expect.anything(),
    );
  });

  it('should delegate to LoggingEvent correctly', () => {
    // Reset the mocks and use a different approach
    vi.resetAllMocks();

    // For this test we'll mock usePageLogger directly instead of LoggingEvent
    const mockEventFn = vi.fn();
    const mockLogger = {
      event: mockEventFn,
      isInitialized: true,
    };

    // Mock the usePageLogger hook to return our mock logger
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(pageLoggerModule, 'usePageLogger').mockReturnValue(mockLogger as any);

    // Mock implementation for LoggingEvent that calls event handler
    (LoggingEvent as ReturnType<typeof vi.fn>).mockImplementation(
      ({
        children,
        action,
        logName,
        params,
        targetEventName,
      }: {
        children: React.ReactElement;
        action: string;
        logName: string;
        params?: LogParameters;
        targetEventName: string;
      }) => {
        const childProps = {
          ...children.props,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [targetEventName]: (...args: any[]) => {
            mockLogger.event(logName, action, params || {});
            if (children.props[targetEventName]) {
              children.props[targetEventName](...args);
            }
          },
        };
        return React.cloneElement(children, childProps);
      },
    );

    const onClickMock = vi.fn();

    const { getByText } = render(
      <LoggingClick logName="test_button" params={{ buttonId: '123' }}>
        <button onClick={onClickMock}>Click Me</button>
      </LoggingClick>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(mockEventFn).toHaveBeenCalledWith('test_button', 'click', { buttonId: '123' });
    expect(onClickMock).toHaveBeenCalled();
  });
});
