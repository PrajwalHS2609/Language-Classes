import React from "react";
import HomeHeadingVid from "./HomeHeadingVid/HomeHeadingVid";
import CoursesBlock from "../CoursesBlock/CoursesBlock";
import CoursesOnline from "../CoursesOnline/CoursesOnline";
import GermanBegins from "../GermanBegins/GermanBegins";
import GermanClasses from "../GermanClasses/GermanClasses";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer";
import OnlineExam from "../OnlineExam/OnlineExam";
import WhyUs from "./../WhyUs/WhyUs";
import Trainers from "../Trainers/Trainers";
import SocialVid from "../SocialVid/SocialVid";
import PrizmaMap from "../PrizmaMap/PrizmaMap";

const HomePage = () => {
  return (
    <div>
      <HomeHeadingVid />
      <CoursesBlock />
      <Trainers />
      <OnlineExam />
      <CoursesOnline />
      <GermanBegins />
      <WhyUs />
      <SocialVid />
      <GermanClasses />
      <Benefits />
      <PrizmaMap/>
      <Footer />
    </div>
  );
};

export default HomePage;
