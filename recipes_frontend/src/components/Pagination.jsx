import React from 'react';

// PUBLIC_INTERFACE
export default function Pagination({ page, pageSize, total, onPageChange }) {
  /** Simple pagination controls. */
  const totalPages = Math.max(1, Math.ceil((total || 0) / (pageSize || 12)));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" role="navigation" aria-label="Pagination">
      <button
        className="btn"
        onClick={() => canPrev && onPageChange(page - 1)}
        disabled={!canPrev}
        aria-label="Previous page"
      >
        ← Prev
      </button>
      <span className="muted small" aria-live="polite">Page {page} of {totalPages}</span>
      <button
        className="btn"
        onClick={() => canNext && onPageChange(page + 1)}
        disabled={!canNext}
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  );
}
