import React from 'react'
import "./CardPaymentDetails.css"
import { GiConfirmed } from "react-icons/gi";

const CardPaymentDetails = ({ purchaseDetails, onClose }) => {
    return (
        <div className="modal-card-details">
            <div className="modal-content">
                <div className="title-payment-card">
                    <h1 className="title-payment-card"> <GiConfirmed />El registro a un plan se hizo exitosamente!</h1>
                </div>
                {purchaseDetails && (
                    <div className="purchase-details">
                        <p>Plan seleccionado: {purchaseDetails.selectedPlan}</p>
                        <p>Nombre: {purchaseDetails.nombre}</p>
                        <p>Método de pago: {purchaseDetails.paymentMethod}</p>
                        <p>Precio: {purchaseDetails.monto}</p>
                    </div>
                )}
                <button className='button-payment' onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default CardPaymentDetails


