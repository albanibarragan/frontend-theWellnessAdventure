import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "./EditProfile.css"

const EditProfile = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
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
    const onSubmit = (values) => {
        console.log("values")
    };
    return (
        <div className="card-form-profile">
            <h2 className="title-editProfile">Editar Perfil</h2>
            <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="editProfile">
                    <div className="editProfile-inputs">

                        <div className="input-box">
                            <label htmlFor="firstName" className="profile-label">Nombre</label>
                            <input
                                id="firstName"
                                name="firstName"
                                placeholder="Nombre"
                                type="text" {...register("nombre", {
                                    required: true,
                                    maxLength: 100,
                                    pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
                                })} />
                        </div>
                        {errors.nombre && <p>Por favor ingrese un nombre válido.</p>}
                        <div className="input-box">
                            <label className="profile-label">Cédula</label>
                            <input

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
                            <label htmlFor="address" className="profile-label">Dirección</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                {...register("address", {
                                    required: true,
                                    maxLength: 200,
                                })}
                            />
                        </div>
                        {errors.address && <p>Por favor verifique el apellido</p>}
                        <div className="input-box">
                            <label className="edit-label">Correo</label>
                            <input
                                className="login-input"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Correo Electronico"
                                {...register("email", {
                                    pattern:
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            />
                        </div>
                        {errors.email && <p>Por favor verifica el email</p>}
                        <div className="input-box">
                            <label htmlFor="dateBirthday" className="profile-label">Fecha de Nacimiento</label>
                            <input
                                {...register('dateOfBirth')}
                                id="dateBirthday"
                                name="dateBirthday"
                                type="date"
                            />
                        </div>
                    </div>

                    <div className="editProfile-inputs">

                        <div className="input-box">
                            <label htmlFor="lastName" className="profile-label">Apellido</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Apellido"
                                {...register("apellido", {
                                    required: true,
                                    maxLength: 20,
                                })}
                            />
                        </div>
                        {errors.apellido && <p>Por favor verifique el apellido</p>}
                        <div className="input-box">
                            <label htmlFor="phone" className="profile-label">Teléfono</label>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                placeholder="Telefono (Principal)"
                                {...register('phone', {
                                    required: true,
                                    pattern: /^\d{10}$/,
                                })}
                            />
                        </div>
                        {errors.phone && <p>Por favor verifique el apellido</p>}
                        <div className="input-box">
                            <label htmlFor="phone" className="profile-label">Teléfono (Emergencia)</label>
                            <input
                                id="phone"
                                name="phoneEmergencia"
                                type="number"
                                placeholder="Telefono (Emergencia)"
                                {...register('phoneEmergencia', {
                                    required: true,
                                    pattern: /^\d{10}$/,
                                })}
                            />
                        </div>
                        {errors.phoneEmergencia && <p>Por favor verifique el apellido</p>}


                        <div className="input-box">
                            <label className="profile-label">Información de salud</label>

                            <input
                                className="register-input"
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
                            <label className="profile-label">Sugerencias</label>
                            <input
                                type="text" className="sugerencias-input"
                                {...register("sugerencias", {
                                    maxLength: 1000,
                                    required: true,
                                })}
                                placeholder="Ingrese su sugerencias personales"
                                required
                            />
                            {errors.sugerencias?.type === "required" && (
                                <p className="parrafo-error">
                                    El campo de sugerencias personales es requerido
                                </p>
                            )}
                            {errors.sugerencias?.type === "maxLength" && (
                                <p className="parrafo-error">
                                    El campo de sugerencias personales debe de tener menos de 1000
                                    caracteres
                                </p>
                            )}
                        </div>

                    </div>
                </div >

                <div className='buttons-editProfile'>
                    <button className="button-cambios" type='submit'>Guardar Cambios</button>

                    <button className="button-limpiar" onClick={handleClear} type='reset'>Limpiar</button>
                </div>
            </form >
        </div >
    )
}

export default EditProfile