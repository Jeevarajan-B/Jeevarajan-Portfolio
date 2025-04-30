import React from 'react'
import'./Hero.css'
import profile_img from '../../assets/jrb.png'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className="image" src={profile_img} alt="" />

        <h1 ><span>I'm Jeevarajan,</span>Full stack developer</h1>

        <p>MERN Stack Developer I build web applications using MongoDB, Express.js, React.js, and Node.js. I focus on creating fast, user-friendly, and scalable solutions to enhance functionality and experience.</p>
        <div className="hero-action">
            {/* <div className="hero-connect">Connect with me</div> */}
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero