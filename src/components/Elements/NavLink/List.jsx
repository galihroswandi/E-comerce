import React from "react";
import { Link } from "react-router-dom";

const List = ({ link, children, click, classname }) => {
  return (
    <Link
      to={link}
      className={`relative ${classname} pl-5 mb-1 lg:justify-self-end text-sm md:text-base md:border-none w-full`}
      onClick={() => click()}
    >
      {children}
    </Link>
  );
};

export default List;
