const Input = (props) => {
  const { text } = props;
  return (
    <input
      type="text"
      name="pesan"
      id="pesan"
      placeholder={text}
      className="py-1 lg:py-2 px-3 border-none outline-none focus:ring-1 focus:ring-green-500 rounded-md text-xs lg:text-sm lg:font-extralight text-slate-700 ring-1 ring-slate-200 md:max-w-full mr-1 max-w-[80%]"
    />
  );
};

export default Input;
