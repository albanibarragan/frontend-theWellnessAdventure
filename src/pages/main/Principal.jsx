import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Activities from "../../components/GalleryActivities/Activities.jsx";
import PlanesPrincipal from "../../components/PlanesDetails/PlanesPrincipal.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Header from "../../components/Header/Header.jsx";
import img from "../../assets/fotos/caminar-adulto-mayor.jpg"
import './principal.css'

const Principal = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <Header />
      <div className="retiro-descripcion">
        <div className="retiro-container">
          <div className="left-section-retiro">
            <h2 className="title-section-retiro">¿Qué es un retiro de bienestar?</h2>
            <hr />
            <p>En la etapa dorada de la vida, es esencial cultivar el bienestar integral para disfrutar de una vejez plena y activa. Los retiros de bienestar para personas mayores ofrecen una experiencia única y enriquecedora que combina actividades físicas, mentales y sociales para revitalizar el cuerpo, la mente y el espíritu. </p>
          </div>

          <div className="retiro-img-section">
            <img src={img} alt="Imagen de seccion de retiro" />
          </div>
        </div>
      </div>
      <Activities />
      <PlanesPrincipal />
      <Footer />
    </div>
  );
};

export default Principal;
