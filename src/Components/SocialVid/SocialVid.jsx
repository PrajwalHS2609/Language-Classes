import React from "react";
import SocialVidMain from "./SocialVidMain";
import SocialVidHead from "./SocialVidHead";
import "./SocialVid.css"
const SocialVid = () => {
  return (
    <div className="socialVidContainer">
      <SocialVidHead />
      <SocialVidMain />
    </div>
  );
};

export default SocialVid;
