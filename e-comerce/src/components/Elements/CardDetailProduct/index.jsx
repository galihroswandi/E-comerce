import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "./../../../assets/icons/AddCart.svg";
import { url } from "../../../config/api/api.config";
import DescText from "./DescText";
import Counter from "./../Counter";

const MainCardDetail = ({ loading, findData }) => {
  return (
    <div className="mb-3 sm:flex sm:gap-5 md:gap-0 sm:justify-between sm:items-center md:px-10 lg:px-15">
      <div className="img border-b mb-5 sm:border-none mt-10">
        {loading === true ? (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-slate-100 w-full -mt-5 sm:w-[20rem] lg:w-[30rem] p-1 h-[15rem]"></div>
          </div>
        ) : (
          <img
            src={`${url()}/${
              findData.length !== 0 ? findData[0].gambar_product : null
            }`}
            alt="Images"
            className="w-full -mt-5 sm:w-[20rem] lg:w-[30rem] rounded-md border p-2 box-border"
          />
        )}
      </div>
      <div className="desc sm:mr-10 xl:mr-20">
        <h1 className="text-xl text-slate-800 mb-5 font-extralight lg:text-4xl">
          {findData.length !== 0 ? findData[0].nama_product : null}
        </h1>
        <div className="mb-5 lg:mb-7">
          <h2 className="text-xl lg:text-2xl font-extralight text-green-600">
            Rp{findData.length !== 0 ? findData[0].harga : null}
          </h2>
        </div>
        <Counter />
        <DescText use="lg" />
        <div className="footer fixed bg-white bg-opacity-5 backdrop-blur-md bottom-0 z-10 left-0 right-0 py-4 px-7 border-t-2 flex justify-between items-center gap-3 sm:static sm:px-0 sm:gap-0 sm:justify-center lg:gap-2">
          <Link className="bg-green-500 text-white py-2 px-3 rounded-lg text-md font-extralight text-center leading-5 flex justify-center item sm:rounded-none sm:py-[.4rem]">
            <img
              src={CartIcon}
              alt="Cart Icons"
              className="text-white fill-white hidden sm:block lg:hidden"
            />
            <p className="sm:hidden lg:inline-block lg:py-2 lg:px-2">
              Tambah Keranjang
            </p>
          </Link>
          <Link className="text-center border border-green-500 py-2 px-4 rounded-lg text-md font-extralight text-green-500 leading-5 sm:rounded-none">
            <p className="lg:py-[.35rem] lg:px-2">Beli Langsung</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCardDetail;
