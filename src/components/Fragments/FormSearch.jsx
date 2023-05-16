import NavbarCart from "../Elements/CartImage";
import { Link } from "react-router-dom";
import InputSearch from "../Elements/InputSearch";
import ButtonInput from "../Elements/ButtonInput";

const FormSearch = () => {
  return (
    <form
      className="w-[170%] sm:w-[200%] flex justify-center items-center gap-1 my-[.5rem] mt-[.9rem] mx-2 sm:mt-5"
      id="form"
    >
      <div className="search flex justify-center gap-0 max-w-[90%] sm:max-w-[200%] sm:w-[80%]">
        <InputSearch />
        <ButtonInput />
      </div>
      <Link to="/cart" className="min-w-[1.5rem] ml-3">
        <NavbarCart />
      </Link>
    </form>
  );
};

export default FormSearch;
