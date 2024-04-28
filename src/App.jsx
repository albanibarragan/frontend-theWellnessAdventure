import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import './index.css'


const App = () => {
  return (
    <div className='App'>
        <Routes>
         <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
};

export default App;