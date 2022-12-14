import { addSkill } from '../../actions/crudActions';
import { useCallback, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const AddSkill = (get: { idToAdd(): number }) => {

  const dispatch: Dispatch<any> = useDispatch()

  const add = useCallback(
    (skill: ISkill) => dispatch(addSkill(skill)),
    [dispatch]);

  const addNewSkill = (e: FormEvent) => {
    e.preventDefault();
    add({ id: get.idToAdd(), text: '', imgUrl: '', type: 0 });
  };

  return (
    <form onSubmit={e => addNewSkill(e)} >
      <button>
        Add Skill
      </button>
    </form>
  );
};

export default AddSkill;
