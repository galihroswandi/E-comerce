import React, { Fragment, useEffect, useState } from "react";

import Counter from "../../Elements/Counter";
import Ringkasan from "../../Elements/RingkasanCart";
import { getAllCartByUser, removeCart } from "../../../config/cart";
import { url } from "../../../config/api/api.config";
import { useDispatch } from "react-redux";
import { addGlobalCart } from "../../../config/redux/reducer/cartSlice";

const CartProductsOrgs = () => {
  const [dataCart, setDataCart] = useState([]);
  const dispatch = useDispatch();

  const handleChecked = (target) => {
    const allCheckbox = document.querySelectorAll(".checked");
    if (target.target.checked === true) {
      allCheckbox.forEach((e) => (e.checked = true));
    } else {
      allCheckbox.forEach((e) => (e.checked = false));
    }
  };

  const getAllUsers = (id_user) => {
    getAllCartByUser(1).then((res) => {
      setDataCart(res.data.data);
    });
  };

  const handleRemoveCart = async (e) => {
    const id_cart = e.target.dataset.id;
    try {
      await removeCart(id_cart);
      getAllUsers(1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCartByUser(1).then((res) => {
      setDataCart(res.data.data);
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
                className="checked w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
                onChange={(e) => handleChecked(e)}
              />
              <label htmlFor="pilih">Pilih Semua</label>
            </div>
          </div>
          <div className="cart-wrapper -mt-3">
            {dataCart.map((cart, index) => {
              return (
                <div key={index++}>
                  <div className="flex justify-end mt-3">
                    <button
                      data-id={cart.id_cart}
                      className="mr-2 md:-translate-x-20 -translate-x-1 lg:-translate-x-2 font-extralight text-xs text-pink-600"
                      onClick={(e) => handleRemoveCart(e)}
                    >
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
                        src={`${url()}/${cart.gambar_product}`}
                        alt="Product 2"
                        className="w-24 border p-0.5 rounded-md"
                      />
                    </div>
                    <div className="desc2 -ml-10 lg:ml-10 lg:w-full max-w-[50%] w-full sm:w-full">
                      <h2 className="text-slate-700 sm:text-xl sm:mr-3">
                        {cart.nama_product}
                      </h2>
                      <h2 className="font-extralight text-green-600 mt-2 md:text-xl">
                        Rp{cart.harga}
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
                        <div className="w-20 h-8 sm:flex sm:items-center sm:gap-6">
                          <h1 className="text-slate-700 hidden sm:inline-block xl:ml-10 text-[.8rem] font-medium leading-3">
                            Kuantitas
                          </h1>
                          <Counter use="cart" defaultValue={cart.kuantitas} />
                        </div>
                      </div>
                    </div>
                  </div>
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
