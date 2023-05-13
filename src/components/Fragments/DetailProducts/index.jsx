import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AllProducts from "../AllProducts";
import MainCardDetail from "../../Elements/CardDetailProduct";
import { filterDataByAmount } from "../../../config/redux/reducer/ProductsSlice";

const DetailProducts = () => {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.products.data)[0];

  const { id_product } = useParams();

  if (dataProduct !== undefined) {
    const fil = dataProduct.find((product) => product.id_product == id_product);
    dispatch(filterDataByAmount(fil));
  }

  return (
    <div className="relative">
      <div className="card mt-[9rem] mx-auto py-5 px-5 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container md:px-0">
        <MainCardDetail />
      </div>
      <AllProducts title="Rekomendasi" />
    </div>
  );
};

export default DetailProducts;
