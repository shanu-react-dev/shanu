import React, { useState } from "react";
import { navItems } from "./navlinks";
import { Link } from "react-router-dom";

const Navlists = () => {
  let [active, setActive] = useState(false);
  return (
    <ul className="flex w-7/12 h-full items-center justify-evenly">
      {navItems.map((ele, index) => {
        return (
          <Link
            to={ele.href}
            className="hover:text-[#EF2027] duration-400 ease-linear hover:-translate-y-0.5 hover:scale-105 relative inline-block py-2
             after:absolute after:bottom-0 after:left-0
             after:h-[2px] after:w-full
             after:origin-left after:scale-x-0
             after:bg-[#EF2027]
             after:transition-transform after:duration-300
             hover:after:scale-x-100 font-bold"
            key={index}
          >
            <li>{ele.label}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navlists;
