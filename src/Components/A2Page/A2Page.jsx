import React from "react";
import A2Main from "./A2Main";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import A2 from "./../../Media/A2.png";
import A1PageHead from "../A1Page/A1PageHead";
import A2Flexibility from "./A2Flexibility";
import A2Why from "./A2Why/A2Why";
import { Helmet } from "react-helmet";
const A2Page = () => {
  return (
    <div>
      <Helmet>
        <title>A2 Level German Classes in Bangalore | A2 German Course Near Me</title>
        <meta name="description" content="A2 German Classes in Bangalore for Working Professionals & Students on Weekday & Weekends at Affordable Price." />
      </Helmet>
      <A1PageHead img={A2} head="A2" />
      <A2Main />
      <A2Flexibility />
      <A2Why />
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
