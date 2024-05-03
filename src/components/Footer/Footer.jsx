import { useState } from 'react'
import facebook_icon from '../../assets/icons/facebook_icon.svg'
import youtube_icon from '../../assets/icons/youtube_icon.svg'
import instagram_icon from '../../assets/icons/instagram_icon.svg'
import twitter_icon from '../../assets/icons/twitter_icon.svg'
import viteLogo from '/vite.svg'
//importamos el css
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-letf">
          <h1 className='title'>Sobre nosotros</h1>
          <p>En The Wellness Adventure, nos apasiona el bienestar de los adultos mayores. Creemos que el retiro es una etapa de la vida que debe disfrutarse al máximo, llena de nuevas experiencias, oportunidades y crecimiento personal.</p>
          <div className="social-icons">
            <img src={facebook_icon} alt="Facebook icono" />
            <img src={youtube_icon} alt="Youtube icono" />
            <img src={instagram_icon} alt="Instagram icono" />
            <img src={twitter_icon} alt="Twitter icono" />
          </div>
        </div>
        {/*div de la derecha*/}
        <div className="footer-content-left-2">
          <h2>Ofertas</h2>
          <ul>
            <li>Pagos</li>
            <li>Precios</li>
            <li>Suscripción</li>
            <li>Clientes</li>
          </ul>
        </div>
        {/*div de la central*/}
        <div className="footer-content-center">
          <h2>Empresa</h2>
          <ul>
            <li>Home</li>
            <li>¿Quienes somos?</li>
            <li>Opiniones</li>
            <li>Condiciones</li>
          </ul>
        </div>
        {/*div de la derecha*/}
        <div className="footer-content-right">
          <h2>Contactanos</h2>
          <ul>
            <li>thewellnessAdventure@contacto.com</li>
            <li>Telefono</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024 The Wellness Adventure. Todos los derechos reservados. </p>
      </div>
    </div>
  )
}

export default Footer
