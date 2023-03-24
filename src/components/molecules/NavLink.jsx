import React from "react";
import NavList from "../atoms/navbar/NavList";
import Cart from "../atoms/navbar/Cart";

const handleClick = () => {
  const navMenu = document.querySelector("#nav-menu");
  const hamburger = document.getElementById("hamburger");

  navMenu.classList.add("hidden");
  hamburger.classList.remove("hamburger-active");
};

const NavLink = () => {
  return (
    <ul className="justify-center items-center mt-5 transition-all duration-500 lg:flex lg:gap-5 lg:mt-0 lg:pt-1 box-border">
      <NavList link="/home" title="Home" click={handleClick} />
      <a
        href="#kategori"
        className="text-lg lg:text-base relative group"
        onClick={() => handleClick()}
      >
        <li className="text-center mb-2 border-b border-green-500 py-2 lg:border-none lg:justify-self-end group-hover:text-green-600">
          Categories
        </li>
      </a>
      <NavList link="/about" title="Tentang Kami" click={handleClick} />
      <div className="hidden lg:inline-block">
        <NavList
          link="/cart"
          title={Cart()}
          css={{ display: "none" }}
          click={handleClick}
        />
      </div>
      <div className="lg:hidden block">
        <NavList link="/signin" title="Sign In" />
        <NavList link="/signup" title="Sign Up" />
      </div>
    </ul>
  );
};

export default NavLink;
