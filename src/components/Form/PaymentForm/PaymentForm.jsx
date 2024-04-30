import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Pago:", data);
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="payment-form-container">
      <div className="payment-form-title">
        <h2>Realizar pago</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
        <div className="payment-inputs">
          <div className="payment-input">
            <label className="payment-label">Nombre completo</label>
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
          <div className="payment-input">
            <label className="payment-label">Correo</label>
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
          <div className="payment-input">
            <label className="payment-label">Método de pago: </label>
            <select
              id="paymentMethod"
              className="form-control"
              required
              onChange={(event) => setPaymentMethod(event.target.value)}
            >
              <option value="">Seleccione un método de pago</option>
              <option value="creditCard">Tarjeta de crédito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          {paymentMethod === "creditCard" && (
            <div>
              <div className="payment-label">
                <label htmlFor="cardNumber">Número de tarjeta:</label>
                <input
                  type="text"
                  {...register("numeroTarjeta", {
                    required: true,
                    pattern: /^[0-9]{16}$/,
                    maxLength: 16,
                  })}
                />
              </div>
              {errors.numeroTarjeta && (
                <p>Por favor ingrese un número de tarjeta válido.</p>
              )}
              <div className="payment-input">
                <label htmlFor="cardExpirationDate">
                  Fecha de vencimiento:
                </label>
                <input
                  type="text"
                  {...register("cardExpirationDate", {
                    required: true,
                    pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  })}
                />
              </div>
              {errors.cardExpirationDate && (
                <p>
                  Por favor ingrese una fecha de vencimiento válida en formato
                  MM/YY.
                </p>
              )}
              <div className="payment-input">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  {...register("cvv", {
                    required: true,
                    pattern: /^[0-9]{3}$/,
                    maxLength: 3,
                  })}
                />
                 {errors.cvv && <p>Por favor ingrese un CVV válido de 3 dígitos.</p>}
              </div>
            </div>
          )}
        </div>
        <input type="submit" className="button-payment" value="Enviar" />
      </form>
    </div>
  );
};

export default PaymentForm;
