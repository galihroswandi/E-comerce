import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import AllProducts from "./AllProducts";
import { findProduct } from "../../config/products/products";
import MainCardDetail from "../molecules/DetailProuct/MainCardDetail";
import { filterDataByAmount } from "../../config/redux/reducer/ProductsSlice";
import DescText from "../molecules/DetailProuct/DescText";

const DetailProductOrgs = () => {
  const dispatch = useDispatch();

  const { id_product } = useParams();
  const [loading, setLoading] = useState(true);
  const [findData, setFindData] = useState([]);

  useEffect(() => {
    setLoading(true);
    findProduct(id_product).then((res) => {
      setLoading(false);
      setFindData(res[0]);
      dispatch(filterDataByAmount(res[0]));
    });
  }, []);

  return (
    <div className="relative">
      <div className="card mt-[5.7rem] mx-2 py-5 px-5 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container">
        <MainCardDetail findData={findData} loading={loading} />
        <DescText use="sm" />
      </div>
      <AllProducts title="Rekomendasi" />
    </div>
  );
};

export default DetailProductOrgs;
