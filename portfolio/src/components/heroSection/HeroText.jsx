import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const heroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        MERN Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Dhananjaya Rupasinghe
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="text-lg mt-4 text-white"
      >
        UG Software Engineering student passionate about
        <br />
        coding and problem-solving.
      </motion.p>
    </div>
  );
};

export default heroText;
