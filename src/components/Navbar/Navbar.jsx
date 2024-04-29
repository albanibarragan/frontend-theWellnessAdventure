import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/fotos/logo.jpg";
const Navbar = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" className="logo" />
      </div>

      <ul className="navbar-menu">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="home"
        >
          Inicio
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="activities"
        >
          Actividades
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="planes"
        >
          Planes
        </Link>
      </ul>
      <div className="navbar-right">
        <a
          onClick={onClick}
          className="button-login"
          target="_blank"
          rel="noreferrer"
        >
          Iniciar sesion
        </a>
      </div>
    </div>
  );
};

export default Navbar;
