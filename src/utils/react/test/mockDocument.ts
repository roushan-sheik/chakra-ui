/**
 * Utility for mocking document visibility state
 */

type VisibilityState = 'visible' | 'hidden';

let originalVisibilityState: PropertyDescriptor | undefined;

export function mockDocumentVisibilityState(state: VisibilityState) {
  if (originalVisibilityState === undefined) {
    originalVisibilityState = Object.getOwnPropertyDescriptor(document, 'visibilityState');
  }

  Object.defineProperty(document, 'visibilityState', {
    configurable: true,
    get: () => state,
  });

  // Dispatch a visibilitychange event to notify listeners
  document.dispatchEvent(new Event('visibilitychange'));
}

export function clearMockDocumentVisibilityState() {
  if (originalVisibilityState !== undefined) {
    Object.defineProperty(document, 'visibilityState', originalVisibilityState);
    originalVisibilityState = undefined;
  }
}
