import React, {useState} from "react";
import './Navbar.css'
import  logo from '../../assets/fotos/logo.jpg'
const Navbar = () => {
    const [ isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
            <div className="nav_logo">
            <img src={logo} alt="" className ="logo"/>
            </div>
       
        <ul className={`navbar-menu ${isOpen && "open"}`}>
            <a href='/'>Inicio</a>
            <a href='/Activities'>Actividades</a>
            <a href='/Planes'>Planes</a>
        </ul>
        <div className="navbar-right">
          <a className="button-login" target="_blank" rel="noreferrer">Comencemos</a>   
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () =>
                setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
        </div>
    </div>
  )
}

export default Navbar