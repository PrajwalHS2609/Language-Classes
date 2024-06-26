import React from "react";
import "./TeachingMethod.css";
import tick from "./../../../Media/checked.png";
const TeachingMethod = () => {
  return (
    <div className="teachingMethodContainer">
      <h2>
        <span>Teaching</span> Methodology
      </h2>
      <p>
        At Prizma Academy, the German course in Bangalore employs a blend of
        traditional and modern teaching techniques:
      </p>
      <ul>
        <li>
          <img src={tick} alt="" />
          <h3>Interactive Classes:</h3>
          <p>
            Classes are interactive, ensuring active student participation.
            Role-playing, group discussions, and interactive exercises are
            integral parts of the curriculum.
          </p>
        </li>
        <li>
          <img src={tick} alt="" />
          <h3>Multimedia Resources:</h3>{" "}
          <p>
            The use of multimedia resources like videos, audio clips, and online
            platforms enhances the learning experience.
          </p>
        </li>
        <li>
          <img src={tick} alt="" />
          <h3>Practical Application:</h3>{" "}
          <p>
            Real-life scenarios and practical applications of language skills
            are emphasized to ensure students can use German effectively in
            everyday situations.
          </p>
        </li>
        <li>
          <img src={tick} alt="" />
          <h3>Regular Assessments:</h3> Regular tests and assessments help track
          progress and identify areas for improvement.
        </li>
      </ul>
    </div>
  );
};

export default TeachingMethod;
