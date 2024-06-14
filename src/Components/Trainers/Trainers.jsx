import React from "react";
import "./Trainers.css";
import trainerBanner from "./../../Media/training.png";
import TrainersHead from "./TrainersHead";
import TrainersMain from "./TrainersMain";
const Trainers = () => {
  return (
    <div className="trainerContainer">
      <div className="trainerCover">
        <TrainersHead />
        <TrainersMain/>
      </div>
      <img src={trainerBanner} alt="" />
    </div>
  );
};

export default Trainers;
