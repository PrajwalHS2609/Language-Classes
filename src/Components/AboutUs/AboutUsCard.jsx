import React from "react";
import "./AboutUs.css";
const AboutUsCard = (props) => {
  return (
    <div className="aboutUsCard">
      <div className="aboutUsCardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="aboutUsPara">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
