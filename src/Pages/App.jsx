import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./home";
import ErrorPage from "./ErrorPage/ErrorPage";
import DetailProduct from "./DetailProduct";
import CartProducts from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import Profile from "./Profile";
import Pesanan from "./Pesanan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <Login />,
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
  {
    path: "/profil",
    element: <Profile />,
  },
  {
    path: "/pesanan",
    element: <Pesanan />,
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
