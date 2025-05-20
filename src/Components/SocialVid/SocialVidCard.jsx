import React from "react";
// import ReactPlayer from "react-player";
import "./SocialVid.css";
import { YouTubeEmbed } from "react-social-media-embed";

const SocialVidCard = (props) => {
  return (
    <>
      <div className="socialVidCardContainer">
        {/* <ReactPlayer url={props.vid} height={350} className="ytVid" /> */}
        <YouTubeEmbed url={props.vid} height={280} width={500} />
      </div>
      <div className="respSocialVidCardContainer">
        {/* <ReactPlayer
          url={props.vid}
          height={220}
          width={400}
          className="ytVid"
        /> */}
        <YouTubeEmbed
          url={props.vid}
          height={170}
          width={300}
          className="ytVid"
        />
      </div>
      <div className="respSocialVidCardContainer2">

        <YouTubeEmbed
          url={props.vid}
          height={200}
          width={400}
          className="ytVid"
        />
      </div>
    </>
  );
};

export default SocialVidCard;
