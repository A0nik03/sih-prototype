import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import FarmerMenu from '../../components/FarmerMenu/FarmerMenu'
import ParallaxSection from '../../components/Parallax/Parallax'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <FarmerMenu />
      <ParallaxSection/>
    </>
  )
}

export default Home
