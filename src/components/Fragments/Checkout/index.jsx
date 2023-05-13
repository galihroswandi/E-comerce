import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toRupiah from "@develoka/angka-rupiah-js";

import Checkout1 from "./../../../assets/ellipse/Checkout-1.svg";
import { addCheckout } from "../../../config/checkout";
import Address from "../../Elements/Address";
import checkLogin from "./../../../utils/loginCheck.util";
import { getAllCartByUser, removeCart } from "../../../config/cart";
import { getProducts } from "../../../config/products/products";
import { Link, useNavigate } from "react-router-dom";
import { makeId } from "../../../utils/generateId.util";
import { Toaster, toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import Swal from "sweetalert2";

const CheckoutTemplate = ({ changeCheckout }) => {
  const data = useSelector((state) => state.checkout.data);
  const dataKeranjang = useSelector((state) => state.cart.carts);
  const navigate = useNavigate();

  const [ongkir, setOngkir] = useState(0);
  const [metodePembayaran, setMetodePembayaran] = useState();
  const [biayaLayanan] = useState(500);
  const [dataCarts, setDataCarts] = useState([]);
  const [loading, setLoading] = useState(false);

  const hapusDataKeranjang = () => {
    dataKeranjang.forEach(async (el) => {
      await removeCart(el.id);
    });
    Swal.fire("Success", "Pesnan berhasil dibuat", "success").finally(() => {
      setLoading(false);
      setTimeout(() => {
        navigate("/pesanan");
      }, 1100);
    });
  };

  const handleCheckout = async () => {
    setLoading(true);
    const user = await checkLogin();

    const data = {
      id_pesanan: "IBRSHOP" + makeId(17).toUpperCase() + new Date().getTime(),
      id_user: user.uid,
      products: dataKeranjang,
      hargaPengiriman: ongkir,
      metodePembayaran,
      subtotal: hitungTotal(),
      totalPembayaran: hitungTotalPembayaran(),
      status: "Dikemas",
    };

    hapusDataKeranjang();

    const postData = await addCheckout(data);
    if (!postData) {
      toast.error("Pesanan gagal dibuat");
      setLoading(false);
    } else {
      hapusDataKeranjang();
    }
  };

  const hitungTotal = () => {
    return dataKeranjang.length >= 1
      ? dataKeranjang
          .map((checkout) => checkout.data.totalHarga)
          .reduce((acc, currentVal) => acc + currentVal)
      : 0;
  };

  const hitungTotalPembayaran = () => {
    return parseInt(ongkir) + parseInt(biayaLayanan) + parseInt(hitungTotal());
  };

  useEffect(() => {
    checkLogin().then((user) => {
      getAllCartByUser(user.uid).then((result) => {
        setDataCarts(result);
      });
    });
  }, []);

  return (
    <Fragment>
      <div className="wrapper overflow-hidden">
        <Toaster toastOptions={{ duration: 4000 }} />
        <main className="min-h-[100vh] mt-[7rem] mx-auto py-5 box-border mb-8 sm:container md:px-3 lg:px-5 relative">
          <img
            src={Checkout1}
            alt="Ellipse"
            className="w-[4rem] lg:w-[5.5rem] absolute -z-[1] -left-5"
          />
          <h1 className="mx-2 font-semibold text-xl lg:text-2xl text-slate-700 mb-2">
            Checkout
          </h1>
          <Address />
          <section className="detail bg-white rounded-sm mb-5 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col md:flex-row lg:grid lg:grid-cols-3 lg:gap-0 gap-2 overflow-hidden">
            <div className="mb-3 md:mb-0 lg:col-span-2 lg:relative">
              <h1 className="text-green-500 flex items-center gap-1">
                <span className="text-base lg:text-xl mb-2 lg:mb-5">
                  Barang Yang Dipesan
                </span>
              </h1>
              <div className="main-products">
                {!dataKeranjang
                  ? "Data gagal di load..."
                  : dataKeranjang.map((ch, index) => {
                      return (
                        <div key={index}>
                          <ProductCheckout dataCheckout={ch} />
                        </div>
                      );
                    })}
              </div>
              <div className="total flex justify-between items-center border-t. border-t-green-500. mt-2 lg:mt-5 lg:text-lg text-sm text-slate-700">
                <h1>Subtotal:</h1>
                <h1>{dataCarts && toRupiah(hitungTotal())}</h1>
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
                  onChange={(e) => setOngkir(e.target.value)}
                  className="block px-1.5 py-2.5 w-full text-base text-slate-600 bg-transparent border-0 border-b border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                >
                  <option value="">Pilih Opsi Pengiriman</option>
                  <option value="15500">Hemat (Rp15.500)</option>
                  <option value="17500">Regular (Rp17.500)</option>
                  <option value="20000">Kargo (Rp20.000)</option>
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
                  onChange={(e) => setMetodePembayaran(e.target.value)}
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
                <p>{data && toRupiah(hitungTotal(), { floatingPoint: 0 })}</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Total Ongkos Kirim:</p>
                <p>{toRupiah(ongkir, { floatingPoint: 0 })}</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Biaya Layanan:</p>
                <p>{toRupiah(biayaLayanan, { floatingPoint: 0 })}</p>
              </div>
              <div className="rincian1 flex justify-between items-center px-1 text-xs sm:text-sm lg:text-base text-slate-600 font-extralight mb-2">
                <p className="lg:ml-[65%]">Total Pembayaran:</p>
                <p className="text-sm lg:text-2xl text-green-500">
                  {data &&
                    toRupiah(hitungTotalPembayaran(), { floatingPoint: 0 })}
                </p>
              </div>
            </div>
            <div className="submit flex justify-end gap-2 my-2">
              <Link
                onClick={() => changeCheckout(false)}
                className="text-xs sm:text-sm lg:text-lg border border-green-500 px-5 lg:px-12 py-[.4rem] rounded-sm text-green-500"
              >
                Batal
              </Link>
              <button
                onClick={handleCheckout}
                className="text-xs sm:text-sm lg:text-lg border px-5 py-[.4rem] rounded-sm text-green-100 bg-green-500 leading-4"
              >
                <span className="flex items-center gap-1">
                  {loading && <CgSpinner size={20} className=" animate-spin" />}
                  Buat Pesanan
                </span>
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
    </Fragment>
  );
};

const ProductCheckout = (props) => {
  const { dataCheckout } = props;

  const dispatch = useDispatch();

  const [data, setData] = useState();

  const filterProductWhereId = async (id_product) => {
    try {
      const res = await getProducts(dispatch);
      const [filteredProducts] = res.filter(
        (el) => el.id_product === parseInt(id_product)
      );
      setData(filteredProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    filterProductWhereId(dataCheckout.data.id_product);
  }, []);

  return !dataCheckout || !data ? (
    <></>
  ) : (
    <div className="border-b border-b-green-500 mb-4">
      <div className="main flex gap-3 mt-1">
        <img
          src={`${data.gambar_product.imgUrl}`}
          alt={data.nama_product}
          className="w-16 lg:w-24 border p-0.5 rounded-md"
        />
        <div className="desc flex flex-col gap-1 text-slate-600">
          <p className="text-sm sm:text-base lg:text-lg">{data.nama_product}</p>
          <small>{data.deskripsi}</small>
          <p className="text-xs sm:text-sm lg:text-lg text-slate-500">
            {toRupiah(data.harga, {
              floatingPoint: 0,
            })}
            <span className="lg:absolute lg:right-5 lg:-translate-y-5">
              (x{dataCheckout.data.kuantitas})
            </span>
          </p>
        </div>
      </div>
      <div className="message mt-2 mb-5 lg:mt-5">
        <label htmlFor="pesan" className=" flex items-center gap-2">
          <span className="text-xs sm:text-sm lg:text-lg text-slate-500">
            Pesan:
          </span>
          <input
            type="text"
            name="pesan"
            id="pesan"
            placeholder={dataCheckout.pesan}
            className="py-1 lg:py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-xs lg:text-sm lg:font-extralight text-slate-700 ring-1 ring-slate-200 md:max-w-full mr-1 max-w-[80%]"
          />
        </label>
      </div>
    </div>
  );
};

export default CheckoutTemplate;
