import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { link, children, click, classname } = props;
  return (
    <Link
      to={link}
      className={`lg:text-base relative ${classname} pl-5 mb-1 lg:justify-self-end text-sm md:text-base md:border-none w-full`}
      onClick={() => click()}
    >
      {children}
    </Link>
  );
};

export default List;
