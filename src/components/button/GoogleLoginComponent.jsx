import React from 'react';
import { GoogleLogin } from '@react-oauth/google';


const GoogleLoginComponent = () => {
  
  return (
    <div>
        <GoogleLogin
          clientId="YOUR_CLIENT_ID" // Reemplaza con tu ID de cliente de Google
          buttonText="Iniciar Sesión con Google"
        />
    </div>

  );
};

export default GoogleLoginComponent;