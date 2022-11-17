import './Projects.css';
import { getImgUrl } from '../../libraries/portfolioLibrary';
import { useSelector } from "react-redux";

const Projects = () => {

  const projects: IProject[] = useSelector(
    (state: AppState) => state.projects);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <div className="Project" key={index}>
          <h3>{project.title}</h3>
          <div className="Projects-content">
            <img src={getImgUrl(project.imgUrl, baseUrl)} alt="project impression" />
            <p>{project.text}</p>
          </div>
          <a href={project.gitUrl}>Github Link</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
