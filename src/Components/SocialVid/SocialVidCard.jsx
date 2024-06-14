import React from "react";
import { YouTubeEmbed } from "react-social-media-embed";

const SocialVidCard = () => {
  return (
    <div className="socialVidCardContainer">
      <YouTubeEmbed
        url="https://www.youtube.com/watch?v=HpVOs5imUN0"
        width={325}
        height={220}
      />
    </div>
  );
};

export default SocialVidCard;
