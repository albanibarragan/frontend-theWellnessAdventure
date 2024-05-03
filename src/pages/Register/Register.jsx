import { useState } from "react";
import "./Register.css";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import imagen1 from "../../assets/fotos/actividad2.png";
import imagen2 from "../../assets/fotos/caminar-adulto-mayor.jpg";
import imagen3 from "../../assets/fotos/actividad6.png";
import imagen4 from "../../assets/fotos/actividadFisica.png";
import imagen5 from "../../assets/fotos/imagGrupo.png";
import imagen6 from "../../assets/fotos/Terapias-cognitiva.jpg";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-page-left">
          <div className="img-reg">
            <img src={imagen1} alt="" className="register-page-img" />
            <img src={imagen2} alt="" className="register-page-img" />
            <img src={imagen3} alt="" className="register-page-img" />
            <img src={imagen4} alt="" className="register-page-img" />
            <img src={imagen5} alt="" className="register-page-img" />
            <img src={imagen6} alt="" className="register-page-img" />
          </div>

        </div>

        <div className="register-page-right">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
