import React, {useState} from "react"
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-content">
            <h1 className = "text-inicial">¡Nos dedicamos en complacer y servir!</h1>
            <p className="text">Descubre nuestro innovador plan de retiro bienestar! Obtén la tranquilidad y seguridad que mereces mientras disfrutas de una vida plena. Nuestro enfoque integral te brinda las herramientas necesarias para cuidar de tu salud física, emocional y financiera. Conoce cómo podemos ayudarte a vivir tu retiro de la mejor manera posible. ¡Tu bienestar es nuestra prioridad!</p>
            <a className="button1" target="_blank" rel="noreferrer">Registrate Ahora</a>
        </div>
    </div>
  )
}

export default Header