import React from "react";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails.jsx";
import BuyPage from "../BuyPage/BuyPage.jsx";

const OrderPage = () => {
  return (
    <div className="payment-page">
      <ContainerHome>
        <div className="payment-page-container">
          <BuyPage />
          <PaymentDetails />
        </div>
      </ContainerHome>
    </div>
  );
};

export default OrderPage;
