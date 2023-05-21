import React, { useEffect } from "react";
import DetailProduk from "../../components/Fragments/DetailProduk";
import PageLayout from "../../components/Layouts/PageLayout";
import { setTitle } from "../../utils/title.util";

const DetailProduct = () => {
  useEffect(() => {
    setTitle("Detail Produk");
  }, []);
  return (
    <PageLayout>
      <DetailProduk />
    </PageLayout>
  );
};

export default DetailProduct;
