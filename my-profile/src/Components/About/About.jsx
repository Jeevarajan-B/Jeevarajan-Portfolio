import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme.png.png'
import profile_img from '../../assets/theme_pattern.jpg.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>"I'm a passionate Full-Stack Developer eager to kickstart my career in the field. I am excited to collaborate with teams, learn from industry professionals, and contribute to impactful projects with innovative solutions."</p>

                    <p>Constantly learning and adapting to new technologies, I thrive in collaborative environments and love problem-solving.</p>
                </div>
                {/* <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%" }}/></div>
                <div className="about-skills"><p>Java Script</p><hr style={{width:"70%" }}/></div>
                <div className="about-skills"><p>React.js</p><hr style={{width:"60%" }}/></div> 
                <div className="about-skills"><p>Mongo DB</p><hr style={{width:"50%" }}/></div> */}

            </div>
        </div>
    </div>
  )
}

export default About
