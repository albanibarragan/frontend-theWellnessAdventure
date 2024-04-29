import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import "./index.css";
import Principal from "./pages/main/Principal.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
