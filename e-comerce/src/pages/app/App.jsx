import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "../home";
import ErrorPage from "../ErrorPage/ErrorPage";
import About from "../about";
import DetailProduct from "../DetailProduct/DetailProduct";
import CartProducts from "../CartProducts/CartProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product/:id_product",
    element: <DetailProduct />,
  },
  {
    path: "/cart/:id_product",
    element: <CartProducts />,
  },
]);

function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
