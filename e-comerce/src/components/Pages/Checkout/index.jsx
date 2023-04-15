import React, { Fragment } from "react";

import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import CheckoutFragment from "./../../Fragments/Checkout";
import CheckoutTemplate from "./../../Layouts/Checkout";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutFragment />
      <Footer />
    </>
  );
};
export default Checkout;
