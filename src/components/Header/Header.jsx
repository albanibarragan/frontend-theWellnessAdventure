import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import image from "../../assets/fotos/imgPrincipal.jpg";

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/register");
  };
  return (
    <div className="header">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="header-content">
        <div className="text-section1">
          <div className="title">
            <h1 className="text-inicial">
              ¡Nos dedicamos en complacer y servir!
            </h1>
            <div className="text">
              <p className="text">
                Descubre nuestro innovador plan de retiro bienestar! Obtén la
                tranquilidad y seguridad que mereces mientras disfrutas de una
                vida plena. Nuestro enfoque integral te brinda las herramientas
                necesarias para cuidar de tu salud física, emocional y
                financiera. Conoce cómo podemos ayudarte a vivir tu retiro de la
                mejor manera posible. ¡Tu bienestar es nuestra prioridad!
              </p>
            </div>
          </div>
          <a
            className="button1"
            onClick={onClick}
            target="_blank"
            rel="noreferrer"
          >
            Registrate Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
