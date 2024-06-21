import React from "react";
import A1PageHead from "../A1Page/A1PageHead";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Benefits from "../Benefits/Benefits";
import Reviews from "../Reviews/Reviews";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import C2 from "./../../Media/C2.png"
import C2Main from "./C2Main";
import C2Flexibility from './C2Flexibility';
import C2Why from "./C2Why/C2Why";
const C2Page = () => {
  return (
    <div>
      <A1PageHead img={C2} head="C2" />
      <C2Main />
      <C2Flexibility/>
      <C2Why/>
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

export default C2Page;
