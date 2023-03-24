import { Link } from "react-router-dom";
import CardKategori from "../molecules/CardKategori";
import Pakaian from "./../../assets/img/pakaian.svg";
import Handphone from "./../../assets/img/handphone.svg";
import Sepatu from "./../../assets/img/sepatu.svg";
import Skincare from "./../../assets/img/skincare.svg";

const Categories = () => {
  return (
    <div className="container mt-8 mb-10 px-7" id="kategori">
      <div className="title">
        <h1 className="text-2xl">Kategori</h1>
        <div className="h-1 w-28 bg-green-500 mt-2 rounded-lg"></div>
      </div>
      <section className="grid grid-cols-3 justify-center items-center gap-3 mt-5">
        <Link to="/categori/pakaian">
          <CardKategori img={Pakaian} title="Pakaian" />
        </Link>
        <Link to="/categori/handphone">
          <CardKategori img={Handphone} title="Handphone" />
        </Link>
        <Link to="/categori/sepatu">
          <CardKategori img={Sepatu} title="Sepatu" />
        </Link>
        <Link to="/categori/skincare">
          <CardKategori img={Skincare} title="Skincare" />
        </Link>
      </section>
    </div>
  );
};

export default Categories;
