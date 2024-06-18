import React from "react";
import "./CourseDetails.css";
import CourseDetailsHead from "./CourseDetailsHead";
import CourseDetailsMenu from "./CourseDetailsMenu";
import CourseDetailsDisplay from "./CourseDetailsDisplay";
const CourseDetails = () => {
  return (
    <div className="courseDetailsContainer">
      <CourseDetailsHead />
      <div className="courseDetailsContent">
        <CourseDetailsMenu />
        <CourseDetailsDisplay />
      </div>
    </div>
  );
};

export default CourseDetails;
