import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Hr from "./../../Elements/Hr";
import CardProduct from "../../Elements/CardProduct";
import { getProducts } from "../../../config/products/products";

const AllProducts = ({ title }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data)[0];

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <div className="container mb-20 px-7">
      <div className="title">
        <h1 className="text-lg md:text-2xl text-slate-700 font-medium">
          {title}
        </h1>
        <Hr width="9rem" />
      </div>
      <form
        // className="search flex justify-center items-center min-w-full my-12 mb-16"
        className="w-full flex justify-center items-center my-6 mb-9"
      >
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Cari product..."
          className="max-w-[75%] py-1 px-2 text-xs rounded-l-md border border-green-500 outline-none text-slate-700"
          // className="my-1 py-2 px-4 max-w-[50%] w-[40%] rounded-l-md border border-green-500 outline-none text-slate-700 placeholder:text-base placeholder:font-extralight placeholder:text-slate-300"
        />
        <button
          type="submit"
          // className="bg-green-500 py-[.55rem] px-3 rounded-r-md text-white"
        >
          Search
        </button>
      </form>
      <section
        className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 justify-center items-center mt-5"
        id="product-wrapper"
      >
        {data
          ? data.map((result, key) => {
              return (
                <CardProduct
                  id={result.id_product}
                  image={`${result.gambar_product.imgUrl}`}
                  title={result.nama_product}
                  kategori={result.nama_kategori}
                  harga={result.harga}
                  key={key}
                />
              );
            })
          : null}
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
