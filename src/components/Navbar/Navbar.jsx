import React, {useState} from "react";
import { useNavigate }    from "react-router-dom"
import './Navbar.css'
import  logo from '../../assets/fotos/logo.jpg'
const Navbar = () => {
    const [ menu, setMenu] = useState(false);

    const navigate = useNavigate();
    const onClick = ()=>{
      navigate('/login');
  }
  return (
    <div className="navbar">
            <div className="nav_logo">
            <img src={logo} alt="" className ="logo"/>
            </div>
       
        <ul className="navbar-menu">
            <a  onClick ={() => setMenu("home")}className={menu ==="home" ? "active": ""} >Inicio</a>
            <a onClick ={() => setMenu("activities")}className={menu ==="activities" ? "active": ""} >Actividades</a>
            <a onClick ={() => setMenu("planes")}className={menu ==="planes" ? "active": ""}  >Planes</a>
        </ul>
        <div className="navbar-right">
        <a onClick={onClick} className="button-login" target="_blank" rel="noreferrer">Iniciar sesion</a>
        </div>
    </div>
  )
}

export default Navbar