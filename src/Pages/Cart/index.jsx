import React, { Fragment } from "react";

import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Elements/Footer";
import AllProducts from "../../components/Fragments/AllProducts";
import CartProductsOrgs from "../../components/Fragments/Cart";

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
