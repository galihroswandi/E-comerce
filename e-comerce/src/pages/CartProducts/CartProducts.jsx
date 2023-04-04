import React, { Fragment } from "react";

import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import AllProducts from "../../components/organisms/AllProducts";
import CartProductsOrgs from "../../components/organisms/Pages/CartProductsOrgs";

const CartProducts = () => {
  return (
    <Fragment>
      <Navbar />
      <CartProductsOrgs />
      <AllProducts title="Rekomendasi" />
      <Footer />
    </Fragment>
  );
};

export default CartProducts;
