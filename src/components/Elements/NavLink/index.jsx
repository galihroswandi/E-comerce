import React, { useEffect, useState } from "react";
import List from "./List";
import Logo from "./../../../assets/img/Logo.png";
import checkLogin from "../../../utils/loginCheck.util";
import logout from "../../../utils/logout.util";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../config/profil";

const handleClick = () => {
  const navMenu = document.querySelector("#nav-menu");
  const hamburger = document.getElementById("hamburger");

  navMenu.classList.remove("active-menu");
  hamburger.classList.remove("hamburger-active");
};

const NavLink = () => {
  const [login, setLogin] = useState(false);
  const profil = useSelector((state) => state.profil);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await logout();
    !res.status
      ? Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Internal Server Error",
        })
      : window.location.reload();
  };

  useEffect(() => {
    checkLogin().then((res) => {
      setLogin(res.status);
    });
    getUser(dispatch);
  }, []);

  return (
    <div className="justify-center items-center mt-5 transition-all duration-500 flex flex-col md:flex-row lg:mt-0 lg:pt-1 box-border text-slate-700 md:gap-1">
      {login && (
        <>
          <List
            link="/profil"
            classname="md:hidden border-b border-slate-200 py-2 hover:bg-slate-200 md:px-3 rounded-md flex items-center gap-2 mb-1"
            click={handleClick}
          >
            <img
              src={Logo}
              alt="Profile"
              width="31"
              height="31"
              className="rounded-full border border-slate-200 p-1"
            />
            <span className="text-sm">{profil.username}</span>
          </List>
        </>
      )}
      <List
        link="/"
        classname="border-b border-slate-200 py-2 hover:bg-slate-200 md:px-3 rounded-md"
        click={handleClick}
      >
        Beranda
      </List>
      <List
        link="/about"
        classname="border-b border-slate-200 py-2 min-w-max hover:bg-slate-200 md:px-3 rounded-md"
        click={handleClick}
      >
        Tentang Kami
      </List>

      {login ? (
        <>
          <List
            link="/pesanan"
            classname="border-b border-slate-200 py-2 min-w-max hover:bg-slate-200 md:px-3 rounded-md"
            click={handleClick}
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
          <List
            link="/signin"
            classname="text-center bg-transparent border border-green-500 py-1.5 rounded-md text-green-500"
            click={handleClick}
          >
            Sign In
          </List>
          <List
            link="/signup"
            classname="text-center bg-green-500 py-1.5 rounded-md text-slate-50"
            click={handleClick}
          >
            Sign Up
          </List>
        </>
      )}
    </div>
  );
};

export default NavLink;
