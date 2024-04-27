import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Activities from './components/Activities.jsx';
import Planes from './components/Planes.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/Planes' element={<Planes />} />
          {/* Otros componentes y rutas aquí */}
        </Routes>
    </div>
  );
};

export default App;