import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Elements/Footer";
import Navbar from "../../components/Fragments/Navbar";
import NoPesanan from "./../../assets/img/No Pesanan.svg";
import { useEffect, useState } from "react";
import checkLogin from "../../utils/loginCheck.util";
import { useDispatch, useSelector } from "react-redux";
import { getAllCheckout } from "../../config/checkout";
import toRupiah from "@develoka/angka-rupiah-js";

const Pesanan = () => {
  const [login, setLogin] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkoutData = useSelector((state) => state);
  const [dataCheckout, setDataCheckout] = useState();
  const [statusActive, setStatusActive] = useState("Dikemas");

  const handleSetStatusActive = (status) => {
    setStatusActive(status);
  };

  const handleBatal = async (id) => {
    const data = {
      status: "Dibatalkan",
    };

    const updateData = await updateStatus(id, data);
  };

  useEffect(() => {
    checkLogin().then((res) => {
      setLogin(res);
    }, []);

    checkLogin().then((res) => {
      getAllCheckout(res.uid, dispatch).then((checkout) => {
        setDataCheckout(checkout);
      });
    });
  }, []);

  return login !== undefined && !login.status ? (
    navigate("/")
  ) : (
    <>
      <Navbar />
      <main className="container mt-[9.5rem] mb-10 flex items-start gap-5 mx-auto">
        <section className="bg-white bg-opacity-50 backdrop-blur-sm border border-green-500 py-3 px-5 rounded-md w-full min-h-[40vh] md:min-h-fit overflow-x-hidden">
          <h1 className="text-lg text-slate-700">Pesanan Saya</h1>
          <div className="sidebar flex md:flex-col flex-row md:gap-1.5 gap-x-5 gap-y-2 items-start md:ml-5 md:mt-3 mt-5 border-b border-b-slate-300 pb-1 md:border-none mb-5 max-w-full flex-wrap">
            <Link
              onClick={(e) => handleSetStatusActive("Dikemas", e)}
              className="text-slate-500. text-sm text-slate-800"
            >
              <span className="hidden md:inline-block mb-1 text-green-500">
                Sedang Dikemas
              </span>
              <span className="text-green-500 md:hidden">Dikemas</span>
            </Link>
            <Link
              onClick={() => handleSetStatusActive("Pengiriman")}
              className="text-slate-700 text-sm"
            >
              <span className="hidden md:inline-block text-slate-500 mb-1">
                Dalam Pengiriman
              </span>
              <span className="md:hidden text-slate-500">Dikirim</span>
            </Link>
            <Link
              onClick={() => handleSetStatusActive("Selesai")}
              className="text-slate-700 text-sm"
            >
              <span className="hidden. md:inline-block text-slate-500 mb-1">
                Selesai
              </span>
            </Link>
            <Link
              onClick={() => handleSetStatusActive("Dibatalkan")}
              className="text-slate-700 text-sm"
            >
              <span className="hidden. md:inline-block text-slate-500 mb-1">
                Dibatalkan
              </span>
            </Link>
          </div>
          <section className="md:hidden flex flex-col justify-center items-center mt-1 gap-2">
            {!dataCheckout ? (
              <>
                <section className="h-56 flex flex-col justify-center items-center">
                  <img
                    src={NoPesanan}
                    alt="Icon Default No Pesanan"
                    className="w-16"
                  />
                  <figcaption className="text-sm text-slate-500">
                    Tidak Ada Pesanan
                  </figcaption>
                </section>
              </>
            ) : (
              <>
                {dataCheckout.map((el, index) => {
                  return (
                    el.data.status === statusActive && (
                      <div
                        className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden"
                        key={index}
                      >
                        {el.product.map((prod, indexProd) => {
                          return (
                            <section
                              className="flex items-center gap-3 border-b border-b-green-500 py-2"
                              key={indexProd}
                            >
                              <img
                                src={prod.gambar_product.imgUrl}
                                alt="Product"
                                className="w-[2.5rem] border rounded-md p-[.30rem]"
                              />
                              <div className="keterangan flex flex-col gap-1">
                                <span className="name text-xs text-slate-700">
                                  {prod.nama_product}
                                </span>
                                <span className="price text-xs text-green-500">
                                  {toRupiah(prod.harga, { floatingPoint: 0 })}
                                </span>
                              </div>
                              <span className="text-[.6rem] text-slate-500">
                                (X{el.data.product[indexProd].data.kuantitas})
                              </span>
                            </section>
                          );
                        })}

                        <section className="details py-2 pb-3 border-b border-b-green-500">
                          <div className="mt-3 text-sm w-full flex justify-between text-slate-700">
                            <span>No. Pemesanan</span>{" "}
                            <span className="text-green-600 text-sm">
                              {el.data.id_pesanan}
                            </span>
                          </div>
                          <div className="mt-3 text-sm w-full flex justify-between text-slate-700">
                            <span>Biaya Ongkir</span>{" "}
                            <span className="text-green-600 text-sm">
                              {toRupiah(el.data.hargaPengiriman, {
                                floatingPoint: 0,
                              })}
                            </span>
                          </div>
                          <div className="mt-3 text-sm w-full flex justify-between text-slate-700">
                            <span>Subtotal Product</span>{" "}
                            <span className="text-green-600 text-sm">
                              {toRupiah(el.data.subtotal, {
                                floatingPoint: 0,
                              })}
                            </span>
                          </div>
                          <div className="mt-3 text-sm w-full flex flex-col sm:flex-row justify-between text-slate-700">
                            <span>Metode Pembayaran</span>{" "}
                            <span className="text-green-600 text-sm">
                              {el.data.metodePembayaran}
                            </span>
                          </div>
                        </section>

                        <section className="total mt-2 flex justify-between items-center gap-2">
                          {statusActive === "Pengiriman" ? (
                            <Link className="hidden"></Link>
                          ) : (
                            <>
                              {statusActive === "Selesai" ||
                              statusActive === "Dibatalkan" ? (
                                <Link
                                  to={`/product/${el.product[0].id_product}`}
                                  className="border border-green-500 text-sm py-1 px-5 min-w-max rounded-sm text-green-500 mt-2"
                                >
                                  Beli Lagi
                                </Link>
                              ) : (
                                <button
                                  onClick={() => handleBatal(el.id)}
                                  className="border border-green-500 text-sm py-1 px-5 rounded-sm text-green-500 mt-2"
                                >
                                  Batal
                                </button>
                              )}
                            </>
                          )}
                          <p className="text-slate-700 text-xs">
                            Total :{" "}
                            <span className="text-base text-green-600">
                              {toRupiah(el.data.totalPembayaran, {
                                floatingPoint: 0,
                              })}
                            </span>
                          </p>
                        </section>
                      </div>
                    )
                  );
                })}
              </>
            )}
          </section>
        </section>

        {/* Ukuran Lebih Dari SM */}
        <section className="md:flex md:flex-col md:gap-2.5 hidden border border-green-500 bg-white bg-opacity-50 backdrop-blur-sm p-3 rounded-md min-w-[70%] lg:min-w-[80%] min-h-[40vh]">
          {!dataCheckout ? (
            <>
              <div className="wrapper md:flex md:flex-col md:gap-3 md:justify-center md:items-center min-h-[40vh]">
                <img src={NoPesanan} alt="Icon Default No Pesanan" />
                <figcaption className="text-slate-500">
                  Tidak Ada Pesanan
                </figcaption>
              </div>
            </>
          ) : (
            <>
              {dataCheckout.map((el, index) => {
                {
                  return (
                    el.data.status === statusActive && (
                      <div
                        className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden"
                        key={index}
                      >
                        {el.product.map((prod, indexProd) => {
                          return (
                            <section
                              className="flex items-center gap-4 border-b border-b-green-500 py-2"
                              key={indexProd}
                            >
                              <img
                                src={prod.gambar_product.imgUrl}
                                alt="Product"
                                className="w-[2.5rem]. w-[5rem] border rounded-md p-[.30rem]"
                              />
                              <div className="keterangan flex flex-col gap-1">
                                <span className="name text-lg text-slate-700">
                                  {prod.nama_product}
                                </span>
                                <span className="price text-lg text-green-500">
                                  {toRupiah(prod.harga, { floatingPoint: 0 })}
                                </span>
                              </div>
                              <span className="text-sm text-slate-500">
                                (X{el.data.product[indexProd].data.kuantitas})
                              </span>
                            </section>
                          );
                        })}

                        <section className="details px-3 py-2 pb-3 border-b border-b-green-500">
                          <div className="mt-3 text-base w-full flex justify-between text-slate-700">
                            <span>No. Pemesanan</span>{" "}
                            <span className="text-green-600 text-base">
                              {el.data.id_pesanan}
                            </span>
                          </div>
                          <div className="mt-3 text-base w-full flex justify-between text-slate-700">
                            <span>Biaya Ongkir</span>{" "}
                            <span className="text-green-600 text-base">
                              {toRupiah(el.data.hargaPengiriman, {
                                floatingPoint: 0,
                              })}
                            </span>
                          </div>
                          <div className="mt-3 text-base w-full flex justify-between text-slate-700">
                            <span>Metode Pembayaran</span>{" "}
                            <span className="text-green-600 text-base">
                              {el.data.metodePembayaran}
                            </span>
                          </div>
                          <div className="mt-3 text-base w-full flex justify-between text-slate-700">
                            <span>Subtotal Product</span>{" "}
                            <span className="text-green-600 text-base">
                              {toRupiah(el.data.subtotal, {
                                floatingPoint: 0,
                              })}
                            </span>
                          </div>
                        </section>
                        <section className="total mt-2 flex justify-between items-center gap-2.5">
                          {statusActive === "Pengiriman" ? (
                            <Link className="hidden"></Link>
                          ) : (
                            <>
                              {statusActive === "Selesai" ||
                              statusActive === "Dibatalkan" ? (
                                <Link
                                  to={`/product/${el.product[0].id_product}`}
                                  className="border border-green-500 text-base py-1 px-8 rounded-sm text-green-500 mt-2"
                                >
                                  Beli Lagi
                                </Link>
                              ) : (
                                <button
                                  onClick={() => handleBatal(el.id)}
                                  className="border border-green-500 text-base py-1 px-8 rounded-sm text-green-500 mt-2"
                                >
                                  Batal
                                </button>
                              )}
                            </>
                          )}

                          <p className="text-slate-700 text-base">
                            Total :{" "}
                            <span className="text-xl text-green-600">
                              {toRupiah(el.data.totalPembayaran, {
                                floatingPoint: 0,
                              })}
                            </span>
                          </p>
                        </section>
                      </div>
                    )
                  );
                }
              })}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pesanan;
