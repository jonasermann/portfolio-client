import { removeProject } from '../../actions/crudActions';
import { useCallback, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const RemoveProject = (project: IProject) => {

  const dispatch: Dispatch<any> = useDispatch();

  const remove = useCallback(
    (project: IProject) => dispatch(removeProject(project)),
    [dispatch]);

  const removeOldProject = (e: FormEvent) => {
    e.preventDefault();
    remove(project);
  };

  return (
    <form onSubmit={e => removeOldProject(e)} >
      <button className="delete-button">
        Delete
      </button>
    </form>
  );
};

export default RemoveProject;
