import { Link } from "react-router-dom";
import Footer from "../../components/Elements/Footer";
import Navbar from "../../components/Elements/Navbar";
import NoPesanan from "./../../assets/img/No Pesanan.svg";

const Pesanan = () => {
  return (
    <>
      <Navbar />
      <main className="container min-h-screen mt-[9.5rem] flex items-start gap-5">
        <section className="bg-white bg-opacity-50 backdrop-blur-sm border border-green-500 py-3 px-5 rounded-md w-full min-h-[50vh]">
          <h1 className="text-lg text-slate-700">Pesanan Saya</h1>
          <div className="sidebar flex md:flex-col flex-row md:gap-1.5 gap-5 items-start md:ml-5 md:mt-2 mt-5 border-b border-b-slate-300 pb-1">
            <Link className="text-slate-500. text-sm text-slate-600">
              Dikemas
            </Link>
            <Link className="text-slate-500 text-sm">Dikirim</Link>
          </div>
        </section>
        {/* <section className="border border-green-500 bg-white bg-opacity-50 backdrop-blur-sm py-3 px-5 rounded-md min-w-[80%] min-h-[50vh]">
          <>
            <img src={NoPesanan} alt="Icon Default No Pesanan" />
            <figcaption>Tidak Ada Pesanan</figcaption>
          </>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Pesanan;
