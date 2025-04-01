import React, { useState } from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import Image1 from "../../assets/images/website 06.jpg";
import Image2 from "../../assets/images/website 01.jpg";
import Image3 from "../../assets/images/website 04.jpg";
import Image4 from "../../assets/images/pfms.png";
import Image5 from "../../assets/images/java.png";
import Image6 from "../../assets/images/BorcelleHealthService.png";
import Image7 from "../../assets/images/website 03.jpg";
import Image8 from "../../assets/images/color.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const projects = [
  {
    name: "Pencraft",
    year: "2023",
    align: "right",
    image: Image1,
    link: "#",
    pname: "Fiverr project",
    description:
      "Pencruft is a sleek, modern blog platform designed for seamless content creation and sharing. Built with the power of React and Node.js, it offers a smooth and intuitive experience for bloggers of all kinds. Whether you're sharing thoughts, insights, or stories, Pencruft ensures a distraction-free and engaging writing environment.\n\n🛠 Tech Stack:\n🔹 Frontend: React, React Router, Axios\n🔹 Backend: Node.js, Express.js\n🔹 Database: MongoDB\n🔹 Authentication: JSON Web Tokens (JWT)\n🔹 Styling: Tailwind CSS",
    videoLink: "https://www.youtube.com/watch?v=TdR9UIblUQU",
  },
  {
    name: "E-Channelling_System",
    year: "2022",
    align: "left",
    image: Image2,
    link: "#",
    pname: "Group project",
    description:
      "E-Channelling System project! This application is designed to provide a user-friendly platform for scheduling appointments with healthcare professionals. Built using HTML and CSS, it focuses on delivering a clean and responsive interface to ensure a seamless user experience across various devices.\n\nFeatures\nResponsive Design: The layout adjusts to different screen sizes, including mobile and desktop.\nUser-Friendly Interface: Simple and intuitive design for easy navigation and appointment scheduling.\nTechnologies Used\nHTML: Markup language used for structuring the content.\nCSS: Styling language used for designing the layout and appearance.",
    videoLink: "https://www.youtube.com/watch?v=ZTqcoCJIXP0",
  },
  {
    name: "TECMIS",
    year: "2023",
    align: "right",
    image: Image3,
    link: "#",
    pname: "Group project",
    description:
      "👥 Our team—Lahiru Prasad, Buddhi Sampath, Prageeth Siriwardhana, and myself—proudly present TECMIS, our second-year Java mini-project. Built with #JavaFX and #MySQL, this system streamlines university administrative tasks, including Enrollment Management, Course Materials, and Dashboards for Admins, Lecturers, Students, and Technical Officers.\nWe ensured data privacy and security, using IntelliJ IDEA and GitHub for collaboration.\n\nRoles:\nAdmin: Lahiru Prasad\nStudent: Me\nLecturer: Buddhi Sampath\nTechnical Officer: Prageeth Siriwardhana\n\nTechnologies:\n#Java | #JavaFX | #MySQL | #CSS\n#VisualStudioCode | #WampServer | #SceneBuilder | #GitHub",
    videoLink: "https://www.youtube.com/watch?v=52kokOBuBgw",
  },
  {
    name: "Polythene Factory Management System",
    year: "2024",
    align: "left",
    image: Image4,
    link: "#",
    pname: "Group project",
    description:
      "The Polythene Factory Management System is a comprehensive web application designed to manage various operations within a polythene factory. This system includes modules for inventory management, order processing, production tracking, attendance, and salary management.\n\n💻 Technologies Used]nFront-end: ReactJS ⚛️\nBack-end: Node.js, Express.js 🟢\nDatabase: MySQL 🐬\nLanguages: JavaScript, CSS 📜\nOther Tools: Tailwind CSS, Visual Studio Code 🎨",
    videoLink: "https://www.youtube.com/watch?v=C_8PFqOnjcM",
  },
  {
    name: "BidZone - Auction Platform",
    year: "2024",
    align: "right",
    image: Image5,
    link: "#",
    pname: "Group project",
    description:
      "BidZone is an advanced auction platform developed using Java. This platform allows users to buy and sell products through an auction-based system with real-time bidding functionalities. It ensures a seamless and secure bidding experience with multiple features designed for buyers, sellers, and administrators.\n\n🛠️ Tech Stack\nJava (Advanced) - Backend processing\nJSP & Servlets - Frontend UI\nHibernate ORM - Database integration\nMySQL - Data storage ",
    videoLink: "https://www.youtube.com/watch?v=sdvd1dfOzds",
  },
  {
    name: "Borcelle Health Service",
    year: "2023",
    align: "left",
    image: Image6,
    link: "#",
    pname: "Group project",
    description:
      " Proudly presenting 'Borcelle Health Service,' our collaborative university group project in software engineering! Together, we successfully fulfilled all software engineering requirements, creating a sophisticated doctor management system. Dive into the seamless fusion of technology and healthcare expertise!",
    videoLink: "https://www.youtube.com/watch?v=4ACCq_hXHo4",
  },
  {
    name: "Time_Zone_Comparator",
    year: "2025",
    align: "right",
    image: Image7,
    link: "#",
    pname: "Individual project",
    description:
      "My first Next.js project!\nAs a freelancer working with clients across different time zones, scheduling meetings can be challenging. To solve this, I built a Time Zone Comparator web app.\n\nWhat This App Does\n✔ Select two countries \n✔ Enter a meeting time 🕒\n✔ Instantly convert and display the corresponding time in the other country ",
    videoLink: "https://www.youtube.com/watch?v=AoUi_WRH-hE",
  },
  {
    name: "Color-picker",
    year: "2025",
    align: "left",
    image: Image8,
    link: "#",
    pname: "Individual project",
    description:
      "A React color picker using React hooks (useState, useRef) that lets users select a color and view its HEX, RGB, HSL, and HSV values. Styled with Tailwind CSS, it is lightweight, efficient, and easy to integrate into any React project.\n\nFeatures:\n✅ Select any color using an interactive color picker\n✅ Instantly view color codes in HEX, RGB, HSL, and HSV formats",
    videoLink: "https://www.youtube.com/watch?v=TdR9UIblUQU",
  },
];

const ProjectMain = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const showMore = () => setVisibleCount(projects.length);

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
      >
        <ProjectText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.slice(0, visibleCount).map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            pname={item.pname}
            videoLink={item.videoLink}
            description={item.description}
          />
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="flex items-center w-full mt-8">
          <div className="h-[1px] bg-white flex-grow"></div>
          <button onClick={showMore} className="mx-4 text-white">
            Show More
          </button>
          <div className="h-[1px] bg-white flex-grow"></div>
        </div>
      )}
    </div>
  );
};

export default ProjectMain;
