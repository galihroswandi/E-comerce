import React from "react";

const Pesan = () => {
  return (
    <div className="pesan flex flex-col mt-5">
      <label htmlFor="pesan" className="text-slate-700">
        Pesan:
      </label>
      <input
        type="text"
        name="pesan"
        id="pesan"
        autoComplete="off"
        placeholder="Type here..."
        className="max-w-[55%] sm:max-w-[60%] py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-sm text-slate-700 ring-1 ring-slate-200 md:max-w-full mr-1"
      />
    </div>
  );
};

export default Pesan;
