import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Card from './components/Card';
import { Error } from './components/ErrorPage';
import './index.css';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/:id',
        element: <Card />,
        errorElement: <Error/>
      }
    ]
  }]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Route} />
  </>
);
