import React from "react";
import "./Plans.css";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import ActivitiesDetails from "../../components/GalleryActivitiesDetails/ActivitiesDetails.jsx"
const Plans = () => {
  return (
    <div className="plans-page">
      <ContainerHome>
        <div className="plans-container">
          <h1 className="plans-title">
            Planes de retiro de binestar que tenemos para ti
          </h1>{" "}
          <div className="plans-list">

          </div>
          <div className="activities-gallery">
            <ActivitiesDetails />
          </div>
        </div>
      </ContainerHome>
    </div>
  );
};

export default Plans;
