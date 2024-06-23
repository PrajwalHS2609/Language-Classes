import React from "react";
import "./AboutUs.css";
import AboutUsHead from "./AboutUsHead";
import AboutUsMain from "./AboutUsMain";
import AboutUsFooter from "./AboutUsFooter";
import aboutUs from "./../../Media/About Prizma Academy.png";
const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsWrapper">
        <div className="aboutUsContent">
          <img src={aboutUs} alt="" />
        </div>
        <div className="aboutUsContent">
        <AboutUsHead />
          <AboutUsMain />
        </div>
      </div>
      <AboutUsFooter />
    </div>
  );
};

export default AboutUs;
