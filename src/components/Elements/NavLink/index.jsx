import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import List from "./List";
import Logo from "./../../../assets/img/Logo.png";
import checkLogin from "../../../utils/loginCheck.util";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../config/profil";
import { handleLogout } from "../../../utils/navbarUtil";
import ButtonAuth from "../ButtonAuth";
import { decryptedData } from "../../../utils/decryptedData";

const NavLink = (props) => {
  const { classname, id } = props;
  const [login, setLogin] = useState(false);
  const profil = useSelector((state) => state.profil);
  const dispatch = useDispatch();

  const handleClickSlide = () => {
    const navMenu = document.querySelector("#nav-menu");
    const hamburger = document.getElementById("hamburger");

    navMenu.classList.remove("active-menu");
    hamburger.classList.remove("hamburger-active");
  };

  useEffect(() => {
    checkLogin().then((res) => {
      setLogin(res.status);
    });
    getUser(dispatch);
  }, []);

  return (
    <div className={`${classname}`} id={id}>
      <div className="justify-center items-center mt-5 transition-all duration-500 flex flex-col md:flex-row lg:mt-0 lg:pt-1 box-border text-slate-700 md:gap-1">
        {login && (
          <>
            <List
              link="/profil"
              classname="md:hidden border-b border-slate-200 py-2 hover:bg-slate-200 md:px-3 rounded-md flex items-center gap-2 mb-1"
              click={handleClickSlide}
            >
              <img
                src={Logo}
                alt="Profile"
                width="31"
                height="31"
                className="rounded-full border border-slate-200 p-1"
              />
              <span className="text-sm">{decryptedData(profil.username)}</span>
            </List>
          </>
        )}
        <List
          link="/"
          classname="border-b border-slate-200 py-2 hover:bg-slate-200 md:px-3 rounded-md"
          click={handleClickSlide}
        >
          Beranda
        </List>
        <List
          link="/about"
          classname="border-b border-slate-200 py-2 min-w-max hover:bg-slate-200 md:px-3 rounded-md"
          click={handleClickSlide}
        >
          Tentang Kami
        </List>

        {login ? (
          <>
            <List
              link="/pesanan"
              classname="border-b border-slate-200 py-2 min-w-max hover:bg-slate-200 md:px-3 rounded-md"
              click={handleClickSlide}
            >
              Pesanan Saya
            </List>
            <List
              click={handleLogout}
              classname="md:hidden py-2 min-w-max bg-slate-200 hover:bg-slate-300 md:px-3 rounded-md text-center"
            >
              SignOut
            </List>
          </>
        ) : (
          <>
            <ButtonAuth
              classWrapper="md:hidden flex flex-col w-full gap-2 text-center mt-2"
              classButton="py-[.25rem] text-base"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NavLink;
