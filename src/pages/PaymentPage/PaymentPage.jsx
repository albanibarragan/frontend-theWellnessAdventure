import React from "react";
import PaymentForm from "../../components/Form/PaymentForm/PaymentForm";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <ContainerHome>
        <RegProviders>
          <div className="payment-page-container">
            <PaymentForm />
          </div>
        </RegProviders>
      </ContainerHome>
    </div>
  );
};

export default PaymentPage;
