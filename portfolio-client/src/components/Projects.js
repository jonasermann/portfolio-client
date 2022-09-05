import React from 'react';
import './Projects.css';
import graduation from './graduation-project-quiz.gif';
import hackday from './horizon-calculator-hackday.png';
import mvc from './horizon-calculator-mvc.png'; 
import kalaha from './kalaha-play.png';
import python from './python-logo.jpg';

const Projects = () => {

  const projects = fetch('')
    .then(response => response.json())

  return (
    <div className="Projects">
      {graduation}
      {hackday}
      {mvc}
      {kalaha}
      {python}
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
    </div>
  )
}

export default Projects;
