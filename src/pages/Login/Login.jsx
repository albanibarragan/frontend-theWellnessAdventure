import React, {useEffect} from "react";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
import "./Login.css";
import {ProtectPage} from "../../AuthValidation";
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  useEffect(() => {
    ProtectPage().then(data => {
      if (data.exist) {
        navigate("/home") 
      }
    })
  }, [])
  return (
    <div className="login-page">
      <div className="login-container">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
