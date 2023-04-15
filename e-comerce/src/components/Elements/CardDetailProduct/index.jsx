import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toRupiah from "@develoka/angka-rupiah-js";
import { useDispatch, useSelector } from "react-redux";

import { url } from "../../../config/api/api.config";
import DescText from "./DescText";
import { addCart, getAllCartByUser } from "../../../config/cart";
import Counter from "../Counter";
import { setTotalCart } from "./../../../config/redux/reducer/cartSlice";

const MainCardDetail = ({ loading }) => {
  const dispatch = useDispatch();
  const globelCounter = useSelector((state) => state.counter.value);
  const dataDetail = useSelector((state) => state.products.filterData);
  const { id_product } = useParams();

  useEffect(() => {
    const button = document.querySelectorAll(".footer button");
    if (globelCounter <= 0) {
      button.forEach((el) => {
        el.classList.add("cursor-not-allowed");
        el.classList.add("opacity-[.8]");
      });
    } else {
      button.forEach((el) => {
        el.classList.remove("cursor-not-allowed");
        el.classList.remove("opacity-[.8]");
      });
    }
  });

  const makeid = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const handleCartClick = () => {
    const uid = `${makeid(2).toUpperCase()}${new Date().getTime()}${makeid(
      2
    ).toLowerCase()}`;

    const data = {
      id_product,
      uid,
      kuantitas: globelCounter,
    };

    addCart(data, dispatch).then(async (res) => {
      try {
        const res = await getAllCartByUser(1);
        dispatch(setTotalCart(res.data.data.length));
      } catch (err) {
        console.log(err);
      }

      Swal.fire(
        "Success",
        "1 data berhasil ditambahkan ke keranjang",
        "success"
      );
    });
  };

  return (
    <div className="mb-3 sm:flex sm:gap-5 md:gap-0 sm:justify-between sm:items-center md:px-5 lg:px-[5rem]">
      <div className="img mb-5 mt-10">
        {loading === true ? (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-slate-100 w-full -mt-5 sm:w-[20rem] lg:w-[30rem] p-1 h-[15rem]"></div>
          </div>
        ) : (
          <img
            src={`${url()}/${
              dataDetail.gambar_product !== "undifined" &&
              dataDetail.gambar_product
            }`}
            alt="Images"
            className="w-full -mt-5 sm:w-[20rem] lg:w-[30rem] border rounded-md p-2 box-border"
          />
        )}
      </div>
      <div className="desc sm:mr-10 xl:mr-20">
        <h1 className="text-xl text-slate-800 mb-5 font-extralight lg:text-4xl">
          {dataDetail.nama_product !== "undefined" && dataDetail.nama_product}
        </h1>
        <div className="mb-5 lg:mb-7">
          <h2 className="text-xl lg:text-2xl font-extralight text-green-600">
            {dataDetail.harga !== "undifined" &&
              toRupiah(parseInt(dataDetail.harga), { floatingPoint: 0 })}
          </h2>
        </div>
        <DescText use="sm" />
        <div className="mb-5">
          <Counter global={true} />
        </div>
        <div className="footer fixed bg-white bg-opacity-5 backdrop-blur-md bottom-0 z-10 left-0 right-0 py-4 px-7 border-t-[.1rem] flex justify-between items-center sm:static sm:px-0 sm:gap-0 lg:gap-2">
          <button
            className="bg-green-500 text-white py-2 px-3 text-md font-extralight text-center leading-5 flex justify-center item sm:py-[.4rem] rounded-sm min-w-[45%] sm:min-w-0"
            onClick={() => globelCounter > 0 && handleCartClick()}
          >
            <p className="lg:inline-block sm:py-[.18rem] lg:py-2 lg:px-2">
              <span className="hidden sm:hidden lg:inline-block">Tambah</span>
              <span className="lg:hidden">+</span> Keranjang
            </p>
          </button>
          <button className="text-center border border-green-500 py-2 rounded-sm px-4 text-md font-extralight text-green-500 leading-5">
            <p className="lg:py-[.35rem] lg:px-2">Beli Langsung</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCardDetail;
