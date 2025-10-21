# Recipes Frontend (React)

An MVP React application to browse, search, and view recipes.

## Features
- Ocean Professional theme with subtle retro accents (1px borders, mono headings)
- Responsive grid (1–2 columns on small, 3–4 on desktop)
- Search, category filter, pagination with URL query params
- Mock data via feature flag
- Accessible: alt text, focus styles, semantic HTML

## Getting Started
1. Install deps
   npm install

2. Run the app
   npm start
   Open http://localhost:3000

3. Environment
   Copy .env.example to .env and adjust as needed:
   - REACT_APP_USE_MOCK=true (default)
   - REACT_APP_API_BASE_URL=http://localhost:4000 (when using a real backend and REACT_APP_USE_MOCK=false)

## Routes
- / — Home with search and category filter
- /categories/:category — Pre-filtered by category
- /recipe/:id — Recipe detail

## Notes
- Mock data lives in src/api/mock/recipes.mock.json
- API functions in src/api/recipesApi.js handle switching between mock and real API
