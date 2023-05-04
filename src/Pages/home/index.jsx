import React, { useEffect } from "react";
import Navbar from "../../components/Elements/Navbar";
import Banner from "../../components/Fragments/Banner";
import Categories from "../../components/Fragments/Kategori";
import AllProducts from "../../components/Fragments/AllProducts";
import Footer from "../../components/Elements/Footer";
import { auth } from "../../config/firebase";

const HomePages = () => {
  useEffect(() => {
    // auth.onAuthStateChanged(function (user) {
    //   if (user) {
    //     var uid = user.uid;
    //     console.log("UID pengguna yang sedang login: " + uid);
    //   } else {
    //     console.log("Tidak ada pengguna yang terautentikasi.");
    //   }
    // });
  });

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
