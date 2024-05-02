import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import NavbarHome from "./components/Navbar/NavbarHome/NavbarHome.jsx";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import PlansCard from "./components/PlansCard/PlansCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PlansCard />
  </BrowserRouter>
);
