import React from 'react';
import "./CardDetails.css";

const CardDetails = ({ plan, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="title-description-card">
                    <h1 className="title-plans-card">{plan.planName}</h1>
                    <p className="description-plan-card">{plan.description}</p>
                </div>
                <div className="plan-info-card">
                    <p className="plan-cost-card">
                        {plan.monto.currency} {plan.monto.amount}{" "}
                        {plan.monto.paymentFrequency === "mensual" && "mensual"}
                    </p>
                    <hr />
                    <div className="activities-card">
                        <div className="title-activities-card">
                            <h1 className="title-activities-card">Actividades</h1>
                        </div>
                        <ul className="activities-list-card">
                            {plan.activities.map((activities) => (
                                <li key={activities}>{activities}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="benefits-card">
                        <div className="title-benefits-card">
                            <h1 className="title-benefits-card">Beneficios</h1>
                        </div>
                        <ul className="benefits-list-card">
                            {plan.benefits.map((beneficio) => (
                                <li key={beneficio}>{beneficio}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className="close-button-card" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default CardDetails;