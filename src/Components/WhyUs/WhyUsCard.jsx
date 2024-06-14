import React from "react";
import "./WhyUs.css";

const WhyUsCard = (props) => {
  return (
    <div className="whyUsCardContainer">
      <div className="whyUsCardContentImg">
        <img src={props.img} alt="" />
      </div>
      <div className="whyUsCardContentTxt">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
