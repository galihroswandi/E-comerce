import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import toRupiah from "@develoka/angka-rupiah-js";

import { getProducts } from "../../../config/products/products";
import Img from "./Img";
import Input from "./Input";
import Label from "./Label";

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
        <Img url={data.gambar_product.imgUrl} alt={data.nama_product} />

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
        <Label />
        <Input text={dataCheckout.pesan} />
      </div>
    </div>
  );
};

export default ProductCheckout;
