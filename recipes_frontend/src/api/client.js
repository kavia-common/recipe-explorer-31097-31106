const API_BASE = process.env.REACT_APP_API_BASE_URL || '';

/**
 * Simple wrapper for fetch with JSON handling.
 */
async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

// PUBLIC_INTERFACE
export const apiClient = {
  /** GET helper */
  get: (path) => request(path),
};
