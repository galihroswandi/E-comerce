import React, { Fragment } from "react";

import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import AllProducts from "../../Fragments/AllProducts";
import CartProductsOrgs from "../../Fragments/Cart";

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
