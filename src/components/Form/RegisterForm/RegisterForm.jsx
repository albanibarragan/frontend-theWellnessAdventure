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
import { supabaseClient } from "../../../Supabase.js";
const RegisterForm = () => {
  const [action, setAction] = useState("BIENVENIDO A THE WELLNESS ADVENTURE");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };


  const onSubmit = async (dataUser) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email: dataUser.email,
      password: dataUser.password,
    })
    if (error) {
      console.log(error)
      return
    }
    console.log("Server Response: " + data);
    const new_user = {
      id_user: data.user.id,
      Cedula: dataUser.cedula,
      Nombre: dataUser.nombre + " " + dataUser.apellido,
      Correo: dataUser.email,
      Direccion: dataUser.address,
      Telefono: dataUser.phone,
      telefono_emergencia: dataUser.phoneEmergencia,
      Necesidades_Medicas: dataUser.salud,
      fecha_nacimiento: dataUser.dateOfBirth
    
    }
    const { error_al_crear } = await supabaseClient.from('users')
      .insert(new_user)
    if (error_al_crear) {
      console.log(error_al_crear)
      return
    }
    
    navigate("/login")
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
                {...register("nombre", {
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
                {...register('phone', {
                  required: true,
                  pattern: /^\d{10}$/,
                })}
              />
            </div>

          </div>
          {errors.phone && <p>Por favor verifique el Telefono</p>}
          <div className="input-box-register">
            <label className="register-label">Teléfono(De Emergencia)</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={phone_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="Telefono (De Emergencia)"
                {...register('phoneEmergencia', {
                  required: true,
                  pattern: /^\d{10}$/,
                })}
              />
            </div>
          </div>
          {errors.phoneEmergencia && <p>Por favor verifique el Telefono</p>}
          <div className="input-box-register">
            <label className="register-label">Cédula</label>
            <div className="register-container-img-input">
              <img className="register-img-container" src={ci_icon} alt="" />
              <input
                className="register-input"
                type="text"
                placeholder="cedula"
                {...register("cedula", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
            {errors.cedula && <span className="error">Verifique la cédula ingresada</span>}
          </div>
          <div className="input-box-register">
            <div className="input-box">
              <label htmlFor="dateBirthday" className="register-label">Fecha de Nacimiento</label>
              <div className="register-container-img-input">
                <input
                  id="dateBirthday"
                  name="dateBirthday"
                  type="date"
                  {...register('dateOfBirth', {
                    required: true,
                  })}
                />
              </div>
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
                {...register("address", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </div>
          </div>
          {errors.address && <p>Por favor verifique la dirección</p>}
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
                  pattern: /^[a-zA-Z0-9!@#$%^&*]+$/,
                })}
              />
            </div>
            {errors.password && <p>Por favor verifique la contraseña</p>}
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
                {...register("passwordC", {
                  required: true,
                  pattern: /^[a-zA-Z0-9!@#$%^&*]+$/,
                })}
              />
            </div>
            {errors.passwordC && <p>Por favor verifique la contraseña</p>}
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
      </form >
    </div >
  );
};

export default RegisterForm;
