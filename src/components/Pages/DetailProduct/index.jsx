import React, { Fragment } from "react";
import Navbar from "../../Elements/Navbar";
import DetailProductOrgs from "../../Fragments/DetailProducts";
import Footer from "../../Elements/Footer";

const DetailProduct = () => {
  return (
    <Fragment>
      <Navbar />
      <DetailProductOrgs />
      <Footer />
    </Fragment>
  );
};

export default DetailProduct;
