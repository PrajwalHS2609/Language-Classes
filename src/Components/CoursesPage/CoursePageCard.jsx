import React from "react";
import "./CoursesPage.css";
import { Link } from "react-router-dom";
const CoursePageCard = (props) => {
  return (
    <div className="coursePgCardContainer">
        <Link to={"/"}>
      <div className="coursePgCardWrapper">
        <div className="coursePgCardImg">
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className="coursePgCardHead">
          <h3>{props.head}</h3>
        </div>
        <div className="coursePgButton">Read More</div>
      </div>
      </Link>
    </div>
  );
};

export default CoursePageCard;
