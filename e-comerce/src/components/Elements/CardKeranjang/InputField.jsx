import React from "react";

const InputField = () => {
  const checkChecked = (e) => {
    const checkedChild = document.querySelectorAll(".checked-child");
    checkedChild.forEach((e) => {
      if (!e.checked) {
        document.querySelector(".parent-checked").checked = false;
      }
    });
  };

  return (
    <input
      type="checkbox"
      name="pilih"
      id="pilih"
      className="checked checked-child w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500"
      onClick={(e) => checkChecked(e)}
    />
  );
};

export default InputField;
