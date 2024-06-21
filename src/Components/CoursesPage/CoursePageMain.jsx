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
      <CoursePageCard img={a1Lvl} head="German Course Level A1" link="/a1" />
      <CoursePageCard img={a2Lvl} head="German Course Level A2" link="/a2" />
      <CoursePageCard img={b1Lvl} head="German Course Level  B1" link="/b1" />
      <CoursePageCard img={b2Lvl} head="German Course Level B2" link="/b2" />
      <CoursePageCard img={c1Lvl} head="German Course Level C1" link="/c1" />
      <CoursePageCard img={c2Lvl} head="German Course Level C2" link="/c2" />
    </div>
  );
};

export default CoursePageMain;
