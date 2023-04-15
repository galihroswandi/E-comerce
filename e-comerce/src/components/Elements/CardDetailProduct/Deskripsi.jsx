import React from "react";
import { useSelector } from "react-redux";

const Deskripsi = () => {
  const filData = useSelector((state) => state.products.filterData);
  return (
    <p className="text-base text-slate-500 font-extralight">
      {filData.length && filData[0].deskripsi}
    </p>
  );
};

export default Deskripsi;
