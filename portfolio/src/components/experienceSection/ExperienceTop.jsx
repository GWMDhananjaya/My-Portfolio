import React from "react";
import ExperiencetopLeft from "./ExperiencetopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRignt from "./ExperienceTopRignt";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col justify-center items-center">
      <ExperiencetopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRignt />
    </div>
  );
};

export default ExperienceTop;
