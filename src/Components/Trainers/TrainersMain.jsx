import React from "react";
import TrainersCard from "./TrainersCard";

const TrainersMain = () => {
  let list1 = [
    <li>Personalized mentoring and support</li>,
    <li>Maximum flexibility in scheduling</li>,
    <li>Courses can start anytime</li>,
    <li>Levels: A1-C1</li>,
  ];
  let list2 = [
    <li>Personalized, engaging exercises</li>,
    <li>Practice speaking German in live sessions</li>,
    <li>Courses start on scheduled dates</li>,
    <li>Available levels: A1-C2</li>,
  ];
  return (
    <div className="trainersMainContainer">
      <TrainersCard head="German Course 1:1 Session" list={list1} />
      <TrainersCard head="German Course in Small Groups" list={list2} />
    </div>
  );
};

export default TrainersMain;
