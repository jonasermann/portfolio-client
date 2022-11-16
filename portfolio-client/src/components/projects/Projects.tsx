import './Projects.css';
import { useSelector, shallowEqual } from "react-redux";
import { getImgUrl } from '../../libraries/portfolioLibrary';

const Projects = () => {

  const projects: IProject[] = useSelector(
    (state: AppState) => state.projects,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

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
  )
}

//connect(mapStateToProps, { fetchPostsWithRedux })(Projects);
export default Projects;
