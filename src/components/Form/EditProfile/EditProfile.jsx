import { React, useState } from "react";
import { useForm } from "react-hook-form";
import './EditProfile.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProtectPage } from "../../../AuthValidation";
import {supabaseClient} from "../../../Supabase";


const EditProfile = () => {


    const navigate= useNavigate();
    const [user, setUser] = useState(false)
    const [values, setValues] = useState({})

    useEffect(()=>{
      if (!user) {
        ProtectPage().then(data => {
          if (!data.exist) {
            navigate("/login")
            return
          }
          setUser(data.user)
        })
      } else {
        setValues({
          nombre: user.Nombre,
          Cedula: user.Cedula,
          address: user.Direccion,
          email: user.Correo,
          phone: user.Telefono,
          phoneEmergencia: user.telefono_emergencia,
          salud: user.Necesidades_Medicas,
          dateOfBirth: user.fecha_nacimiento
        })
      } 
      
      console.log(user)
    }, [user])

    const cancelar = () => {
        navigate("/adios");
      };
    
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
      defaultValues: {
        nombre: "",
        Cedula: "",
        address: "",
        email: "",
        phone: "",
        phoneEmergencia: "",
        salud: "",
        dateOfBirth: "",
      },
      values
    });
    const handleClear = () => {
        reset({
            nombre: '',
            apellido: '',
            Cedula: '',
            address: '',
            email: '',
            dateOfBirth: '',
            phone: '',
            phoneEmergencia: '',
            salud: '',
            sugerencias: '',

        });
    };
    const onSubmit = async (values) => {

      const { error } = await supabaseClient.from("users").update({
        Nombre: values.nombre,
        Cedula: values.cedula,
        Direccion: values.address,
        Telefono: values.phone,
        telefono_emergencia: values.phoneEmergencia,
        Necesidades_Medicas: values.salud,
        fecha_nacimiento: values.dateOfBirth,
      }).eq("id_user", user.id_user)
      
      if (error) {
        console.log(error)
        return
      }
      
      navigate("/editprofile")
    };
    return (
        <div className="card-form-profile bg-white border-gray-500 dark:border-gray-200 dark:bg-gray-700">
            <h2 className="title-editProfile">Perfil usuario</h2>
            <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="editProfile">
                    <div className="editProfile-inputs">

                        <div className="input-box">
                            <label htmlFor="firstName" className="profil-label"> Nombre</label>
                            <input className="profile-input"
                                id="firstName"
                                name="firstName"
                                placeholder="Nombre"
                                type="text" {...register("nombre", {
                                    required: true,
                                    maxLength: 100,
                                    pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
                                })} 
                             />
                        </div>
                        {errors.nombre && <p>Por favor ingrese un nombre válido.</p>}
                        <div className="input-box">
                            <label htmlFor="cedula" className="profil-label">Cédula</label>
                            <input className="profile-input"

                                type="text"
                                placeholder="cedula"
                                {...register("Cedula", {
                                    required: true,
                                    maxLength: 12,
                                    minLength: 7,
                                })}
                            />
                        </div>
                        {errors.cedula && <span className="error">Verifique la cédula ingresada</span>}
                        <div className="input-box">
                            <label htmlFor="address" className="profil-label">Dirección</label>
                            <input className="profile-input"
                                id="address"
                                name="address"
                                type="text"
                                {...register("address", {
                                    required: true,
                                    maxLength: 200,
                                })}
                            />
                        </div>
                        {errors.address && <p>Por favor verifique su Dirección</p>}
                        <div className="input-box">
                            <label className="profil-label">Correo</label>
                            <input className="profile-input"
                              
                                id="email"
                                name="email"
                                type="email"
                                disabled="true"
                                {...register("email", {
                                    pattern:
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                                placeholder="Correo Electronico"
                                value={user.Correo}
                            />
                        </div>
                        {errors.email && <p>Por favor verifica el email</p>}
                       
 
                    </div>

                    <div className="editProfile-inputs">

                    <div className="input-box">
                            <label htmlFor="phone" className="profil-label">Teléfono</label>
                            <input className="profile-input"
                                id="phone"
                                name="phoneEmergencia"
                                type="number"
                                placeholder="Telefono (Emergencia)"
                                {...register('phoneEmergencia', {
                                    required: true,
                                    pattern: /^\d{11}$/,
                                })}
                            />
                        </div>
                        {errors.phone && <p>Por favor verifique el telefono</p>}

                    
                        <div className="input-box">
                            <label htmlFor="phone" className="profil-label">Teléfono (Emergencia)</label>
                            <input className="profile-input"
                                id="phone"
                                name="phoneEmergencia"
                                type="number"
                                placeholder="Telefono (Emergencia)"
                                {...register('phoneEmergencia', {
                                    required: true,
                                    pattern: /^\d{11}$/,
                                })}
                            />
                        </div>
                        {errors.phoneEmergencia && <p>Por favor verifique el telefono de emergencia</p>}


                        <div className="input-box">
                            <label className="profil-label">Información de salud</label>

                            <input 
                                className="profile-input"
                                type="text"
                                {...register("salud", { maxLength: 1000, required: true })}
                                placeholder="Ingrese su informacion de medica de salud actual"
                            />
                            {errors.salud?.type === "required" && (
                                <p>El campo de informacion de salud es requerido</p>
                            )}
                            {errors.salud?.type === "maxLength" && (
                                <p>
                                    El campo de informacion de salud debe de tener menos de 1000
                                    caracteres
                                </p>
                            )}
                        </div>
                        <div className="input-box">
                            <label htmlFor="dateBirthday" className="profil-label">Fecha de Nacimiento</label>
                            <input className="profile-input"
                                id="dateBirthday"
                                name="dateOfBirthday"
                                type="date"
                                {...register('dateOfBirth')}
                            />
                        </div>


                       <div/>

                    </div>
                </div >

                <div className='buttons-editProfile'>
                    <button className="button-cambios" type='submit'>Modificar información</button>

                    <button className="button-limpiar" onClick={handleClear} type='reset'>Limpiar</button>
                    
                    <button className="button-eliminar-suscripcion"  onClick={cancelar} >Cancelar plan de retiro  </button>
                </div>
             
                    
           
            </form >
        </div >
    )
}

export default EditProfile
