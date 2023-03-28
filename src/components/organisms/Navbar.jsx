import React from "react";
import { Link } from "react-router-dom";

import Cart from "../atoms/navbar/Cart";
import Hamburger from "../atoms/navbar/Hamburger";
import Brand from "./../../components/atoms/navbar/Brand";
import NavLink from "./../../components/molecules/NavLink";

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

const Navbar = () => {
  return (
    <div className="container">
      <nav className="grid grid-cols-3 grid-rows-1 justify-between items-center px-5 lg:px-20 py-6 bg-transparent absolute top-0 left-0 w-full z-10 lg:flex lg:py-3 box-border">
        <Brand />
        <div className="nav-link hidden lg:flex">
          <NavLink />
        </div>
        <div className="cart justify-self-center ml-10 lg:hidden">
          <Cart />
        </div>
        <div className="hamburger justify-self-end">
          <Hamburger />
        </div>
        <div
          className="hidden transition-all duration-500 ease-in-out relative min-w-[300%] lg:hidden"
          id="nav-menu"
        >
          <NavLink />
        </div>
        <div className="lg:flex justify-center items-center gap-2 hidden">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
