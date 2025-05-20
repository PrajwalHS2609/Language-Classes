import React from "react";
import SocialVidCard from "./SocialVidCard";
import "./SocialVid.css";

const SocialVidMain = () => {
  return (
    <div className="socialVidMainContainer">
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/YoiDlbhZPfA" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/EGRqNOWUfB0" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/pZSkx1k3T04" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/D_nwBFf_bpE" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/gBVGP0z9Y_s" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/yVnvmNAv_ac" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/thG2PPxywu0" />
      </div>
      <div className="socialVidMainContent">
        <SocialVidCard vid="https://youtu.be/rZwQmlPMFtw" />
      </div>
    </div>
  );
};

export default SocialVidMain;
