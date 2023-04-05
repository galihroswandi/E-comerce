import React, { Fragment } from "react";

import Product2 from "./../../../assets/img/Product2.svg";
import Trash from "./../../../assets/icons/trash.svg";
import Counter from "../../molecules/DetailProuct/Counter";
import Ringkasan from "./Ringkasan";

const CartProductsOrgs = () => {
  return (
    <Fragment>
      <div className="card-wrapper sm:px-5 md:px-9 lg:flex lg:justify-between lg:w-[100%] items-start gap-4 xl:container mb-8">
        <div className="card mt-[5.7rem] mx-2 py-5 px-5 pb-8 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-5 sm:container xl:px-10 xl:box-border">
          <h1 className="text-xl text-slate-700 font-semibold">Keranjang</h1>
          <div className="cart-wrapper">
            <div className="desc flex flex-wrap gap-1 justify-between items-center mt-5 border-y-[.1rem] border-green-500 py-5 xl:py-3 xl:mt-2">
              <div className="des1">
                <img
                  src={Product2}
                  alt="Product 2"
                  className="w-24 border p-0.5 rounded-md"
                />
              </div>
              <div className="desc2 -ml-10 lg:ml-10 lg:max-w-[22rem] xl:max-w-full max-w-[12rem] sm:max-w-[22rem]">
                <h2 className="text-slate-700 sm:text-xl sm:mr-3">
                  Laptop Asus ROG Strix 1 Terabyte RAM 8GB
                </h2>
                <h2 className="font-extralight text-green-600 mt-2 md:text-xl">
                  Rp30.000.000
                </h2>
              </div>
              <div className="desc-3 flex items-center justify-between min-w-full ">
                <div className="pesan flex flex-col mt-5">
                  <label htmlFor="pesan" className="text-slate-700">
                    Pesan:
                  </label>
                  <input
                    type="text"
                    name="pesan"
                    id="pesan"
                    autoComplete="off"
                    placeholder="Type here..."
                    className="max-w-[80%] py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-sm text-slate-700 ring-1 ring-slate-200 md:max-w-full"
                  />
                </div>
                <div className="w-20 h-8 flex items-center -ml-10 sm:w-[50%] sm:ml-2 md:ml-2 xl:-ml-7">
                  <div className="w-20 h-8 sm:flex sm:items-start sm:gap-6">
                    <h1 className="text-slate-700 hidden sm:inline-block xl:ml-10">
                      Kuantitas
                    </h1>
                    <Counter use="cart" />
                  </div>
                </div>
                <button className="mr-2 md:-translate-x-20 translate-x-1 lg:-translate-x-2">
                  <img src={Trash} alt="hapus" />
                </button>
              </div>
            </div>
            <div className="desc flex flex-wrap gap-1 justify-between items-center mt-5 border-b border-green-500 py-5 xl:py-3 xl:mt-2">
              <div className="des1">
                <img
                  src={Product2}
                  alt="Product 2"
                  className="w-24 border p-0.5 rounded-md"
                />
              </div>
              <div className="desc2 -ml-10 lg:ml-10 lg:max-w-[22rem] xl:max-w-full max-w-[12rem] sm:max-w-[22rem]">
                <h2 className="text-slate-700 sm:text-xl sm:mr-3">
                  Laptop Asus ROG Strix 1 Terabyte RAM 8GB
                </h2>
                <h2 className="font-extralight text-green-600 mt-2 md:text-xl">
                  Rp30.000.000
                </h2>
              </div>
              <div className="desc-3 flex items-center justify-between min-w-full ">
                <div className="pesan flex flex-col mt-5">
                  <label htmlFor="pesan" className="text-slate-700">
                    Pesan:
                  </label>
                  <input
                    type="text"
                    name="pesan"
                    id="pesan"
                    autoComplete="off"
                    placeholder="Type here..."
                    className="max-w-[80%] py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-sm text-slate-700 ring-1 ring-slate-200 md:max-w-full"
                  />
                </div>
                <div className="w-20 h-8 flex items-center -ml-10 sm:w-[50%] sm:ml-2 md:ml-2 xl:-ml-7">
                  <div className="w-20 h-8 sm:flex sm:items-start sm:gap-6">
                    <h1 className="text-slate-700 hidden sm:inline-block xl:ml-10">
                      Kuantitas
                    </h1>
                    <Counter use="cart" />
                  </div>
                </div>
                <button className="mr-2 md:-translate-x-20 translate-x-1 lg:-translate-x-2">
                  <img src={Trash} alt="hapus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Ringkasan />
      </div>
    </Fragment>
  );
};

export default CartProductsOrgs;
