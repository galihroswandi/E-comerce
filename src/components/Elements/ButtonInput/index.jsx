const ButtonInput = (props) => {
  const { icon } = props;
  return (
    <button
      type="submit"
      className="bg-green-500 px-2 sm:px-3 rounded-r-md flex justify-center items-center"
    >
      <img src={icon} alt="Search Icon" width="15" />
    </button>
  );
};

export default ButtonInput;
