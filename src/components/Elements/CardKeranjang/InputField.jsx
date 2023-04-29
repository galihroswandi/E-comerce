import React from "react";
import { useDispatch } from "react-redux";

import { HandleCheked } from "../../../utils/cart.utils";

const InputField = ({ dataId }) => {
  const dispacth = useDispatch();

  const checkChecked = (e) => {
    const checkedChild = document.querySelectorAll(".checked-child");
    checkedChild.forEach((e) => {
      if (!e.checked) {
        document.querySelector(".parent-checked").checked = false;
      }
    });
  };

  const handleChange = () => {
    HandleCheked(dispacth);
  };

  return (
    <input
      type="checkbox"
      name="pilih"
      id="pilih"
      className="checked checked-child w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 justify-self-start"
      onClick={(e) => checkChecked(e)}
      data-id={dataId}
      onChange={() => handleChange()}
    />
  );
};

export default InputField;
