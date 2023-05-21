import React, { useEffect } from "react";

import AllProducts from "../../components/Fragments/AllProducts";
import Keranjang from "../../components/Fragments/Keranjang";
import PageLayout from "../../components/Layouts/PageLayout";
import { setTitle } from "../../utils/title.util";

const CartProducts = () => {
  useEffect(() => {
    setTitle("Keranjang");
  }, []);
  return (
    <PageLayout>
      <Keranjang />
      <AllProducts title="Rekomendasi" />
    </PageLayout>
  );
};

export default CartProducts;
