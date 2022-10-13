import { useContext } from 'react';
import './Projects.css';
import { AppContext } from '../App';

const Projects = () => {

  const projectProps = useContext(AppContext).projectProps;
  const projects = projectProps.projects;

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
