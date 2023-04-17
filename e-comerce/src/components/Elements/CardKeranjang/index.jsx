import { React, Fragment } from "react";
import toRupiah from "@develoka/angka-rupiah-js";

import { url } from "../../../config/api/api.config";
import Counter from "../Counter";
import { getAllCartByUser, removeCart } from "../../../config/cart";
import Input from "./InputField";
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
      <div className="flex justify-end mt-2 -mb-2 xl:mb-0">
        <button
          data-id={cartData.id_cart}
          className="mr-2 md:-translate-x-20 -translate-x-1 lg:-translate-x-2 font-extralight text-xs text-pink-600"
          onClick={(e) => handleRemoveCart(e)}
        >
          Hapus
        </button>
      </div>
      <div
        className="desc grid grid-cols-[minmax(4rem,_6rem)_150px] gap-5 justify-between items-center mt-5 border-y-[.1rem] border-green-500 py-3 xl:py-3 xl:mt-2 px-5 "
        id="cart"
      >
        <div className="desc1 flex justify-center items-center gap-3 justify-self-start">
          <Input dataId={cartData.id_cart} />
          <img
            src={`${url()}/${cartData.gambar_product}`}
            alt="Product 2"
            className="w-16. border p-0.5 rounded-md"
          />
        </div>
        <div>
          <h2 className="text-slate-700 text-sm lg:text-base font-extralight sm:mr-3">
            {cartData.nama_product}
          </h2>
          <h2 className="font-extralight text-sm text-green-600 mt-2 lg:text-base">
            {toRupiah(cartData.harga, { floatingPoint: 0 })}
          </h2>
        </div>
        <div
          className="w-[100%] col-start-2 justify-self-end flex flex-col justify-start items-start"
          id="counter"
        >
          <Counter
            use="cart"
            defaultValue={cartData.kuantitas}
            id_cart={cartData.id_cart}
            getAllCart={() => getCarts()}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CardKeranjang;
