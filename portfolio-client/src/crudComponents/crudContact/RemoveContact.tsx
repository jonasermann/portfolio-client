import { removeContact } from '../../actions/crudActions';
import { useCallback, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const RemoveContact = (contact: IContact) => {

  const dispatch: Dispatch<any> = useDispatch();

  const remove = useCallback(
    (contact: IContact) => dispatch(removeContact(contact)),
    [dispatch]);

  const removeOldContact = (e: FormEvent) => {
    e.preventDefault();
    remove(contact);
  };

  return (
    <form onSubmit={e => removeOldContact(e)} >
      <button
        className="delete-button"
        data-testid={`delete${contact.id}`}>
        Delete
      </button>
    </form>
  );
};

export default RemoveContact;
