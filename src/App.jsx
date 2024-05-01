import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Principal from "./pages/main/Principal.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import Plans from "./pages/Plans/Plans.jsx";
import UserPlans from "./pages/UserPlans/UserPlans.jsx";
import EditProfile from "./pages/EditProfile/EditProfile.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/userplans" element={<UserPlans />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;
