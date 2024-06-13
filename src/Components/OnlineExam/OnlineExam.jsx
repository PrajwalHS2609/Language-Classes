import React from "react";
import "./OnlineExam.css";
import OnlineExamHead from "./OnlineExamHead";
import OnlineExamMain from "./OnlineExamMain";
const OnlineExam = () => {
  return (
    <div className="onlineExamContainer">
      <OnlineExamHead />
      <OnlineExamMain />
    </div>
  );
};

export default OnlineExam;
