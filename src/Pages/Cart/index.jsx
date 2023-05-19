import React from "react";

import AllProducts from "../../components/Fragments/AllProducts";
import Keranjang from "../../components/Fragments/Keranjang";
import PageLayout from "../../components/Layouts/PageLayout";

const CartProducts = () => {
  return (
    <PageLayout>
      <Keranjang />
      <AllProducts title="Rekomendasi" />
    </PageLayout>
  );
};

export default CartProducts;
