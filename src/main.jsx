import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/Login.jsx'
import NavbarUser from './components/Navbar/NavbarUsuario/NavbarUser.jsx'
import Dropdown from './components/Dropdown/DropdownProfile.jsx'
import profileData from './data/profileData.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Dropdown profileData={profileData}/>
  </BrowserRouter>
)
