import React from 'react';
import './Links.css';
import linkedin_img from '../../assets/linkedin.png';
import instagram_img from '../../assets/instagram.png';
import github_img from '../../assets/github.png';

const Links = () => {
  return (
    <div id='links' className='link'>
      <div className="link-title">
        <h3>Visit my profiles</h3>
        <div className="link-profile">
          <a href="https://www.linkedin.com/in/jeeva-raj-b7b3a8213/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_img} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/_j_2.o_/" target="_blank" rel="noopener noreferrer">
            <img src={instagram_img} alt="Instagram" />
          </a>
          <a href="https://github.com/Jeevarajan-B/" target="_blank" rel="noopener noreferrer">
            <img src={github_img} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
