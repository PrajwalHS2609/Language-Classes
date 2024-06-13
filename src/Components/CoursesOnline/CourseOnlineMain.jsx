import React from "react";
import "./CoursesOnline.css";
import CourseOnlineCard from "./CourseOnlineCard";
const CourseOnlineMain = () => {
  let list1 = [
    <li>Interactive group exercises</li>,
    <li>Speak German in Live Sessions</li>,
    <li>Course start on fixed dates</li>,
    <li>Levels: A1-C2</li>,
  ];
  let list2 = [
    <li>German Individual Online</li>,
    <li>Individual mentoring and support</li>,
    <li>Maximum flexibility in terms of timing</li>,
    <li>Course start is possible at any time</li>,
    <li>Levels: A1-C1</li>,
  ];
  let list3 = [
    <li>Intensive German Online</li>,
    <li>High learning intensity through daily lessons</li>,
    <li>75 lessons in total</li>,
    <li>Learning goals are achieved quickly thanks to intensive support</li>,
    <li>Regular examination options</li>,
  ];
  return (
    <div className="courseOnlineMainContainer">
      <CourseOnlineCard head="Online German Course in Group" items={list1} />
      <CourseOnlineCard head="Online German Course - 1 on 1" items={list2} />
      <CourseOnlineCard head="Online German Course - Intensive" items={list3} />
    </div>
  );
};

export default CourseOnlineMain;
