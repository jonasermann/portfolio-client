import './CRUDProjects.css';
import EditProject from './EditProject';
import RemoveProject from './RemoveProject';
import AddProject from './AddProject';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useSelector, shallowEqual } from "react-redux";

const Projects = (props: IAppProps) => {

  const adminAccess = props.token.length > 163;
  const baseUrl = props.baseUrl;
  const projects: IProject[] = useSelector(
    (state: AppState) => state.projects,
    shallowEqual
  )

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/backgroundparagraphs`;
    const oldProjects = await fetchData(url) as IProject[];
    handleChanges<IProject>(
      projects, oldProjects, oldProjects.map(p => p.id), url, props.token
    )
  }

  const idToAdd = () => {
    const arrayLength = projects.length;
    return projects.sort(project =>
      project.id)[arrayLength - 1].id + 1;
  }

  //const upProject = (index: number) => {
  //  const upperProject = projects[index - 1];
  //  upperProject.id = index + 1;
  //  projects[index].id = index;
  //  projects[index - 1] = projects[index];
  //  projects[index] = upperProject;
  //  setProjects(projects);
  //}

  //const downProject = (index: number) => {
  //  const lowerProject = projects[index + 1];
  //  lowerProject.id = index + 1;
  //  projects[index].id = index + 2;
  //  projects[index + 1] = projects[index];
  //  projects[index] = lowerProject;
  //  setProjects(projects);
  //}

  return (
    <div
      className="CRUDProjects-content">
      <div
        className="CRUDProjects-content__projects">
        {projects.map((project, projectIndex) =>
          <div
            className="CRUDProjects-content__project"
            key={projectIndex}
            data-testid="project">
            <EditProject {...project} />
            <RemoveProject {...project} />
          </div>
        )}
        <AddProject {...{idToAdd}} />
      </div>
      <div
        className="CRUDProjects-content__Save">
        <button
          type="button"
          onClick={() => initiateChange()}
          disabled={!adminAccess}>Update Projects</button>
      </div>
    </div>
  )
}

export default Projects;
