import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe }) {
  /** Card representation for a recipe. */
  return (
    <article className="card" aria-labelledby={`recipe-${recipe.id}-title`}>
      <Link to={`/recipe/${recipe.id}`} className="card-link">
        <img
          src={recipe.image}
          alt={`${recipe.title} recipe image`}
          className="card-img"
          loading="lazy"
        />
        <div className="card-body">
          <h3 id={`recipe-${recipe.id}-title`} className="card-title mono">{recipe.title}</h3>
          <p className="muted small">{recipe.category} • {recipe.time} mins</p>
        </div>
      </Link>
    </article>
  );
}
