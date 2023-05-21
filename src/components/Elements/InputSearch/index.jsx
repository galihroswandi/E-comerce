const InputSearch = () => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      autoComplete="off"
      placeholder="Cari product..."
      className="max-w-[78%] sm:w-[70%] py-[.40rem] px-2 text-sm rounded-l-md border border-green-500 outline-none text-slate-700"
    />
  );
};

export default InputSearch;
