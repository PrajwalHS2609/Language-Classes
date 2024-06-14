import React from "react";
import "./CoursesOnline.css";
import CoursesOnlineHead from "./CoursesOnlineHead";
import CourseOnlineMain from "./CourseOnlineMain";
import trainerBanner from "./../../Media/training.png";

const CoursesOnline = () => {
  return (
    <div className="coursesOnlineContainer">
      <div className="coursesOnlineExamCover">
        <CoursesOnlineHead />
        <CourseOnlineMain />
      </div>
      <img src={trainerBanner} alt="" />
    </div>
  );
};

export default CoursesOnline;
