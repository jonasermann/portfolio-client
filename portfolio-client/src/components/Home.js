import React from 'react';
import './Home.css';
import profile from './portfolio-profile-pic.jpg';

const Home = () => {

  return (
    <div className="Home">
      <img src={profile} alt="Taken August of 2022" height="300rem" />
      <p className="Home__text">
        Hi! I am 28 years old and work as a full stack .Net developer! 
        My biggest interest is building complex algorithms to solve
        problems of mathematical nature, but any kind of data-processing
        is interesting to me, which is why I am a developer!
      </p>
    </div>
  )
}

export default Home;