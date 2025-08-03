import React from 'react';
import { createRoot } from 'react-dom/client';
import AshEmberGame from './app.jsx';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(React.createElement(AshEmberGame));
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
