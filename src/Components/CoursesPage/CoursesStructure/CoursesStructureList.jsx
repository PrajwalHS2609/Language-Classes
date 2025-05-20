import React from "react";
import "./CoursesStructure.css"
const CoursesStructureList = () => {
  return (
    <>
      <ul>
        <li>
          <span>A1 Level:</span> This is the beginner level where students learn
          basic phrases and expressions. The focus is on everyday communication,
          introducing oneself, and simple conversations.
        </li>
        <li>
          <span> A2 Level:</span> At this level, students expand their
          vocabulary and understanding of basic grammar. They learn to handle
          everyday tasks and describe their background, environment, and
          immediate needs.
        </li>
        <li>
          <span> B1 Level:</span> Intermediate learners at this level can
          understand the main points of clear standard input on familiar
          matters. They can deal with most situations likely to arise while
          traveling in a German-speaking area.
        </li>
        <li>
          <span> B2 Level:</span> This upper-intermediate level focuses on
          understanding the main ideas of complex texts. Students can interact
          with a degree of fluency and spontaneity with native speakers.
        </li>
        <li>
          <span> C1 and C2 Levels:</span> These advanced levels aim at achieving
          near-native fluency. Students can express ideas fluently and
          spontaneously without much obvious searching for expressions. They can
          produce clear, well-structured, detailed text on complex subjects.
        </li>
      </ul>
    </>
  );
};

export default CoursesStructureList;
