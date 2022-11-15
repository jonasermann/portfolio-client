import './Projects.css';
import { useSelector, shallowEqual } from "react-redux";

const Projects = () => {

  const projects: IProject[] = useSelector(
    (state: AppState) => state.projects,
    shallowEqual
  )

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

//connect(mapStateToProps, { fetchPostsWithRedux })(Projects);
export default Projects;
