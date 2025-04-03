import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Node",
    icon: FaNodeJs,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Flutter",
    icon: FaFlutter,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex item-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amout: 0 }}
            >
              <SingleSkill text={item.text} imgSvg={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
