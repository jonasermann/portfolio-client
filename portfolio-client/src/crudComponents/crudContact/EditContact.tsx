import { editContact } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const EditContact = (contact: IContact) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (contact: IContact) => dispatch(editContact(contact)),
    [dispatch]
  )

  return (
    <div>

      <img
        src={contact.imgUrl}
        alt="logo"
        height="50rem"
        width="auto" />

      <input
        type="text"
        value={contact.imgUrl}
        onChange={e => {
          const updatedContact = {
            id: contact.id,
            text: contact.text,
            imgUrl: e.target.value,
          };
          edit(updatedContact);
        }}
      />

      <div
        className="">
        <textarea
          value={contact.text}
          onChange={e => {
            const updatedContact = {
              id: contact.id,
              imgUrl: contact.imgUrl,
              text: e.target.value
            };
            edit(updatedContact);
          }}
          rows={2}
          cols={50}
        />
      </div>

    </div>
  )
}

export default EditContact;
