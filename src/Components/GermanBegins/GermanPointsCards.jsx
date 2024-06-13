import React from "react";
import "./GermanBegins.css";
const GermanPointsCards = (props) => {
  return (
    <div className="germanPointsCardsContain">
      <div className="germanPointsCardsContent1"><p>{props.no}</p></div>
      <div className="germanPointsCardsContent2">
        <h3>{props.head}</h3>
        <p>
        {props.para}
        </p>
      </div>
    </div>
  );
};

export default GermanPointsCards;
