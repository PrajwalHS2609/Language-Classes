import React from "react";
import "./A2Why.css";
const A2WhyCard = (props) => {
  return (
    <div className="a2WhyCardContainer">
      <div className="a2WhyCardCircle2">
        <img src={props.img} alt="" />
      </div>
      <div className="a2WhyCardContent">
        <h2>{props.head}</h2>
        <p>
        {props.para}
        </p>
      </div>
    </div>
  );
};

export default A2WhyCard;
