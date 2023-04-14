import React from "react";

const ImgIcon = ({ imgUrl }) => {
  return (
    <img
      src={imgUrl}
      alt="Pensil Icon"
      title="Ubah"
      className="w-4 cursor-pointer hover:text-green-500"
    />
  );
};

export default ImgIcon;
