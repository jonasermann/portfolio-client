import { useContext } from 'react'
import './ProjectsAdmin.css';
import { AppContext } from '../../App'; 

interface IProjectProps {
  token: string;
}

const Projects = (props: IProjectProps) => {

  const projectProps = useContext(AppContext).projectProps;
  const projects = projectProps.projects;
  const setProjects = projectProps.setProjects;

  return (
    <div className="Projects-content">
    </div>
  )
}

export default Projects;
