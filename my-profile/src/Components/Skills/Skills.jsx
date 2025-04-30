import React from 'react'
import './Skills.css'
import html_img from '../../assets/html.png.png'
import css_img from '../../assets/css.png.png'
import js_img from '../../assets/js.png.png'
import react_img from '../../assets/react.png.png'
import nodejs_img from '../../assets/nodejs.png.png'
import express_img from '../../assets/express.png.png'
import mongodb_img from '../../assets/mongodb.png.png'
import bootstrap_img from '../../assets/bootstrap.png'

const Skills = () => {
  return (
    <div id='skills' className="skills">
      <div className="skill-title">
        <h1>Skills</h1>
      </div>
      <div className="skill-set">
        <div className="skill-set-item">
          <img src={html_img} alt="HTML" />
          <h3>Html</h3>
        </div>
        <div className="skill-set-item">
          <img src={css_img} alt="CSS" />
          <h3>Css</h3>
        </div>
        <div className="skill-set-item">
          <img src={js_img} alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill-set-item">
          <img src={react_img} alt="React.js" />
          <h3>React.js</h3>
        </div>
        <div className="skill-set-item">
          <img src={nodejs_img} alt="Node.js" />
          <h3>Node.js</h3>
        </div>
        <div className="skill-set-item">
          <img src={express_img} alt="Express.js" />
          <h3>Express.js</h3>
        </div>
        <div className="skill-set-item">
          <img src={mongodb_img} alt="Mongo DB" />
          <h3>Mongo DB</h3>
        </div>
        <div className="skill-set-item">
          <img src={bootstrap_img} alt="Bootstrap" />
          <h3>Bootstrap</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills
