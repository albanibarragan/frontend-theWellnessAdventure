import React from "react";
import imagen from "../../assets/fotos/actividad6.png";
import "./Home.css";
import ContainerHome from "../../components/containerHome/containerHome.jsx"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ProtectPage} from "../../AuthValidation";
import {supabaseClient} from "../../Supabase";
import { ProtectPage } from "../../AuthValidation";
const Home = () => {
  const navigate = useNavigate();
  const [user,SetUser] = useState(false)
  const [activePlan, setActivePlan] = useState()
  const [planConsulted, setPlanConsulted] = useState(false)

  const getUserActivePlan = async (userId) => {
    const { data, error } = await supabaseClient.from("Plan_users").select("id_plan, Estatus, retreat_plan(*)").eq("id-user", userId).eq("Estatus", true) 
    if (error) {
      console.log(error)
      return
    } else if (data.length > 0) setActivePlan(data[0]) 

    setPlanConsulted(true)
  }
  useEffect(() => {

  if(user === false) {
    ProtectPage().then(data => {
      if (!data.exist) {
        navigate("/login")
        return
      }
      SetUser(data.user)
    })
  } else if (!planConsulted){
    getUserActivePlan(user.id_user)
  }

},[user, activePlan])

  return (
    <div className="pages-home">
      <ContainerHome>
        <div className="home-container">
          <div className="left-section">
            <h2 className="title-section">¡Bienvenido, {user?.Nombre}!</h2>
            {activePlan ? (
              <div className="plans-section-home">
                <p className="title-plan-section">
                  Tienes un plan de bienestar activo:
                </p>
                <p>Nombre del plan: {activePlan?.id_plan}</p>
                <p>Fecha de inicio: {activePlan?.retreat_plan?.Fecha_inicio}</p>
                <p>Fecha de fin: {activePlan?.retreat_plan?.Fecha_fin}</p>
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
