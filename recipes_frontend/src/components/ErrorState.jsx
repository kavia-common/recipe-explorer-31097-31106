import React from 'react';

// PUBLIC_INTERFACE
export default function ErrorState({ message = 'Something went wrong.' }) {
  /** Accessible error banner. */
  return (
    <div role="alert" className="alert error">
      <strong>Error:</strong> {message}
    </div>
  );
}
