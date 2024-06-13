import React from "react";
import banner from "./../../../Media/banner.mp4";
import "./HomeHeadingVid.css";
const HomeHeadingVid = () => {
  return (
    <div className="homeHeadingContainer">
      <video src={banner} autoPlay loop muted />
    </div>
  );
};

export default HomeHeadingVid;
