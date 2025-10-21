import React, { useEffect, useState } from 'react';
import { listCategories } from '../api/recipesApi.js';

// PUBLIC_INTERFACE
export default function CategoryFilter({ value, onChange }) {
  /** Category dropdown fed by API layer. */
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    listCategories().then((cats) => {
      if (mounted) setCategories(cats);
    }).catch(() => setCategories([]));
    return () => { mounted = false; };
  }, []);

  return (
    <div className="field">
      <label htmlFor="category" className="sr-only">Category</label>
      <select
        id="category"
        className="select"
        value={value || ''}
        onChange={(e) => onChange(e.target.value || undefined)}
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
