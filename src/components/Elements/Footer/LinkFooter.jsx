import { Link } from "react-router-dom";

const LinkFooter = ({ to, title }) => {
  return (
    <Link
      to={to}
      className="text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-1"
    >
      {title}
    </Link>
  );
};

export default LinkFooter;
