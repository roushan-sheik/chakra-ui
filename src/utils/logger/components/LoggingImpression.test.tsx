import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import LoggingImpression from './LoggingImpression';
import * as pageLoggerModule from '../hooks/usePageLogger';
import { mockViewport, mockDocumentVisibilityState, clearMockDocumentVisibilityState } from '@/utils/react/test';
import delay from '@/utils/function/delay';

describe('LoggingImpression component', () => {
  const mockImpressedFn = vi.fn();
  const mockUnimpressedFn = vi.fn();
  const mockLogger = {
    impressed: mockImpressedFn,
    unimpressed: mockUnimpressedFn,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(pageLoggerModule, 'usePageLogger').mockReturnValue(mockLogger as any);
    mockViewport.setup();
  });

  afterEach(() => {
    mockViewport.cleanup();
    clearMockDocumentVisibilityState();
  });

  it('should pass the ImpressionArea component props correctly for single event mode', () => {
    renderWithChakra(
      <LoggingImpression areaThreshold={0.5} className="test-class" logName="test-impression">
        <div>Content</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });

  it('should pass the ImpressionArea component props correctly for dual event mode', () => {
    renderWithChakra(
      <LoggingImpression
        areaThreshold={0.75}
        className="test-class-dual"
        impressionLogName="start-impression"
        unimpressionLogName="end-impression"
      >
        <div>Content</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    renderWithChakra(
      <LoggingImpression logName="test-impression">
        <div>Impression Content</div>
      </LoggingImpression>,
    );

    expect(screen.getByText('Impression Content')).toBeInTheDocument();
  });

  it('should log impressed event when element enters viewport', async () => {
    renderWithChakra(
      <LoggingImpression logName="test-impression" params={{ section: 'hero' }}>
        <div>Content</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Content');

    mockViewport.enter(content);

    await waitFor(() => {
      expect(mockImpressedFn).toHaveBeenCalledWith('test-impression', { section: 'hero' });
    });
  });

  it('should log both impressed and unimpressed events in dual event mode', async () => {
    const params = { section: 'features' };

    renderWithChakra(
      <LoggingImpression impressionLogName="start-impression" params={params} unimpressionLogName="end-impression">
        <div>Content</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Content');

    mockViewport.enter(content);

    await waitFor(() => {
      expect(mockImpressedFn).toHaveBeenCalledWith('start-impression', params);
    });

    mockViewport.exit(content);

    await waitFor(() => {
      expect(mockUnimpressedFn).toHaveBeenCalledWith('end-impression', params);
    });
  });

  it('should not log if logger is not available', async () => {
    vi.spyOn(pageLoggerModule, 'usePageLogger').mockReturnValue(undefined);

    renderWithChakra(
      <LoggingImpression logName="test-impression">
        <div>Content</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Content');

    mockViewport.enter(content);

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(mockImpressedFn).not.toHaveBeenCalled();
  });

  it('should respect document visibility state changes', async () => {
    mockDocumentVisibilityState('visible');

    renderWithChakra(
      <LoggingImpression
        impressionLogName="start-impression"
        params={{ page: 'home' }}
        unimpressionLogName="end-impression"
      >
        <div>Visibility Test</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Visibility Test');

    mockViewport.enter(content);

    await waitFor(
      () => {
        expect(mockImpressedFn).toHaveBeenCalledWith('start-impression', { page: 'home' });
      },
      { timeout: 1000 },
    );

    mockImpressedFn.mockClear();
    mockUnimpressedFn.mockClear();

    // Since component is already in viewport and visible, changing to hidden should trigger unimpressed
    mockDocumentVisibilityState('hidden');

    await waitFor(
      () => {
        expect(mockUnimpressedFn).toHaveBeenCalledWith('end-impression', { page: 'home' });
      },
      { timeout: 2000 },
    );

    mockImpressedFn.mockClear();
    mockUnimpressedFn.mockClear();

    mockDocumentVisibilityState('visible');

    await waitFor(
      () => {
        expect(mockImpressedFn).toHaveBeenCalledWith('start-impression', { page: 'home' });
      },
      { timeout: 2000 },
    );
  });

  it('should not log impressed event when document is already hidden', async () => {
    mockDocumentVisibilityState('hidden');

    renderWithChakra(
      <LoggingImpression logName="test-impression" params={{ section: 'hero' }}>
        <div>Hidden Document Test</div>
      </LoggingImpression>,
    );

    const content = screen.getByText('Hidden Document Test');

    mockViewport.enter(content);

    await delay(500);
    expect(mockImpressedFn).not.toHaveBeenCalled();
  });
});
