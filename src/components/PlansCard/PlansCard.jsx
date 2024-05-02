import React from 'react'
import "./PlansCard.css"
const PlansCard = () => {
    return (
        <div className="plans">
            {plans.map((plan, index) => (
                <Card
                    key={index}
                    title={plan.title}
                    benefits={plan.benefits}
                    activities={plan.activities}
                />
            ))}
        </div>
    )
}

export default PlansCard