import React, { Fragment } from "react";

import Product2 from "./../../../assets/img/Product2.svg";
import Trash from "./../../../assets/icons/trash.svg";
import Counter from "../../molecules/DetailProuct/Counter";

const CartProductsOrgs = () => {
  return (
    <Fragment>
      <div className="card mt-[5.7rem] mx-2 py-5 px-5 pb-8 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container">
        <h1 className="text-xl text-slate-700">Keranjang</h1>
        <div className="cart-wrapper">
          <div className="desc flex flex-wrap gap-1 justify-between items-center mt-5 border-y-[.1rem] border-green-500 py-5">
            <div className="des1">
              <img
                src={Product2}
                alt="Product 2"
                className="w-24 border p-0.5 rounded-md"
              />
            </div>
            <div className="desc2 -ml-10">
              <h2 className="text-slate-700 ">Laptop Asus ROG Strix...</h2>
              <h2 className="font-extralight text-green-600 mt-2">
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
                  className="w-28 py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-sm text-slate-700 ring-1 ring-slate-200"
                />
              </div>
              <div className="w-20 h-8 flex items-start. items-center translate-x-1">
                <div className="w-20 h-8">
                  <Counter use="cart" />
                </div>
              </div>
              <button className="mr-2">
                <img src={Trash} alt="hapus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartProductsOrgs;
