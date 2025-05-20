import React from "react";
import "./CoursesOnline.css";

const CourseOnlineCard = (props) => {
  return (
    <div className="courseOnlineCardContainer">
      <h3>{props.head}</h3>
      <ul>
      {props.items}
      </ul>
    </div>
  );
};

export default CourseOnlineCard;
