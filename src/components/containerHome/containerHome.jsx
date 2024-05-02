import React from "react";
import NavbarHome from "../Navbar/NavbarHome/NavbarHome.jsx";

const containerHome = ({ children }) => {
  return (
    <div>
      <NavbarHome />
      {children}
    </div>
  );
};

export default containerHome;
