import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {

  const [backend, setBackend] = useState([{ imgUrl: '', text: '' }])
  const [frontend, setFrontend] = useState([{ imgUrl: '', text: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills/backend')
      .then(response => response.json())
      .then(result => setBackend(result))
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills/frontend')
      .then(response => response.json())
      .then(result => setFrontend(result))
  }, [])

  return (
    <div className="Skills">
      <h2>Back End</h2>
      <div className="Skills-row">
        {backend.map((content, index) => (
          <div className="Skills-content" key={index}>
            <img src={content.imgUrl} alt="logo" width="auto" height="100rem" />
            <p>{content.text}</p>
          </div>
        ))}
      </div>

      <h2>Front End</h2>
      <div className="Skills-row">
        {frontend.map((content, index) => (
          <div className="Skills-content" key={index}>
            <img src={content.imgUrl} alt="logo" width="auto" height="100rem" />
            <p>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
   )
}

export default Skills;
