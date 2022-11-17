import { addBackgroundParagraph } from '../../actions/crudActions';
import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const AddBackgroundParagraph = (get: { idToAdd(): number }) => {

  const dispatch: Dispatch<any> = useDispatch()

  const add = useCallback(
    (backgroundParagraph: IBackgroundParagraph) => dispatch(addBackgroundParagraph(backgroundParagraph)),
    [dispatch]);

  const addNewBackgroundParagraph = (e: React.FormEvent) => {
    e.preventDefault();
    add({ id: get.idToAdd(), text: '' });
  };

  return (
    <form onSubmit={e => addNewBackgroundParagraph(e)} >
      <button className="mb">
        Add Paragraph
      </button>
    </form>
  );
};

export default AddBackgroundParagraph;
