import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Checkout1 from "./../../assets/ellipse/Checkout-1.svg";
import Address from "../Elements/Address";
import checkLogin from "./../../utils/loginCheck.util";
import { getAllCartByUser } from "../../config/cart";
import { setTitle } from "../../utils/title.util";
import BarangCheckout from "./BarangCheckout";
import RincianCheckout from "./RincianCheckout";

const Checkout = ({ changeCheckout }) => {
  const [ongkir, setOngkir] = useState(0);
  const [metodePembayaran, setMetodePembayaran] = useState();
  const [biayaLayanan] = useState(500);
  const [dataCarts, setDataCarts] = useState([]);

  useEffect(() => {
    checkLogin().then((user) => {
      getAllCartByUser(user.uid).then((result) => {
        setDataCarts(result);
      });
    });

    setTitle("Checkout");
  }, []);

  return (
    <div className="wrapper overflow-hidden">
      <Toaster toastOptions={{ duration: 4000 }} />
      <main className="min-h-[100vh] mt-[7rem] mx-auto py-5 box-border mb-8 sm:container md:px-3 lg:px-5 relative">
        <img
          src={Checkout1}
          alt="Ellipse"
          className="w-[4rem] lg:w-[5.5rem] absolute -z-[1] -left-5"
        />
        <h1 className="mx-2 font-semibold text-xl lg:text-2xl text-slate-700 mb-2">
          Checkout
        </h1>
        <Address />
        <BarangCheckout
          dataCarts={dataCarts}
          setOngkir={setOngkir}
          setMetodePembayaran={setMetodePembayaran}
        />
        <img
          src={Checkout1}
          alt="Ellipse"
          className="w-[3.5rem] lg:w-[5rem] absolute -z-10 top-[69%] sm:top-[66%] md:top-[55%] -right-6 sm:-right-4"
        />
        <RincianCheckout
          ongkir={ongkir}
          biayaLayanan={biayaLayanan}
          changeCheckout={changeCheckout}
          metodePembayaran={metodePembayaran}
        />
        <img
          src={Checkout1}
          alt="Ellipse"
          className="w-[5rem] absolute -z-10 -translate-y-10 -translate-x-10"
        />
      </main>
    </div>
  );
};

export default Checkout;
