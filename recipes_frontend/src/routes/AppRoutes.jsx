import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import RecipeDetailPage from '../pages/RecipeDetailPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

// PUBLIC_INTERFACE
export default function AppRoutes() {
  /** Declares application routes for home, categories, recipe details, and fallback. */
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/:category" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
