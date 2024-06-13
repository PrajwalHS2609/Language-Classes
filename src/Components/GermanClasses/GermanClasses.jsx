import React from "react";
import "./GermanClasses.css";
import GermanClassesPara from "./GermanClassesPara";
const GermanClasses = () => {
  return (
    <div className="germanClassesContainer">
      <div className="germanClassesHead">
        <h1><span>German Classes</span> in Bangalore for Student & Working Professionals</h1>
      </div>
      <GermanClassesPara />
    </div>
  );
};

export default GermanClasses;
