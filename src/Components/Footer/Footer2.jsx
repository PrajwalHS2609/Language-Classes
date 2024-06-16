import React from "react";
import "./Footer.css";
import seo from "./../../Media/TSS.png";
import { Link } from "react-router-dom";
const Footer2 = () => {
  return (
    <div className="footer2Container">
      <ul>
        <li>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </li>
        <li>
          <Link to={"/refund-policy"}>Refund Policy</Link>
        </li>
        <div>
          <a href="https://tryseoservices.com/">
            <img src={seo} alt="" />
          </a>
        </div>
        <li>
          <Link to={"/terms-and-Conditions"}>Terms and Conditions</Link>
        </li>
        <li>
          <h6>Copyright © 2024 Prizma Academy</h6>
        </li>
      </ul>
    </div>
  );
};

export default Footer2;
