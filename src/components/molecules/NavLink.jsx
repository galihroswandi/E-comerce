import React from "react";
import NavList from "../atoms/navbar/NavList";
import Cart from "../atoms/navbar/Cart";

const NavLink = () => {
  return (
    <ul className="justify-center items-center mt-5 transition-all duration-500 lg:flex lg:gap-5 lg:mt-0 lg:pt-1 box-border">
      <NavList link="/home" title="Home" />
      <NavList link="/Categories" title="Categories" />
      <NavList link="/about" title="Tentang Kami" />
      <div className="hidden lg:inline-block">
        <NavList link="/cart" title={Cart()} css={{ display: "none" }} />
      </div>
      <div className="lg:hidden block">
        <NavList link="/signin" title="Sign In" />
        <NavList link="/signup" title="Sign Up" />
      </div>
    </ul>
  );
};

export default NavLink;
