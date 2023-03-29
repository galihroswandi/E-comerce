import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ id, image, title, kategori, harga }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="card bg-white py-2 px-3 box-border rounded-lg shadow-md">
        <div className="img mb-1 md:mb-3 flex justify-center items-center">
          <img src={image} alt={title} />
        </div>
        <div className="desc">
          <h3 className="text-sm text-slate-400 mb-[.1rem]">{kategori}</h3>
          <h1 className="text-[16px] text-slate-800">{title}</h1>
          <div className="price mt-2">
            <span className="text-md text-pink-700">Rp{harga}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
