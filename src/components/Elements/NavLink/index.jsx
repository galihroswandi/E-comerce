import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { children, target, classname } = props;
  return (
    <Link to={target} className={`${classname}`}>
      {children}
    </Link>
  );
};

export default NavLink;
