import React from "react";
import "./A1Page.css";
import A1PageHead from "./A1PageHead";
import A1PageMain from "./A1PageMain";
import A1Flexibility from "./A1Flexibility";
import OnlineExam from "../OnlineExam/OnlineExam";
import CoursesOnline from "../CoursesOnline/CoursesOnline";
import GermanBegins from "../GermanBegins/GermanBegins";
import WhyUs from "../WhyUs/WhyUs";
import SocialVid from "../SocialVid/SocialVid";
import Reviews from "../Reviews/Reviews";
import GermanClasses from "../GermanClasses/GermanClasses";
import Benefits from "../Benefits/Benefits";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
const A1Page = () => {
  return (
    <div>
      <A1PageHead />
      <A1PageMain />
      <A1Flexibility/>
      <OnlineExam />
      <CoursesOnline />
      <GermanBegins />
      <WhyUs />
      <SocialVid />
      <Reviews />
      <GermanClasses />
      <Benefits />
      <PrizmaMap />
    </div>
  );
};

export default A1Page;
