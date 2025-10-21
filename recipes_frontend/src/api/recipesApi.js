import { apiClient } from './client.js';
import mockData from './mock/recipes.mock.json';

const USE_MOCK = String(process.env.REACT_APP_USE_MOCK || 'true').toLowerCase() === 'true';

function filterAndPaginate(items, { q, category, page = 1, pageSize = 12 }) {
  let filtered = items;
  if (q) {
    const needle = q.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.title.toLowerCase().includes(needle) ||
        r.ingredients.join(' ').toLowerCase().includes(needle)
    );
  }
  if (category) {
    filtered = filtered.filter((r) => r.category.toLowerCase() === category.toLowerCase());
  }
  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const slice = filtered.slice(start, start + pageSize);
  return { items: slice, total, page, pageSize };
}

// PUBLIC_INTERFACE
export async function listRecipes({ q, category, page = 1, pageSize = 12 } = {}) {
  /** Lists recipes based on filters; returns {items, total, page, pageSize}. */
  if (USE_MOCK) {
    return Promise.resolve(filterAndPaginate(mockData.recipes, { q, category, page, pageSize }));
  }
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (category) params.set('category', category);
  params.set('page', String(page));
  params.set('pageSize', String(pageSize));
  const data = await apiClient.get(`/recipes?${params.toString()}`);
  return data;
}

// PUBLIC_INTERFACE
export async function getRecipeById(id) {
  /** Gets recipe detail by id. */
  if (USE_MOCK) {
    const found = mockData.recipes.find((r) => String(r.id) === String(id));
    if (!found) throw new Error('Recipe not found');
    return Promise.resolve(found);
  }
  return apiClient.get(`/recipes/${id}`);
}

// PUBLIC_INTERFACE
export async function listCategories() {
  /** Lists distinct categories. */
  if (USE_MOCK) {
    const set = new Set(mockData.recipes.map((r) => r.category));
    return Promise.resolve(Array.from(set).sort());
  }
  const data = await apiClient.get('/categories');
  return data;
}
