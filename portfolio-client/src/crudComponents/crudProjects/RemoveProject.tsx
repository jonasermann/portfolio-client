import { removeProject } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const RemoveProject = (project: IProject) => {

  const dispatch: Dispatch<any> = useDispatch()

  const remove = React.useCallback(
    (project: IProject) => dispatch(removeProject(project)),
    [dispatch]
  )

  const removeOldProject = (e: React.FormEvent) => {
    e.preventDefault();
    remove(project);
  };

  return (
    <form onSubmit={e => removeOldProject(e)} >
      <button className="CRUDprojects-content__project-delete">
        Delete
      </button>
    </form>
  )
}

export default RemoveProject;
