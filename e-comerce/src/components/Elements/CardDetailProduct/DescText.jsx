import React, { Fragment } from "react";

import Hr from "../../Elements/Hr";
import H1 from "./H1";
import Deskripsi from "./Deskripsi";

const DescText = ({ use }) => {
  return (
    <Fragment>
      {use === "lg" ? (
        <div className="descText sm:hidden">
          <H1 />
          <Hr width="4rem" />
          <Deskripsi />
        </div>
      ) : (
        <div className="descText hidden sm:block sm:mb-5 sm:mx-10">
          <H1 />
          <Hr width="4rem" />
          <Deskripsi />
        </div>
      )}
    </Fragment>
  );
};

export default DescText;
