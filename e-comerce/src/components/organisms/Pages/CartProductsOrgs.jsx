import React, { Fragment } from "react";

import Product2 from "./../../../assets/img/Product2.svg";
import Trash from "./../../../assets/icons/trash.svg";
import Counter from "../../molecules/DetailProuct/Counter";
import Ringkasan from "./Ringkasan";

const CartProductsOrgs = () => {
  const handleChecked = (target) => {
    const allCheckbox = document.querySelectorAll(".checked");
    if (target.target.checked === true) {
      allCheckbox.forEach((e) => (e.checked = true));
    } else {
      allCheckbox.forEach((e) => (e.checked = false));
    }
  };

  return (
    <Fragment>
      <div className="card-wrapper sm:px-5 md:px-9 lg:flex lg:justify-between lg:w-[100%] items-start gap-4 xl:container mb-8">
        <div className="card mt-[5.7rem] mx-2 py-5 px-5 pb-8 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-5 sm:container xl:px-10 xl:box-border">
          <h1 className="text-xl text-slate-700 font-semibold mt-2">
            Keranjang
          </h1>
          <div className="checked flex justify-between items-center gap-2 mt-5">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="pilih"
                id="pilih"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
                onChange={(e) => handleChecked(e)}
              />
              <label htmlFor="pilih">Pilih Semua</label>
            </div>
          </div>
          <div className="cart-wrapper -mt-3">
            <div>
              <div className="flex justify-end mt-1 -mb-2">
                <button className="mr-2 md:-translate-x-20 -translate-x-1 lg:-translate-x-2 font-extralight text-xs text-pink-600">
                  Hapus
                </button>
              </div>
              <div className="desc flex flex-wrap gap-1 justify-between items-center mt-5 border-y-[.1rem] border-green-500 py-5 xl:py-3 xl:mt-2">
                <div className="desc1 flex justify-center items-center gap-3">
                  <input
                    type="checkbox"
                    name="pilih"
                    id="pilih"
                    className="checked w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
                  />
                  <img
                    src={Product2}
                    alt="Product 2"
                    className="w-24 border p-0.5 rounded-md"
                  />
                </div>
                <div className="desc2 -ml-10 lg:ml-10 lg:max-w-[22rem] xl:max-w-full max-w-[50%] sm:max-w-[22rem]">
                  <h2 className="text-slate-700 sm:text-xl sm:mr-3">
                    Laptop Asus ROG Strix 1 Terabyte RAM 8GB
                  </h2>
                  <h2 className="font-extralight text-green-600 mt-2 md:text-xl">
                    Rp30.000.000
                  </h2>
                </div>
                <div className="desc-3 flex items-center justify-between min-w-full relative">
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
                      className="max-w-[55%] sm:max-w-[60%] py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-sm text-slate-700 ring-1 ring-slate-200 md:max-w-full mr-1"
                    />
                  </div>
                  <div className="w-20 h-8 flex items-center -ml-[20rem] sm:w-[50%] sm:ml-2 md:ml-2 xl:-ml-7 translate-y-5 -translate-x-3">
                    <div className="w-20 h-8 sm:flex sm:items-start sm:gap-6">
                      <h1 className="text-slate-700 hidden sm:inline-block xl:ml-10">
                        Kuantitas
                      </h1>
                      <Counter use="cart" />
                    </div>
                  </div>
                </div>
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
