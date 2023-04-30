import React, { Fragment } from "react";

import Navbar from "../../components/Elements/Navbar";
import Footer from "../../components/Elements/Footer";
import CheckoutFragment from "./../../components/Fragments/Checkout";
import CheckoutTemplate from "./../../components/Layouts/Checkout";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutFragment />
      <Footer />
    </>
    // <>
    //   <CheckoutTemplate />
    // </>
  );
};
export default Checkout;
