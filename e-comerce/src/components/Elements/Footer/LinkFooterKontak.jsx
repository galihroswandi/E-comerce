import { Link } from "react-router-dom";

const LinkFooterKontak = ({ to, img, title }) => {
  return (
    <Link
      to={to}
      target="_blank"
      className="flex gap-2 text-lg font-light text-slate-700 hover:text-green-800 hover:translate-x-1 hover:translate-y-[.1rem] transition duration-200 mb-2"
    >
      <img src={img} alt={title} /> <span>{title}</span>
    </Link>
  );
};

export default LinkFooterKontak;
