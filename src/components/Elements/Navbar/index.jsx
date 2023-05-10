import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import Hamburger from "./Hamburger";
import Brand from "./Brand";
import NavLink from "./NavLink";
import SearchIcon from "./../../../assets/icons/Search.svg";
import Logo from "./../../../assets/img/Logo.png";
import Profile from "./../../../assets/icons/Profile.svg";
import PesananSaya from "./../../../assets/icons/Pesanan_saya.svg";
import SignOut from "./../../../assets/icons/log-out.svg";
import checkLogin from "../../../utils/loginCheck.util";
import logout from "../../../utils/logout.util";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

window.onscroll = () => {
  const nav = document.querySelector("nav");
  const navMenu = document.querySelector("#nav-menu");

  if (nav) {
    const fix_nav = nav.offsetTop;

    if (window.pageYOffset > fix_nav) {
      nav.classList.add("navbar-fixed");
    } else {
      if (navMenu.classList.contains("hidden")) {
        nav.classList.remove("navbar-fixed");
      }
    }
  }
};

const Navbar = (props) => {
  const { content, children } = props;
  const [login, setLogin] = useState(false);

  const showDropdown = () => {
    const target = document.getElementById("dropdown-target");
    target.classList.add("active");
    target.style.opacity = "1";
    target.style.display = "flex";
    target.style.transform = "scale(1)";
    target.style.transform = "translateY(0)";
    target.style.transform = "translateX(0)";
    target.style.transition = "all 2s ease";
  };

  const hideDropdown = () => {
    const target = document.getElementById("dropdown-target");
    target.classList.add("active");
    target.style.opacity = "0";
    target.style.display = "none";
    target.style.transform = "scale(.5)";
    target.style.transform = "translateY(-2.5rem)";
    target.style.transform = "translateX(2.5rem)";
    target.style.transition = "all 2s ease";
  };

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
  }, []);

  return (
    <div className="container">
      <nav className="grid grid-cols-2 grid-rows-1 justify-between items-center px-5 lg:px-20 py-6 bg-transparent absolute top-0 left-0 w-full z-10 lg:flex lg:py-3 lg:flex-wrap box-border">
        <Toaster toastOptions={{ duration: 4000 }} />
        {content !== "login" ? (
          <>
            <Brand />
            <div className="nav-link hidden lg:flex">
              <NavLink />
            </div>
            <div className="hamburger justify-self-end">
              <Hamburger />
            </div>
            <div
              className="hidden transition-all duration-500 ease-in-out relative min-w-[200%] lg:hidden"
              id="nav-menu"
            >
              <NavLink />
            </div>
            <div className="lg:flex justify-center items-center gap-2 hidden">
              {login === undefined || login === false ? (
                <div className="lg:flex justify-center items-center gap-2 hidden">
                  <Link
                    to="/signin"
                    className="bg-transparent border border-green-500 py-[.4rem] px-[1.2rem] rounded-md text-green-500 font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="signup"
                    className="bg-green-500 border border-green-500 py-[.4rem] px-[1.2rem] rounded-md text-slate-100 font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <>
                  <div className="wrapper relative">
                    <div
                      onMouseEnter={showDropdown}
                      className="flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <img
                        src={Logo}
                        alt="Profile"
                        width="26"
                        height="28"
                        className="rounded-full border bg-slate-100"
                      />
                      <div className="username">
                        <span className="text-sm">galihroswandi</span>
                      </div>
                    </div>
                    <div
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                      className="absolute top-9 -left-24 z-50 bg-green-500 min-w-[140%] px-5 py-5 rounded-br-xl rounded-l-xl flex-col gap-3 hidden    opacity-0 scale-50 -translate-y-10 translate-x-10"
                      id="dropdown-target"
                    >
                      <Link
                        to="/profil"
                        className="flex items-center gap-2 group"
                        id="dropdown"
                      >
                        <img
                          src={Profile}
                          alt="Profile Icon"
                          className="group-hover:text-slate-2"
                        />
                        <span className="text-white group-hover:text-slate-200">
                          Profile
                        </span>
                      </Link>
                      <Link
                        to="/pesanan"
                        className="flex items-center gap-2 group"
                      >
                        <img
                          src={PesananSaya}
                          alt="Pesanan Saya Icon"
                          className="group-hover:text-slate-2"
                        />
                        <span className="text-white group-hover:text-slate-200">
                          Pesanan Saya
                        </span>
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="flex items-center gap-2 group"
                      >
                        <img
                          src={SignOut}
                          alt="Signout Icon"
                          className="group-hover:text-slate-2"
                        />
                        <span className="text-white group-hover:text-slate-200">
                          SignOut
                        </span>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
            <form
              className="w-[170%] sm:w-[200%] flex justify-center items-center gap-1 my-[.5rem] mt-[.9rem] mx-2 sm:mt-5"
              id="form"
            >
              <div className="search flex justify-center gap-0 max-w-[90%] sm:max-w-[200%] sm:w-[80%]">
                <input
                  type="search"
                  name="search"
                  id="search"
                  autoComplete="off"
                  placeholder="Cari product..."
                  className="max-w-[78%] sm:w-[70%] py-[.40rem] px-2 text-sm rounded-l-md border border-green-500 outline-none text-slate-700"
                />
                <button
                  type="submit"
                  className="bg-green-500 py-[.rem] px-2 sm:px-3 rounded-r-md flex justify-center items-center"
                >
                  <img src={SearchIcon} alt="Search Icon" width="15" />
                </button>
              </div>
              <Link to="/cart" className="min-w-[1.5rem] ml-3">
                <Cart />
              </Link>
            </form>
          </>
        ) : (
          <>
            {children}
            <div
              className="hidden transition-all duration-500 ease-in-out relative min-w-[300%] lg:hidden"
              id="nav-menu"
            >
              <NavLink />
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
