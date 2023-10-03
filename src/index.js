import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Notes from './components/Notes';
import { Error } from './components/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/:id',
        element: <Notes />,
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
