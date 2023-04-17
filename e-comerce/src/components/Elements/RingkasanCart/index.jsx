import React, { Fragment } from "react";
import Button from "./Button";
import toRupiah from "@develoka/angka-rupiah-js";
import { useSelector } from "react-redux";

const Ringkasan = () => {
  const cartsData = useSelector((state) => state.cartId.carts);

  const totalHarga = cartsData.reduce(
    (total, num) => total + num.total_harga,
    0
  );

  return (
    <Fragment>
      <div className="ringkasan mx-2 py-5 px-5 pb-8 box-border bg-white bg-opacity-5 rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container border border-green-500 lg:mt-[5.7rem] lg:py-8 lg:w-[50%]">
        <h1 className="text-md md:text-lg text-slate-800 mb-4">Ringkasan</h1>
        <div className="desc">
          {cartsData.map((el, index) => {
            return (
              <p
                className="text-slate-400 flex justify-between text-base py-3 border-b mb-4"
                key={index + 1}
              >
                Total Harga (Barang {index + 1}){" "}
                <span>{toRupiah(el.total_harga, { floatingPoint: 0 })}</span>
              </p>
            );
          })}
          <p className="text-slate-800 flex justify-between text-sm md:text-lg mb-8 font-medium">
            Total Bayar{" "}
            <span>{toRupiah(totalHarga, { floatingPoint: 0 })}</span>
          </p>
          <Button />
        </div>
      </div>
    </Fragment>
  );
};

export default Ringkasan;
