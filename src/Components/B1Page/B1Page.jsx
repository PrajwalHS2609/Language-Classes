import React from "react";
import B1Main from "./B1Main";
import B1 from "./../../Media/B1.png";
import A1PageHead from "../A1Page/A1PageHead";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import B1Flexibility from "./B1Flexibility";
import B1Why from "./B1Why/B1Why";
import { Helmet } from "react-helmet";
const B1Page = () => {
  return (
    <div>
      <Helmet>
        <title>
          B1 Level German Classes in Bangalore | B1 German Course Near Me
        </title>
        <meta
          name="description"
          content="B1 German Classes in Bangalore for Working Professionals & Students on Weekday & Weekends at Affordable Price."
        />
      </Helmet>
      <A1PageHead img={B1} head="B2" />
      <B1Main />
      <B1Flexibility />
      <B1Why />
      <OnlineExam />
      <GermanBegins />
      <WhyUs />
      <SocialVid />
      <Reviews />
      <Benefits />
      <PrizmaMap />{" "}
    </div>
  );
};

export default B1Page;
