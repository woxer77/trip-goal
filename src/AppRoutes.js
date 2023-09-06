import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useLazyComponent from './hooks/useLazyComponent';

import Home from './components/pages/Home/Home';

export const NotFoundLazy = useLazyComponent(() => import('./components/pages/NotFound/NotFound'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundLazy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
