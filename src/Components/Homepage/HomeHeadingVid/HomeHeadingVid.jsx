import React from "react";
import banner from "./../../../Media/banner.mp4";
import "./HomeHeadingVid.css";
import HomeHeadingVidTxt from "./HomeHeadingVidTxt";
import WhyBlock from './../../WhyBlock/WhyBlock';

const HomeHeadingVid = () => {
  return (
    <div className="homeHeadingContainer">
      <video src={banner} autoPlay loop muted />
      <HomeHeadingVidTxt/>
      <WhyBlock/>
    </div>
  );
};

export default HomeHeadingVid;
