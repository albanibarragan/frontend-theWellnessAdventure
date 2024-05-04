import React from "react";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";
import BuyPage from "../BuyPage/BuyPage.jsx";

const OrderPage = () => {
  return (
    <div className="payment-page">
      <ContainerHome>
        <div className="payment-page-container">
          <BuyPage />
        </div>
      </ContainerHome>
    </div>
  );
};

export default OrderPage;
