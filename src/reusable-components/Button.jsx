import React from "react";
import { Link } from "react-router-dom";

const Button = ({ data: { cName, label, href } }) => {
  return (
    <div>
      <Link to={href}>
        <button className={cName}>{label}</button>
      </Link>
    </div>
  );
};

export default Button;
