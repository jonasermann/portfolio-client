import { removeSkill } from '../../actions/crudActions';
import { useCallback, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const RemoveSkill = (skill: ISkill) => {

  const dispatch: Dispatch<any> = useDispatch();

  const remove = useCallback(
    (skill: ISkill) => dispatch(removeSkill(skill)),
    [dispatch]);

  const removeOldSkill = (e: FormEvent) => {
    e.preventDefault();
    remove(skill);
  };

  return (
    <form onSubmit={e => removeOldSkill(e)} >
      <button
        className="delete-button"
        data-testid={`delete${skill.id}`}>
        Delete
      </button>
    </form>
  );
};

export default RemoveSkill;
