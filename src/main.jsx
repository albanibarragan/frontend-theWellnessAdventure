import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login.jsx";
import CancelForm from "./components/Form/CancelForm/CancelForm.jsx";
import HelpForm from "./components/Form/HelpForm/HelpForm.jsx";
import Register from "./pages/Register/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>
);
