import React from "react";
import banner from "./../../../Media/banner.mp4";
import "./HomeHeadingVid.css";
import HomeHeadingVidTxt from "./HomeHeadingVidTxt";
const HomeHeadingVid = () => {
  return (
    <div className="homeHeadingContainer">
      <video src={banner} autoPlay loop muted />
      <HomeHeadingVidTxt/>
    </div>
  );
};

export default HomeHeadingVid;
