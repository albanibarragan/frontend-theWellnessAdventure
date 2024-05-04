import React from "react";
import "./UserPlans.css";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import TableDetails from "../../components/Table/TableDetails.jsx";

const UserPlans = () => {
  const userName = "Test User";
  return (
    <div className="userPlans-page">
      <ContainerHome>
        <div className="userPlans-container">
          <h1 className="userPlans-title">
            Tus Planes de Retiro de Bienestar {}
          </h1>{" "}
          <div className="user-table">
            <TableDetails />
          </div>
        </div>
      </ContainerHome>
    </div>
  );
};

export default UserPlans;
