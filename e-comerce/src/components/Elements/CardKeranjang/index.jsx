import { React, Fragment } from "react";
import toRupiah from "@develoka/angka-rupiah-js";

import { url } from "../../../config/api/api.config";
import Counter from "../Counter";
import { getAllCartByUser, removeCart } from "../../../config/cart";
import Input from "./InputField";
import Pesan from "./Pesan";
import { useDispatch } from "react-redux";
import { setTotalCart } from "../../../config/redux/reducer/cartSlice";

const CardKeranjang = ({ cartData, getCarts }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = async (e) => {
    const id_cart = e.target.dataset.id;
    try {
      await removeCart(id_cart);
      getCarts(1);
      const res = await getAllCartByUser(1);
      dispatch(setTotalCart(res.data.data.length));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end mt-3">
        <button
          data-id={cartData.id_cart}
          className="mr-2 md:-translate-x-20 -translate-x-1 lg:-translate-x-2 font-extralight text-xs text-pink-600"
          onClick={(e) => handleRemoveCart(e)}
        >
          Hapus
        </button>
      </div>
      <div className="desc flex flex-wrap gap-1 justify-between items-center mt-5 border-y-[.1rem] border-green-500 py-5 xl:py-3 xl:mt-2">
        <div className="desc1 flex justify-center items-center gap-3">
          <Input dataId={cartData.id_cart} />
          <img
            src={`${url()}/${cartData.gambar_product}`}
            alt="Product 2"
            className="w-24 border p-0.5 rounded-md"
          />
        </div>
        <div className="desc2 -ml-10 lg:ml-10 lg:w-full max-w-[50%] w-full sm:w-full">
          <h2 className="text-slate-700 sm:text-xl sm:mr-3">
            {cartData.nama_product}
          </h2>
          <h2 className="font-extralight text-green-600 mt-2 md:text-xl">
            {toRupiah(cartData.harga, { floatingPoint: 0 })}
          </h2>
        </div>
        <div className="desc-3 flex items-center justify-between min-w-full relative">
          <Pesan />
          <div className="w-20 h-8 flex items-center -ml-[20rem] sm:w-[50%] sm:ml-2 md:ml-2 xl:-ml-7 translate-y-5 -translate-x-3">
            <div className="w-20 h-8 sm:flex sm:items-center sm:gap-6">
              <h1 className="text-slate-700 hidden sm:inline-block xl:ml-10 text-[.8rem] font-medium leading-3">
                Kuantitas
              </h1>
              <Counter
                use="cart"
                defaultValue={cartData.kuantitas}
                id_cart={cartData.id_cart}
                getAllCart={() => getCarts()}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardKeranjang;
