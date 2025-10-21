import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  /** Fallback page for unknown routes. */
  return (
    <section className="stack-md">
      <h1 className="mono">404 — Not Found</h1>
      <p className="muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn">Back Home</Link>
    </section>
  );
}
