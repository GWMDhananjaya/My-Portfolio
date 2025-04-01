// w-11/12 sm:w-3/4 md:w-1/2
import React, { useState } from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";
import { IoIosCloseCircle } from "react-icons/io";

const SingleProject = ({
  name,
  year,
  align,
  image,

  pname,
  videoLink,
  description,
}) => {
  // State for popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setPopupVisible(!isPopupVisible);
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
          onClick={handlePopupToggle}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BiSolidRightTopArrowCircle />
        </button>
      </div>

      <div
        onClick={handlePopupToggle}
        className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 relative border border-white"
      >
        <div>
          <div className="w-full h-full absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>

          <img src={image} alt="project Image" className="w-full h-full" />

          <div className="absolute inset-0 flex items-center justify-center bg-cyan bg-opacity-5 opacity-0 hover:opacity-40 transition-all duration-500 cursor-pointer">
            <p className="text-white text-lg font-bold">{pname}</p>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-brown rounded-lg p-4 md:max-w-[800px] lg:max-w-[1200px] sm:max-w-[400px] ">
            <button
              onClick={handlePopupToggle}
              className="absolute top-2 right-2 text-red-500 font-bold text-xl "
            >
              <IoIosCloseCircle />
            </button>
            <h2 className="text-cyan text-3xl font-bold m-5">{name}</h2>
            <div className="flex lg:flex-row md:flex-col sm:flex-col gap-4 ml-5">
              <div className="w-full md:max-w-[700px] mb-8 sm:max-w-[400px] border-1 shadow-2xl">
                <iframe
                  width="100%" // For all screen sizes, the iframe will take full width
                  height="350px"
                  src={videoLink.replace("watch?v=", "embed/")}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="sm:w-[100%] sm:h-[100%] md:w-full md:h-[350px] transition-all duration-300" // Apply width and height for sm screens
                ></iframe>
              </div>

              <p className="text-white whitespace-pre-line lg:ml-3">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SingleProject;
