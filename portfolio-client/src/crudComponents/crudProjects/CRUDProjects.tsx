import './CRUDProjects.css';
import EditProject from './EditProject';
import RemoveProject from './RemoveProject';
import AddProject from './AddProject';
import MoveProject from './MoveProject';
import { useState } from 'react';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useSelector, shallowEqual } from "react-redux";

const Projects = (props: IAppProps) => {

  const adminAccess = props.token.length > 163;
  const baseUrl = props.baseUrl;
  const projects: IProject[] = useSelector(
    (state: AppState) => state.projects,
    shallowEqual
  )

  const [currentProjects, setCurrentProjects] = useState(projects);

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

  return (
    <div
      className="mb">
      <div
        className="mb">
        {projects.map((project, projectIndex) =>
          <div
            className="mb"
            key={projectIndex}
            data-testid="project">
            <EditProject {...project} />
            <MoveProject projectIndex={projectIndex} project={project} projects={currentProjects} setProjects={setCurrentProjects} />
            <RemoveProject {...project} />
          </div>
        )}
        <AddProject {...{idToAdd}} />
      </div>
      <div
        className="mb">
        <button
          type="button"
          onClick={() => initiateChange()}
          disabled={!adminAccess}>Update Projects</button>
      </div>
    </div>
  )
}

export default Projects;
