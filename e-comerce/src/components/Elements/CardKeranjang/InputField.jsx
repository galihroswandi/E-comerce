import React from "react";
import { useDispatch } from "react-redux";

import { setData, setCarts } from "./../../../config/redux/reducer/cartSlice";
import { getAllCartByUser } from "../../../config/cart";

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
    const checkedChild = Array.from(
      document.querySelectorAll(".checked-child")
    );
    if (checkedChild !== 0) {
      const filterChild = checkedChild.filter((e) => e.checked === true);
      if (filterChild.length > 1) {
        const idData = filterChild.map((el) => el.dataset.id);
        dispacth(setData({ data: idData }));

        getAllCartByUser(1).then((res) => {
          const newData = [];
          idData.forEach((id) => {
            res.data.data.filter((re) => {
              if (re.id_cart == id) {
                newData.push(re);
              }
            });
          });
          dispacth(setCarts(newData));
        });
      } else if (filterChild.length == 1) {
        dispacth(setData(filterChild[0].dataset.id));
        getAllCartByUser(1).then((res) => {
          const newData = [];
          res.data.data.filter((re) => {
            if (re.id_cart == filterChild[0].dataset.id) {
              newData.push(re);
            }
          });
          dispacth(setCarts(newData));
        });
      } else {
        dispacth(setCarts([]));
      }
    }
  };

  return (
    <input
      type="checkbox"
      name="pilih"
      id="pilih"
      className="checked checked-child w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
      onClick={(e) => checkChecked(e)}
      data-id={dataId}
      onChange={() => handleChange()}
    />
  );
};

export default InputField;
