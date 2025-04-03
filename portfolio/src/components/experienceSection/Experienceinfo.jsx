import React from "react";

const Experienceinfo = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <p className="font-bold text-6xl text-cyan ">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

export default Experienceinfo;
