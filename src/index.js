import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Index2213 from './components/index2213';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Index4806 from './components/index4806';
import Index6292 from './components/index6292';

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      
    ]
  },{
    path: "/index2213",
    element: <Index2213 />,
  },{
    path: "/index4806",
    element: <Index4806 />,
  },{
    path: "/index6292",
    element: <Index6292 />,
  }
  
];
const router = createBrowserRouter(routes, {basename: "/book-index"});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
