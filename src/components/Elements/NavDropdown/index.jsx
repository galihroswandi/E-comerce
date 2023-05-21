import { Link } from "react-router-dom";
import {
  handleLogout,
  hideDropdown,
  showDropdown,
} from "../../../utils/navbarUtil";
import Profile from "./../../../assets/icons/Profile.svg";
import SignOut from "./../../../assets/icons/log-out.svg";
import ImgIcon from "./ImgIcon";
import TextDropdown from "./TextDropdown";

const NavDropdown = () => {
  return (
    <div
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="absolute top-9 -left-20 z-50 bg-green-500 min-w-[120%] p-3.5 rounded-br-xl rounded-l-xl flex-col gap-2 hidden    opacity-0 scale-50 -translate-y-10 translate-x-10"
      id="dropdown-target"
    >
      <Link
        to="/profil"
        className="flex items-center gap-2 group hover:bg-green-600 rounded-md px-2 py-1"
        id="dropdown"
      >
        <ImgIcon imgUrl={Profile} alt="Profile Icon" />
        <TextDropdown
          text="Profile"
          classname="text-white group-hover:text-slate-200"
        />
      </Link>
      <Link
        onClick={handleLogout}
        className="flex items-center gap-2 group hover:bg-green-600 rounded-md px-2 py-1"
        id="dropdown"
      >
        <ImgIcon imgUrl={SignOut} alt="Profile Icon" />
        <TextDropdown
          text="SignOut"
          classname="text-white group-hover:text-slate-200"
        />
      </Link>
    </div>
  );
};

export default NavDropdown;
