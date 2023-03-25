import { Link } from "react-router-dom";
import Facebook from "./../../assets/icons/facebook.svg";
import Instagram from "./../../assets/icons/instagram.svg";
import Twitter from "./../../assets/icons/twitter.svg";
import Email from "./../../assets/icons/email.svg";
import Ellipse from "./../../assets/img/ellipse.svg";

const Footer = () => {
  return (
    <div className="min-h-[20rem] bg-gradient-to-r from-[#DCFCE7] to-white shadow-[-1rem_0_60px_1rem_rgba(15, 23, 42,0.3)] py-10 px-10 relative box-border overflow-x-hidden">
      <section className="brand mb-10">
        <h1 className="text-3xl font-semibold text-green-500 mb-1">Shopping</h1>
        <p className="text-base font-ligh text-green-400">
          Copyright &copy; 2023
        </p>
      </section>
      <section className="inform-1 flex flex-col mb-5">
        <h1 className="text-2xl font-semibold text-green-500 mb-3">Shopping</h1>
        <Link className="text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-1">
          Kategori
        </Link>
        <Link className="text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-1">
          Produk
        </Link>
        <Link className="text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-1">
          Tentang Kami
        </Link>
      </section>
      <section className="kontak">
        <h1 className="text-2xl font-semibold text-green-500 mb-3">Kontak</h1>
        <Link
          to=""
          target="_blank"
          className="flex gap-2 text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-2"
        >
          <img src={Facebook} alt="Facebook" /> <span>Facebook</span>
        </Link>
        <Link
          to=""
          target="_blank"
          className="flex gap-2 text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-2"
        >
          <img src={Instagram} alt="Instagram" /> <span>Instagram</span>
        </Link>
        <Link
          to=""
          target="_blank"
          className="flex gap-2 text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-2"
        >
          <img src={Twitter} alt="Twitter" /> <span>Twitter</span>
        </Link>
        <Link
          to=""
          target="_blank"
          className="flex gap-2 text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-2"
        >
          <img src={Email} alt="Email" /> <span>Email</span>
        </Link>
      </section>
      <img src={Ellipse} alt="Ellipse" className="absolute -top-5 -right-20" />
    </div>
  );
};

export default Footer;
