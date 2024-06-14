import React from "react";
import "./WhyBlock.css";
import WhyBlockCard from "./WhyBlockCard";
const WhyBlock = () => {
  return (
    <div className="whyBlockContainer">
       <WhyBlockCard para="10+ Years " />
      <WhyBlockCard para="6000+ Students" />
      <WhyBlockCard para="95% in A1 & A2" />
      <WhyBlockCard para="1400+ Reviews" />
    </div>
  );
};

export default WhyBlock;
