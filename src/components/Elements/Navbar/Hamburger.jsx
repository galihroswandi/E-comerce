import React from "react";

const hamburgerClick = () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("#nav-menu");
  const nav = document.querySelector("nav");
  const form = document.getElementById("form");

  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  form.classList.toggle("hidden");
  nav.classList.add("navbar-fixed");
  navMenu.style.transition = "all .5s ease-in-out";
};

const Hamburger = () => {
  return (
    <button
      id="hamburger"
      name="button"
      type="button"
      className="max-w-xs block absolute. right-4 lg:hidden"
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
