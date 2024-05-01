import React from "react";
import "./BuyPage.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import BuyForm from "../../components/Form/BuyForm/BuyForm";
import RegProviders from "../../providers/RegFormProvider";
import ContainerHome from "../../components/containerHome/containerHome.jsx";

const BuyPage = () => {
  return (
    <RegProviders>
      <div className="userPlans-page">
        <div className="userPlans-container">
          <BuyForm />
        </div>
      </div>
    </RegProviders>
  );
};

export default BuyPage;
