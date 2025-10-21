import { useEffect, useState } from 'react';
import { getRecipeById } from '../api/recipesApi.js';

// PUBLIC_INTERFACE
export function useRecipeDetail(id) {
  /** Fetches a single recipe by ID and exposes loading/error state. */
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError('');
    getRecipeById(id)
      .then((r) => { if (mounted) setRecipe(r); })
      .catch((e) => { if (mounted) setError(e?.message || 'Failed to load recipe'); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);

  return { recipe, loading, error };
}
