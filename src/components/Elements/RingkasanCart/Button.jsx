import React from "react";
import { useSelector } from "react-redux";
import { makeId } from "./../../../utils/generateId.util";
import { addCheckout } from "../../../config/checkout";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../../../config/cart";

const Button = ({ setCheckout }) => {
  const dataCart = useSelector((state) => state.cart.carts);
  const navigate = useNavigate();

  const postApi = async (arr) => {
    for (const cart of arr) {
      const data = {
        id_checkout: makeId(15).toUpperCase(),
        id_pesanan: cart.data.uid,
        id_product: cart.data.id_product,
        id_user: cart.data.id_user,
        kuantitas: cart.data.kuantitas,
        subtotal: cart.data.totalHarga,
        tanggal: cart.data.tanggal,
      };

      await addCheckout(data);
      await removeCart(cart.id);
    }

    navigate("/checkout");
  };

  const handleClickCheckout = () => {
    // if (dataCart.length >= 1) {
    //   postApi(dataCart);
    // }
    setCheckout(true);
  };

  return (
    <button
      type="button"
      onClick={handleClickCheckout}
      className="bg-green-500 min-w-full py-2 px-1 text-sm md:text-base text-white rounded-sm active:bg-green-600"
    >
      Checkout
    </button>
  );
};

export default Button;
