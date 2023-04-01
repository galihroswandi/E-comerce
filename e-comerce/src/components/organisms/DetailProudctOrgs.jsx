import React from "react";
import { Link } from "react-router-dom";
import Horizontal from "../atoms/Horizontal";
import AllProducts from "./AllProducts";
import CartIcon from "./../../assets/icons/AddCart.svg";

const DetailProductOrgs = () => {
  return (
    <div className="relative">
      <div className="card mt-[5.7rem] mx-2 py-5 px-5 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8 sm:container">
        <div className="mb-3 sm:flex sm:gap-5 md:gap-0 sm:justify-between sm:items-center md:px-10 lg:px-20">
          <div className="img border-b mb-5 sm:border-none">
            <img
              src="http://127.0.0.1:4000/images/1680099816618-840501158-Product2.png"
              alt="Images"
              className="w-full -mt-5 sm:w-[20rem] lg:w-[30rem]"
            />
          </div>
          <div className="desc sm:mr-10">
            <h1 className="text-xl text-slate-800 mb-8 font-extralight lg:text-4xl">
              ASUS ZENBOOK C103
            </h1>
            <div className="counter w-56 grid grid-cols-2 items-center gap-0 mb-8">
              <div className="title">
                <h4 className="text-slate-800 text-lg mr-5 font-extralight">
                  Kuantitas
                </h4>
              </div>
              <div className="counterChange flex">
                <button className="py-[.13rem] px-2 border-t border-b border-l border-slate-500 text-lg text-slate-800">
                  -
                </button>
                <input
                  type="text"
                  className="border border-slate-500 py-[.13rem] inline-block w-20 text-center text-slate-800"
                  value="1"
                  disabled
                />
                <button className="py-[.13rem] px-2 border-r border-t border-b border-slate-500 text-lg text-slate-800">
                  +
                </button>
              </div>
            </div>
            <div className="descText sm:hidden">
              <h1 className="leading-3 text-xl text-slate-800 font-extralight">
                Detail
              </h1>
              <Horizontal width="4rem" />
              <p className="text-base text-slate-700 mt-3 font-extralight">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus facere voluptates alias cupiditate est rerum aut
                distinctio beatae saepe aperiam!
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
        <div className="descText hidden sm:block">
          <h1 className="leading-3 text-xl text-slate-800 font-extralight">
            Detail
          </h1>
          <Horizontal width="4rem" />
          <p className="text-base text-slate-700 mt-3 font-extralight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            facere voluptates alias cupiditate est rerum aut distinctio beatae
            saepe aperiam!
          </p>
        </div>
      </div>
      <AllProducts title="Rekomendasi" />
    </div>
  );
};

export default DetailProductOrgs;
