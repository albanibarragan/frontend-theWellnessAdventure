import React, {useEffect} from "react";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import RegProviders from "../../providers/RegFormProvider";
import BuyPage from "../BuyPage/BuyPage.jsx";
import { ProtectPage } from "../../AuthValidation.js"
import { useNavigate } from "react-router-dom"

const OrderPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    ProtectPage().then(data => {
      if(!data.exist) {
        navigate("/login")
        return
      }
    }) 
  }, [])
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
