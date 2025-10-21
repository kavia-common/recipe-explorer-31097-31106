import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes.jsx';
import Header from './components/Header.jsx';

// PUBLIC_INTERFACE
function App() {
  /** Root application shell with header and routed content. */
  return (
    <div className="App app-shell" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Header />
      <main id="main" role="main" className="container" aria-live="polite">
        <AppRoutes />
      </main>
      <footer className="app-footer" role="contentinfo" aria-label="Footer">
        <p className="muted">&copy; {new Date().getFullYear()} Recipe Explorer</p>
      </footer>
    </div>
  );
}

export default App;
