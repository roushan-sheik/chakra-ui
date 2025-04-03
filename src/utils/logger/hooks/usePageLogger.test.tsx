import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import { PageLogger, usePageLogger, withPageLogger } from './usePageLogger';
import { LoggerProvider } from '../Logger';
import { useLogger } from './useLogger';
import type { Logger } from '../models';

// Mock the useLogger hook
vi.mock('./useLogger', () => ({
  useLogger: vi.fn().mockReturnValue(undefined),
}));

describe('usePageLogger hook and PageLogger component', () => {
  const mockLogger: Logger = {
    view: vi.fn().mockResolvedValue(undefined),
    event: vi.fn().mockResolvedValue(undefined),
    click: vi.fn().mockResolvedValue(undefined),
    confirmed: vi.fn().mockResolvedValue(undefined),
    created: vi.fn().mockResolvedValue(undefined),
    updated: vi.fn().mockResolvedValue(undefined),
    selected: vi.fn().mockResolvedValue(undefined),
    filled: vi.fn().mockResolvedValue(undefined),
    impressed: vi.fn().mockResolvedValue(undefined),
    unimpressed: vi.fn().mockResolvedValue(undefined),
    searched: vi.fn().mockResolvedValue(undefined),
    isInitialized: true,
  };

  beforeEach(() => {
    // Clear mocks and reset implementation
    vi.clearAllMocks();
    (useLogger as ReturnType<typeof vi.fn>).mockReturnValue(mockLogger);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('PageLogger component', () => {
    it('should create a logger with pageName and provide it via context', () => {
      const pageName = 'TestPage';

      const TestComponent = () => {
        const logger = usePageLogger();
        expect(logger).toBeDefined();
        expect(logger).toBe(mockLogger);
        return <div>Test Component</div>;
      };

      render(
        <LoggerProvider appName="TestApp" gaTrackingId="test-id">
          <PageLogger pageName={pageName}>
            <TestComponent />
          </PageLogger>
        </LoggerProvider>,
      );

      expect(useLogger).toHaveBeenCalledWith(pageName);
    });

    it('should use an existing logger when provided', () => {
      const externalLogger = mockLogger;
      // Reset the mock to ensure it returns undefined for this test
      (useLogger as ReturnType<typeof vi.fn>).mockReturnValue(undefined);

      const TestComponent = () => {
        const logger = usePageLogger();
        expect(logger).toBeDefined();
        expect(logger).toBe(externalLogger);
        return <div>Test Component</div>;
      };

      render(
        <LoggerProvider appName="TestApp" gaTrackingId="test-id">
          <PageLogger logger={externalLogger}>
            <TestComponent />
          </PageLogger>
        </LoggerProvider>,
      );

      // useLogger will be called but its return value should be ignored
      expect(useLogger).toHaveBeenCalledWith('');
    });
  });

  describe('usePageLogger hook', () => {
    it('should return undefined when used outside PageLogger context', () => {
      const { result } = renderHook(() => usePageLogger());
      expect(result.current).toBeUndefined();
    });

    it('should return the logger from context when used within PageLogger', () => {
      const pageName = 'TestPage';

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <LoggerProvider appName="TestApp" gaTrackingId="test-id">
          <PageLogger pageName={pageName}>{children}</PageLogger>
        </LoggerProvider>
      );

      const { result } = renderHook(() => usePageLogger(), { wrapper });
      expect(result.current).toBe(mockLogger);
    });
  });

  describe('withPageLogger HOC', () => {
    it('should wrap a component with PageLogger', () => {
      const pageName = 'TestPage';

      const TestComponent = () => {
        const logger = usePageLogger();
        expect(logger).toBeDefined();
        expect(logger).toBe(mockLogger);
        return <div>Test Component</div>;
      };

      const WrappedComponent = withPageLogger(TestComponent, pageName);

      render(
        <LoggerProvider appName="TestApp" gaTrackingId="test-id">
          <WrappedComponent />
        </LoggerProvider>,
      );

      expect(useLogger).toHaveBeenCalledWith(pageName);
    });
  });
});
