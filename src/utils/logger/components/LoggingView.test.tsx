import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import LoggingView from './LoggingView';
import * as pageLoggerModule from '../hooks/usePageLogger';

describe('LoggingView component', () => {
  const mockViewFn = vi.fn();
  const mockLogger = {
    view: mockViewFn,
    isInitialized: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(pageLoggerModule, 'usePageLogger').mockReturnValue(mockLogger as any);
  });

  it('should log a view event when mounted', () => {
    render(
      <LoggingView>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).toHaveBeenCalledTimes(1);
    expect(mockViewFn).toHaveBeenCalledWith(undefined);
  });

  it('should pass parameters to the view event', () => {
    const params = { section: 'products', referrer: 'homepage' };

    render(
      <LoggingView params={params}>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).toHaveBeenCalledTimes(1);
    expect(mockViewFn).toHaveBeenCalledWith(params);
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <LoggingView>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(getByText('Page Content')).toBeInTheDocument();
  });

  it('should not log if logger is not available', () => {
    vi.spyOn(pageLoggerModule, 'usePageLogger').mockReturnValue(undefined);

    render(
      <LoggingView>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).not.toHaveBeenCalled();
  });

  it('should not log if logger is not initialized', () => {
    vi.spyOn(pageLoggerModule, 'usePageLogger').mockReturnValue({
      ...mockLogger,
      isInitialized: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    render(
      <LoggingView>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).not.toHaveBeenCalled();
  });

  it('should only log view once even if re-rendered', () => {
    const { rerender } = render(
      <LoggingView>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).toHaveBeenCalledTimes(1);

    rerender(
      <LoggingView>
        <div>Updated Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).toHaveBeenCalledTimes(1); // Still called only once
  });

  it('should log again if params change', () => {
    const initialParams = { section: 'home' };
    const newParams = { section: 'products' };

    const { rerender } = render(
      <LoggingView params={initialParams}>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).toHaveBeenCalledTimes(1);
    expect(mockViewFn).toHaveBeenLastCalledWith(initialParams);

    rerender(
      <LoggingView params={newParams}>
        <div>Page Content</div>
      </LoggingView>,
    );

    expect(mockViewFn).toHaveBeenCalledTimes(2);
    expect(mockViewFn).toHaveBeenLastCalledWith(newParams);
  });
});
