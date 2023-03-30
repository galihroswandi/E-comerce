import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../config/api/api.config";
import { getProducts } from "../../config/products/products";

import Horizontal from "../atoms/Horizontal";
import CardProduct from "../molecules/CardProduct";
import Product2 from "./../../assets/img/Product2.svg";

const AllProducts = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [stateURL, setStateURL] = useState("");

  const getProductsFromAPI = () => {
    getProducts().then((res) => {
      setProducts(res.data.data);
    });
  };

  useEffect(() => {
    getProductsFromAPI();
    setStateURL(url());
  }, []);

  return (
    <div className="container mb-20 px-7">
      <div className="title">
        <h1 className="text-2xl text-slate-700 font-medium">{title}</h1>
        <Horizontal width="9rem" />
      </div>
      <section className="products grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 justify-center items-center mt-5">
        {products.map((result, key) => {
          return (
            <CardProduct
              id={result.id_product}
              image={`${stateURL}/${result.gambar}`}
              title={result.nama_product}
              kategori={result.kategori}
              harga={result.harga}
              key={key}
            />
          );
        })}
        <CardProduct
          id="2"
          image={Product2}
          title="ASUS ZENBOOK C103"
          kategori="Laptop & PC"
          harga="18.000.000"
        />
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
