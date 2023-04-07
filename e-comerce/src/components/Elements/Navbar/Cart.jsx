import React from "react";
import CartImage from "../../../assets/icons/Cart.svg";

const Cart = () => {
  return (
    <div className="relative">
      <img src={CartImage} alt="Cart" width="25" />
      <span className="absolute -top-2 -right-3 text-sm bg-green-500 rounded-full py-[.01rem] px-[.5rem] text-slate-700">
        1
      </span>
    </div>
  );
};

export default Cart;
