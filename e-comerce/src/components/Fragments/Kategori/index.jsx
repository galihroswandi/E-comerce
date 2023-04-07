import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CardKategori from "../../Elements/CardCategori";
import Hr from "../../Elements/Hr";
import { getAllKategoris } from "../../../config/kategoris/kategoris";
import { url } from "../../../config/api/api.config";

const Categories = () => {
  const [kategoris, setKategoris] = useState([]);
  const [URL, setURL] = useState("");

  const getKategorisFromAPI = async () => {
    getAllKategoris().then((res) => setKategoris(res.data.data));
  };

  useEffect(() => {
    getKategorisFromAPI();
    setURL(url());
  }, []);

  return (
    <div className="container mt-8 mb-10 px-7" id="kategori">
      <div className="title">
        <h1 className="text-2xl text-slate-700 font-medium">Kategori</h1>
        <Hr />
      </div>
      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-center items-center gap-3 mt-5">
        {kategoris.map((kategori, key) => {
          return (
            <Link key={key} to="/categori/pakaian">
              <CardKategori
                img={`${URL}/${kategori.gambar_kategori}`}
                title={kategori.nama_kategori}
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Categories;
