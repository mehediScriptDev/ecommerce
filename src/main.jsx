import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from './router/router';

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);