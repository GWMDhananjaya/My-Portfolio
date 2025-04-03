import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";
import { useNavigate } from "react-router-dom";

const SingleProject = ({
  name,
  year,
  align,
  image,
  pname,
  videoLink,
  description,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/project-details", {
      state: { name, year, videoLink, description, pname },
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <button
          onClick={handleNavigate}
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center"
        >
          View <BiSolidRightTopArrowCircle />
        </button>
      </div>

      <div
        onClick={handleNavigate}
        className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 relative border border-white"
      >
        <img src={image} alt="project Image" className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-cyan bg-opacity-5 opacity-0 hover:opacity-40 transition-all duration-500 cursor-pointer">
          <p className="text-white text-lg font-bold">{pname}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
