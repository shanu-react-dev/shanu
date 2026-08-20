import React from "react";
import Logo from "./Logo";
import Navlists from "./Navlists";
import Button from "../../reusable-components/Button";

const Navbar = () => {
  return (
    <div className="h-14 w-full bg-amber-500 flex justify-evenly items-center">
      <Logo />
      <Navlists />
      <Button
        data={{ label: "Join Us", cName: "accountBtn", href: "/register" }}
      />
    </div>
  );
};

export default Navbar;
