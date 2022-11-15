import { addProject } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const AddProject = (get: { idToAdd(): number }) => {

  const dispatch: Dispatch<any> = useDispatch()

  const add = React.useCallback(
    (project: IProject) => dispatch(addProject(project)),
    [dispatch]
  )

  const addNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    add({ id: get.idToAdd(), title: '', text: '', imgUrl: '', gitUrl: '' });
  };

  return (
    <form onSubmit={e => addNewProject(e)} >
      <button className="CRUDProjects-content__Add">
        Add Project
      </button>
    </form>
  )
}

export default AddProject;
