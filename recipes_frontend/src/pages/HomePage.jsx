import React from 'react';
import SearchBar from '../components/SearchBar.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import RecipeGrid from '../components/RecipeGrid.jsx';
import Loading from '../components/Loading.jsx';
import ErrorState from '../components/ErrorState.jsx';
import Pagination from '../components/Pagination.jsx';
import { useRecipes } from '../hooks/useRecipes.js';

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Home page showing search, category filter, and recipe grid with pagination. */
  const {
    state,
    setSearch,
    setCategory,
    setPage
  } = useRecipes();

  return (
    <section aria-labelledby="home-heading" className="stack-lg">
      <h1 id="home-heading" className="page-title mono">Recipe Explorer</h1>
      <div className="controls grid-2 gap">
        <SearchBar
          value={state.q}
          onChange={setSearch}
          placeholder="Search recipes (e.g., pasta, chicken)..."
          ariaLabel="Search recipes"
        />
        <CategoryFilter
          value={state.category}
          onChange={setCategory}
        />
      </div>

      {state.loading && <Loading label="Loading recipes..." />}
      {state.error && <ErrorState message={state.error} />}

      {!state.loading && !state.error && (
        <>
          <RecipeGrid recipes={state.items} />
          <Pagination
            page={state.page}
            pageSize={state.pageSize}
            total={state.total}
            onPageChange={setPage}
          />
        </>
      )}
    </section>
  );
}
