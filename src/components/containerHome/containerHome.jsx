import React from "react";
import NavbarHome from "../../components/Navbar/NavbarHome/NavbarHome.jsx"


const containerHome = ({ children }) => {
  return (
    <div>
      <div className="nav-bar-home">
        <NavbarHome />
      </div>

      {children}
    </div>
  );
};

export default containerHome;
