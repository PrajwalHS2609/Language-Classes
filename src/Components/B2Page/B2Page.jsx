import React from "react";
import B2 from "./../../Media/B2.png";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import A1PageHead from "../A1Page/A1PageHead";
import B2Main from "./B2Main.jsx";
import B2Flexibility from "./B2Flexibility.jsx";
import B2Why from "./B2Why/B2Why.jsx";
import { Helmet } from "react-helmet";
import B2Benefits from "./B2Benefits/B2Benefits.jsx";

const B2Page = () => {
  return (
    <div>
      <Helmet>
        <title>
          B2 Level German Classes in Bangalore | B2 German Course Near Me
        </title>
        <meta
          name="description"
          content="B2 German Classes in Bangalore for Working Professionals & Students on Weekday & Weekends at Affordable Price."
        />
      </Helmet>
      <A1PageHead img={B2} head="B2" />
      <B2Main />
      <B2Flexibility />
      <B2Why />
      <OnlineExam />
      <GermanBegins />
      <WhyUs />
      <SocialVid />
      <Reviews />
      <B2Benefits />
      <PrizmaMap />
    </div>
  );
};

export default B2Page;
