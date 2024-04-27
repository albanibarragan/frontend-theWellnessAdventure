import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import Activities from '../../components/Activities.jsx'
import Planes from '../../components/Planes.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Activities />
      <Planes />
      <Footer />
    </div>
  )
}

export default Home