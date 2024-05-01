import React from "react";
import "./UserPlans.css";
import ContainerHome from "../../components/containerHome/containerHome.jsx";

const UserPlans = () => {
  return (
    <div className="userPlans-page">
      <ContainerHome>
        <div className="userPlans-container">
          <h1>PLANES del usuario</h1>
        </div>
      </ContainerHome>
    </div>
  );
};

export default UserPlans;
