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
      <div className="Home-history">
        <h3>Background</h3>
        <p className="Home-history__text">During the summer of 2022, I participated in a 3 month
          long .NET fullstack bootcamp given by the School of applied
          technology, aka {" <salt/\>"}. Thanks to that, I am today
          a .NET fullstack developer.
        </p>
        <p className="Home-history__text">
          Before that, I studied for a bachelor's degree at Stockholm
          University. About half my courses were in mathematics, the 
          other half were in philosophy and logic. One of these courses
          was called "programming for mathematicians", where I learned 
          how to code in Python. I learned the basics of Python, i.e. how
          to make functions and some of the inbuilt functions. Our final
          project was to code a board-game called Kalaha, that two users
          can play with each other, or alternatively one user against a script.
          Part of the project was also to create a program where two differen
          scripts play thousands of games against each other, and gather
          the win-rates of these scripts to see if one script is better than
          the other.
        </p>
        <p className="Home-history__text">
          This opened the door to programming
          for me, and led me to seek further education in coding. I ultimately
          found my way to {" <salt/\>"}, and now I am doing web-development
          for a living!
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