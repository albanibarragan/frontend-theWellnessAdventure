import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Principal from "./pages/main/Principal.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
