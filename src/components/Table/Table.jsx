import React from 'react'
import './Table.css'
import tablaData from '../../data/tablaData.js'

const Table = () => {
  return (
    <div className='table-plans'> 
    <table class="table"> 
      <thead> <tr> 
        <th>Fecha inicio</th> 
        <th>Fecha fin</th>
        <th>Plan de retiro</th> 
        <th>Descripcion</th> 
        <th>Duracion Plan</th> 
        <th>Monto</th> 
        <th>Estado</th> 
      </tr> </thead> 
      
      <tbody>
      {tablaData.map((tablaData) => (
          <tr> 
            <td>{tablaData.dateIn}</td> 
            <td>{tablaData.dateFin}</td> 
            <td>{tablaData.plan}</td> 
            <td>{tablaData.decripcion}</td> 
            <td>{tablaData.duracion}</td> 
            <td>$ {tablaData.monto}</td> 
            <td>{tablaData.estado}</td>
          </tr> 
        ))}
      </tbody> 
    </table>
  </div>
  )
}

export default Table