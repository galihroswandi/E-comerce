import React, { Fragment } from "react";
import Deskripsi from "./Deskripsi";

const DescText = () => {
  return (
    <Fragment>
      <div className="mb-5 flex items-center gap-8 max-w-full">
        <h1 className="leading-3 text-[.8rem] font-medium text-slate-700">
          Deskripsi
        </h1>
        <div className="max-w-sm sm:max-w-[16rem] xl:max-w-[22rem]">
          <Deskripsi />
        </div>
      </div>
    </Fragment>
  );
};

export default DescText;
