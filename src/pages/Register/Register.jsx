import { useState } from "react";
import { useForm } from "react-hook-form";
import logo_site from "../../assets/fotos/logo.jpg";
import user_icon from "../../assets/icons/person.png";
import email_icon from "../../assets/icons/email.png";
import password_icon from "../../assets/icons/pass.png";
import ci_icon from "../../assets/icons/ci.png";
import location_icon from "../../assets/icons/location.png";
import phone_icon from "../../assets/icons/phone.png";
import medical_icon from "../../assets/icons/medical.png";
import "./Register.css";

const Register = () => {
  const [action, setAction] = useState("BIENVENIDO A THE WELLNESS ADVENTURE");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="underline"></div>
        </div>
        <div className="img-container">
          <img src={logo_site} height={200} width={300} />
        </div>
        <div className="text-container">
          <div className="text">{action}</div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}></form>
          {action === "Register" ? (
            <div></div>
          ) : (
            <div className="input">
              <div className="input">
                <div className="input">
                  <div className="input">
                    <div className="input">
                      <div className="input">
                        <div className="input">
                          <div className="input">
                            <div className="input">
                              <div className="input">
                                <img src={user_icon} alt="" />
                                <input
                                  type="text"
                                  {...register("Nombre", {
                                    required: true,
                                    maxLength: 20,
                                  })}
                                />
                              </div>
                              <img src={user_icon} alt="" />
                              <input type="text" placeholder="Apellido" />
                            </div>
                            <img src={email_icon} alt="" />
                            <input
                              type="email"
                              placeholder="Correo Electronico"
                            />
                          </div>
                          <img src={phone_icon} alt="" />
                          <input
                            type="text"
                            placeholder="Telefono (Principal)"
                          />
                        </div>
                        <img src={phone_icon} alt="" />
                        <input
                          type="text"
                          placeholder="Telefono (De Emergencia)"
                        />
                      </div>
                      <img src={ci_icon} alt="" />
                      <input type="text" placeholder="Cedula" />
                    </div>
                    <img src={location_icon} alt="" />
                    <input type="text" placeholder="Direccion" />
                  </div>
                  <img src={password_icon} alt="" />
                  <input type="password" placeholder="Contraseña" />
                </div>
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Confirmar Contraseña" />
                <img src={medical_icon} alt="" />
              </div>
              <input type="text" placeholder="Observaciones Medicas" />
            </div>
          )}
        </div>

        <div className="terms-container">
          {action === "Terms" ? (
            <div></div>
          ) : (
            <div className="licence-terms">
              Al registrarte estás de acuerdo con los{" "}
              <span>Terminos y Condiciones</span>
            </div>
          )}
        </div>
        <div className="submit-container">
          <div
            className={action === "REGISTRARSE" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("BIENVENIDO A THE WELLNESS ADVENTURE");
            }}
          >
            REGISTRARSE
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
