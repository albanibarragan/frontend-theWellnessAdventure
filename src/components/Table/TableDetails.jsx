import React, {useEffect, useState} from 'react'
import './TableDetails.css'
import {ProtectPage} from '../../AuthValidation'
import {useNavigate} from "react-router-dom"
import {supabaseClient} from '../../Supabase'

const TableDetails = () => {

  const [user, setUser] = useState(false)
  const [planes, setPlanes] = useState([])
  const [planesConsulted, setPlanesConsulted] = useState(false)
  const navigate = useNavigate()

  const getPlanes = async (userId) => {
    const { data, error } = await supabaseClient.from("Plan_users").select("Estatus, retreat_plan(*)").eq("id-user", userId)
      .order("id", { ascending: false })

    if (error) {
      console.log(error)
      return
    }

    console.log(data)
    setPlanes(data)
    setPlanesConsulted(true)
  }

  useEffect(() => {
    if (!user) {
      ProtectPage().then(data => {
        if (!data.exist) {
          navigate("/login")
          return
        }
        setUser(data.user)
      })
    } else if (!planesConsulted) {
      getPlanes(user.id_user)
    } 
  }, [user])
  return (
    <div className='table-plans'> 
    {
      planes.length > 0
      ? <table className="table"> 
      <thead> <tr> 
        <th>Fecha inicio</th> 
        <th>Fecha fin</th>
        <th>Plan de retiro</th> 
        <th>Descripcion</th> 
        <th>Monto</th> 
        <th>Estado</th> 
      </tr> </thead> 
      
      <tbody>
      {planes.map((tablaData) => (
          <tr> 
            <td>{tablaData?.retreat_plan?.Fecha_inicio}</td> 
            <td>{tablaData?.retreat_plan?.Fecha_fin}</td> 
            <td>{tablaData?.retreat_plan?.plan_id}</td> 
            <td>{tablaData?.retreat_plan?.Descripcion}</td> 
            <td>$ {tablaData?.retreat_plan?.Precio}</td> 
            <td>{tablaData.Estatus ? "Activo" : "Inactivo"}</td>
          </tr> 
        ))}
      </tbody> 
    </table> 
      : <>
        <h3 className='text-center text-xl mt-10 text-gray-700'>No posee historial de planes.</h3>
      </>

    }
    
  </div>
  )
}

export default TableDetails
