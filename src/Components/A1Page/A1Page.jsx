import React from "react";
import "./A1Page.css";
import A1PageHead from "./A1PageHead";
import A1PageMain from "./A1PageMain";
import A1Flexibility from "./A1Flexibility";
import OnlineExam from "../OnlineExam/OnlineExam";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import A1 from "./../../Media/A1.png";
import { Helmet } from "react-helmet";

const A1Page = () => {
  return (
    <div>
      <Helmet>
        <title>
          A1 Level German Classes in Bangalore | German Course for Beginners
        </title>
        <meta
          name="description"
          content="A1 German Classes in Bangalore for Working Professionals & Students on Weekday & Weekends. Book A Demo Class Today!"
        />
      </Helmet>
      <A1PageHead img={A1} head="A1" />
      <A1PageMain />
      <A1Flexibility />
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

export default A1Page;
