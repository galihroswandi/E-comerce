import React from "react";
import { useSelector } from "react-redux";

const Deskripsi = () => {
  const filData = useSelector((state) => state.products.filterData);
  return (
    <p className="text-sm lg:text-base text-slate-500 font-extralight">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae
      cumque aspernatur natus itaque autem reprehenderit alias ea praesentium
      quae?
      {filData.deskripsi}
    </p>
  );
};

export default Deskripsi;
