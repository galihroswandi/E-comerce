import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toRupiah from "@develoka/angka-rupiah-js";
import { useDispatch, useSelector } from "react-redux";

import DescText from "./DescText";
import { addCart, getAllCartByUser } from "../../../config/cart";
import Counter from "../Counter";
import { setTotalCart } from "./../../../config/redux/reducer/cartSlice";
import checkLogin from "../../../utils/loginCheck.util";

const MainCardDetail = () => {
  const dispatch = useDispatch();
  const globelCounter = useSelector((state) => state.counter.value);
  const dataDetail = useSelector((state) => state.products.filterData);
  const [dataProduct] = useSelector((state) => state.products.data);

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

  const makeNumber = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const handleCartClick = () => {
    const uid = `${makeid(13).toUpperCase()}${new Date().getTime()}${makeid(
      2
    ).toLowerCase()}`;

    const filter = dataProduct.filter(
      (el) => el.id_product === parseInt(id_product) && el
    );

    const hitungHarga = filter[0].harga * globelCounter;

    checkLogin().then((res) => {
      let id_user = !res.uid ? undefined : res.uid;

      if (id_user === undefined) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Anda belum login, Silahkan login terlebih dahulu...",
        });
        return false;
      }

      // Siapkan data untuk di post ke API
      const data = {
        id_cart: makeNumber(12),
        id_product,
        id_user,
        kuantitas: globelCounter,
        tanggal: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}_${new Date().getHours()}:${new Date().getMinutes()}`,
        totalHarga: hitungHarga,
        uid,
      };

      addCart(data, dispatch).then(async (res) => {
        try {
          const res = await getAllCartByUser(id_user);
          dispatch(setTotalCart(res.length));
        } catch (err) {
          console.log(err);
        }

        Swal.fire(
          "Success",
          "1 data berhasil ditambahkan ke keranjang",
          "success"
        );
      });
    });
  };

  return (
    <div className="mb-3 sm:flex sm:gap-5 md:gap-0 sm:justify-between sm:items-center md:px-5 lg:px-[2rem] xl:px-[5rem] py-5 xl:gap-20 lg:gap-10">
      <div className="img mb-5 mt-10 max-w-[50rem]">
        <img
          src={`${
            dataDetail !== undefined && dataDetail.length !== 0
              ? dataDetail.gambar_product.imgUrl
              : null
          }`}
          alt="Images"
          className="w-full -mt-5 sm:w-[20rem] lg:w-[40rem] xl:w-[50rem] border rounded-md p-2 box-border overflow-hidden"
        />
      </div>
      <div className="desc sm:mr-10. xl:mr-20. align-top">
        <h1 className="text-xl text-slate-800 mb-5 font-extralight lg:text-4xl">
          {dataDetail !== undefined && dataDetail.length !== 0
            ? dataDetail.nama_product
            : null}
        </h1>
        <div className="mb-5 lg:mb-7">
          <h2 className="text-xl lg:text-2xl font-extralight text-green-600">
            {dataDetail !== undefined && dataDetail.length !== 0
              ? toRupiah(parseInt(dataDetail.harga), { floatingPoint: 0 })
              : null}
          </h2>
        </div>
        <DescText use="sm" />
        <div className="mb-5">
          <Counter global={true} />
        </div>
        <div
          className="fixed bg-white bg-opacity-5 backdrop-blur-md bottom-0 z-10 left-0 right-0 py-4 px-7 border-t-[.1rem] flex justify-between items-center sm:static sm:px-0 gap-x-2 sm:gap-0 lg:gap-2"
          id="footer-add-cart"
        >
          <button
            className="text-center text-md rounded-sm py-2 font-extralight leading-5 bg-green-500 text-white px-3 flex justify-center item sm:py-[.4rem] min-w-[45%] sm:min-w-0"
            onClick={() => globelCounter > 0 && handleCartClick()}
          >
            <p className="lg:inline-block sm:py-[.18rem] lg:py-2 lg:px-2">
              <span className="hidden sm:hidden lg:inline-block">Tambah</span>
              <span className="lg:hidden">+</span> Keranjang
            </p>
          </button>
          <button className="text-center text-md rounded-sm py-2 font-extralight leading-5 border border-green-500 px-4 text-green-500">
            <p className="lg:py-[.35rem] lg:px-2">Checkout Shopee</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCardDetail;
