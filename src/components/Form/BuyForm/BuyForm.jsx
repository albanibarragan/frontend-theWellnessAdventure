import React from "react";
import { useForm } from "react-hook-form";

const BuyForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      salud: "alergia",
      sugerencias: "Quiero instructor personalizado",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const plans = [
    { value: "plan-1", label: "Plan Inicial" },
    { value: "plan-2", label: "Pro Plan Inicial" },
    { value: "bienestar-esencial", label: "Plan Inicial Bienestar Esencial" },
    { value: "plan-3", label: "Plan Plus" },
    { value: "plan-4", label: "Plan Premium" },
  ];

  return (
    <div className="buy-form">
      <div className="buy-form-title">
        <h2>Comprar Plan</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="buy-inputs">
          <div className="buy-input">
            <label>Elige un plan de retiro de bienestar</label>
            <select
              {...register("plan-retiro")}
              onChange={(event) => console.log(event.target.value)}
            >
              {plans.map((plan) => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
            <input />
          </div>
          <div className="buy-input">
            <label>Información de salud</label>
            <input
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
          <div className="buy-input">
            <label>Sugerencias</label>
            <input
              type="text"
              {...register("sugerencias", {
                maxLength: 1000,
                required: true,
              })}
              placeholder="Ingrese su sugerencias personales"
              required
            />
            {errors.sugerencias?.type === "required" && (
              <p>El campo de sugerencias personales es requerido</p>
            )}
            {errors.sugerencias?.type === "maxLength" && (
              <p>
                El campo de sugerencias personales debe de tener menos de 1000
                caracteres
              </p>
            )}
          </div>
        </div>
        <div className="terms-checkbox">
          <input type="checkbox" id="terms" name="termsAccepted" required />
          <label htmlFor="terms">Acepto los términos y condiciones</label>
          <a href="/terms-and-conditions" target="_blank">
            Leer términos y condiciones
          </a>
        </div>
        <input type="submit" value="continuar" />
      </form>
    </div>
  );
};

export default BuyForm;
