import React from "react";
import { TbFileDownload } from "react-icons/tb";
import CV from "../../assets/files/cv.pdf";

const NavbarBtn = () => {
  return (
    <a
      href={CV}
      download
      className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
    >
      CV
      <div className="sm:hidden md:block mt-0.5">
        <TbFileDownload />
      </div>
    </a>
  );
};

export default NavbarBtn;
