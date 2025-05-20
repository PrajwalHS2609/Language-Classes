import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;
