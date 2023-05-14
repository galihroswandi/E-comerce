import React, { useEffect, useState } from "react";
import List from "./List";
import { Link } from "react-router-dom";
import Logo from "./../../../assets/img/Logo.png";
import checkLogin from "../../../utils/loginCheck.util";
import logout from "../../../utils/logout.util";
import { toast } from "react-hot-toast";

const handleClick = () => {
  const navMenu = document.querySelector("#nav-menu");
  const hamburger = document.getElementById("hamburger");

  navMenu.classList.add("hidden");
  hamburger.classList.remove("hamburger-active");
};

const NavLink = () => {
  const [login, setLogin] = useState(false);

  const handleLogout = async () => {
    const res = await logout();
    !res.status
      ? toast.error("Sign out gagal")
      : toast.success("Sign out berhasil");
  };

  useEffect(() => {
    checkLogin().then((res) => {
      setLogin(res.status);
    });
  }, []);

  // Halaman Versi Android
  return (
    <ul className="justify-center items-center mt-5 transition-all duration-500 lg:flex lg:gap-5 lg:mt-0 lg:pt-1 box-border text-slate-700">
      <div className="lg:hidden block">
        {login ? (
          <>
            <Link to="/profil">
              <div className="flex items-center justify-center gap-2 mb-1 border-b border-green-500 py-2">
                <img
                  src={Logo}
                  alt="Profile"
                  width="26"
                  height="28"
                  className="rounded-full border bg-slate-100"
                />
                <div className="username">
                  <span className="text-sm">Profile</span>
                </div>
              </div>
            </Link>
            <List link="/pesanan" title="Pesanan Saya" click={handleClick} />
          </>
        ) : (
          <>
            <List link="/signin" title="Sign In" click={handleClick} />
            <List link="/signup" title="Sign Up" click={handleClick} />
          </>
        )}
      </div>
      <List link="/" title="Home" click={handleClick} />
      <List link="/about" title="Tentang Kami" click={handleClick} />
      <List link="/pesanan" title="Pesanan Saya" click={handleClick} />
      {login && (
        <>
          <Link
            className="text-lg lg:text-base relative group lg:hidden"
            onClick={handleLogout}
          >
            <li className="text-center mb-1 lg:justify-self-end group-hover:text-green-600 text-sm md:text-base">
              SignOut
            </li>
          </Link>
        </>
      )}
    </ul>
  );
};

export default NavLink;
