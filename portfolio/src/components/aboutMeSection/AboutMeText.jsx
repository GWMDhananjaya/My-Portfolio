import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-4xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm a passionate Software Engineering undergraduate at the University of
        Ruhuna, specializing in the MERN stack (MongoDB, Express.js, React,
        Node.js). I love coding, problem-solving, and building efficient web
        applications. Always eager to learn, innovate, and contribute to
        real-world projects.
      </p>
      <div className="flex gap-6 ">
        <button className="border border-orange rounded-full py-2 px-4 flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
          My Projects
        </button>
        <button className="border border-orange rounded-full py-2 px-4 flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
