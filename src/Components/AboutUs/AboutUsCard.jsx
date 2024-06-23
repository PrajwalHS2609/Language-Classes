import React from "react";
import "./AboutUs.css";
import instructor from "./../../Media/instructor.png";
const AboutUsCard = (props) => {
  return (
    <div className="aboutUsCard">
      <div className="aboutUsCardImg">
        <img src={instructor} alt="" />
      </div>
      <div className="aboutUsPara">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
