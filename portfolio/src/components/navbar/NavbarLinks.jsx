import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a href="#">{link.link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
