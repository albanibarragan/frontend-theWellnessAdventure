import React from "react";
import BuyPage from "../BuyPage/BuyPage";
import ContainerHome from "../../components/containerHome/containerHome.jsx";

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
