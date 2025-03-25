import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import Image from "./website-img-3.jpg";

const projects = [
  {
    name: "xxxx",
    year: "2020",
    image: Image,
    link: "#",
  },
  {
    name: "xaxa",
    year: "2002",
    image: Image,
    link: "#",
  },
  {
    name: "xaxa",
    year: "2020",
    image: Image,
    link: "#",
  },
  {
    name: "xaxa",
    year: "2020",
    image: Image,
    link: "#",
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
