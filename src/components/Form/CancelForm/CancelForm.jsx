import React from "react";
import { useForm } from "react-hook-form";

const CancelForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
    <div className="cancel-form">
      <div className="cancel-form-title">
        <h2>Cancelar Plan de bienestar</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="cancel-inputs">
          <div className="cancel-input">
            <label>Nombre completo</label>
            <input
              type="text"
              {...register("nombre", { required: true, maxLength: 10 })}
              placeholder="Ingrese su nombre"
            />
            {errors.nombre && <p>Por favor verifique el nombre completo</p>}
          </div>
          <div className="cancel-input">
            <label>Correo</label>
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

          <div className="cancel-input">
            <label>Elige el plan de retiro de bienestar a cancelar</label>
            <select
              {...register("planRetiro")}
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
          <div className="cancel-input">
            <label>Observaciones de cancelación de plan</label>
            <input
              type="text"
              {...register("observacion", {
                maxLength: 1000,
                required: true,
              })}
              placeholder="Ingrese sus observaciones personales"
              required
            />
          </div>
          {errors.observacion && <p>Por favor verifique</p>}
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default CancelForm;
