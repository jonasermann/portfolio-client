import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {

  const [projects, setProjects] = useState([{ title: '', imgUrl: '', text: '', gitUrl: '' }]);

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/projects/')
      .then(response => response.json())
      .then(result => setProjects(result))
  }, [])

  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <div className="Project" key={index}>
          <h3>{project.title}</h3>
          <div className="Projects-content">
            <img src={project.imgUrl} alt="project impression" />
            <p>{project.text}</p>
          </div>
          <a href={project.gitUrl}>Github Link</a>
        </div>
      ))}
    </div>
  )
}

export default Projects;
