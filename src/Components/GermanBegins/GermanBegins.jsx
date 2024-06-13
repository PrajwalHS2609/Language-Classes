import React from "react";
import "./GermanBegins.css";
import GermanBeginsHead from "./GermanBeginsHead";
import GermanBeginsImg from "./GermanBeginsImg";
import GermanBeginsPoints from "./GermanBeginsPoints";

const GermanBegins = () => {
  return (
    <div className="germanBeginsContainer">
      <GermanBeginsHead />
      <GermanBeginsImg />
      <GermanBeginsPoints />
    </div>
  );
};

export default GermanBegins;
