import React, { Fragment } from "react";

import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import CheckoutFragment from "./../../Fragments/Checkout";

const Checkout = () => {
  return (
    <Fragment>
      <Navbar />
      <CheckoutFragment />
      <Footer />
    </Fragment>
  );
};
export default Checkout;
