import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CSS

import HomePage from './views/HomePage/HomePage'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
    path: '/',
    element: <HomePage/>
}])

root.render(<RouterProvider router={router}/>);


