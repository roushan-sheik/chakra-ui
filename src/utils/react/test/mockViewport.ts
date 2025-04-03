/**
 * Utility for mocking viewport entry/exit
 */

import { mockIntersectionObserver } from './mockIntersectionObserver';
import { act } from '@testing-library/react';

export const mockViewport = {
  setup,
  cleanup,
  enter,
  exit,
};

function setup() {
  mockIntersectionObserver.setup();
}

function cleanup() {
  mockIntersectionObserver.cleanup();
}

function enter(element: HTMLElement) {
  act(() => mockIntersectionObserver.intersect(element, { ratio: 1 }));
}

function exit(element: HTMLElement) {
  act(() => mockIntersectionObserver.intersect(element, { ratio: 0 }));
}
