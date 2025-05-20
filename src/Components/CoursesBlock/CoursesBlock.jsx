import React from "react";
import "./CoursesBlock.css";
import CoursesBlockCard from "./CoursesBlockCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";
const CoursesBlock = () => {
  let handlePop = (e) => {
    e.preventDefault();
    let popUp = document.querySelector(".formCover");
    popUp.style.display = "flex";
  };
  return (
    <div className="coursesBlockContainer">
      <div className="coursesBlockContent">
        <CoursesBlockCard
          head="A1 German language"
          para="Trained 5000+ Learners"
        />
        <CoursesBlockCard
          head="A2 German language"
          para="Trained 2800+ Learners"
        />
        <CoursesBlockCard
          head="B1 German language"
          para="Trained 600+ Learners"
        />
        <CoursesBlockCard
          head="B2 German language"
          para="Trained 450+ Learners"
        />
        <CoursesBlockCard
          head="C1 German language"
          para="Trained 130+ Learners"
        />
        <CoursesBlockCard
          head="C2 German language"
          para="Trained 75+ Learners"
        />
        <CoursesBlockCard
          head="Intensive Course"
          para="Trained 800+ Learners"
        />
        <CoursesBlockCard
          head="Superintensive Course"
          para="Trained 450+ Learners"
        />
        <CoursesBlockCard head="Blended Learning" para="Trained 1200+ Tutors" />
        <CoursesBlockCard
          head="Exam Preperation Courses"
          para="Trained 7500+ Learners"
        />
        <CoursesBlockCard
          head="Specialised Courses"
          para="Trained 3600+ Learners"
        />
        <CoursesBlockCard head="Kids Courses" para="Trained 600+ Learners" />
        <div className="coursesBlockButton">
          <button onClick={handlePop}>
            Book Now
            <span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="bookIcon"
              ></FontAwesomeIcon>
            </span>
          </button>
        </div>
        <Form/>
      </div>
    </div>
  );
};

export default CoursesBlock;
