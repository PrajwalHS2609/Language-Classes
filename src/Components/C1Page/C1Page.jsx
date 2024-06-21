import React from "react";
import "./C1Page.css";
import C1 from "./../../Media/C1.png";
import A1PageHead from "../A1Page/A1PageHead";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import C1Main from "./C1Main";
import C1Flexibility from './C1Flexibility';
import C1Why from "./C1WhyPage/C1Why";
const C1Page = () => {
  return (
    <div>
      <A1PageHead img={C1} head="C1" />
      <C1Main />
      <C1Flexibility/>
      <C1Why/>
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

export default C1Page;
