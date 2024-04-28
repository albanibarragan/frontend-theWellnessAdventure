import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/Login.jsx'
import Table from './components/Table/Table.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Table />
  </BrowserRouter>
)
