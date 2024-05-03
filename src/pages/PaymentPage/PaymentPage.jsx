import React, { useEffect } from "react";
import PaymentForm from "../../components/Form/PaymentForm/PaymentForm";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";
import { ProtectPage } from "../../AuthValidation";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    ProtectPage().then(data => {
      if (!data.exist) {
        navigate("/")
      }
    })
  }, [])
  return (
    <div className="payment-page">
      <ContainerHome>
        <RegProviders>
          <div className="userPlans-container">
            <PaymentForm />
          </div>
        </RegProviders>
      </ContainerHome>
    </div>
  );
};

export default PaymentPage;
