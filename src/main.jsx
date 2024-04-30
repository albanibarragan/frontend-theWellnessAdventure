import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import PaymentForm from "./components/Form/PaymentForm/PaymentForm.jsx";
import HelpForm from "./components/Form/HelpForm/HelpForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PaymentForm />
  </BrowserRouter>
);
