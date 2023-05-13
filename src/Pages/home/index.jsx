import React from "react";
import Navbar from "./../../components/Elements/Navbar";
import Banner from "../../components/Fragments/Banner";
import AllProducts from "../../components/Fragments/AllProducts";
import Footer from "../../components/Elements/Footer";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default HomePages;
