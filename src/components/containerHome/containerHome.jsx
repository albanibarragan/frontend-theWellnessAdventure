import React from "react";
import Navbarhome from "../../components/Navbar/NavbarHome/NavbarHome.jsx"

const containerHome = ({ children }) => {
  return (
    <div>
     <Navbarhome/>
      {children}
    </div>
  );
};

export default containerHome;
