import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Horizontal from "../atoms/Horizontal";
import AllProducts from "./AllProducts";
import { findProduct } from "../../config/products/products";
import MainCardDetail from "../molecules/DetailProuct/MainCardDetail";

const DetailProductOrgs = () => {
  const { id_product } = useParams();
  const [loading, setLoading] = useState(true);
  const [findData, setFindData] = useState([]);

  useEffect(() => {
    setLoading(true);
    findProduct(id_product).then((res) => {
      setLoading(false);
      setFindData(res[0]);
    });
  }, []);

  return (
    <div className="relative">
      <div className="card mt-[5.7rem] mx-2 py-5 px-5 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container">
        <MainCardDetail findData={findData} loading={loading} />
        <div className="descText hidden sm:block sm:mb-5 sm:mx-10">
          <h1 className="leading-3 text-xl text-slate-800 font-extralight">
            Detail
          </h1>
          <Horizontal width="4rem" />
          <p className="text-base text-slate-700 mt-3 font-extralight">
            {findData.length !== 0 ? findData[0].deskripsi : null}
          </p>
        </div>
      </div>
      <AllProducts title="Rekomendasi" />
    </div>
  );
};

export default DetailProductOrgs;
