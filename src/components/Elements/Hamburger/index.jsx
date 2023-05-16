import React from "react";

const Hamburger = (props) => {
  const { classname } = props;
  const hamburgerClick = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.classList.toggle("hamburger-active");

    if (!navMenu.classList.contains("hidden")) {
      navMenu.classList.toggle("active-menu");
      setTimeout(() => {
        navMenu.classList.toggle("hidden");
      }, 200);
    } else {
      navMenu.classList.toggle("hidden");
      setTimeout(() => {
        navMenu.classList.toggle("active-menu");
      }, 200);
    }

    navMenu.style.transition = "all .5s";
  };

  return (
    <button
      id="hamburger"
      name="button"
      type="button"
      className={`max-w-xs block right-4 md:hidden ${classname}`}
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
