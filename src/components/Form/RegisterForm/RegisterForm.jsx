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
import { data } from "autoprefixer";
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
      Cedula: dataUser.Cedula,
      Nombre: dataUser.Nombre,
      Correo: dataUser.email,
      Direccion: dataUser.direccion,
      Necesidades_Medicas: dataUser.salud

    }
    console.log("ID:" + data.user.id)
    console.log("RequestBody: " + new_user)
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
                name="nombre"
                placeholder="Nombre"
                {...register("nombre", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/,
                })}
              />
            </div>
            {errors.nombre && (
              <p className="errors">
                {errors.nombre.type === "required" && (
                  "Por favor ingrese su nombre."
                )}
                {errors.nombre.type === "pattern" && (
                  "El nombre solo puede contener letras y espacios."
                )}
              </p>
            )}
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
            {errors.apellido && (
              <p className="errors">
                {errors.apellido.type === "required" && (
                  "Por favor ingrese su apellido."
                )}
                {errors.apellido.type === "pattern" && (
                  "El apellido solo puede contener letras y espacios."
                )}
              </p>
            )}
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

            </div>  {errors.email && <p className="errors">Por favor verifica el email</p>}
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
            {errors.phone && (
              <p className="errors">
                {errors.phone.type === "required" && (
                  "Por favor ingrese un teléfono de emergencia."
                )}
                {errors.phone.type === "pattern" && (
                  "El teléfono debe contener 10 dígitos numéricos."
                )}
              </p>
            )}
          </div>

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
            {errors.phoneEmergencia && (
              <p className="errors">
                {errors.phoneEmergencia.type === "required" && (
                  "Por favor ingrese un teléfono de emergencia."
                )}
                {errors.phoneEmergencia.type === "pattern" && (
                  "El teléfono debe contener 10 dígitos numéricos."
                )}
              </p>
            )}
          </div>

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
            <label htmlFor="dateBirthday" className="register-label">Fecha de Nacimiento</label>
            <div className="register-container-img-input">
              <input
                className="register-input"
                id="dateBirthday"
                name="dateBirthday"
                type="date"
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
                {...register("address", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </div>      {errors.address && <p className="errors">Por favor ingrese una direccion</p>}
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
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  pattern: /^[a-zA-Z0-9!@#$%^&*]+$/,
                })}
              />
            </div>
            {errors.password && (
              <p className="errors">
                {errors.password.type === "required" && (
                  "La contraseña es obligatoria. Por favor, introduce una contraseña."
                )}
                {errors.password.type === "pattern" && (
                  "La contraseña no cumple con los requisitos de seguridad. Debe contener letras mayúsculas y minúsculas, números y al menos un símbolo especial (!@#$%^&*). Inténtalo de nuevo."
                )}
              </p>
            )}
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
                  pattern: /^[a-zA-Z0-9!@#$%^&*]+$/,
                })}
              />
            </div>
            {errors.password && (
              <p className="errors">
                {errors.password.type === "required" && (
                  "La contraseña es obligatoria. Por favor, introduce una contraseña."
                )}
                {errors.password.type === "pattern" && (
                  "La contraseña no cumple con los requisitos de seguridad. Debe contener letras mayúsculas y minúsculas, números y al menos un símbolo especial (!@#$%^&*). Inténtalo de nuevo."
                )}
              </p>
            )}
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
                placeholder="Ingrese su informacion medica de salud actual"
              />
              {errors.salud?.type === "required" && (
                <p className="errors">El campo de informacion de salud es obligatorio. Por favor, introduzca su informacionmedica .</p>
              )}
              {errors.salud?.type === "maxLength" && (
                <p className="errors">
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
            <div className="login-form-register">
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
