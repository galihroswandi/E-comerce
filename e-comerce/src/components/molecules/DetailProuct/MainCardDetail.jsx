import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Horizontal from "../../atoms/Horizontal";
import CartIcon from "./../../../assets/icons/AddCart.svg";
import { url } from "../../../config/api/api.config";
import {
  incrementByAmont,
  decrementByAmount,
} from "../../../config/redux/reducer/counterSlice";
import { findData } from "../../../config/redux/actions/Products";

const MainCardDetail = ({ loading, findData }) => {
  const { id_product } = useParams();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
            className="w-full -mt-5 sm:w-[20rem] lg:w-[30rem] rounded-md border p-1 shadow-md"
          />
        )}
      </div>
      <div className="desc sm:mr-10 xl:mr-20">
        <h1 className="text-xl text-slate-800 mb-8 font-extralight lg:text-4xl">
          {findData.length !== 0 ? findData[0].nama_product : null}
        </h1>
        <div className="counter w-56 grid grid-cols-2 items-center gap-0 mb-8">
          <div className="title">
            <h4 className="text-slate-800 text-lg mr-5 font-extralight">
              Kuantitas
            </h4>
          </div>
          <div className="counterChange flex">
            <button
              className="px-1 py-[0] md:px-2 border-t border-b border-l border-slate-500 text-lg text-slate-800 font-extralight"
              onClick={count > 1 ? () => dispatch(decrementByAmount(1)) : null}
            >
              -
            </button>
            <input
              type="text"
              className="border border-slate-500 sm:py-[0] py-[0] inline-block w-20 text-center text-slate-800 font-extralight max-w-[3rem]"
              value={count}
              disabled
              autoComplete="off"
            />
            <button
              className="md:px-2 py-[0] px-1 border-r border-t border-b border-slate-500 text-lg text-slate-800 font-extralight"
              onClick={() => dispatch(incrementByAmont(1))}
            >
              +
            </button>
          </div>
        </div>
        <div className="message mb-8">
          <input
            type="text"
            placeholder="Pesan Untuk Penjual..."
            name="pesan"
            className="text-md font-extralight py-2 px-3 placeholder:text-sm border focus:border-green-500 rounded-md text-slate-600 focus:outline-none"
          />
        </div>
        <div className="descText sm:hidden">
          <h1 className="leading-3 text-xl text-slate-800 font-extralight">
            Detail
          </h1>
          <Horizontal width="4rem" />
          <p className="text-base text-slate-700 mt-3 font-extralight">
            {findData.length !== 0 ? findData[0].deskripsi : null}
          </p>
        </div>
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
