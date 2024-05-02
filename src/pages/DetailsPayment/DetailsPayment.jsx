import React from "react";
import RegProviders from "../../providers/RegFormProvider";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails.jsx";

const DetailsPayment = () => {
  return (
    <RegProviders>
      <div className="details-page">
        <ContainerHome>
          <div className="details-container">
            <PaymentDetails />
          </div>
        </ContainerHome>
      </div>
    </RegProviders>
  );
};

export default DetailsPayment;
