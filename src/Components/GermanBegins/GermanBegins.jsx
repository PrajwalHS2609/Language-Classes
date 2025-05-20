import React from "react";
import "./GermanBegins.css";
import GermanBeginsHead from "./GermanBeginsHead";
// import GermanBeginsImg from "./GermanBeginsImg";
// import GermanBeginsPoints from "./GermanBeginsPoints";
// import GermanPointsCards from "./GermanPointsCards";
import GermanBeginsMain from "./GermanBeginsMain";

const GermanBegins = () => {
  return (
    <div className="germanBeginsContainer">
      <GermanBeginsHead />
      <GermanBeginsMain/>
   </div>
  );
};

export default GermanBegins;
