import { addContact } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const AddContact = (get: { idToAdd(): number }) => {

  const dispatch: Dispatch<any> = useDispatch()

  const add = React.useCallback(
    (contact: IContact) => dispatch(addContact(contact)),
    [dispatch]
  )

  const addNewContact = (e: React.FormEvent) => {
    e.preventDefault();
    add({ id: get.idToAdd(), text: '', imgUrl: '' });
  };

  return (
    <form onSubmit={e => addNewContact(e)} >
      <button>
        Add Contact
      </button>
    </form>
  )
}

export default AddContact;
