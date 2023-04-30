import React, { Fragment } from "react";
import Navbar from "../../components/Elements/Navbar";
import DetailProductOrgs from "../../components/Fragments/DetailProducts";
import Footer from "../../components/Elements/Footer";

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
