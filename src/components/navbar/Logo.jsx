import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="w-36 h-full flex items-center justify-center flex-col"
    >
      <div className="font-black text-2xl">
        C
        <span className="text-[#e81d23ee] font-black text-3xl">
          &lt;&#47;&gt;
        </span>
        DE
      </div>
      <p className="desc text-[#e81d23ee] tracking-widest">Coode Auraa</p>
    </Link>
  );
};

export default Logo;
