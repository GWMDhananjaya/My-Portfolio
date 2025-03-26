import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";
import { TypeAnimation } from "react-type-animation";

const heroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="lg:text-xl sm:text-[8px] uppercase text-cyan  lg:block"
      >
        <TypeAnimation
          sequence={[
            "I am a MERN Stack Developer",
            1000,
            "I am a Frontend Developer",
            1000,
            "I am a Backend Developer",
            1000,
            "I am a Full-Stack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        {/* MERN Stack Developer */}
      </motion.div>

      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Dhananjaya <span className="sm:hidden lg:inline">Rupasinghe</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="text-lg mt-2 sm:mb-5 text-white"
      >
        UG Software Engineering student
        <br />
        passionate about coding and problem-solving.
      </motion.p>
    </div>
  );
};

export default heroText;
