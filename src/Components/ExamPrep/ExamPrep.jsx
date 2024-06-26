import React from "react";
import "./ExamPrep.css";
import ExamPrepHead from "./ExamPrepHead";
import ExamPrepMain from "./ExamPrepMain";
import ExamPara from "./ExamPrepPara";
import ExamPrepPattern from "./ExamPrepPattern";
import ExamPrepFooter from "./ExamPrepFooter";
const ExamPrep = () => {
  return (
    <div className="examPrepContainer">
      <div className="examPrepContent1">
        <ExamPrepHead />
        <ExamPara/>
        <ExamPrepPattern/>
      </div>
      <div className="examPrepContent2">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
              <ExamPrepMain/>

      </div>
      <div className="examPrepContent3">
        <ExamPrepFooter/>
      </div>
    </div>
  );
};

export default ExamPrep;
