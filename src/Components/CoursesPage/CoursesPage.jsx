import React from "react";
import CoursePageMain from "./CoursePageMain";
import "./CoursesPage.css";
import CoursePgGermanClass from "./CoursePgGermanClass";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import GermanClasses from "../GermanClasses/GermanClasses";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
const CoursesPage = () => {
  return (
    <div className="coursesPageContainer">
      <div className="coursePageImg">
        <img
          src="https://images.unsplash.com/photo-1548783094-f92d7c8ae2d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="coursePgImgTxt">
          <h2>
            <span>German Language</span> Course in Bangalore
          </h2>
          <p>
            We prepare you to read, write, speak, listen and learn the grammar
            of the German language across several levels – A1 – B2. German
            Language Course in Bangalore is designed to prepare you to write
            certification exams. <a href="">Read More</a>
          </p>
          <div className="coursePgImgButton">
            <button>Enroll Now</button>
            <button>Speak To Advisor</button>
          </div>
        </div>
      </div>
      <CoursePgGermanClass />
      <CoursePageMain />
      <WhyUs />
      <SocialVid />
      <Reviews />
      <GermanClasses />
      <Benefits />
      <PrizmaMap />
    </div>
  );
};

export default CoursesPage;