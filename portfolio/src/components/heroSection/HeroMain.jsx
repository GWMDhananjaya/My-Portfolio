import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <HeroText />
      <HeroPic />
    </div>
  );
};

export default HeroMain;
