import React from "react";
import { useForm } from "react-hook-form";
import "./HelpForm.css";

const HelpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="help-form-container">
      <div className="help-form-title">
        <h2>Formulario de ayuda</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="help-form">
        <div className="help-inputs">
          <div className="help-input">
            <label className="help-label">Nombre completo</label>
            <input
              type="text"
              {...register("nombre", {
                required: true,
                maxLength: 100,
                pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
              })}
              placeholder="Ingrese su nombre"
            />
            {errors.nombre && <p>Por favor ingrese un nombre válido.</p>}
          </div>
          <div className="help-input">
            <label className="help-label">Correo</label>
            <input
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
            {errors.email && <p>Por favor verificar el email</p>}
          </div>
          <div className="help-input">
            <label className="help-label">Su duda: </label>
            <input
              className="duda"
              type="text"
              {...register("duda", {
                maxLength: 1000,
                required: true,
              })}
              placeholder="Ingrese sus observaciones personales"
            />
          </div>
          {errors.duda && <p>Por favor verifique</p>}
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HelpForm;
