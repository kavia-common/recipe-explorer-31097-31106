import React from 'react';
import RecipeCard from './RecipeCard.jsx';

// PUBLIC_INTERFACE
export default function RecipeGrid({ recipes }) {
  /** Responsive grid of recipe cards. */
  if (!recipes || recipes.length === 0) {
    return <p role="status" className="muted">No recipes match your filters.</p>;
    }
  return (
    <section className="grid-responsive" aria-label="Recipe results">
      {recipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}
    </section>
  );
}
