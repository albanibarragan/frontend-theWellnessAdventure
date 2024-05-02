import React from "react";
import "./Plans.css";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import ActivitiesDetails from "../../components/GalleryActivitiesDetails/ActivitiesDetails.jsx"
import PlansCard from "../../components/PlansCard/PlansCard.jsx";
const Plans = () => {
  return (
    <div className="plans-page">
      <ContainerHome>
        <div className="plans-container">
          <div className="plans-list">
            <PlansCard />
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
