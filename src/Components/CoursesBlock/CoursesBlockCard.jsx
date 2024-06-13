import React from "react";
import "./CoursesBlock.css";
const CoursesBlockCard = (props) => {
  return (
    <div className="coursesBlockCardContainer">
      <div className="coursesBlockCardContent">
        <p>DE</p>
      </div>
      <h4>
        <a href="">{props.head}</a>
      </h4>
      <p>
        <a href="">{props.para}</a>
      </p>
    </div>
  );
};

export default CoursesBlockCard;
