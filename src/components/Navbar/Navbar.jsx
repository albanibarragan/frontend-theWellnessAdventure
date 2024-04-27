import React, {useState} from "react";
import './Navbar.css'
import  logo from '../../assets/fotos/logo.jpg'
const Navbar = () => {
    const [ menu, setMenu] = useState(false);
  return (
    <div className="navbar">
            <div className="nav_logo">
            <img src={logo} alt="" className ="logo"/>
            </div>
       
        <ul className="navbar-menu">
            <a  onclick ={() => setMenu("home")}className={menu ==="home" ? "active": ""} >Inicio</a>
            <a onclick ={() => setMenu("activities")}className={menu ==="activities" ? "active": ""} >Actividades</a>
            <a onclick ={() => setMenu("planes")}className={menu ==="planes" ? "active": ""}  >Planes</a>
        </ul>
        <div className="navbar-right">
          <a className="button-login" target="_blank" rel="noreferrer">Comencemos</a>   
        </div>
    </div>
  )
}

export default Navbar