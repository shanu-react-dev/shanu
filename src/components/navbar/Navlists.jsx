import React from "react";
import { navItems } from "./navlinks";
import { Link } from "react-router-dom";

const Navlists = () => {
  return (
    <ul className="flex w-7/12 h-full items-center justify-evenly">
      {navItems.map((ele, index) => {
        return (
          <Link
            to={ele.href}
            className="hover:text-blue-400 duration-400 ease-linear hover:-translate-y-0.5"
          >
            <li>{ele.label}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navlists;
