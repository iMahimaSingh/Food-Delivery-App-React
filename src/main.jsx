import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppLayout,AppRouter} from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

