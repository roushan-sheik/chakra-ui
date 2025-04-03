import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, renderHook, act } from '@testing-library/react';
import { LoggerProvider, useLoggerRootContext } from '.';
import ReactGA from 'react-ga4';
import * as envModule from '@/utils/function/env';

// Mock react-ga4
vi.mock('react-ga4', () => ({
  default: {
    initialize: vi.fn(),
    set: vi.fn(),
    event: vi.fn(),
  },
}));

// Mock isDevOrStaging function
vi.mock('@/utils/function/env', async () => {
  const actual = await vi.importActual('@/utils/function/env');
  return {
    ...actual,
    isDevOrStaging: vi.fn(),
    isClient: vi.fn().mockReturnValue(true),
  };
});

// Mock window events
const addEventListenerMock = vi.fn();
const removeEventListenerMock = vi.fn();

describe('LoggerProvider and useLoggerRootContext', () => {
  const gaTrackingId = 'test-tracking-id';
  const appName = 'TestApp';

  beforeEach(() => {
    // Mock window methods
    if (typeof window !== 'undefined') {
      window.innerWidth = 1024;
      window.innerHeight = 768;
      window.addEventListener = addEventListenerMock;
      window.removeEventListener = removeEventListenerMock;
    }

    // Reset mock for isDevOrStaging
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(false);

    // Spy on console methods
    vi.spyOn(console, 'info').mockImplementation(vi.fn());

    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize GA with the tracking ID in production', () => {
    // Mock production environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(false);

    render(
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        <div>Test</div>
      </LoggerProvider>,
    );

    expect(ReactGA.initialize).toHaveBeenCalledWith(gaTrackingId);
  });

  it('should NOT initialize GA in development or staging environment', () => {
    // Mock development environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(true);

    render(
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        <div>Test</div>
      </LoggerProvider>,
    );

    expect(ReactGA.initialize).not.toHaveBeenCalled();
  });

  it('should provide context with logger methods', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    expect(result.current).toHaveProperty('trackEvent');
    expect(result.current).toHaveProperty('identify');
    expect(result.current).toHaveProperty('group');
    expect(result.current).toHaveProperty('isInitialized');
    expect(result.current).toHaveProperty('metadata');
    expect(result.current).toHaveProperty('appName');
    expect(result.current.appName).toBe(appName);
  });

  it('should include screen information in metadata', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    expect(result.current.metadata).toHaveProperty('screenWidth', 1024);
    expect(result.current.metadata).toHaveProperty('screenHeight', 768);
  });

  it('should set up resize event listener', () => {
    render(
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        <div>Test</div>
      </LoggerProvider>,
    );

    expect(addEventListenerMock).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('should clean up event listener on unmount', () => {
    const { unmount } = render(
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        <div>Test</div>
      </LoggerProvider>,
    );

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('should identify users correctly in production', () => {
    // Mock production environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(false);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    const userId = 'user123';
    const userParams = { userType: 'premium' };

    result.current.identify(userId, userParams);

    expect(ReactGA.set).toHaveBeenCalledWith({ userId, ...userParams });
    expect(console.info).not.toHaveBeenCalled();
  });

  it('should log identity to console in development environment', () => {
    // Mock development environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(true);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    const userId = 'user123';
    const userParams = { userType: 'premium' };

    result.current.identify(userId, userParams);

    expect(ReactGA.set).not.toHaveBeenCalled();
    expect(console.info).toHaveBeenCalledWith(
      '[Debug Logger] Identify User:',
      expect.objectContaining({
        userId,
        userType: 'premium',
      }),
    );
  });

  it('should track events correctly in production', () => {
    // Mock production environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(false);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    const eventName = 'button_click';
    const eventParams = { buttonId: 'submit' };

    result.current.trackEvent(eventName, eventParams);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: 'User',
      action: eventName,
      ...eventParams,
    });
    expect(console.info).not.toHaveBeenCalled();
  });

  it('should log events to console in development environment', () => {
    // Mock development environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(true);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    const eventName = 'button_click';
    const eventParams = { buttonId: 'submit' };

    result.current.trackEvent(eventName, eventParams);

    expect(ReactGA.event).not.toHaveBeenCalled();
    expect(console.info).toHaveBeenCalledWith(
      '[Debug Logger] Event:',
      expect.objectContaining({
        category: 'User',
        action: eventName,
        buttonId: 'submit',
      }),
    );
  });

  it('should track group correctly in production', () => {
    // Mock production environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(false);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    const groupId = 'team123';
    const groupParams = { teamSize: 5 };

    result.current.group(groupId, groupParams);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: 'Group',
      action: 'Group Identified',
      label: String(groupId),
      ...groupParams,
    });
    expect(console.info).not.toHaveBeenCalled();
  });

  it('should log group info to console in development environment', () => {
    // Mock development environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isDevOrStaging as any).mockReturnValue(true);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    const groupId = 'team123';
    const groupParams = { teamSize: 5 };

    result.current.group(groupId, groupParams);

    expect(ReactGA.event).not.toHaveBeenCalled();
    expect(console.info).toHaveBeenCalledWith(
      '[Debug Logger] Group Identified:',
      expect.objectContaining({
        category: 'Group',
        action: 'Group Identified',
        label: String(groupId),
        groupId,
        teamSize: 5,
      }),
    );
  });

  it('should merge custom metadata with screen info', () => {
    const customMetadata = { appVersion: '1.0.0', environment: 'test' };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId} metadata={customMetadata}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    expect(result.current.metadata).toHaveProperty('screenWidth', 1024);
    expect(result.current.metadata).toHaveProperty('screenHeight', 768);
    expect(result.current.metadata).toHaveProperty('appVersion', '1.0.0');
    expect(result.current.metadata).toHaveProperty('environment', 'test');
  });

  it('should skip resize listener in non-client environment', () => {
    // Mock non-client environment
    vi.clearAllMocks(); // Clear previous mocks first
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isClient as any).mockReturnValue(false); // Use mockReturnValue instead of mockReturnValueOnce

    render(
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        <div>Test</div>
      </LoggerProvider>,
    );

    expect(addEventListenerMock).not.toHaveBeenCalled();

    // Reset the mock for other tests
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (envModule.isClient as any).mockReturnValue(true);
  });

  it('should update screen metadata on resize', () => {
    // Prepare a mock for window resize
    const originalAddEventListener = window.addEventListener;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let resizeHandler: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.addEventListener = (event: string, handler: any) => {
      if (event === 'resize') {
        resizeHandler = handler;
      }
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LoggerProvider appName={appName} gaTrackingId={gaTrackingId}>
        {children}
      </LoggerProvider>
    );

    const { result } = renderHook(() => useLoggerRootContext(), { wrapper });

    // Initial values
    expect(result.current.metadata.screenWidth).toBe(1024);
    expect(result.current.metadata.screenHeight).toBe(768);

    // Simulate a window resize
    if (resizeHandler) {
      // Change window dimensions
      window.innerWidth = 1280;
      window.innerHeight = 900;

      // Trigger resize event
      act(() => {
        resizeHandler();
      });

      // Check updated values
      expect(result.current.metadata.screenWidth).toBe(1280);
      expect(result.current.metadata.screenHeight).toBe(900);
    }

    // Restore original addEventListener
    window.addEventListener = originalAddEventListener;
  });

  it('should not initialize GA when no tracking ID is provided', () => {
    render(
      <LoggerProvider appName={appName} gaTrackingId="">
        <div>Test</div>
      </LoggerProvider>,
    );

    expect(ReactGA.initialize).not.toHaveBeenCalled();
  });
});
