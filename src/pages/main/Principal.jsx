import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Activities from "../../components/GalleryActivities/Activities.jsx";
import PlanesDetails from "../../components/PlanesDetails/PlanesDetails.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Header from "../../components/Header/Header.jsx";

const Principal = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <Header />
      <Activities />
      <div className="plan-bienestar">
        <h1>Planes de bienestar que tenemos para ti</h1>
      </div>
      <PlanesDetails />
      <Footer />
    </div>
  );
};

export default Principal;
