import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./../../Media/Logo Prizma Academy.png";
const Logo = () => {
  return (
    <div className="logoContainer">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
