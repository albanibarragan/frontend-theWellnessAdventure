import { useState } from "react";
import "./Register.css";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import imagen1 from "../../assets/fotos/Actividad1.png";
import imagen2 from "../../assets/fotos/actividad2.png";
import imagen3 from "../../assets/fotos/actividad3.png";
import imagen4 from "../../assets/fotos/actividad4.png";
import imagen5 from "../../assets/fotos/actividad5.png";
import imagen6 from "../../assets/fotos/actividad6.png";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-page-left">
          <img src={imagen1} alt="" className="register-page-front" />
          <img src={imagen2} alt="" className="register-page-front" />
          <img src={imagen3} alt="" className="register-page-front" />
          <img src={imagen4} alt="" className="register-page-front" />
          <img src={imagen5} alt="" className="register-page-front" />
          <img src={imagen6} alt="" className="register-page-front" />
        </div>

        <div className="register-page-right">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
