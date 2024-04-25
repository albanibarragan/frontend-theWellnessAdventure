import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Otros componentes y rutas aquí */}
        </Routes>
    </div>
  );
};

export default App;