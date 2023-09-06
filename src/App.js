import React from 'react';

import ErrorBoundary from './ErrorBoundary';

import AppRoutes from './AppRoutes';

import './assets/styles/scss/index.scss';

function App() {
  return (
    <div className="page">
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
