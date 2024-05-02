import { React, useState } from "react";
import logo_site from "../../../assets/fotos/logo.jpg";
import email_icon from "../../../assets/icons/email.png";
import password_icon from "../../../assets/icons/password.png";
import GoogleLoginComponent from "../../../components/button/GoogleLoginComponent.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./FormLogin.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../../Supabase.js";
const FormLogin = () => {
  const [action, setAction] = useState("Iniciar sesion");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };


  const onSubmit = async(dataUser) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword(dataUser)
    console.log(data);
    if(error){
      console.log(error)
      return
    }
    const now= new Date();
    const experationTime= now.getTime() + data.session.expires_in * 1000;
    const sesion={token:data.session.access_token,expiration:experationTime}
    sessionStorage.setItem("Sesion", JSON.stringify(sesion))
    navigate("/")
  };

 
  const onClick = () => {
    action === "Registrarse" ? handleRegisterClick() : handleLoginClick();

  };

  return (
    <div className="login-container-form">
      {/* header del login */}
      <div className="login-header">
        <div className="login-logo-container">
          <img src={logo_site} height={200} width={300} />
        </div>
        <div className="login-form-text-header-start">Bienvenido {action}</div>
        <div className="login-form-text-header ">
          Ingresa tu usuario y contraseña para entrar a tu perfil
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-inputs">
          <div className="input-box">
            <label className="login-label">Correo</label>
            <div className="login-container-img-input">
              <img src={email_icon} alt="" />
              <input
                className="login-input"
                id="email"
                name="email"
                type="email"
                placeholder="Correo Electronico"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>
          </div>
          {errors.email && <p>Por favor verifica el email</p>}
          <div className="input-box">
            <label className="login-label">contraseña</label>
            <div className="login-container-img-input">
              <img src={password_icon} alt="" />
              <input
                className="login-input"
                id="password"
                name="password"
                required
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
              {errors.password && <p>Por davor verifica la contraseña</p>}
            </div>
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              ¿Olvidaste tu Contraseña?<span>Recuperala aquí</span>
            </div>
          )}
          <div className="submit-container-login">
            <div className="iniciarsesion-google">
              <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
                {" "}
                <GoogleLoginComponent />
              </GoogleOAuthProvider>
            </div>
            <button
              className="button-registrarse"
              target="_blank"
              onClick={handleRegisterClick}
              rel="noreferrer"
            >
              Registrarse{" "}
            </button>
            <button
              type="submit"
              className={action === "Registrarse" ? "submit gray" : "submit"}
          
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
