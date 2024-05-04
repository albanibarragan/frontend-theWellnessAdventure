import React from 'react'
import '../Cancel/Cancell.css'
function Cancel() {
  return (
   <>
          <div className="card-form-profile bg-white border-gray-500 dark:border-gray-200 dark:bg-gray-700">
            <h2 className="title-editProfile">Cancelar plan</h2>
            <form className="profile-form">
        
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
                    <button className="button-cambios" type='submit'>Cancelar plan</button>
                    </div>
          </form>
            
        </div >

    </>
  )
}

export default Cancel