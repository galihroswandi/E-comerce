import React from "react";
import { Link } from "react-router-dom";

const List = ({ link, title, click, classname }) => {
  return (
    <Link
      to={link}
      className={`text-lg lg:text-base relative group ${classname}`}
      onClick={() => click()}
    >
      <li className="text-center mb-1 border-b border-green-500 py-2 lg:border-none lg:justify-self-end group-hover:text-green-600 text-sm md:text-base">
        {title}
      </li>
    </Link>
  );
};

export default List;
