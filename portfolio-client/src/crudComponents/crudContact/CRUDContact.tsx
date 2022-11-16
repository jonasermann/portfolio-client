import './CRUDContact.css';
import EditContact from './EditContact';
import RemoveContact from './RemoveContact';
import AddContact from './AddContact';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useSelector, shallowEqual } from "react-redux";

const Contact = () => {

  const contacts: IContact[] = useSelector(
    (state: AppState) => state.contacts,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  const token: string = useSelector(
    (state: AppState) => state.token,
    shallowEqual
  )

  const adminAccess = token.length > 163;

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/contacts`;
    const oldContacts = await fetchData(url) as IContact[];
    handleChanges<IContact>(
      contacts, oldContacts, oldContacts.map(p => p.id), url, token 
    )
  }

  const idToAdd = () => {
    const arrayLength = contacts.length;
    return contacts.sort(contact =>
      contact.id)[arrayLength - 1].id + 1;
  }

  return (
    <div
      className="mb">
      <div
        className="mb">
        {contacts.map((contact, contactIndex) =>
          <div
            className="CRUDContact-content__contact"
            key={contactIndex}
            data-testid="contact">
            <EditContact {...contact} />
            <RemoveContact {...contact} />
          </div>
        )}
      </div>
      <AddContact {...{ idToAdd }} />
      <div
        className="mb">
        <button
          type="button"
          onClick={() => initiateChange()}
          disabled={!adminAccess}>Update Contacts</button>
      </div>
    </div>
  )
}

export default Contact;
