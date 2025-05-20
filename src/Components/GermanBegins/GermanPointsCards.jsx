import React from "react";
import "./GermanBegins.css";
const GermanPointsCards = (props) => {
  return (
    <div className="germanPointsCardsContain">
      <div className="pointsCardsImgContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="pointsCardsHeadContainer">
        <h3> {props.head} </h3>
      </div>
      <div className="pointsCardsParaContainer"><p>{props.para}</p></div>
    </div>
  );
};

export default GermanPointsCards;
