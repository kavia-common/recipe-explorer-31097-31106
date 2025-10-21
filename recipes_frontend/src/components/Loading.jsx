import React from 'react';

// PUBLIC_INTERFACE
export default function Loading({ label = 'Loading…' }) {
  /** Accessible loading indicator. */
  return (
    <div role="status" aria-live="polite" className="loading">
      <span className="spinner" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
