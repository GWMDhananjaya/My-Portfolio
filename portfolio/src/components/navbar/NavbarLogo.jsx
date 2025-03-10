import React from "react";
import logo from "../../assets/images/logo.png";

const NavbarLogo = () => {
  return (
    <div>
      <img
        src={logo}
        alt=""
        className="w-18 h-auto rounded-full sm:hidden md:block"
      />
      <img src={logo} alt="" className="w-18 rounded-full sm:block md:hidden" />
    </div>
  );
};

export default NavbarLogo;
