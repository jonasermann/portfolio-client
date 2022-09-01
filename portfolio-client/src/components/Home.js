import React from 'react';
import './Home.css';
import profile from './portfolio-profile-pic.jpg';
import linkedin from './linkedin-icon.jpg';
import github from './github-icon.png';

const Home = () => {

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={profile} alt="Taken August of 2022" height="300rem" />
        <p className="Home__text">
          Hi! I am 28 years old and work as a full stack .Net developer! 
          My biggest interest is building complex algorithms to solve
          problems of mathematical nature, but any kind of data-processing
          is interesting to me, which is why I am a developer!
        </p>
      </div>
      <div className="Home-links">
        <div className="Home__link">
          <img src={linkedin} alt="linked in logo" height="50rem" width="50rem" />
          <a href="https://www.linkedin.com/in/jonas-ermann-359797a2/">Linked In</a>
        </div>
        <div className="Home__link">
          <img src={github} alt="github logo" height="50rem" width="50rem" />
          <a href="https://github.com/jonasermann">Github</a>
        </div>
      </div>
    </div>
  )
}

export default Home;