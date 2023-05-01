import React from "react";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import Hamburger from "./Hamburger";
import Brand from "./Brand";
import NavLink from "./NavLink";
import SearchIcon from "./../../../assets/icons/Search.svg";

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

  return (
    <div className="container">
      <nav className="grid grid-cols-2 grid-rows-1 justify-between items-center px-5 lg:px-20 py-6 bg-transparent absolute top-0 left-0 w-full z-10 lg:flex lg:py-3 lg:flex-wrap box-border">
        {content !== "login" ? (
          <>
            <Brand />
            <div className="nav-link hidden lg:flex">
              <NavLink />
            </div>
            {/* <div className="cart justify-self-center ml-10 lg:hidden">
              <Link to="/cart">
                <Cart />
              </Link>
            </div> */}
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

        <form className="w-[170%] flex justify-center items-center gap-1 my-[.5rem] mt-[.9rem] mx-2">
          <div className="search flex justify-center gap-0 max-w-[90%]">
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Cari product..."
              className="max-w-[78%] py-[.40rem] px-2 text-sm rounded-l-md border border-green-500 outline-none text-slate-700"
            />
            <button
              type="submit"
              className="bg-green-500 py-[.rem] px-2 rounded-r-md flex justify-center items-center"
            >
              <img src={SearchIcon} alt="Search Icon" width="15" />
            </button>
          </div>
          <Link to="/cart" className="min-w-[1.5rem] ml-3">
            <Cart />
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
