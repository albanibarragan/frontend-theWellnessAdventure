import React, {useEffect, useState} from "react";
import "./BuyPage.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import BuyForm from "../../components/Form/BuyForm/BuyForm";
import RegProviders from "../../providers/RegFormProvider";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import {ProtectPage} from "../../AuthValidation";

const BuyPage = () => {

  const [user, SetUser] = useState(false)

  useEffect(() => {
    if (user === false) {
      ProtectPage().then(data => {
        if(!data.exist) {
          navigate("/login")
          return
        }

        SetUser(data.user)
      }) 
    }
  }, [])

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
