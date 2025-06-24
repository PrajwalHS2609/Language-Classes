import React from "react";
import "./A1Page.css";
import A1Train from "./A1Train";
import FormMain from "../Form/FormMain";
import RespForm from "../Form/RespForm";
const A1PageHead = (props) => {
  return (
    <div className="a1HeadContainer">
      <div className="a1HeadImgContainer">
        <img src={props.img} alt="" />
        {/* <WhyBlock/> */}
        <div className="a1HeadFormContent">
          <FormMain />
        </div>
        <div className="a1HeadTextContent">
          <h2>
            {props.head} <span>GERMAN CLASSES</span> IN BANGALORE
          </h2>
        </div>
      </div>
      <div className="a1HeadContent1">
        <div className="a1HeadRespForm">
        <RespForm />
        </div>
        <h2>
          We train <span>Students</span> with all the aspects of the
          <span> Language</span>
        </h2>
      </div>
      <div className="a1HeadContent2">
        <A1Train
          img="https://prizmaacademy.com/wp-content/uploads/2021/10/open-book.png.webp"
          head="Reading"
        />
        <A1Train
          img="https://prizmaacademy.com/wp-content/uploads/2021/10/writing.png.webp"
          head="Writing"
        />
        <A1Train
          img="https://prizmaacademy.com/wp-content/uploads/2021/10/ear.png.webp"
          head="Listening"
        />
        <A1Train
          img="https://prizmaacademy.com/wp-content/uploads/2021/10/breathable.png.webp"
          head="Speaking"
        />
      </div>
    </div>
  );
};

export default A1PageHead;
