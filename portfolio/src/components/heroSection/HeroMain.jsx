import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </div>
  );
};

export default HeroMain;
