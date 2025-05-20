import React from "react";
import "./OnlineExam.css";

const OnlineExamCard = (props) => {
  return (
    <div className="onlineExamCard">
      <ul>
        <h3>{props.head}</h3>
        <li>{props.lists}</li>
        
      </ul>
    </div>
  );
};

export default OnlineExamCard;
