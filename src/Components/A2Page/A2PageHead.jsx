import React from "react";
import "./A2Page.css";
import FormMain from "../Form/FormMain";
import A2 from "./../../Media/A2.png"
import A1Train from './../A1Page/A1Train';
import RespForm from "../Form/RespForm";
const A2PageHead = () => {
  return (
    <div className="a2HeadContainer">
      <div className="a2HeadImgContainer">
        <img src={A2} alt="" />
        <div className="a2HeadFormContent">
          <FormMain />
        </div>
        <div className="a2HeadTextContent">
          <h2>
            A2 <span>German classes</span> in Bangalore
          </h2>
        </div>
      </div>

      <div className="a2HeadContent1">
        <h2>
          We train <span>Students</span> with all the aspects of the
          <span> Language</span>
        </h2>
      </div>
      <div className="a2HeadContent2">
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

export default A2PageHead;
