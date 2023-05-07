import { Link } from "react-router-dom";
import Footer from "../../components/Elements/Footer";
import Navbar from "../../components/Elements/Navbar";
import NoPesanan from "./../../assets/img/No Pesanan.svg";

const Pesanan = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-[9.5rem] mb-10 flex items-start gap-5">
        <section className="bg-white bg-opacity-50 backdrop-blur-sm border border-green-500 py-3 px-5 rounded-md w-full min-h-[40vh] md:min-h-fit overflow-x-hidden">
          <h1 className="text-lg text-slate-700">Pesanan Saya</h1>
          <div className="sidebar flex md:flex-col flex-row md:gap-1.5 gap-5 items-start md:ml-5 md:mt-3 mt-5 border-b border-b-slate-300 pb-1 md:border-none mb-5">
            <Link className="text-slate-500. text-sm text-slate-800">
              <span className="hidden md:inline-block mb-1 text-green-500">
                Sedang Dikemas
              </span>
              <span className="text-green-500 md:hidden">Dikemas</span>
            </Link>
            <Link className="text-slate-700 text-sm">
              <span className="hidden md:inline-block text-slate-500 mb-1">
                Dalam Pengiriman
              </span>
              <span className="md:hidden">Dikirim</span>
            </Link>
          </div>
          <section className="md:hidden flex flex-col justify-center items-center mt-1 gap-2">
            {/* <>
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
            </> */}

            <>
              <div className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden">
                <section className="flex items-center gap-3 border-b border-b-green-500 py-2">
                  <img
                    src={NoPesanan}
                    alt="Product"
                    className="w-[2.5rem] border rounded-md p-[.30rem]"
                  />
                  <div className="keterangan flex flex-col gap-1">
                    <span className="name text-xs text-slate-700">
                      Laptop Asus ROG Strix 1 Terabite Ram 8GB
                    </span>
                    <span className="price text-xs text-green-500">
                      Rp30.000.000
                    </span>
                  </div>
                  <span className="text-[.6rem] text-slate-500">(X1)</span>
                </section>
                <section className="total mt-2 flex justify-between items-center gap-2.5">
                  <button className="border border-green-500 text-sm py-1 px-5 rounded-sm text-green-500 mt-2">
                    Batal
                  </button>
                  <p className="text-slate-700 text-xs">
                    Total :{" "}
                    <span className="text-base text-green-600">
                      Rp30.000.000
                    </span>
                  </p>
                </section>
              </div>

              <div className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden">
                <section className="flex items-center gap-3 border-b border-b-green-500 py-2">
                  <img
                    src={NoPesanan}
                    alt="Product"
                    className="w-[2.5rem] border rounded-md p-[.30rem]"
                  />
                  <div className="keterangan flex flex-col gap-1">
                    <span className="name text-xs text-slate-700">
                      Laptop Asus ROG Strix 1 Terabite Ram 8GB
                    </span>
                    <span className="price text-xs text-green-500">
                      Rp30.000.000
                    </span>
                  </div>
                  <span className="text-[.6rem] text-slate-500">(X1)</span>
                </section>
                <section className="total mt-2 flex justify-between items-center gap-2.5">
                  <button className="border border-green-500 text-sm py-1 px-5 rounded-sm text-green-500 mt-2">
                    Batal
                  </button>
                  <p className="text-slate-700 text-xs">
                    Total :{" "}
                    <span className="text-base text-green-600">
                      Rp30.000.000
                    </span>
                  </p>
                </section>
              </div>

              <div className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden">
                <section className="flex items-center gap-3 border-b border-b-green-500 py-2">
                  <img
                    src={NoPesanan}
                    alt="Product"
                    className="w-[2.5rem] border rounded-md p-[.30rem]"
                  />
                  <div className="keterangan flex flex-col gap-1">
                    <span className="name text-xs text-slate-700">
                      Laptop Asus ROG Strix 1 Terabite Ram 8GB
                    </span>
                    <span className="price text-xs text-green-500">
                      Rp30.000.000
                    </span>
                  </div>
                  <span className="text-[.6rem] text-slate-500">(X1)</span>
                </section>
                <section className="total mt-2 flex justify-between items-center gap-2.5">
                  <button className="border border-green-500 text-sm py-1 px-5 rounded-sm text-green-500 mt-2">
                    Batal
                  </button>
                  <p className="text-slate-700 text-xs">
                    Total :{" "}
                    <span className="text-base text-green-600">
                      Rp30.000.000
                    </span>
                  </p>
                </section>
              </div>
            </>
          </section>
        </section>
        <section className="md:flex md:flex-col md:gap-2.5 hidden border border-green-500 bg-white bg-opacity-50 backdrop-blur-sm p-3 rounded-md min-w-[70%] lg:min-w-[80%]">
          {/* <>
            <div className="wrapper md:flex md:flex-col md:gap-3 md:justify-center md:items-center min-h-[40vh]">
              <img src={NoPesanan} alt="Icon Default No Pesanan" />
              <figcaption className="text-slate-500">
                Tidak Ada Pesanan
              </figcaption>
            </div>
          </> */}

          <>
            <div className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden">
              <section className="flex items-center gap-4 border-b border-b-green-500 py-2">
                <img
                  src={NoPesanan}
                  alt="Product"
                  className="w-[2.5rem] border rounded-md p-[.30rem]"
                />
                <div className="keterangan flex flex-col gap-1">
                  <span className="name text-base text-slate-700">
                    Laptop Asus ROG Strix 1 Terabite Ram 8GB
                  </span>
                  <span className="price text-base text-green-500">
                    Rp30.000.000
                  </span>
                </div>
                <span className="text-sm text-slate-500">(X1)</span>
              </section>
              <section className="total mt-2 flex justify-between items-center gap-2.5">
                <button className="border border-green-500 text-base py-1 px-8 rounded-sm text-green-500 mt-2">
                  Batal
                </button>
                <p className="text-slate-700 text-base">
                  Total :{" "}
                  <span className="text-xl text-green-600">Rp30.000.000</span>
                </p>
              </section>
            </div>

            <div className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden">
              <section className="flex items-center gap-4 border-b border-b-green-500 py-2">
                <img
                  src={NoPesanan}
                  alt="Product"
                  className="w-[2.5rem] border rounded-md p-[.30rem]"
                />
                <div className="keterangan flex flex-col gap-1">
                  <span className="name text-base text-slate-700">
                    Laptop Asus ROG Strix 1 Terabite Ram 8GB
                  </span>
                  <span className="price text-base text-green-500">
                    Rp30.000.000
                  </span>
                </div>
                <span className="text-sm text-slate-500">(X1)</span>
              </section>
              <section className="total mt-2 flex justify-between items-center gap-2.5">
                <button className="border border-green-500 text-base py-1 px-8 rounded-sm text-green-500 mt-2">
                  Batal
                </button>
                <p className="text-slate-700 text-base">
                  Total :{" "}
                  <span className="text-xl text-green-600">Rp30.000.000</span>
                </p>
              </section>
            </div>

            <div className="bg-slate-100 w-[100%] wrapper px-2 py-1.5 rounded-md overflow-x-hidden">
              <section className="flex items-center gap-4 border-b border-b-green-500 py-2">
                <img
                  src={NoPesanan}
                  alt="Product"
                  className="w-[2.5rem] border rounded-md p-[.30rem]"
                />
                <div className="keterangan flex flex-col gap-1">
                  <span className="name text-base text-slate-700">
                    Laptop Asus ROG Strix 1 Terabite Ram 8GB
                  </span>
                  <span className="price text-base text-green-500">
                    Rp30.000.000
                  </span>
                </div>
                <span className="text-sm text-slate-500">(X1)</span>
              </section>
              <section className="total mt-2 flex justify-between items-center gap-2.5">
                <button className="border border-green-500 text-base py-1 px-8 rounded-sm text-green-500 mt-2">
                  Batal
                </button>
                <p className="text-slate-700 text-base">
                  Total :{" "}
                  <span className="text-xl text-green-600">Rp30.000.000</span>
                </p>
              </section>
            </div>
          </>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pesanan;
