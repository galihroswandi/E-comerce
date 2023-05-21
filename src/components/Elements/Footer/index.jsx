import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import Email from "../../../assets/icons/email.svg";
import Ellipse from "../../../assets/img/ellipse.svg";
import LinkFooter from "./LinkFooter";
import LinkFooterKontak from "./LinkFooterKontak";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-[20rem] bg-gradient-to-r from-[#DCFCE7] to-white shadow-[-1rem_0_60px_1rem_rgba(15, 23, 42,0.3)] py-10 px-10 relative box-border overflow-x-hidden grid sm:grid-cols-2 md:grid-cols-3 pb-28 sm:pb-8">
      <section className="brand mb-10 lg:ml-10">
        <h1 className="text-xl sm:text-3xl font-semibold text-green-500 mb-1">
          GarudaStore
        </h1>
        <p className="text-base font-ligh text-green-500">
          Copyright &copy; 2023 by{" "}
          <Link to="https://www.instagram.com/galih_roswandi/" target="_blank">
            GalihRoswandi
          </Link>
        </p>
      </section>
      <section className="inform-1 flex flex-col mb-5 lg:ml-72">
        <h1 className="text-2xl font-semibold text-green-500 mb-3">
          GarudaStore
        </h1>
        <LinkFooter to="#all-produk" title="Produk" />
        <LinkFooter to="/about" title="Tentang Kami" />
      </section>
      <section className="kontak lg:ml-[10rem]">
        <h1 className="text-2xl font-semibold text-green-500 mb-3">Kontak</h1>
        <LinkFooterKontak
          to="https://id-id.facebook.com/"
          img={Facebook}
          title="Facebook"
        />
        <LinkFooterKontak
          to="/instagram.com"
          img={Instagram}
          title="Instagram"
        />
        <LinkFooterKontak to="/twitter.com" img={Twitter} title="Twitter" />
        <LinkFooterKontak to="/email.com" img={Email} title="Email" />
      </section>
      <img src={Ellipse} alt="Ellipse" className="absolute -top-5 -right-20" />
    </div>
  );
};

export default Footer;
