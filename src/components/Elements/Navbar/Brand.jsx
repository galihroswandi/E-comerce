import React from "react";
import Logo from "../../../assets/icons/Logo.svg";

const Brand = () => {
  return (
    <div className="nav-brand lg:w-[22%] flex items-center gap-1">
      <img src={Logo} alt="Logo Garuda Store" />
      <h1 className="font-semibold text-green-500 text-xl md:text-2xl">
        GarudaStore
      </h1>
    </div>
  );
};

export default Brand;
