import React from "react";
import Experienceinfo from "./Experienceinfo";

const ExperiencetopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p
        className="text-orange font-bold uppercase text-3xl font-special text-center
      "
      >
        Since 2023
      </p>
      <div className="flex justify-center item-center gap-4 ">
        <Experienceinfo number="41" text="Projects" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <Experienceinfo number="28" text="Clients" />
      </div>
      <p className="text-center text-white">
        Freelance developer with 1.5+ years of experience in MERN, C#, Java,
        C++, Python, and databases.
      </p>
      <Experienceinfo number="27" text="Reviews" />
    </div>
  );
};

export default ExperiencetopLeft;
