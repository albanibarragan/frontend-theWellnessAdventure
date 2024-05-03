import React, { useEffect, useState } from 'react';
import './PlansCard.css';
import { VscArrowSmallRight } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import CardDetails from '../Card/CardDetails/CardDetails';
import { supabaseClient } from "../../Supabase.js"


const PlansCard = () => {
    const [showCard, setShowCard] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
    
    const [planes, SetPlanes] = useState([])
    const getPlan = async () => {
      const { data, error } = await supabaseClient.from("retreat_plan").select(
        `
        *,
        Planes_Actividades(
          Actividades(*)
        )
        `,
      )
      if (error) {
        console.log(error)
        return
      }

      SetPlanes(data)
      console.log(data)
    }

  useEffect(() => {
    getPlan()
  }, [])

    const handleShowCard = (plan) => {
        setSelectedPlan(plan);
        setShowCard(true);
    };

    const handleCloseCard = () => {
        setShowCard(false);
        setSelectedPlan(null);
    };

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
                        { planes.length > 0 
                          ? planes.map((plan) => (
                            <div className="plans-card" key={plan?.plan_id}>
                                <div className="card-content">
                                    <h2 className="card-title">{plan?.plan_id}</h2>
                                    <hr />
                                    <div className="plan-info">
                                        <p className="plan-cost">
                                            $ {plan?.Precio}{" "}
                                            "mensual"
                                        </p>
                                        <ul className="benefits-list">
                                            {
                                              plan?.Planes_Actividades.length > 0
                                              ? plan.Planes_Actividades.map((benefit, index) => (
                                                <li key={index} className="benefit-item">
                                                      <VscCheck />{benefit?.Actividades?.Descripción}
                                                </li>
                                            ))
                                            : <></>
                                            }
                                        </ul>

                                    </div>

                                    <button
                                        className="view-more-button"
                                        onClick={() => handleShowCard(plan)}
                                    >
                                        Más información <VscArrowSmallRight />
                                    </button>
                                </div>
                            </div>
                        )
                          )
                          : <></>
                        }
                    </div>
                </section>
            </div>
            {showCard && selectedPlan && (
                <CardDetails plan={selectedPlan} onClose={handleCloseCard} />
            )}
        </div>
    );
};

export default PlansCard;
