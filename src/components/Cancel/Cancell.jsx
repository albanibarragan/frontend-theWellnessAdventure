import React from 'react'
import '../Cancel/Cancell.css'
import {supabaseClient} from "../../Supabase"
import { useEffect, useState } from 'react'
import { ProtectPage } from '../../AuthValidation'
import { useNavigate } from 'react-router-dom'
function Cancel() {
  const [user,SetUser] = useState(false)
  const [activePlan, setActivePlan] = useState()
  const [planConsulted, setPlanConsulted] = useState(false)
const navigate= useNavigate()

  const getUserActivePlan = async (userId) => {
    const { data, error } = await supabaseClient.from("Plan_users").select("id_plan").eq("id-user", userId).eq("Estatus", true) 
    if (error) {
      console.log(error)
      return
    } else if (data.length > 0) setActivePlan(data[0]) 

    setPlanConsulted(true)
  }

  useEffect(()=>{

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

 async function cancelar(){
console.log(user)
console.log(activePlan)
 const {error} = await supabaseClient.from("Plan_users").update({Estatus:false})
 .eq("id-user" ,user.id_user)
 .eq("id_plan", activePlan.id_plan)
 .eq("Estatus", true)
if(error){
  console.log(error)
  return
}
window.location.href="/home"
 }
  
  return (
   <>
          <div className="card-form-profile bg-white border-gray-500 dark:border-gray-200 dark:bg-gray-700">
            <h2 className="title-editProfile">Cancelar plan</h2>
            <form className="profile-form" >
        
            <div className="editProfile">
                    <div className="title-editProfile-end"> 
        
                    <div className="input-box">
                            <label htmlFor="address" className="profile-label">¿Tuvo algun problema con su plan de retiro?</label>
                            <input    placeholder="(Opcional)"/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="address" className="profile-label">¿Podria decirnos, como podemos mejorar?</label>
                            <input    placeholder="(Opcional)"/>
                        </div>
        
        
        
        </div>
        
        </div>
           
        <div className='buttons-editProfile'>
                    <button className="button-cambios" type='button' onClick={cancelar}>Cancelar plan</button>
                    </div>
          </form>
            
        </div >

    </>
  )
}

export default Cancel