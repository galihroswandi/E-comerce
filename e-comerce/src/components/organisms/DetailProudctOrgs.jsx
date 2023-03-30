import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Horizontal from "../atoms/Horizontal";
import AllProducts from "./AllProducts";

const DetailProductOrgs = () => {
  return (
    <Fragment className="relative">
      <div className="card mt-[5.7rem] mx-2 py-5 px-5 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-8">
        <div className="img border-b mb-5">
          <img
            src="http://127.0.0.1:4000/images/1680099816618-840501158-Product2.png"
            alt="Images"
            className="w-full -mt-5"
          />
        </div>
        <div className="desc">
          <h1 className="text-xl text-slate-800 mb-8 font-extralight">
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
          <div className="descText">
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
        </div>
        <div className="footer fixed bg-white bottom-0 z-10 left-0 right-0 py-4 px-7 border-t-2 flex justify-between items-center">
          <Link className="bg-green-500 text-white py-2 px-3 rounded-lg text-md font-extralight text-center">
            Masukan Keranjang
          </Link>
          <Link className="text-center border border-green-500 py-2 px-4 rounded-lg text-md font-extralight text-green-500">
            Beli Langsung
          </Link>
        </div>
      </div>
      <AllProducts title="Rekomendasi" />
    </Fragment>
  );
};

export default DetailProductOrgs;
