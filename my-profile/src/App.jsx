import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import AnimatedBackground from './Components/Animatedbackground/Animatedbackground'
import Contact from './Components/Contact/Contact'
import Links from './Components/Links/Links'




const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <AnimatedBackground/>
      <Contact/>
      <Links/>
     
      
      
    </div>
  )
}

export default App