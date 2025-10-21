# Recipe Explorer Frontend

A React app to browse, search, and view recipes with a modern Ocean Professional theme and subtle retro accents.

## Quickstart
- Install: npm install
- Start dev server: npm start (http://localhost:3000)
- Build: npm run build

## Environment
Copy .env.example to .env and configure:
- REACT_APP_USE_MOCK=true to use local mock data (default)
- REACT_APP_API_BASE_URL= Optional base URL when using a real backend with REACT_APP_USE_MOCK=false

## Routes
- / — Home (search + category filter + grid)
- /categories/:category — Category filtered list
- /recipe/:id — Recipe detail

## Notes
- Mock data: src/api/mock/recipes.mock.json
- API layer switches based on REACT_APP_USE_MOCK in src/api/recipesApi.js
