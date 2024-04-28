import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import Activities from '../../components/GalleryActivities/Activities.jsx'
import Planes from '../../components/planes/Planes.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'

const Principal = () => {
  return (
    <div className="home" id ="home">
      <Navbar />
      <Header />
      <Activities />
      <Planes />
      <Footer />
    </div>
  )
}

export default Principal