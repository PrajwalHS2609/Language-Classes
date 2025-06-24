import React from "react";
import FormMain from "../Form/FormMain";
import RespForm from "../Form/RespForm";
import "./SlugPage.css"
const SlugHeader = (props) => {
  return (
    <div className="a1HeadContainer">
      <div className="a1HeadImgContainer">
        <img src={props.img} alt="" />
        {/* <WhyBlock/> */}
        <div className="a1HeadFormContent">
          <FormMain />
        </div>
        <div className="a1HeadTextContent">
          <h2>{props.head}</h2>
        </div>
      </div>
      <div className="a1HeadContent1">
        <div className="a1HeadRespForm">
          <RespForm />
        </div>
      </div>
    </div>
  );
};

export default SlugHeader;
