import React from "react";
import { Link } from "react-router-dom";
import FlatDesign from "./../../assets/img/flat-design.png";

const Banner = () => {
  return (
    <div className="mt-[6rem] lg:py-24 py-12 bg-green-500">
      <div className="container flex justify-between items-center">
        <div className="description">
          <h1 className="lg:text-4xl text-3xl font-semibold text-slate-100">
            Shopping
          </h1>
          <h2 className="lg:text-6xl text-5xl font-bold mt-3 text-slate-200 lg:leading-[4.5rem] leading-[3.5rem]">
            Temukan Barang Yang Kamu Inginkan
          </h2>
          <p className="lg:text-xl text-lg mt-5 text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eius perferendis, totam sequi dignissimos quisquam necessitatibus
            adipisci beatae dolorum nemo.
          </p>
          <Link
            href="#all-products"
            className="inline-block mt-5 py-3 px-5 bg-green-300 rounded-lg text-green-700 shadow-md hover:bg-green-400 hover:text-green-800"
          >
            Shop Now
          </Link>
        </div>
        <div className="img hidden lg:block">
          <img src={FlatDesign} alt="Flat Design" width="1500" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
