import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/home.scss';

import Home from './pages/Home';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <Home/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)