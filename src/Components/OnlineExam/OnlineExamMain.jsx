import React from "react";
import "./OnlineExam.css";
import OnlineExamCard from "./OnlineExamCard";
const OnlineExamMain = () => {
  let list1 = [
    <li>Intensive preparation in a group setting</li>,
    <li>20-hour course (conducted on Zoom or at the institute)</li>,
    <li>Receive direct feedback from a Prizma Academy teacher</li>,
    <li>Available for levels A1, A1 B1, B2, C1, C2</li>,
  ];
  let list2 = [
    <li>Self-directed learning</li>,
    <li>60 units supported on the learning platform</li>,
    <li>3 live sessions as a group (conducted on Zoom)</li>,
    <li>Written feedback provided by your Prizma Academy teacher</li>,
  ];
  return (
    <div className="onlineExamMainContainer">
      <OnlineExamCard head="Group Setting Exam Preparation" lists={list1} />
      <OnlineExamCard
        head="Online Individual B1 Exam Preparation"
        lists={list2}
      />
    </div>
  );
};

export default OnlineExamMain;
