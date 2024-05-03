import React from 'react';
import "./CardDetails.css";

const CardDetails = ({ plan, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="title-description-card">
                    <h1 className="title-plans-card">{plan?.plan_id}</h1>
                    <p className="description-plan-card">{plan.Descripcion}</p>
                </div>
                <div className="plan-info-card">
                    <p className="plan-cost-card">
                        $ {plan.Precio}{" "}
                        "Mensual"
                    </p>
                    <hr />
                    <div className="activities-card">
                        <div className="title-activities-card">
                            <h1 className="title-activities-card">Actividades</h1>
                        </div>
                        <ul className="activities-list-card">
                            {plan?.Planes_Actividades.map((activities) => (
                                <li key={activities.Actividades.id_actividad}>{activities.Actividades.Nombre}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="benefits-card">
                        <div className="title-benefits-card">
                            <h1 className="title-benefits-card">Beneficios</h1>
                        </div>
                        <ul className="benefits-list-card">
                            {plan?.Planes_Actividades.map((beneficio) => (
                                <li key={beneficio.Actividades.id_actividad}>{beneficio.Actividades.Descripción}</li>
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
