import React from 'react';
import './Projects.css';
import graduation from './graduation-project-quiz.gif';
import hackday from './horizon-calculator-hackday.png';
import mvc from './horizon-calculator-mvc.png'; 
import kalaha from './kalaha-play.png';
import python from './python-logo.png';

const Projects = () => {

  return (
    <div className="Projects">
      <h3>Quiz</h3>
      <div className="Projects-content">
        <img src={graduation} />
        <p>This is a project I did together with three other
          developers in the span of two weeks. It is a 
          fullstack application with two single page front ends
          using React, an ASP.NET CORE web Api backend and SQL
          server database. It is an application where users
          can take a multiple choize quiz, based on lecture
          material given during the salt bootcamp.
        </p>
      </div>
      <a href="https://github.com/jonasermann/hackday" >Github Link</a>

      <h3>Horizon Calculator</h3>
      <div className="Projects-content">
        <img src={hackday} />
        <p>This is a project that I did during the
          span of only one day. It is a full stack 
          application, with a React single page front end,
          an ASP.NET Core web Api backend and an SQL server
          database. It takes the height above sea level of 
          (and including the height of) an observer and the
          radius of a planet to calculate the geographical
          distance between the observer and the geometrical
          horizon. The application provides CRUD functionality
          as in adding and deleting planets.
        </p>
      </div>
      <a href="https://github.com/jonasermann/hackday" >Github Link</a>

      <h3>Horizon Calculator (again)</h3>
      <div className="Projects-content">
        <img src={mvc} />
        <p>This is a simplified version of the previous one.
          It has no CRUD functionality and is a MVC application.
          I wanted to have the same application in only c#
          and html, which is why I re-created it.
      </p>
      </div>
      <a href="https://github.com/jonasermann/horizon-calculator" >Github Link</a>

      <h3>Kalaha</h3>
      <div className="Projects-content">
        <img src={kalaha} />
        <p>In my early days of coding, I started off with Python. 
          It was an easy language to learn, and as my first project 
          I got to create a console-application of a game called "Kalaha". 
          The rules are very easy and thus it wasn't so hard to program. 
          In this program, two players can play against each other, or
          one can play against a script where the computer will do random
          choices. There is also an application for simulating
          thousands of kalaha games played by two different scripts, to see
          which script is better (one does random choices, the other
          chooses based on some rules).
        </p>
      </div>
      <a href="https://github.com/jonasermann/python-projects/blob/main/Kalaha_Play.py" >Github Link</a>

      <h3>Python Projects</h3>
      <div className="Projects-content">
        <img src={python} />
        <p>After the kalaha projects, I continued coding in my free time and 
          other courses in university. I have gathered them all in one collective
          repository on github, where you can view all of them. They are all
          calculators, except the kalaha one.
        </p>
      </div>
      <a href="https://github.com/jonasermann/python-projects/" >Github Link</a>
    </div>
  )
}

export default Projects;
