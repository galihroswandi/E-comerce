import { useSelector } from "react-redux";

import { showDropdown } from "../../../utils/navbarUtil";
import { decryptedData } from "../../../utils/decryptedData";
import Logo from "./../../../assets/icons/Logo.svg";
import ImgIcon from "../NavDropdown/ImgIcon";
import TextDropdown from "../NavDropdown/TextDropdown";

const NavProfile = () => {
  const profil = useSelector((state) => state.profil);
  return (
    <div
      onMouseEnter={showDropdown}
      className="flex items-center justify-center gap-2 cursor-pointer"
    >
      <ImgIcon
        imgUrl={Logo}
        alt="Img Profile"
        classname="rounded-full border "
      />
      {/* <div className="username">
        <span className="text-sm. text-slate-800">
          {decryptedData(profil.username) || "username..."}
        </span>
      </div> */}
      <TextDropdown
        text={decryptedData(profil.username) || "username..."}
        classname="text-slate-800"
      />
    </div>
  );
};

export default NavProfile;
