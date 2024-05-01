import React from "react";
import { useRegFormContext } from "../../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const [state] = useRegFormContext();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/home");
  };
  return (
    <div className="payment-card">
      <div className="payment-container">
        <h2>Pago realizado</h2>
        <hr />
        <h3>Detalles de la compra</h3>
        {state.buy && state.payment && (
          <>
            <p>Nombre plan: {state.buy.plan}</p>
            <p>salud: {state.buy.salud} </p>
            <p>sugerencias: {state.buy.sugerencias}</p>
            <p>Nombre: {state.payment.nombre}</p>
            <p>sugerencias: {state.payment.numeroTarjeta}</p>
            <p>sugerencias: {state.payment.cardExpirationDate}</p>
            <p>sugerencias: {state.payment.cvv}</p>
          </>
        )}
      </div>
      <input type="submit" value="siguiente" onClick={onClick} />
    </div>
  );
};

export default PaymentDetails;
