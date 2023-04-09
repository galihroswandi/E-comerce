import React, { Fragment, useEffect, useState } from "react";

import Ringkasan from "../../Elements/RingkasanCart";
import { getAllCartByUser } from "../../../config/cart";
import CardKeranjang from "../../Elements/CardKeranjang";

const CartProductsOrgs = () => {
  const [dataCart, setDataCart] = useState([]);
  const [dataRingkas, setDataRingkas] = useState([]);

  const handleAllChecked = (target) => {
    const allCheckbox = document.querySelectorAll(".checked");
    if (target.target.checked === true) {
      allCheckbox.forEach((e) => (e.checked = true));
    } else {
      allCheckbox.forEach((e) => (e.checked = false));
    }
  };

  const getAllCarts = (id_user) => {
    getAllCartByUser(1).then((res) => {
      setDataCart(res.data.data);
    });
  };

  useEffect(() => {
    getAllCartByUser(1).then((res) => {
      setDataCart(res.data.data);
      const allCheckbox = document.querySelectorAll(".checked");
      allCheckbox.forEach((e) => (e.checked = true));
    });
  }, []);

  return (
    <Fragment>
      <div className="card-wrapper sm:px-5 md:px-9 lg:flex lg:justify-between lg:w-[100%] items-start gap-4 xl:container mb-8">
        <div className="card mt-[5.7rem] mx-2 py-5 px-5 pb-8 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-5 sm:container xl:px-10 xl:box-border">
          <h1 className="text-xl text-slate-700 font-semibold mt-2">
            Keranjang
          </h1>
          <div className="flex justify-between items-center gap-2 mt-5">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="pilih"
                id="pilih"
                className="checked parent-checked w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
                onChange={(e) => handleAllChecked(e)}
              />
              <label htmlFor="pilih">Pilih Semua</label>
            </div>
          </div>
          <div className="cart-wrapper -mt-3">
            {dataCart.map((cart, index) => {
              return (
                <div className="cart-wrapper" key={index}>
                  <CardKeranjang
                    getCarts={() => getAllCarts()}
                    cartData={cart}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Ringkasan data_cart={dataCart} />
      </div>
    </Fragment>
  );
};

export default CartProductsOrgs;
