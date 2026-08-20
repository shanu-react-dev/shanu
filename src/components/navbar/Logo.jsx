import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="w-36 h-full flex items-center justify-center flex-col bg-amber-200"
    >
      <div className="font-extrabold text-2xl">
        C <span className="text-green-500">&lt;&#47;&gt;</span>DE
      </div>
      <p className="desc">Coode Auraa</p>
    </Link>
  );
};

export default Logo;
