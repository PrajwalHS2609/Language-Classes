import React from "react";
import "./CoursesBlock.css";
const CoursesBlockCard = (props) => {
  return (
    <div className="coursesBlockCardContainer">
      <div className="coursesBlockCardContent">
        <p className="coursesBlockCardPara">DE</p>
      </div>
      <h4 className="coursesBlockCardPara">
        <a href="/">{props.head}</a>
      </h4>
      <p className="coursesBlockCardPara">
        <a href="/">{props.para}</a>
      </p>
    </div>
  );
};

export default CoursesBlockCard;
