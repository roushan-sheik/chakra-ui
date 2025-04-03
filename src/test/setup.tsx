import '@testing-library/jest-dom';
import { afterEach, beforeAll, vi } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { SSDesignSystemProvider } from '@/styles/SSDesignSystemProvider';

// Mock IntersectionObserver
beforeAll(() => {
  // Mock IntersectionObserver
  global.IntersectionObserver = class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: readonly number[] = [];

    private callback: IntersectionObserverCallback;
    private elements = new Set<Element>();

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    observe(element: Element): void {
      this.elements.add(element);
    }

    unobserve(element: Element): void {
      this.elements.delete(element);
    }

    disconnect(): void {
      this.elements.clear();
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }

    // Helper method for tests to simulate intersection
    triggerIntersection(entries: IntersectionObserverEntry[]): void {
      this.callback(entries, this);
    }
  };

  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Set default screen dimensions for tests
  window.innerWidth = 1024;
  window.innerHeight = 768;
});

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Create a custom render function for ChakraProvider
// Export it from here so tests can import it
export function renderWithChakra(ui: React.ReactElement) {
  return render(<SSDesignSystemProvider>{ui}</SSDesignSystemProvider>);
}

// Add types for renderWithChakra to global
declare global {
  function renderWithChakra(ui: React.ReactElement): ReturnType<typeof render>;
}

// Add the renderWithChakra function to the global scope for easy access in tests
global.renderWithChakra = renderWithChakra;
