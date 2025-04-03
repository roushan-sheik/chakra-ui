import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useLogger } from './useLogger';
import { LoggerProvider } from '../Logger';
import ReactGA from 'react-ga4';

// Mock the react-ga4 library
vi.mock('react-ga4', () => ({
  default: {
    initialize: vi.fn(),
    event: vi.fn(),
    set: vi.fn(),
  },
}));

describe('useLogger hook', () => {
  const pageName = 'TestPage';
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LoggerProvider appName="TestApp" gaTrackingId="test-id">
      {children}
    </LoggerProvider>
  );

  beforeEach(() => {
    // Clear console mocks
    vi.spyOn(console, 'table').mockImplementation(() => undefined);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a logger object with all expected methods', () => {
    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    expect(result.current).toHaveProperty('view');
    expect(result.current).toHaveProperty('event');
    expect(result.current).toHaveProperty('click');
    expect(result.current).toHaveProperty('confirmed');
    expect(result.current).toHaveProperty('created');
    expect(result.current).toHaveProperty('updated');
    expect(result.current).toHaveProperty('selected');
    expect(result.current).toHaveProperty('filled');
    expect(result.current).toHaveProperty('impressed');
    expect(result.current).toHaveProperty('unimpressed');
    expect(result.current).toHaveProperty('searched');
    expect(result.current).toHaveProperty('isInitialized');
  });

  it('should track page view events', () => {
    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    result.current.view({ param1: 'value1' });

    // Match any screenWidth and screenHeight values since they're added at runtime
    expect(ReactGA.event).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'User',
        action: 'page_view',
        page_title: pageName,
        app_name: 'TestApp',
        param1: 'value1',
      }),
    );
  });

  it('should track custom events with actions', () => {
    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    result.current.event('button', 'clicked', { buttonId: '123' });

    // Check that the correct event parameters are used, but allow for additional fields
    expect(ReactGA.event).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'User',
        action: 'clicked',
        pageName,
        buttonId: '123',
      }),
    );
  });

  it('should create action-specific event methods', () => {
    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    result.current.click('submit_button', { formId: 'contact' });

    // Check that the correct event parameters are used, but allow for additional fields
    expect(ReactGA.event).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'User',
        action: 'clicked',
        pageName,
        formId: 'contact',
      }),
    );
  });

  it('should log to console in debug mode', () => {
    const debugWrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName="TestApp" debug={true} gaTrackingId="test-id">
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLogger(pageName), { wrapper: debugWrapper });

    result.current.view({ param1: 'value1' });

    // Check that console.table was called with an object containing the expected values
    expect(console.table).toHaveBeenCalledWith(
      expect.objectContaining({
        pageName,
        param1: 'value1',
      }),
    );
  });

  it('should handle errors when tracking events', () => {
    const errorMsg = 'Tracking error';
    (ReactGA.event as unknown as ReturnType<typeof vi.fn>).mockImplementationOnce(() => {
      throw new Error(errorMsg);
    });

    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    result.current.view();

    expect(console.error).toHaveBeenCalledWith('Error tracking page view:', expect.any(Error));
  });

  it('should handle errors when custom events fail', () => {
    const errorMsg = 'Event tracking error';
    (ReactGA.event as unknown as ReturnType<typeof vi.fn>).mockImplementationOnce(() => {
      throw new Error(errorMsg);
    });

    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    const returnValue = result.current.event('test', 'action');

    expect(console.error).toHaveBeenCalledWith('Error tracking event:', expect.any(Error));
    expect(returnValue).toBeNull();
  });

  it('should log custom events to console in debug mode', () => {
    const debugWrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName="TestApp" debug={true} gaTrackingId="test-id">
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLogger(pageName), { wrapper: debugWrapper });

    result.current.event('button', 'clicked', { buttonId: '123' });

    expect(console.table).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'button',
        action: 'clicked',
        pageName,
        buttonId: '123',
      }),
    );
  });

  it('should properly track various action events', () => {
    const { result } = renderHook(() => useLogger(pageName), { wrapper });

    // Test various action methods
    result.current.confirmed('confirmation_dialog', { dialogId: 'delete' });
    expect(ReactGA.event).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'User',
        action: 'confirmed',
        pageName,
        dialogId: 'delete',
      }),
    );
    vi.clearAllMocks();

    result.current.created('new_account', { accountType: 'premium' });
    expect(ReactGA.event).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'User',
        action: 'created',
        pageName,
        accountType: 'premium',
      }),
    );
    vi.clearAllMocks();

    result.current.searched('product_search', { query: 'skin care' });
    expect(ReactGA.event).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'User',
        action: 'searched',
        pageName,
        query: 'skin care',
      }),
    );
  });
});
