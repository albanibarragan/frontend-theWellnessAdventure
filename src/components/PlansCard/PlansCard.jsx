import React from 'react';
import './PlansCard.css';
import plansData from '../../data/plansData';
import { VscArrowSmallRight } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";

const PlansCard = () => {
    return (
        <div className="planes" id="planes">

            <div className="title-description">
                <h1 className="title-plans ">Planes</h1>
                <p className="description">
                    Tenemos ofrecemos los diferentes Planes segun tus gustos.
                </p>
            </div>

            <div className="plans-container">
                <section className="text-white body-font">
                    <div className="card-grid">
                        {plansData.map((plan) => (
                            <div className="plan-card" key={plan.id}>
                                <div className="card-content">
                                    <h2 className="card-title">{plan.planName}</h2>
                                    <hr />
                                    <div className="plan-info">
                                        <p className="plan-cost">
                                            {plan.monto.currency} {plan.monto.amount}{" "}
                                            {plan.monto.paymentFrequency === "mensual" && "mensual"}
                                        </p>
                                        <ul className="benefits-list">
                                            {plan.benefits.map((benefit, index) => (
                                                <li key={index} className="benefit-item">
                                                    <VscCheck />{benefit}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                    <p className="plan-start-date">
                                        Inicio de plan: {plan.startDate}
                                    </p>
                                    <button className="view-more-button">Más información <VscArrowSmallRight /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PlansCard;