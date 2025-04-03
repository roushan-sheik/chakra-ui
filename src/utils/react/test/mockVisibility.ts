/**
 * Utility for mocking document visibility state
 */

const originalDocument = document;

/**
 * Mocks the document.visibilityState and triggers a visibilitychange event
 *
 * @param visibilityState - The visibility state to set ('visible' or 'hidden')
 */
export function mockDocumentVisibilityState(visiblityState: Document['visibilityState']) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (global as any).document;

  global.document = new Proxy(originalDocument, {
    get: (target, name) => {
      if (name === 'visibilityState') {
        return visiblityState;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (target as any)[name];
    },
  });
  global.document.dispatchEvent(new Event('visibilitychange'));
}

/**
 * Restores the original document object, clearing the mocked visibility state
 */
export function clearMockDocumentVisibilityState() {
  global.document = originalDocument;
}
