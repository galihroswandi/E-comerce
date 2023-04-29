import React from "react";

const DashedAmplop = ({ type }) => {
  if (type == "bg-red") {
    return (
      <div className="w-1/5 h-[.3rem] bg-red-500 skew-x-[25deg] -ml-2"></div>
    );
  } else if (type == "bg-sky") {
    return (
      <div className="w-1/5 h-[.3rem] bg-sky-600 skew-x-[25deg] -ml-2"></div>
    );
  }
};

export default DashedAmplop;
