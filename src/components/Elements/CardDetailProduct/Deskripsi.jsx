import React from "react";
import { useSelector } from "react-redux";

const Deskripsi = () => {
  const filData = useSelector((state) => state.products.filterData);
  return (
    <p className="text-sm lg:text-base text-slate-500 font-extralight">
      {filData !== undefined && filData.length !== 0 ? filData.deskripsi : null}
    </p>
  );
};

export default Deskripsi;
