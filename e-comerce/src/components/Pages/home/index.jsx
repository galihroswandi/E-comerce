import React from "react";
import Navbar from "../../Elements/Navbar";
import Banner from "../../Fragments/Banner";
import Categories from "../../Fragments/Kategori";
import AllProducts from "../../Fragments/AllProducts";
import Footer from "../../Elements/Footer";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default HomePages;
