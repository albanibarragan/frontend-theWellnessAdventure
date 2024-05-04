import React, { useEffect, useState } from "react";
import "./BuyPage.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RegProviders from "../../providers/RegFormProvider";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import { ProtectPage } from "../../AuthValidation";
import BuyForm from "../../components/Form/BuyForm/BuyForm.jsx";



const BuyPage = () => {

  const [user, SetUser] = useState(false)

  useEffect(() => {
    if (user === false) {
      ProtectPage().then(data => {
        if (!data.exist) {
          navigate("/login")
          return
        }

        SetUser(data.user)
      })
    }
  }, [])

  return (

    <div className="userPlans-page">
      <RegProviders>
        <div className="userPlans-container">
          <BuyForm />
        </div>
      </RegProviders>
    </div>

  );
};

export default BuyPage;
