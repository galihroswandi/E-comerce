import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../config/api/api.config";

import Horizontal from "../atoms/Horizontal";
import CardProduct from "../molecules/CardProduct";
// import Product2 from "./../../assets/img/Product2.svg";
import { GetData } from "../../config/redux/actions/Products";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = ({ title }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data)[0];
  const [stateURL, setStateURL] = useState("");

  useEffect(() => {
    setStateURL(url());
    GetData(dispatch);
  }, []);

  return (
    <div className="container mb-20 px-7">
      <div className="title">
        <h1 className="text-2xl text-slate-700 font-medium">{title}</h1>
        <Horizontal width="9rem" />
      </div>
      <section className="products grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 justify-center items-center mt-5">
        {data
          ? data.map((result, key) => {
              return (
                <CardProduct
                  id={result.id_product}
                  image={`${stateURL}/${result.gambar_product}`}
                  title={result.nama_product}
                  kategori={result.nama_kategori}
                  harga={result.harga}
                  key={key}
                />
              );
            })
          : null}
        {/* <CardProduct
          id="2"
          image={Product2}
          title="ASUS ZENBOOK C103"
          kategori="Laptop & PC"
          harga="18.000.000"
        /> */}
      </section>
      <div className="button mt-10 flex justify-center">
        <Link
          to="/all-product"
          className="bg-green-500 py-3 px-5 text-white rounded-3xl font-light hover:shadow-lg hover:-translate-y-[.1rem] transition duration-200"
        >
          Lebih Banyak Product
        </Link>
      </div>
    </div>
  );
};

AllProducts.defaultProps = {
  title: "All Products",
};

export default AllProducts;
