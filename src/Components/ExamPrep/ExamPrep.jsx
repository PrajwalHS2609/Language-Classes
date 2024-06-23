import React from "react";
import "./ExamPrep.css";
import ExamPrepHead from "./ExamPrepHead";
import ExamPrepMain from "./ExamPrepMain";
const ExamPrep = () => {
  return (
    <div className="examPrepContainer">
      <div className="examPrepContainerCover"></div>
      <img
        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <ExamPrepHead />
      <ExamPrepMain />
    </div>
  );
};

export default ExamPrep;
