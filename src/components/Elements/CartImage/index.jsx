import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartImage from "../../../assets/icons/Cart.svg";
import { getAllCartByUser } from "../../../config/cart";
import { setTotalCart as total } from "./../../../config/redux/reducer/cartSlice";
import checkLogin from "./../../../utils/loginCheck.util";

const NavbarCart = () => {
  const dispatch = useDispatch();
  const totalCarts = useSelector((state) => state);

  const getAllCarts = () => {
    checkLogin().then((res) => {
      !res.status
        ? dispatch(total(0))
        : getAllCartByUser(res.uid).then((res) => {
            dispatch(total(res.length));
          });
    });
  };

  useEffect(() => {
    getAllCarts();
  }, []);

  return (
    <div className="relative">
      <img src={CartImage} alt="Cart" width="25" />
      {totalCarts.cart.totalCart !== 0 && (
        <span className="absolute -top-2 -right-3 text-sm bg-green-500 rounded-full py-0 px-[.4rem] text-slate-800 text-[.7rem]">
          {totalCarts.cart.totalCart}
        </span>
      )}
    </div>
  );
};

export default NavbarCart;
