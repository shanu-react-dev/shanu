import { Link } from "react-router-dom";

const Button = ({ data: { cName, label, href, cursor } }) => {
  return (
    <div>
      <Link to={href}>
        <button
          className={`${cName} cursor-${cursor} p-2 pl-5 pr-5 rounded-3xl bg-[#EF2027] text-[#ffff] font-bold hover:bg-transparent hover:text-[#EF2027] border-2 transition-all duration-1000`}
        >
          {label}
        </button>
      </Link>
    </div>
  );
};

export default Button;
