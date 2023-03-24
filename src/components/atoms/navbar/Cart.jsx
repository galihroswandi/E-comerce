import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/cart" className="relative">
      <svg
        width="30"
        height="27"
        viewBox="0 0 25 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.36381 19.0543C9.9412 19.0543 10.4093 18.6694 10.4093 18.1946C10.4093 17.7198 9.9412 17.3349 9.36381 17.3349C8.78643 17.3349 8.31836 17.7198 8.31836 18.1946C8.31836 18.6694 8.78643 19.0543 9.36381 19.0543Z"
          stroke="#475569"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.8636 19.0543C21.441 19.0543 21.909 18.6694 21.909 18.1946C21.909 17.7198 21.441 17.3349 20.8636 17.3349C20.2862 17.3349 19.8181 17.7198 19.8181 18.1946C19.8181 18.6694 20.2862 19.0543 20.8636 19.0543Z"
          stroke="#475569"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1H5.18182L7.98364 12.5118C8.07924 12.9076 8.34109 13.2631 8.72334 13.5162C9.1056 13.7692 9.58391 13.9037 10.0745 13.8959H20.2364C20.727 13.9037 21.2053 13.7692 21.5876 13.5162C21.9698 13.2631 22.2317 12.9076 22.3273 12.5118L24 5.29865H6.22727"
          stroke="#475569"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="absolute -top-2 -right-3 text-sm bg-green-500 rounded-full py-[.1rem] px-[.5rem] text-slate-700">
        1
      </span>
    </Link>
  );
};

export default Cart;
