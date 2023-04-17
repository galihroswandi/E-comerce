import React from "react";
import { useSelector } from "react-redux";

const Button = () => {
  const cartsData = useSelector((state) => state.cartId.message);

  return (
    <button
      type="submit"
      className="bg-green-500 min-w-full py-2 px-1 text-base text-white rounded-sm active:bg-green-600"
    >
      Checkout
    </button>
  );
};

export default Button;
