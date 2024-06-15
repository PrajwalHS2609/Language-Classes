import React from "react";
import "./CoursesOnline.css";
import CoursesOnlineHead from "./CoursesOnlineHead";
import CourseOnlineMain from "./CourseOnlineMain";
import GermanOnline from "./../../Media/GermanOnline.png";

const CoursesOnline = () => {
  return (
    <div className="coursesOnlineContainer">
      <div className="coursesOnlineExamCover">
        <CoursesOnlineHead />
        <CourseOnlineMain />
      </div>
      <img src={GermanOnline} alt="" />
    </div>
  );
};

export default CoursesOnline;
