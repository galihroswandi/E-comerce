import React, { Fragment } from "react";
import Navbar from "../../components/organisms/Navbar";
import DetailProductOrgs from "./../../components/organisms/DetailProudctOrgs";
import Footer from "./../../components/organisms/Footer";

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
