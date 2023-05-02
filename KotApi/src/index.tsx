import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CatInfoPage from './pages/CatInfoPage';
import CatGeneratorPage from './pages/CatGeneratorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CatInfoPage/>,
  },
  {
    path: "/generator",
    element: <CatGeneratorPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
