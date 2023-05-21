import React, { useEffect } from "react";
import Banner from "../../components/Elements/Banner";
import AllProducts from "../../components/Fragments/AllProducts";
import PageLayout from "../../components/Layouts/PageLayout";
import { setTitle } from "../../utils/title.util";

const HomePages = () => {
  useEffect(() => {
    setTitle("Beranda");
  }, []);
  return (
    <PageLayout>
      <Banner />
      <AllProducts />
    </PageLayout>
  );
};

export default HomePages;
