import React, { Fragment } from "react";

import Navbar from "../../Elements/Navbar";
import Footer from "../../Elements/Footer";
import Checkout1 from "./../../../assets/ellipse/Checkout-1.svg";
import Pensil from "./../../../assets/icons/Pencil.svg";
import MapIcon from "./../../../assets/icons/map.svg";
import Product1 from "./../../../assets/img/Product8.svg";

const CheckoutTemplate = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="wrapper overflow-hidden">
        <main className="min-h-[100vh] mt-[5rem] mx-2 py-5 box-border mb-8 sm:container md:px-0 relative">
          <img
            src={Checkout1}
            alt="Ellipse"
            className="w-[4rem] absolute -z-[1] -left-5"
          />
          <h1 className="mx-2 font-semibold text-xl text-slate-700 mb-2">
            Checkout
          </h1>
          <section className="address bg-white rounded-sm  px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden mb-5">
            <div className="dashed absolute top-0 right-1 left-1 flex items-center gap-3">
              <div className="w-[2rem] h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
              <div className="w-[2rem] h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
            </div>
            <h1 className="text-green-500 flex items-center gap-1">
              <img src={MapIcon} alt="Map Icon" className="w-5" />
              <span className="text-base">Alamat</span>
            </h1>
            <p className="text-slate-600 mt-1 flex justify-between items-center">
              <span className="flex flex-col gap-1 text-sm">
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
            <p className="flex gap-1">
              <span className="text-slate-500 text-sm">
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
          <section className="detail bg-white rounded-sm mb-5 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden">
            <h1 className="text-green-500 flex items-center gap-1">
              <span className="text-base mb-2">Barang Yang Dipesan</span>
            </h1>
            <div className="main flex gap-3">
              <img
                src={Product1}
                alt="Product 1"
                className="w-16 border p-0.5 rounded-md"
              />
              <div className="desc flex flex-col gap-1 text-slate-600">
                <p className="text-sm">
                  Laptop Asus ROG Strix 1 Terabite Ram 8GB
                </p>
                <p className="text-xs">Rp. 30.000.000 (x5)</p>
              </div>
            </div>
            <div className="message mt-2">
              <label htmlFor="pesan" className=" flex items-center gap-2">
                <span className="text-xs text-slate-500">Pesan:</span>
                <input
                  type="text"
                  name="pesan"
                  id="pesan"
                  className="py-1 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-xs text-slate-700 ring-1 ring-slate-200 md:max-w-full mr-1 max-w-[80%]"
                />
              </label>
            </div>
            <div className="total flex justify-between items-center border-t border-t-green-500 mt-2 py-1 text-sm text-slate-700">
              <h1>Subtotal:</h1>
              <h1>Rp. 150.011.500</h1>
            </div>
            <div className="opsi-pengiriman mt-5">
              <h1 className="text-green-500 flex items-center gap-1">
                <span className="text-base mb-2">Opsi Pengiriman</span>
              </h1>
              <select
                name="opsi-pengiriman"
                id="opsi-pengiriman"
                className="block px-1.5 py-2.5 w-full text-sm text-slate-600 bg-transparent border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
              >
                <option value="">Pilih Opsi Pengiriman</option>
                <option value="hemat">Hemat (Rp15.500)</option>
                <option value="regular">Regular (Rp17.500)</option>
                <option value="Kargo">Kargo (Rp20.000)</option>
              </select>
            </div>
            <div className="metode-pembayaran mt-5 mb-4">
              <h1 className="text-green-500 flex items-center gap-1">
                <span className="text-base mb-2">Metode Pembayaran</span>
              </h1>
              <select
                name="opsi-pengiriman"
                id="opsi-pengiriman"
                className="block px-1.5 py-2.5 w-full text-sm text-slate-600 bg-transparent border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
              >
                <option value="">Pilih Metode Pembayaran</option>
                <option value="COD">COD (Bayar Ditempat)</option>
              </select>
            </div>
          </section>
          <img
            src={Checkout1}
            alt="Ellipse"
            className="w-[3.5rem] absolute -z-10 top-[69%] -right-6"
          />

          <section className="rincian-peanan bg-white rounded-sm mb-0 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden">
            <h1 className="text-green-500 flex items-center gap-1">
              <span className="text-base">Rincian Pesanan</span>
            </h1>
            <div className="main py-3 border-y border-y-green-500">
              <div className="rincian1 flex justify-between items-center px-1 text-xs text-slate-600 font-extralight mb-2">
                <p>Subtotal Product:</p>
                <p>Rp150.000.000</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs text-slate-600 font-extralight mb-2">
                <p>Total Ongkos Kirim:</p>
                <p>Rp15.500</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs text-slate-600 font-extralight mb-2">
                <p>Biaya Layanan:</p>
                <p>Rp500</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs text-slate-600 font-extralight mb-2">
                <p>Total Pembayaran:</p>
                <p className="text-sm text-green-500">Rp150.012.000</p>
              </div>
            </div>
            <div className="submit flex justify-end gap-2 mb-2">
              <button className="text-xs border border-green-500 px-5 py-[.4rem] rounded-sm text-green-500">
                Batal
              </button>
              <button className="text-xs border px-5 py-[.4rem] rounded-sm text-green-100 bg-green-500 leading-4">
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
