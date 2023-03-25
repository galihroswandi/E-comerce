import React from "react";

import Horizontal from "../atoms/Horizontal";
import CardProduct from "../molecules/CardProduct";
import Product1 from "./../../assets/img/Product1.svg";
import Product2 from "./../../assets/img/Product2.svg";
import Product3 from "./../../assets/img/Product3.svg";
import Product4 from "./../../assets/img/Product4.svg";
import Product5 from "./../../assets/img/Product5.svg";
import Product6 from "./../../assets/img/Product6.svg";
import Product7 from "./../../assets/img/Product7.svg";
import Product8 from "./../../assets/img/Product8.svg";

const AllProducts = () => {
  return (
    <div className="container mb-20 px-7">
      <div className="title">
        <h1 className="text-2xl text-slate-700 font-medium">All Products</h1>
        <Horizontal width="9rem" />
      </div>
      <section className="products grid grid-cols-2 gap-3 mt-5">
        <CardProduct
          id="1"
          image={Product1}
          title="Asus ROG Strix 1tb Ram 8GB"
          kategori="Laptop & PC"
          harga="30.000.000"
        />
        <CardProduct
          id="2"
          image={Product2}
          title="ASUS ZENBOOK C103"
          kategori="Laptop & PC"
          harga="18.000.000"
        />
        <CardProduct
          id="3"
          image={Product3}
          title="IPhone 14 PROMAX 256GB"
          kategori="Hanphone"
          harga="23.000.000"
        />
        <CardProduct
          id="4"
          image={Product4}
          title="SAMSUNG A531 8/256GB"
          kategori="Handphone"
          harga="3.000.000"
        />
        <CardProduct
          id="5"
          image={Product5}
          title="BAJU WANITA SIMPLE"
          kategori="Fashion"
          harga="80.000"
        />
        <CardProduct
          id="6"
          image={Product6}
          title="Tas Kece"
          kategori="Fashion"
          harga="50.000"
        />
        <CardProduct
          id="7"
          image={Product7}
          title="Pembersih Hidung"
          kategori="Elektronik"
          harga="15.000"
        />
        <CardProduct
          id="8"
          image={Product8}
          title="Kabel Data Type C"
          kategori="Accessoris"
          harga="25.000"
        />
      </section>
    </div>
  );
};

export default AllProducts;
