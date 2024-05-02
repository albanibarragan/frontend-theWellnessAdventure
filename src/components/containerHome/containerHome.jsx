import React from "react";


const containerHome = ({ children }) => {
  return (
    <div>
      <NavbarHome />
      {children}
    </div>
  );
};

export default containerHome;
