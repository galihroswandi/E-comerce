import React, { useEffect } from "react";
import Navbar from "../../components/Elements/Navbar";
import Banner from "../../components/Fragments/Banner";
import Categories from "../../components/Fragments/Kategori";
import AllProducts from "../../components/Fragments/AllProducts";
import Footer from "../../components/Elements/Footer";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* <Categories /> */}
      <AllProducts />
      <Footer />
    </div>
  );
};

export default HomePages;
