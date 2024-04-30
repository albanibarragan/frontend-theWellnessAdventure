import { React, useState } from "react";
import logo_site from "../../../assets/fotos/logo.jpg";
import user_icon from "../../../assets/icons/person.png";
import email_icon from "../../../assets/icons/email.png";
import password_icon from "../../../assets/icons/password.png";
import ci_icon from "../../../assets/icons/ci.png";
import location_icon from "../../../assets/icons/location.png";
import phone_icon from "../../../assets/icons/phone.png";
import medical_icon from "../../../assets/icons/medical.png";
import GoogleLoginComponent from "../../../components/button/GoogleLoginComponent.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const [action, setAction] = useState("BIENVENIDO A THE WELLNESS ADVENTURE");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (dataUser) => {
    console.log(dataUser);
  };

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <div className="register-container-form">
      <div className="register-header">
        <div className="register-logo-container">
          <img src={logo_site} height={200} width={300} />
        </div>
        <h1 className="register-form-text-header-start">{action}</h1>
        <div className="register-form-text-header">
          Ingrese sus datos para registrarse a la página
        </div>
      </div>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register-inputs">
          <div className="input-box-register">
            <label className="register-label">Nombre</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={user_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="Nombre"
                {...register("Nombre", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            {errors.nombre && <p>Por favor verifique el nombre</p>}
          </div>
          <div className="input-box-register">
            <label className="register-label">Apellido</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={user_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="Apellido"
                {...register("apellido", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            {errors.apellido && <p>Por favor verifique el apellido</p>}
          </div>
          <div className="input-box-register">
            <label className="register-label">Correo</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={email_icon} alt="" />
              <input
                className="register-input"
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
              {errors.email && <p>Por favor verifica el email</p>}
            </div>
          </div>
          <div className="input-box-register">
            <label className="register-label">Teléfono</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={phone_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="Telefono (Principal)"
              />
            </div>
          </div>
          <div className="input-box-register">
            <label className="register-label">Teléfono(De Emergencia)</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={phone_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="Telefono (De Emergencia)"
              />
            </div>
          </div>
          <div className="input-box-register">
            <label className="register-label">Cédula</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={ci_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="cedula"
                {...register("Cedula", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
          </div>

          <div className="input-box-register">
            <label className="register-label">Dirección</label>
            <div className="register-container-img-input">
              <img
                className="register-img-container"
                src={location_icon}
                alt=""
              />
              <input
                className="register-input"
                type="text"
                placeholder="Direccion"
                {...register("direccion", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
          </div>
          <div className="input-box-register">
            <label className="register-label">Contraseña</label>
            <div className="register-container-img-input">
              <img
                className="register-img-container"
                src={password_icon}
                alt=""
              />
              <input
                className="register-input"
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
            </div>
          </div>
          <div className="input-box-register">
            <label className="register-label">Confirmar su contraseña</label>
            <div className="register-container-img-input">
              <img
                className="register-img-container"
                src={password_icon}
                alt=""
              />
              <input
                className="register-input"
                id="password"
                name="password"
                required
                type="password"
                placeholder="Confirmar contraseña"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
              {errors.password && <p>Por davor verifica la contraseña</p>}
            </div>
          </div>
          <div className="input-box-register">
            <label className="register-label">Información de salud</label>
            <div className="register-container-img-input">
              <img
                className="register-img-container"
                src={medical_icon}
                alt=""
              />
              <input
                className="register-input"
                type="text"
                {...register("salud", { maxLength: 1000, required: true })}
                placeholder="Ingrese su informacion de medica de salud actual"
              />
              {errors.salud?.type === "required" && (
                <p>El campo de informacion de salud es requerido</p>
              )}
              {errors.salud?.type === "maxLength" && (
                <p>
                  El campo de informacion de salud debe de tener menos de 1000
                  caracteres
                </p>
              )}
            </div>
            <div class="terms-container">
              <div class="check-terms">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  required
                />
                <label for="terms">Acepto los términos y condiciones</label>
              </div>
              <a href="/terms-and-conditions" target="_blank">
                Leer términos y condiciones
              </a>
            </div>
          </div>
          {action === "Register" ? (
            <div></div>
          ) : (
            <div className="login-form">
              ¿Ya tienes una cuenta?
              <a className="buttonLogin" onClick={onClick}>
                Iniciar sesion
              </a>
            </div>
          )}
          <div className="submit-container-register">
            <div className="iniciarsesion-google">
              <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
                {" "}
                <GoogleLoginComponent />
              </GoogleOAuthProvider>
            </div>
            <button
              className="button-register"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setAction("BIENVENIDO A THE WELLNESS ADVENTURE");
              }}
            >
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
