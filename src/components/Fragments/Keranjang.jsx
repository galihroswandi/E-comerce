import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Ringkasan from "../Elements/RingkasanCart";
import { getAllCartByUser } from "../../config/cart";
import CardKeranjang from "../Elements/CardKeranjang";
import { HandleCheked } from "../../utils/cart.utils";
import checkLogin from "../../utils/loginCheck.util";
import CheckoutTemplate from "./Checkout";

const Keranjang = () => {
  const dispacth = useDispatch();

  const [dataCart, setDataCart] = useState([]);
  const [login, setLogin] = useState(true);
  const [id_user, setIdUser] = useState();
  const [checkout, setCheckout] = useState(false);

  const handleAllChecked = (target) => {
    const allCheckbox = document.querySelectorAll(".checked");
    if (target.target.checked === true) {
      allCheckbox.forEach((e) => (e.checked = true));
    } else {
      allCheckbox.forEach((e) => (e.checked = false));
    }
    setCartGlobal();
  };

  const getAllCarts = async () => {
    const user = await checkLogin();
    getAllCartByUser(user.uid).then((res) => {
      setDataCart(res);
      setCartGlobal();
    });
  };

  const setCartGlobal = () => {
    HandleCheked(dispacth);
  };

  useEffect(() => {
    checkLogin().then((user) => {
      !user.status
        ? setLogin(false)
        : getAllCartByUser(user.uid).then((res) => {
            setIdUser(res.uid);
            setDataCart(res);
          });
    });

    setCartGlobal();
  }, []);

  return !checkout ? (
    <>
      <div className="lg:mt-[4rem] mt-[9.5rem] card-wrapper sm:px-5 md:px-9 lg:flex lg:justify-between lg:w-[100%] items-start gap-4 xl:container mb-8">
        <div className="card mt-[5.7rem] mx-2 py-5 px-5 pb-8 box-border bg-white rounded-xl shadow-lg shadow-slate-200 overflow-hidden mb-5 sm:container xl:px-10 xl:box-border">
          <h1 className="text-sm lg:text-lg text-slate-700 font-semibold mt-2">
            Keranjang
          </h1>
          {!login ? (
            <>
              <div className="min-h-[2rem] flex justify-center items-center">
                <span className="text-slate-400">
                  Login untuk melihat daftar keranjang...
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="pilih"
                    id="pilih"
                    className="checked parent-checked w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
                    onChange={(e) => handleAllChecked(e)}
                  />
                  <label htmlFor="pilih" className="text-xs md:text-sm">
                    Pilih Semua
                  </label>
                </div>
              </div>
              <div className="cart-wrapper -mt-3">
                {dataCart.map((cart, index) => {
                  return (
                    <div key={index}>
                      <CardKeranjang
                        getCarts={() => getAllCarts()}
                        cartData={cart}
                        id_user={id_user}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <Ringkasan changeCheckout={setCheckout} data_cart={dataCart} />
      </div>
    </>
  ) : (
    <CheckoutTemplate changeCheckout={setCheckout} />
  );
};

export default Keranjang;
