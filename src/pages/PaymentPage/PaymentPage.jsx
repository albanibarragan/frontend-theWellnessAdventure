import React from "react";
import PaymentForm from "../../components/Form/PaymentForm/PaymentForm";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";

const PaymentPage = () => {
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
