import React, { Fragment, useEffect } from "react";

import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import Checkout1 from "./../../../assets/ellipse/Checkout-1.svg";
import Pensil from "./../../../assets/icons/Pencil.svg";
import MapIcon from "./../../../assets/icons/map.svg";
import Product1 from "./../../../assets/img/Product8.svg";
import { getAllCheckout } from "../../../config/checkout";

const CheckoutTemplate = () => {
  useEffect(() => {
    getAllCheckout({ id_user: 1 });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="wrapper overflow-hidden">
        <main className="min-h-[100vh] mt-[5rem] mx-2 py-5 box-border mb-8 sm:container md:px-3 lg:px-5 relative">
          <img
            src={Checkout1}
            alt="Ellipse"
            className="w-[4rem] lg:w-[5.5rem] absolute -z-[1] -left-5"
          />
          <h1 className="mx-2 font-semibold text-xl lg:text-2xl text-slate-700 mb-2">
            Checkout
          </h1>
          <section className="address bg-white rounded-sm  px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden mb-5">
            <div className="dashed absolute top-0 right-1 left-1 flex items-center gap-3 w-full">
              <div className="w-1/5 h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-1/5 h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
            </div>
            <h1 className="text-green-500 flex items-center gap-1">
              <img src={MapIcon} alt="Map Icon" className="w-5" />
              <span className="text-base lg:text-xl">Alamat</span>
            </h1>
            <p className="text-slate-600 mt-1 flex justify-between md:justify-start md:gap-5 items-center">
              <span className="flex flex-wrap items-center gap-1 text-sm lg:text-lg">
                Otong Surotong
                <span>+(62) 87897796582</span>
              </span>
              <img
                src={Pensil}
                alt="Pensil Icon"
                title="Ubah"
                className="w-4 cursor-pointer hover:text-green-500"
              />
            </p>
            <p className="flex gap-1 justify-between md:justify-start md:gap-5 items-center mt-2">
              <span className="text-slate-500 text-sm lg:text-lg">
                Bugelan, RT.2/RW.6, Gunungtandala, Kawalu, KOTA TASIKMALAYA
              </span>
              <img
                src={Pensil}
                alt="Pensil Icon"
                title="Ubah"
                className="w-4 cursor-pointer hover:text-green-500"
              />
            </p>
          </section>
          <section className="detail bg-white rounded-sm mb-5 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col md:flex-row lg:grid lg:grid-cols-3 lg:gap-0 gap-2 overflow-hidden">
            <div className="mb-3 md:mb-0 lg:col-span-2 lg:relative">
              <h1 className="text-green-500 flex items-center gap-1">
                <span className="text-base lg:text-xl mb-2 lg:mb-5">
                  Barang Yang Dipesan
                </span>
              </h1>
              <div className="main flex gap-3">
                <img
                  src={Product1}
                  alt="Product 1"
                  className="w-16 lg:w-24 border p-0.5 rounded-md"
                />
                <div className="desc flex flex-col gap-1 text-slate-600">
                  <p className="text-sm sm:text-base lg:text-lg">
                    Laptop Asus ROG Strix 1 Terabite Ram 8GB
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg text-slate-500">
                    Rp. 30.000.000{" "}
                    <span className="lg:absolute lg:right-5 lg:-translate-y-5">
                      (x5)
                    </span>
                  </p>
                </div>
              </div>
              <div className="message mt-2 lg:mt-5">
                <label htmlFor="pesan" className=" flex items-center gap-2">
                  <span className="text-xs sm:text-sm lg:text-lg text-slate-500">
                    Pesan:
                  </span>
                  <input
                    type="text"
                    name="pesan"
                    id="pesan"
                    className="py-1 lg:py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-xs lg:text-sm lg:font-extralight text-slate-700 ring-1 ring-slate-200 md:max-w-full mr-1 max-w-[80%]"
                  />
                </label>
              </div>
              <div className="total flex justify-between items-center border-t border-t-green-500 mt-4 lg:mt-5 lg:text-lg py-2 text-sm text-slate-700">
                <h1>Subtotal:</h1>
                <h1>Rp. 150.011.500</h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:justify-evenly lg:ml-28">
              <div className="opsi-pengiriman">
                <h1 className="text-green-500 flex items-center gap-1">
                  <span className="text-base lg:text-xl mb-2 lg:mb-0">
                    Opsi Pengiriman
                  </span>
                </h1>
                <select
                  name="opsi-pengiriman"
                  id="opsi-pengiriman"
                  className="block px-1.5 py-2.5 w-full text-base text-slate-600 bg-transparent border-0 border-b border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                >
                  <option value="">Pilih Opsi Pengiriman</option>
                  <option value="hemat">Hemat (Rp15.500)</option>
                  <option value="regular">Regular (Rp17.500)</option>
                  <option value="Kargo">Kargo (Rp20.000)</option>
                </select>
              </div>
              <div className="metode-pembayaran mt-5 mb-4">
                <h1 className="text-green-500 flex items-center gap-1">
                  <span className="text-base lg:text-xl mb-2 lg:mb-0">
                    Metode Pembayaran
                  </span>
                </h1>
                <select
                  name="opsi-pengiriman"
                  id="opsi-pengiriman"
                  className="block px-1.5 py-2.5 w-full text-sm text-slate-600 bg-transparent border-0 border-b border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                >
                  <option value="">Pilih Metode Pembayaran</option>
                  <option value="COD">COD (Bayar Ditempat)</option>
                </select>
              </div>
            </div>
          </section>
          <img
            src={Checkout1}
            alt="Ellipse"
            className="w-[3.5rem] lg:w-[5rem] absolute -z-10 top-[69%] sm:top-[66%] md:top-[55%] -right-6 sm:-right-4"
          />

          <section className="rincian-peanan bg-white rounded-sm mb-0 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden">
            <h1 className="text-green-500 flex items-center gap-1">
              <span className="text-base lg:text-xl">Rincian Pesanan</span>
            </h1>
            <div className="main py-3 border-y border-y-green-500">
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Subtotal Product:</p>
                <p>Rp150.000.000</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Total Ongkos Kirim:</p>
                <p>Rp15.500</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Biaya Layanan:</p>
                <p>Rp500</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Total Pembayaran:</p>
                <p className="text-sm lg:text-2xl text-green-500">
                  Rp150.012.000
                </p>
              </div>
            </div>
            <div className="submit flex justify-end gap-2 my-2">
              <button className="text-xs sm:text-sm lg:text-lg border border-green-500 px-5 lg:px-12 py-[.4rem] rounded-sm text-green-500">
                Batal
              </button>
              <button className="text-xs sm:text-sm lg:text-lg border px-5 py-[.4rem] rounded-sm text-green-100 bg-green-500 leading-4">
                Buat Pesanan
              </button>
            </div>
          </section>
          <img
            src={Checkout1}
            alt="Ellipse"
            className="w-[5rem] absolute -z-10 -translate-y-10 -translate-x-10"
          />
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CheckoutTemplate;
