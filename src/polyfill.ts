/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

// polyfills are now bundled with all other dependencies
import './third_party/index.js';

// Polyfill Node constants for DevTools SDK running in Node.js environment
Object.defineProperty(globalThis, 'Node', {
  value: {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
  },
  writable: true,
  configurable: true,
  enumerable: true,
});

// Polyfill window to point to globalThis for browser-only APIs like window.setTimeout
Object.defineProperty(globalThis, 'window', {
  value: globalThis,
  writable: true,
  configurable: true,
  enumerable: true,
});
