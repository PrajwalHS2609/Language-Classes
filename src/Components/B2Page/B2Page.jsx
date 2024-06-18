import React from "react";
import B2 from "./../../Media/B2.png";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import A1PageHead from "../A1Page/A1PageHead";
import B2Main from "./B2Main.jsx";

const B2Page = () => {
  return (
    <div>
      <A1PageHead img={B2} head="B2" />
      <B2Main />
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

export default B2Page;
