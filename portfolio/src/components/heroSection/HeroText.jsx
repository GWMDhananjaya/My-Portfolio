import React from "react";

const heroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        MERN Stack Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Dhananjaya Rupasinghe
      </h1>
      <p className="text-lg mt-4 text-white">
        UG Software Engineering student passionate about
        <br />
        coding and problem-solving.
      </p>
    </div>
  );
};

export default heroText;
