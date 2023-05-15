import { Link } from "react-router-dom";

const ButtonChildAuth = (props) => {
  const { classButton, target, children } = props;
  return (
    <Link
      to={target}
      className={`border border-green-500 px-[1.2rem] rounded-md ${classButton}`}
    >
      {children}
    </Link>
  );
};

export default ButtonChildAuth;
