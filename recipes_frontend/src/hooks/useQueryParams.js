import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export function useQueryParams() {
  /** Helpers to read and update query params. */
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const setParams = useCallback((updates, options = { replace: true }) => {
    const next = new URLSearchParams(location.search);
    Object.entries(updates).forEach(([k, v]) => {
      if (v === undefined || v === null || v === '') {
        next.delete(k);
      } else {
        next.set(k, String(v));
      }
    });
    navigate({ pathname: location.pathname, search: `?${next.toString()}` }, options);
  }, [location.pathname, location.search, navigate]);

  const get = useCallback((key) => params.get(key) || undefined, [params]);

  return { get, setParams, raw: params };
}
