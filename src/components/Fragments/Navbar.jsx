import React, { useEffect, useState } from "react";

import Hamburger from "./../Elements/Hamburger";
import Brand from "./../Elements/Brand";
import NavLink from "./../Elements/NavLink";
import checkLogin from "../../utils/loginCheck.util";
import ButtonAuth from "../Elements/ButtonAuth";
import NavProfile from "../Elements/NavProfile";
import NavDropdown from "../Elements/NavDropdown";
import FormSearch from "./FormSearch";

const Navbar = (props) => {
  const { content, children } = props;
  const [login, setLogin] = useState(false);

  const scrolWindow = () => {
    const nav = document.querySelector("nav");

    if (nav) {
      if (window.pageYOffset > 30) {
        nav.classList.add("navbar-fixed");
        nav.style.top = "-2rem";
      } else {
        nav.classList.remove("navbar-fixed");
        nav.style.top = "0";
      }
    }
  };

  window.onscroll = () => {
    scrolWindow();
  };

  useEffect(() => {
    checkLogin().then((res) => {
      setLogin(res.status);
    });
    window.pageYOffset > 30 && scrolWindow();
  }, []);

  return (
    <div className="container">
      <nav className="grid grid-cols-2 grid-rows-1 justify-between items-center px-5 lg:px-20 py-6 bg-transparent absolute top-0 left-0 w-full z-10 md:flex md:py-3 md:flex-wrap box-border">
        {content !== "login" ? (
          <>
            <Brand />
            <NavLink classname="hidden md:flex" />
            <Hamburger classname="justify-self-end" />
            <NavLink
              id="nav-menu"
              classname="absolute min-w-full min-h-screen top-[8.8rem] sm:top-[9.1rem] left-full right-0 opacity-0 bg-white transition-all duration-500 ease-in-out md:hidden px-5 overflow-hidden hidden"
            />

            <div className="md:flex justify-center items-center gap-2 hidden">
              {login === undefined || login === false ? (
                <ButtonAuth
                  classWrapper="md:flex justify-center items-center gap-2 hidden"
                  classButton="py-[.4rem] font-medium"
                />
              ) : (
                <div className="wrapper relative">
                  <NavProfile />
                  <NavDropdown />
                </div>
              )}
            </div>

            <FormSearch />
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
