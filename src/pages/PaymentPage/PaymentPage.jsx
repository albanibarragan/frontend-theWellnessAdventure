import React, {useEffect} from "react";
import PaymentForm from "../../components/Form/PaymentForm/PaymentForm";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";
import {ProtectPage} from "../../AuthValidation";
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
    <RegProviders>
      <div className="payment-page">
        <ContainerHome>
          <div className="payment-page-container">
            <PaymentForm />
          </div>
        </ContainerHome>
      </div>
    </RegProviders>
  );
};

export default PaymentPage;
