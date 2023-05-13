import React from "react";
import Banner from "../../components/Elements/Banner";
import AllProducts from "../../components/Fragments/AllProducts";
import PageLayout from "../../components/Layouts/PageLayout";

const HomePages = () => {
  return (
    <PageLayout>
      <Banner />
      <AllProducts />
    </PageLayout>
  );
};

export default HomePages;
