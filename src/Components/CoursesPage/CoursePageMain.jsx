import React from "react";
import "./CoursesPage.css";
import CoursePageCard from "./CoursePageCard";

const CoursePageMain = () => {
  return (
    <div className="coursePgMainContainer">
      <CoursePageCard
        img={
          "https://scuola.vamtam.com/wp-content/uploads/2020/01/h-77-453x453.jpg"
        }
        head="German Course Level A1"
        link="/a1"
      />
      <CoursePageCard
        img={
          "https://scuola.vamtam.com/wp-content/uploads/2020/03/campaign-creators-K1Sq9qG-c70-unsplash-453x453.jpg"
        }
        head="German Course Level A2"
        link="/a2"
      />
      <CoursePageCard
        img={
          "https://scuola.vamtam.com/wp-content/uploads/2020/01/h-69-466x466.jpg"
        }
        head="German Course Level  B1"
        link="/b1"
      />
      <CoursePageCard
        img={
          "https://scuola.vamtam.com/wp-content/uploads/2020/01/h-77-453x453.jpg"
        }
        head="German Course Level B2"
        link="/b2"
      />
      <CoursePageCard
        img={
          "https://scuola.vamtam.com/wp-content/uploads/2020/03/campaign-creators-K1Sq9qG-c70-unsplash-453x453.jpg"
        }
        head="German Course Level C1"
        link="/c1"
      />
      <CoursePageCard
        img={
          "https://scuola.vamtam.com/wp-content/uploads/2020/01/h-69-466x466.jpg"
        }
        head="German Course Level C2"
        link="c2"
      />
    </div>
  );
};

export default CoursePageMain;
