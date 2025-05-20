import React from "react";
import HomeHeadingVid from "./HomeHeadingVid/HomeHeadingVid";
import CoursesBlock from "../CoursesBlock/CoursesBlock";
import CoursesOnline from "../CoursesOnline/CoursesOnline";
import GermanBegins from "../GermanBegins/GermanBegins";
import GermanClasses from "../GermanClasses/GermanClasses";
import Benefits from "../Benefits/Benefits";
import OnlineExam from "../OnlineExam/OnlineExam";
import WhyUs from "./../WhyUs/WhyUs";
import Trainers from "../Trainers/Trainers";
import SocialVid from "../SocialVid/SocialVid";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
import Reviews from "../Reviews/Reviews";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Best German Classes in Bangalore for Working Professionals & Students
        </title>
        <meta
          name="description"
          content="Best German Classes in Bangalore for Working Professionals & Students on Weekday & Weekends. Book A Demo Class Today!							"
        />
      </Helmet>
      <HomeHeadingVid />
      <CoursesBlock />
      <Trainers />
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

export default HomePage;
