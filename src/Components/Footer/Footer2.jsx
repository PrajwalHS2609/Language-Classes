import React from "react";
import "./Footer.css";
import seo from "./../../Media/TSS.png";
const Footer2 = () => {
  return (
    <div className="footer2Container">
      <ul>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <div>
          <a href="https://tryseoservices.com/">
            <img src={seo} alt="" />
          </a>
        </div>
        <li>
          <a href="">Terms and Conditions</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer2;
