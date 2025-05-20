import React from "react";
import "./CoursesPage.css";
import CoursePageCard from "./CoursePageCard";
import a1Lvl from "./../../Media/A1 Level.png";
import a2Lvl from "./../../Media/A2 Level.png";
import b1Lvl from "./../../Media/B1 Level.png";
import b2Lvl from "./../../Media/B2 Level.png";
import c1Lvl from "./../../Media/C1 Level.png";
import c2Lvl from "./../../Media/C2 Level.png";
const CoursePageMain = () => {
  return (
    <div className="coursePgMainContainer">
      <CoursePageCard
        img={a1Lvl}
        head="German Course A1 Level"
        link="/a1-german-course"
        level="Beginner Level"
      />
      <CoursePageCard
        img={a2Lvl}
        head="German Course A2 Level"
        link="/a2-german-course"
        level="Beginner Level"
      />
      <CoursePageCard
        img={b1Lvl}
        head="German Course B1 Level"
        link="/b1-german-course"
        level="Intermediate Level"
      />
      <CoursePageCard
        img={b2Lvl}
        head="German Course B2 Level"
        link="/b2-german-course"
        level="Intermediate Level"
      />
      <CoursePageCard
        img={c1Lvl}
        head="German Course C1 Level"
        link="/c1-german-course"
        level="Advance Level"
      />
      <CoursePageCard
        img={c2Lvl}
        head="German Course C2 Level"
        link="/c2-german-course"
        level="Advance Level"
      />
    </div>
  );
};

export default CoursePageMain;
