import SearchIcon from "../../../assets/icons/Search.Svg";

const ButtonInput = () => {
  return (
    <button
      type="submit"
      className="bg-green-500 px-2 sm:px-3 rounded-r-md flex justify-center items-center"
    >
      <img src={SearchIcon} alt="Search Icon" width="15" />
    </button>
  );
};

export default ButtonInput;
