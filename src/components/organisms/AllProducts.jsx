import React from "react";

import Horizontal from "../atoms/Horizontal";
import Product1 from "./../../assets/img/Product1.svg";

const AllProducts = () => {
  return (
    <div className="container mb-20 px-7">
      <div className="title">
        <h1 className="text-2xl text-slate-700 font-medium">All Products</h1>
        <Horizontal width="9rem" />
      </div>
      <section className="products grid grid-cols-2 gap-2 mt-5">
        <div className="card bg-white py-2 px-3 box-border rounded-lg shadow-md">
          <div className="img mb-1">
            <img src={Product1} alt="Product 1" />
          </div>
          <div className="desc">
            <h3 className="text-sm text-slate-400">Laptop & PC</h3>
            <h1 className="text-[16px] text-slate-800 my-1">
              Laptop Asus ROG Strix 1Tb Ram 8GB
            </h1>
            <div className="price">
              <span className="text-md text-pink-700 mt-2">Rp30.000.000</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
