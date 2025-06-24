import React from "react";
import "./C1Page.css";
import C1 from "./../../Media/C1.png";
import A1PageHead from "../A1Page/A1PageHead";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import C1Main from "./C1Main";
import C1Flexibility from "./C1Flexibility";
import C1Why from "./C1WhyPage/C1Why";
import { Helmet } from "react-helmet";
import C1Benefits from "./C1Benefits/C1Benefits";
const C1Page = () => {
  return (
    <div>
      <Helmet>
        <title>
          C1 Level German Classes in Bangalore | B2 German Course Near Me
        </title>
        <meta
          name="description"
          content="C1 German Classes in Bangalore for Working Professionals & Students on Weekday & Weekends at Affordable Price."
        />
      </Helmet>
      <A1PageHead img={C1} head="C1" />
      <C1Main />
      <C1Flexibility />
      <C1Why />
      <OnlineExam />
      <GermanBegins />
      <WhyUs />
      <SocialVid />
      <Reviews />
      <C1Benefits />
      <PrizmaMap />
    </div>
  );
};

export default C1Page;
