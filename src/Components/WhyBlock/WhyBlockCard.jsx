import React from "react";
import "./WhyBlock.css";
import star from "./../../Media/star.png"
const WhyBlockCard = (props) => {
  return (
    <div className="whyBlockCardContainer">
      <div className="whyBlockCardContent1">
        <img src={star} alt="" />
      </div>
      <div className="whyBlockCardContent2">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default WhyBlockCard;
