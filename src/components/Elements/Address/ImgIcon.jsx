import React from "react";
import { Link } from "react-router-dom";

const ImgIcon = ({ imgUrl }) => {
  return (
    <Link to="/profil">
      <img
        src={imgUrl}
        alt="Pensil Icon"
        title="Ubah"
        className="w-4 cursor-pointer hover:text-green-500"
      />
    </Link>
  );
};

export default ImgIcon;
