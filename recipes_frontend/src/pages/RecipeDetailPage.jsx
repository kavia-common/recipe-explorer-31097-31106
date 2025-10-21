import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading.jsx';
import ErrorState from '../components/ErrorState.jsx';
import { useRecipeDetail } from '../hooks/useRecipeDetail.js';

// PUBLIC_INTERFACE
export default function RecipeDetailPage() {
  /** Detail page that shows ingredients, instructions, and metadata for a recipe. */
  const { id } = useParams();
  const { recipe, loading, error } = useRecipeDetail(id);

  if (loading) return <Loading label="Loading recipe..." />;
  if (error) return <ErrorState message={error} />;

  if (!recipe) {
    return <ErrorState message="Recipe not found." />;
  }

  return (
    <article className="card detail" aria-labelledby="recipe-title">
      <header className="detail-header">
        <h1 id="recipe-title" className="mono">{recipe.title}</h1>
        <p className="muted">{recipe.category} • {recipe.time} mins • Serves {recipe.servings}</p>
      </header>

      <div className="detail-content grid-2 gap">
        <figure className="detail-media">
          <img
            src={recipe.image}
            alt={`${recipe.title} dish`}
            className="responsive-img"
          />
          {recipe.source && (
            <figcaption className="muted small">
              Source: <a href={recipe.source} target="_blank" rel="noreferrer">{recipe.source}</a>
            </figcaption>
          )}
        </figure>

        <section>
          <h2 className="mono">Ingredients</h2>
          <ul className="ingredients">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>

          <h2 className="mono">Instructions</h2>
          <ol className="instructions">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </div>

      <footer className="detail-footer">
        <Link to="/" className="btn">← Back to results</Link>
      </footer>
    </article>
  );
}
