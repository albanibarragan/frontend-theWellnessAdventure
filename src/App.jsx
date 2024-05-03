import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Principal from "./pages/main/Principal.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import Plans from "./pages/Plans/Plans.jsx";
import UserPlans from "./pages/UserPlans/UserPlans.jsx";
import EditProfilePage from "./pages/EditProfile/EditProfilePage.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import DetailsPayment from "./pages/DetailsPayment/DetailsPayment.jsx";
import BuyForm from "./components/Form/BuyForm/BuyForm.jsx";
import RegProviders from "../src/providers/RegFormProvider.jsx"


const App = () => {
  return (
    <RegProviders>
      <div className="App">
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/userplans" element={<UserPlans />} />
          <Route path="/editProfile" element={<EditProfilePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/buy" element={<BuyForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/paymentDetails" element={<DetailsPayment />} />
        </Routes>
      </div>
    </RegProviders>
  );
};

export default App;
