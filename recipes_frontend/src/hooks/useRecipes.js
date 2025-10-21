import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listRecipes } from '../api/recipesApi.js';
import { useDebounce } from './useDebounce.js';
import { useQueryParams } from './useQueryParams.js';

// PUBLIC_INTERFACE
export function useRecipes() {
  /** Manages recipes list state with search, category, pagination, and URL sync. */
  const routeParams = useParams();
  const { get, setParams } = useQueryParams();

  const [q, setQ] = useState(get('q') || '');
  const categoryFromRoute = routeParams.category;
  const [category, setCategoryState] = useState(get('category') || categoryFromRoute || undefined);
  const [page, setPageState] = useState(Number(get('page') || 1));
  const pageSize = 12;

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const debouncedQ = useDebounce(q, 400);

  // Sync route category into local state
  useEffect(() => {
    if (categoryFromRoute && categoryFromRoute !== category) {
      setCategoryState(categoryFromRoute);
      setPageState(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFromRoute]);

  // Fetch data when filters change
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError('');
    listRecipes({ q: debouncedQ, category, page, pageSize })
      .then(({ items, total, page: pg }) => {
        if (!mounted) return;
        setItems(items);
        setTotal(total);
        setPageState(pg);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e?.message || 'Failed to load recipes');
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [debouncedQ, category, page, pageSize]);

  // Keep query params in sync
  useEffect(() => {
    setParams({ q: q || undefined, category: category || undefined, page: page > 1 ? page : undefined });
  }, [q, category, page, setParams]);

  const setSearch = (val) => {
    setQ(val);
    setPageState(1);
  };
  const setCategory = (val) => {
    setCategoryState(val || undefined);
    setPageState(1);
  };
  const setPage = (val) => setPageState(val);

  const state = useMemo(() => ({
    q, category, page, pageSize, items, total, loading, error
  }), [q, category, page, pageSize, items, total, loading, error]);

  return { state, setSearch, setCategory, setPage };
}
