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
