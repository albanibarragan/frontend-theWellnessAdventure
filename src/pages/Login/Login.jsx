import React from "react"
import FormLogin from "../../components/Form/FormLogin/FormLogin"
import './Login.css'


export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
      <FormLogin />      
      </div>
    </div>
  )
}

export default Login