import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HandleCheked } from "../../../utils/cart.utils";
import { setCarts } from "../../../config/redux/reducer/cartSlice";

const InputField = ({ dataId }) => {
  const dispacth = useDispatch();

  const cartGlobal = useSelector((state) => state.cart.carts);

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

  useEffect(() => {
    dispacth(setCarts([]));
  }, []);

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
