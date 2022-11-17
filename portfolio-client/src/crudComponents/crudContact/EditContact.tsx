import { getImgUrl } from '../../libraries/portfolioLibrary';
import { editContact } from '../../actions/crudActions';
import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector} from 'react-redux';

const EditContact = (contact: IContact) => {

  const dispatch: Dispatch<any> = useDispatch();

  const edit = useCallback(
    (contact: IContact) => dispatch(editContact(contact)),
    [dispatch]);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  return (
    <div>

      <img
        src={getImgUrl(contact.imgUrl, baseUrl)}
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
  );
};

export default EditContact;
