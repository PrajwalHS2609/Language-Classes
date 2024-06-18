import React from "react";
import A2PageHead from "./A2PageHead";
import A2Main from "./A2Main";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import A2 from "./../../Media/A2.png"
import A1PageHead from "../A1Page/A1PageHead";
const A2Page = () => {
  return (
    <div>
      <A1PageHead img={A2} head="A2"/>
      <A2Main />
      <OnlineExam />
      <GermanBegins />
      <WhyUs />
      <SocialVid />
      <Reviews />
      <Benefits />
      <PrizmaMap />
    </div>
  );
};

export default A2Page;
