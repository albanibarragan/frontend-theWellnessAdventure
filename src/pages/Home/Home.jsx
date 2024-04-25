import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import Activities from '../../components/Activities.jsx'
import Planes from '../../components/Planes.jsx'

const Home = () => {
  return (
    <div className="home">
    <Activities />
    <Planes />
    <Footer />
    </div>
  
  )
}

export default Home