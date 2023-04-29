import React from "react";
import { Link } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";
import { findProduct } from "../../../config/products/products";
import { useDispatch, useSelector } from "react-redux";
import { filterDataByAmount } from "../../../config/redux/reducer/ProductsSlice";

const CardProduct = ({ id, image, title, kategori, harga }) => {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.products.data)[0];

  const handleClickProduct = async () => {
    if (dataProduct !== undefined) {
      try {
        const fil = dataProduct.find((product) => product.id_product == id);
        dispatch(filterDataByAmount(fil));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Link onClick={() => handleClickProduct()} to={`/product/${id}`}>
      <div className="card bg-white p-3 md:p-4 box-border rounded-lg shadow-md">
        <div className="img mb-1 md:mb-3 flex justify-center items-center">
          <img src={image} alt={title} className="rounded-md border p-1" />
        </div>
        <div className="desc">
          <h3 className="text-sm text-slate-400 mb-[.1rem]">{kategori}</h3>
          <h1 className="text-[16px] text-slate-800">{title}</h1>
          <div className="price mt-2">
            <span className="text-md text-pink-700">
              {toRupiah(harga, { floatingPoint: 0 })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;