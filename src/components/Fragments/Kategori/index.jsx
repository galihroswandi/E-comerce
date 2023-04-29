import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

import CardKategori from "../../Elements/CardCategori";
import Hr from "../../Elements/Hr";
import { app } from "../../../config/firebase";
import { getAllKategoris } from "../../../config/kategoris/kategoris";

const Categories = () => {
  const [kategoris, setKategoris] = useState([]);

  const coba = async () => {
    const res = await getAllKategoris();
    setKategoris(res);
  };

  useEffect(() => {
    coba();
  }, []);

  return (
    <div className="container mt-8 mb-10 px-7" id="kategori">
      <div className="title">
        <h1 className="text-2xl text-slate-700 font-medium">Kategori</h1>
        <Hr />
      </div>
      <section
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-center items-center gap-3 mt-5"
        id="categori-wrapper"
      >
        {kategoris.map((kategori, key) => {
          return (
            <Link key={key} to={`kategori/${kategori.data.nama_kategori}`}>
              <CardKategori
                img={`${kategori.data.gambar_kategori.imgUrl}`}
                title={kategori.data.nama_kategori}
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Categories;
