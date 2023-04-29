import React from "react";
import { Link } from "react-router-dom";

const NavList = ({ link, title, click }) => {
  return (
    <Link
      to={link}
      className="text-lg lg:text-base relative group"
      onClick={() => click()}
    >
      <li className="text-center mb-2 border-b border-green-500 py-2 lg:border-none lg:justify-self-end group-hover:text-green-600">
        {title}
      </li>
    </Link>
  );
};

export default NavList;
