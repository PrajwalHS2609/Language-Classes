import React from "react";
import "./A1Page.css";

const A1Train = (props) => {
  return (
    <div className="a1TrainContainer">
      <img
        src={props.img}
        alt=""
      />
      <h3>{props.head}</h3>
    </div>
  );
};

export default A1Train;
