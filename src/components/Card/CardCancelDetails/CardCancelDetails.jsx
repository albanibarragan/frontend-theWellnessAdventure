import React from 'react'
import "./CardCancelDetails.css"

const CardCancelDetails = () => {
    return (
        <div className="modal-card-cancel">
            <div className="modal-content">
                <div className="title-cancel-card">
                    <h1 className="title-cancel-card"> <GiConfirmed />El registro a un plan se hizo exitosamente!</h1>
                </div>
                <button className='button-cancel' onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default CardCancelDetails