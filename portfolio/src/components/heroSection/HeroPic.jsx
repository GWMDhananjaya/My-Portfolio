import React from "react";
import { FaCentercode } from "react-icons/fa";
import Mainpic from "../../assets/images/main.jpg";

const HeroPic = () => {
  return (
    <div className="h-full flex item-center justify-center">
      <img
        id="home"
        src={Mainpic}
        alt="dhananjaya image"
        className="max-h-[350px] w-auto "
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse ">
        <FaCentercode className="md:h-[90%] sm:h-[120%] min-h-[360px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
