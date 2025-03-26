import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import Image1 from "../../assets/images/website 06.jpg";
import Image2 from "../../assets/images/website 01.jpg";
import Image3 from "../../assets/images/website 04.jpg";
import Image4 from "../../assets/images/website 03.jpg";

const projects = [
  {
    name: "Pencraft",
    year: "2023",
    align: "right",
    image: Image1,
    link: "#",
    pname: "Fiverr project",
  },
  {
    name: "E-Channelling_System",
    year: "2022",
    align: "left",
    image: Image2,
    link: "#",
    pname: "University Group project",
  },
  {
    name: "TECMIS",
    year: "2023",
    align: "right",
    image: Image3,
    link: "#",
    pname: "University Group project",
  },
  {
    name: "Time_Zone_Comparator",
    year: "2025",
    align: "left",
    image: Image4,
    link: "#",
    pname: "Individual project",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              pname={item.pname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
