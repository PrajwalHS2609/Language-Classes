import React from "react";
import "./AboutUs.css";
import AboutUsHead from "./AboutUsHead";
import AboutUsMain from "./AboutUsMain";
import AboutUsFooter from "./AboutUsFooter";
const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <AboutUsHead />
<div className="aboutUsWrapper">
      <div className="aboutUsContent">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="aboutUsContent">
        <AboutUsMain />
      </div>
      </div>
      <AboutUsFooter/>  
    </div>
  );
};

export default AboutUs;
