import React from "react";
import Navbar from "./../../components/organisms/Navbar";
import Banner from "./../../components/organisms/Banner";
import Categories from "../../components/organisms/Categories";
import AllProducts from "../../components/organisms/AllProducts";
import Footer from "../../components/organisms/Footer";

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
