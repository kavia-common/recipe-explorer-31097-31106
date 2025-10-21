import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Header() {
  /** Application header with skip link and brand. */
  const location = useLocation();
  return (
    <header className="app-header" role="banner">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-current={location.pathname === '/' ? 'page' : undefined}>
          <span className="brand-mark" aria-hidden="true">🍳</span>
          <span className="brand-text mono">Recipe Explorer</span>
        </Link>
        <nav aria-label="Primary" className="nav">
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </header>
  );
}
