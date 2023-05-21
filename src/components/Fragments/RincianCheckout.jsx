import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

import { hitungTotalBayar } from "../../utils/checkout.util";
import checkLogin from "../../utils/loginCheck.util";
import { makeId } from "../../utils/generateId.util";
import { addCheckout } from "../../config/checkout";
import { removeCart } from "../../config/cart";
import { CgSpinner } from "react-icons/cg";
import SubRincianCheckout from "../Elements/SubRincianCheckout";

const RincianCheckout = (props) => {
  const { ongkir, biayaLayanan, changeCheckout, metodePembayaran } = props;
  const data = useSelector((state) => state.checkout.data);
  const dataKeranjang = useSelector((state) => state.cart.carts);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const hapusDataKeranjang = () => {
    dataKeranjang.forEach(async (el) => {
      await removeCart(el.id);
    });
    Swal.fire("Success", "Pesanan berhasil dibuat", "success").finally(() => {
      setLoading(false);
      setTimeout(() => {
        navigate("/pesanan");
      }, 600);
    });
  };

  const hitungTotal = () => {
    return dataKeranjang.length >= 1
      ? dataKeranjang
          .map((checkout) => checkout.data.totalHarga)
          .reduce((acc, currentVal) => acc + currentVal)
      : 0;
  };

  const handleCheckout = async () => {
    setLoading(true);
    const user = await checkLogin();

    const data = {
      id_pesanan: "IBR" + makeId(11).toUpperCase(),
      id_user: user.uid,
      product: dataKeranjang,
      hargaPengiriman: ongkir,
      metodePembayaran,
      subtotal: hitungTotal(),
      waktuPemesanan: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}-${new Date().getHours()}:${new Date().getMinutes()}`,
      totalPembayaran: hitungTotalBayar(ongkir, biayaLayanan, hitungTotal()),
      status: "Dikemas",
    };

    const postData = await addCheckout(data);
    hapusDataKeranjang();
    if (!postData) {
      toast.error("Pesanan gagal dibuat");
      setLoading(false);
    } else {
      hapusDataKeranjang();
    }
  };

  return (
    <section className="rincian-peanan bg-white rounded-sm mb-0 px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden">
      <h1 className="text-green-500 flex items-center gap-1 text-base lg:text-xl">
        Rincian Pesanan
      </h1>
      <div className="main py-3 border-y border-y-green-500">
        <SubRincianCheckout
          data={data}
          value={hitungTotal()}
          text="Subtotal Produk:"
        />
        <SubRincianCheckout
          data={data}
          value={ongkir}
          text="Total Ongkos Kirim"
        />
        <SubRincianCheckout
          data={data}
          value={biayaLayanan}
          text="Biaya Layanan:"
        />
        <SubRincianCheckout
          data={data}
          value={hitungTotalBayar(ongkir, biayaLayanan, hitungTotal())}
          text="Total Pembayaran"
          classname="text-base lg:text-2xl text-green-500"
        />
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
          className="text-xs sm:text-sm lg:text-lg border px-5 py-[.4rem] rounded-sm text-green-100 bg-green-500 leading-4 flex items-center gap-1"
        >
          {loading && <CgSpinner size={20} className=" animate-spin" />}
          Buat Pesanan
        </button>
      </div>
    </section>
  );
};

export default RincianCheckout;
