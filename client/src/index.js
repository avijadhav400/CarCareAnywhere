import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap CSS
import HomePage from "./views/HomePage/HomePage";
import Login from "./views/Login/Login.js";
import Signup from "./views/Signup/Signup.js";
import AddService from "./views/AddService/AddService.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/add-service",
    element: <AddService />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

root.render(<RouterProvider router={router} />);
