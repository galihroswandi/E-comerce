import React from "react";

const hamburgerClick = () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("#nav-menu");
  const nav = document.querySelector("nav");

  nav.classList.add("navbar-fixed");

  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active-menu");
  navMenu.style.transition = "all .5s";
};

const Hamburger = () => {
  return (
    <button
      id="hamburger"
      name="button"
      type="button"
      className="max-w-xs block absolute. right-4 md:hidden"
      aria-label="button"
      onClick={hamburgerClick}
    >
      <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
      <span className="hamburger-line transition duration-500 ease-in-out"></span>
      <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
    </button>
  );
};

export default Hamburger;
