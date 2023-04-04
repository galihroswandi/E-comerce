import React, { Fragment } from "react";

import Horizontal from "../../atoms/Horizontal";
import H1 from "../../atoms/DetailProduct/MainDesc/H1";
import Deskripsi from "../../atoms/DetailProduct/MainDesc/Deskripsi";

const DescText = ({ use }) => {
  return (
    <Fragment>
      {use === "lg" ? (
        <div className="descText sm:hidden">
          <H1 />
          <Horizontal width="4rem" />
          <Deskripsi />
        </div>
      ) : (
        <div className="descText hidden sm:block sm:mb-5 sm:mx-10">
          <H1 />
          <Horizontal width="4rem" />
          <Deskripsi />
        </div>
      )}
    </Fragment>
  );
};

export default DescText;
