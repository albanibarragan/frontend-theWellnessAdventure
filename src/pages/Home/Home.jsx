import React from "react";
import imagen from "../../assets/fotos/actividad6.png";
import "./Home.css";
import ContainerHome from "../../components/containerHome/containerHome.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../Supabase.js";
const Home = () => {
  const userName = "Test User";
  const hasActivePlan = true;
  const planName = "Plan Básico";
  const startDate = "2024-01-01";
  const endDate = "2024-12-31";
  const navigate = useNavigate();
  const [user,SetUser] = useState(false)

const getUserData = async (email) => {
  const {data, error} = await supabaseClient.from("users").select("*").eq("Correo",email)
  console.log("EMAIL " + email)
  if(error || data.length == 0){
    sessionStorage.removeItem("Sesion")
    navigate("/login")
    return
  }
  if(data){
    SetUser(data[0])
  }
  
}
useEffect(()=>{
  console.log(user)
  if (!user) {
    const sesion=sessionStorage.getItem("Sesion")
    if(!sesion){
      navigate("/login")
    }
  
    const sesionData = JSON.parse(sesion) 
    console.log(sesionData)
    getUserData(sesionData?.email)
  }

},[user])
  

  return (
    <div className="pages-home">
      <ContainerHome>
        <div className="home-container">
          <div className="left-section">
            <h2 className="title-section">¡Bienvenido, {userName}!</h2>
            {hasActivePlan ? (
              <div className="plans-section-home">
                <p className="title-plan-section">
                  Tienes un plan de bienestar activo:
                </p>
                <p>Nombre del plan: {planName}</p>
                <p>Fecha de inicio: {startDate}</p>
                <p>Fecha de fin: {endDate}</p>
              </div>
            ) : (
              <p>No tienes un plan de bienestar activo.</p>
            )}
          </div>
          <div className="right-section">
            <img src={imagen} alt="Imagen de fondo" />
          </div>
        </div>
      </ContainerHome>
    </div>
  );
};

export default Home;
