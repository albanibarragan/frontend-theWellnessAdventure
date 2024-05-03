import "./BuyPage.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RegProviders from "../../providers/RegFormProvider";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails.jsx";
import BuyForm from "../../components/Form/BuyForm/BuyForm.jsx";



const BuyPage = () => {


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
