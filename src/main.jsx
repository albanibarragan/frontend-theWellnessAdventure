import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ActivitiesDetails from "./components/GalleryActivitiesDetails/ActivitiesDetails.jsx";
import Register from "./pages/Register/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>
);
