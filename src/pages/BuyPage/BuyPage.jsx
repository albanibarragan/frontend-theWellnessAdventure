import React, { useEffect, useState } from "react";
import "./BuyPage.css";
import RegProviders from "../../providers/RegFormProvider";
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
