import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { updateProjects } from '../../actions/crudActions';

const MoveProject = ({ projectIndex, project, projects, triggerMovement }:
  ({ projectIndex: number, project: IProject, projects: IProject[], triggerMovement: () => void })) => {

  const dispatch: Dispatch<any> = useDispatch();

  const update = React.useCallback(
    (state: AppState) => dispatch(updateProjects(state)),
    [dispatch]);

  const upProject = () => {

    const upperProject = projects[projectIndex - 1];

    const newUpperProject = project;
    const newLowerProject = upperProject;

    newUpperProject.id = project.id;
    newLowerProject.id = upperProject.id;

    projects[projectIndex - 1] = newUpperProject;
    projects[projectIndex] = newLowerProject;

    const updatedProjects = projects;

    update({
      backgroundParagraphs: [],
      contacts: [],
      introduction: {} as IIntroduction,
      mediaLinks: [],
      projects: updatedProjects,
      skills: [],
      baseUrl: '',
      token: '',
    });

    triggerMovement();
  };

  const downProject = () => {
    const lowerProject = projects[projectIndex + 1];

    const newUpperProject = lowerProject;
    const newLowerProject = project;

    newUpperProject.id = lowerProject.id;
    newLowerProject.id = project.id;

    projects[projectIndex] = newUpperProject;
    projects[projectIndex + 1] = newLowerProject;

    const updatedProjects = projects;

    update({
      backgroundParagraphs: [],
      contacts: [],
      introduction: {} as IIntroduction,
      mediaLinks: [],
      projects: updatedProjects,
      skills: [],
      baseUrl: '',
      token: '',
    });

    triggerMovement();
  };

  return (
    <div>
      <button type="button" onClick={() => upProject()}>
        Up
      </button>
      <button type="button" onClick={() => downProject()}>
        Down
      </button>
    </div>
  );
};

export default MoveProject;
