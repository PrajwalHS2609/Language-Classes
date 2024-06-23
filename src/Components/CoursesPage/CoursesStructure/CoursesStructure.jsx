import React from "react";
import "./CoursesStructure.css";
import courseLvl from "./../../../Media/germanCoursesLvl.png";
import CoursesStructureList from "./CoursesStructureList";
const CoursesStructure = () => {
  return (
    <div className="coursesStrContainer">
      <h2>
        Course <span>Structure</span> and <span>Curriculum</span>
      </h2>
      <p>
        Prizma Academy’s German course in Bangalore is designed to cater to
        different proficiency levels, from beginners to advanced learners.
        Here’s a breakdown of what you can expect:
      </p>
      <div className="coursesStrWrapper">
        <div className="coursesStrContent">
          <img src={courseLvl} alt="germanCoursesLvl" />
        </div>
        <div className="coursesStrContent">
        <CoursesStructureList/>
        </div>
      </div>
    </div>
  );
};

export default CoursesStructure;
