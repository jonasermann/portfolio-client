import './CRUDProjects.css';
import AddProject from './AddProject';
import EditProject from './EditProject';
import MoveProject from './MoveProject';
import RemoveProject from './RemoveProject';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {

  let projects: IProject[] = useSelector(
    (state: AppState) => state.projects);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  const token: string = useSelector(
    (state: AppState) => state.token);

  const [trigger, setTrigger] = useState('trigger');

  const adminAccess = token.length > 163;

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/backgroundparagraphs`;
    const oldProjects = await fetchData(url) as IProject[];
    handleChanges<IProject>(
      projects, oldProjects, oldProjects.map(p => p.id), url, token);
  };

  const idToAdd = () => {
    const arrayLength = projects.length;
    return projects.sort(project =>
      project.id)[arrayLength - 1].id + 1;
  };

  const triggerMovement = () => {
    trigger === 'trigger' ? setTrigger('') : setTrigger('trigger');
  };

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
            <MoveProject
              projectIndex={projectIndex}
              project={project}
              projects={projects}
              triggerMovement={triggerMovement}
            />
            <RemoveProject {...project} />
          </div>
        )}
        <AddProject {...{ idToAdd }} />
      </div>
      <div
        className="mb">
        <button
          type="button"
          onClick={() => initiateChange()}
          disabled={!adminAccess}>Update Projects</button>
      </div>
    </div>
  );
};

export default Projects;
