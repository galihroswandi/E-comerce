import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./home";
import ErrorPage from "./ErrorPage/ErrorPage";
import DetailProduct from "./DetailProduct";
import CartProducts from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product/:id_product",
    element: <DetailProduct />,
  },
  {
    path: "/cart",
    element: <CartProducts />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
