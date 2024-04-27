import React, { useState } from 'react'
import './Login.css'
import logo_site from '../../assets/fotos/logo.jpg'
import email_icon from '../../assets/icons/email.png'
import password_icon from '../../assets/icons/password.png'

export const Login = () => {

  const [action, setAction] = useState("Iniciar sesion");

  return (
    <div className="login-container-form">
        <div className="header">
        <div className='img-container'>
          <img src={logo_site} height={200} width={300}/>
         </div>
            <div className="login-form-text-header-start">Bienvenido {action}</div>
            <div className="login-form-text-header ">Ingresa tu usuario y contraseña para entrar a tu perfil</div>
        </div>
        <form className="login-form">
        <div className= 'login-inputs'>
        <div className="input-box">
        <img src = {email_icon} alt= "" />
        <input id="email" name="email" required type="email" placeholder='Correo Electronico'/>
        </div> 
        <div className="input-box">
        <img src = {password_icon} alt= "" />
        <input id="password" name="password"  required type="password" placeholder='Contraseña'/>
        </div> 
        {action==="Sign Up"?<div></div>: <div className= "forgot-password">Olvidaste tu Contraseña?<span>Recuperala aquí</span></div>}
        <div className= "submit-container">
        <button  type="submit"className={action==="Iniciar Sesión"?"submit gray": "submit"} onClick={()=>{setAction("Registrarse")}}>Registrarse </button>
        <button className={action==="Registrarse"?"submit gray": "submit"} onClick={()=>{setAction("Iniciar Sesión")}}>Iniciar Sesión</button>
        </div>
        </div>
        </form>
    </div>
  )
}

export default Login