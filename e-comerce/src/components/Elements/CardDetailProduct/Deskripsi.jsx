import React from "react";
import { useSelector } from "react-redux";

const Deskripsi = () => {
  const filData = useSelector((state) => state.products.filterData);
  return (
    <p className="text-base text-slate-500 font-extralight">
      {filData.length !== 0 ? filData[0][0].deskripsi : null}
    </p>
  );
};

export default Deskripsi;
