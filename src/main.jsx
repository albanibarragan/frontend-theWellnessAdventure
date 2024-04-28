import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import BuyForm from './components/Form/BuyForm/BuyForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <BuyForm />
  </BrowserRouter>
)
