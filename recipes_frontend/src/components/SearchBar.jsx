import React from 'react';

// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange, placeholder = 'Search', ariaLabel = 'Search' }) {
  /** Accessible search input */
  return (
    <div className="field">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        id="search"
        type="search"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </div>
  );
}
