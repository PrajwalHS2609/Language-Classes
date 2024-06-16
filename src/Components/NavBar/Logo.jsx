import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logoContainer">
      <Link to={"/"}>
        <img
          src="https://germanclassesinbangalore.com/wp-content/uploads/2024/04/cropped-cropped-Logo-Prizma-Academy.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
