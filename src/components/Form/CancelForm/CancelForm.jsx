import React from "react";
import { useForm } from "react-hook-form";
import plansData from "../../../data/plansData.js";
import "./CancelForm.css";

const CancelForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validatePlan = (value) => {
    if (value === "default") {
      return "Por favor, seleccione un plan diferente al predeterminado.";
    }
    return true;
  };

  return (
    <div className="cancel-form-container">
      <div className="cancel-form-title">
        <h2>Cancelar Plan de bienestar</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="cancel-form">
        <div className="cancel-inputs">
          <div className="cancel-input">
            <label>Nombre completo</label>
            <input
              type="text"
              {...register("nombre", {
                required: true,
                maxLength: 100,
                pattern: /^[a-zA-ZÀ-ÿ\s]+$/, // Allow letters, spaces, and accented characters
              })}
              placeholder="Ingrese su nombre"
            />
            {errors.nombre && <p>Por favor ingrese un nombre válido.</p>}
          </div>
          <div className="cancel-input">
            <label>Correo</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder="Correo Electronico"
            />
            {errors.email && (
              <p>Por favor ingrese un correo electrónico válido.</p>
            )}
          </div>
          <div className="cancel-input">
            <label className="buy-label">
              Elige un plan de retiro de bienestar que quieres cancelar
            </label>
            <select
              {...register("planRetiro", {
                required: true,
                validate: validatePlan,
              })}
              onChange={(event) => console.log(event.target.value)}
            >
              <option value="default">Seleccionar plan</option>
              {plansData.map((plan) => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
            {errors.planRetiro && <p>{errors.planRetiro.message}</p>}
          </div>
          <div className="cancel-input">
            <label>Observaciones de cancelación de plan</label>
            <textarea
              {...register("observacion", { required: true, maxLength: 1000 })}
              placeholder="Ingrese sus observaciones personales"
            />
            {errors.observacion && <p>Por favor ingrese sus observaciones.</p>}
          </div>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default CancelForm;
