import React, { useEffect, useState } from "react";

import Pensil from "./../../../assets/icons/Pencil.svg";
import MapIcon from "./../../../assets/icons/map.svg";
import ImgIcon from "./ImgIcon";
import DashedAmplop from "./DashedAmplop";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../config/profil";
import { decryptedData } from "./../../../utils/decryptedData";

const Address = () => {
  const dispacth = useDispatch();
  const profil = useSelector((state) => state.profil);

  useEffect(() => {
    getUser(dispacth);
  }, []);

  return (
    <section className="address bg-white rounded-sm  px-5 py-4 bg-opacity-70 backdrop-blur-[7.5px] flex flex-col gap-2 overflow-hidden mb-5">
      <div className="dashed absolute top-0 right-1 left-1 flex items-center gap-3 w-full">
        <DashedAmplop variant="bg-red-500" />
        <DashedAmplop variant="bg-sky-600" />
        <DashedAmplop variant="bg-red-500" />
        <DashedAmplop variant="bg-sky-600" />
        <DashedAmplop variant="bg-red-500" />
        <DashedAmplop variant="bg-sky-600" />
        <DashedAmplop variant="bg-red-500" />
        <DashedAmplop variant="bg-sky-600" />
        <DashedAmplop variant="bg-red-500" />
        <DashedAmplop variant="bg-sky-600" />
      </div>
      <h1 className="text-green-500 flex items-center gap-1">
        <img src={MapIcon} alt="Map Icon" className="w-5" />
        <span className="text-base lg:text-xl">Alamat</span>
      </h1>
      <p className="text-slate-600 mt-1 flex justify-between md:justify-start md:gap-5 items-center">
        <span className="flex flex-wrap items-center gap-1 text-sm lg:text-lg">
          {!decryptedData(profil.nama)
            ? "user" + Math.floor(Math.random() * 1000)
            : decryptedData(profil.nama)}
          <span className="ml-1">
            {!decryptedData(profil.noHP)
              ? "12345678"
              : decryptedData(profil.noHP)}
          </span>
        </span>
        <ImgIcon imgUrl={Pensil} />
      </p>
      <p className="flex gap-1 justify-between md:justify-start md:gap-5 items-center mt-2">
        <span className="text-slate-500 text-sm lg:text-lg">
          {!decryptedData(profil.alamat)
            ? "Alamat...."
            : decryptedData(profil.alamat)}
        </span>
        <ImgIcon imgUrl={Pensil} />
      </p>
    </section>
  );
};

export default Address;
