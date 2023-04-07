import React, { Fragment } from "react";
import Button from "./Button";

const Ringkasan = (props) => {
  return (
    <Fragment>
      <div className="ringkasan mx-2 py-5 px-5 pb-8 box-border bg-white bg-opacity-5 rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container border border-green-500 lg:mt-[5.7rem] lg:py-8 lg:w-[50%]">
        <h1 className="text-xl text-slate-800 mb-4">Ringkasan</h1>
        <div className="desc">
          <p className="text-slate-400 flex justify-between text-base py-3 border-b mb-4">
            Total Harga (Barang 1) <span>Rp30.000.000</span>
          </p>
          <p className="text-slate-800 flex justify-between text-lg mb-8 font-medium">
            Total Bayar <span>Rp150.000.000</span>
          </p>
          <Button />
        </div>
      </div>
    </Fragment>
  );
};

export default Ringkasan;
