const SelectOption = (props) => {
  const { handleChange, children } = props;
  return (
    <select
      name="opsi-pengiriman"
      id="opsi-pengiriman"
      onChange={(e) => handleChange(e.target.value)}
      className="block px-1.5 py-2.5 w-full text-sm text-slate-600 bg-transparent border-0 border-b border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
    >
      {children}
    </select>
  );
};

export default SelectOption;
