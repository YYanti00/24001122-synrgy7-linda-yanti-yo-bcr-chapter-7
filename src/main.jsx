import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SearchCar from "./pages/searchCar.jsx";
import Home from "./pages/home.jsx";
import AdminCars from "./pages/adminCars.jsx";
import CreateCars from "./pages/createCars.jsx";
import Login from "./pages/login.jsx";
import EditCar from "./pages/editCar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <SearchCar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminCars />,
  },
  {
    path: "/createcars",
    element: <CreateCars />,
  },
  {
    path: "/editcars/:id",
    element: <EditCar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
