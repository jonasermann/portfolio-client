import { removeContact } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const RemoveContact = (contact: IContact) => {

  const dispatch: Dispatch<any> = useDispatch()

  const remove = React.useCallback(
    (contact: IContact) => dispatch(removeContact(contact)),
    [dispatch]
  )

  const removeOldContact = (e: React.FormEvent) => {
    e.preventDefault();
    remove(contact);
  };

  return (
    <form onSubmit={e => removeOldContact(e)} >
      <button
        className="CRUDContact-content__project-delete"
        data-testid={`delete${contact.id}`}>
        Delete
      </button>
    </form>
  )
}

export default RemoveContact;
