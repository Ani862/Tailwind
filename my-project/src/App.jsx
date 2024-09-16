import React from 'react'
import Navabar from './components/Navabar/Navabar'
import Hero from './components/Hero/Hero'
import Explore from './components/Explore/Explore'
import Journal from './components/Journal/Journal'
import Footer from './components/Footer/Footer'


const bgImage ={
   backgroundImage: `url('https://outdoor-travel.netlify.app/assets/hero-BAVXA6tY.jpg')`,
   backgroundRepeat: "no-repeat",
   backgroundPosition: "bottom",
   backgroundSize: "cover",
   position: "relative"
}


const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navabar/>
        <Hero/>
      </div> 
      <Explore/> 
      <Journal/>
      <Footer/>
   </div>

  )
}

export default App
