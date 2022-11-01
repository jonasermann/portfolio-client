import { useContext } from 'react';
import './CRUDContact.css';
import { AppContext } from '../App';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';

interface IContactProps {
  token: string;
}

interface IContact {
  id: number
  text: string
  imgUrl: string
}

const Contact = (props: IContactProps) => {

  const adminAccess = props.token.length > 163;
  const appProps = useContext(AppContext);
  const rootUrl = appProps.rootUrl;
  const contactProps = appProps.contactProps;
  const contacts = contactProps.contacts;
  const setContacts = contactProps.setContacts;

  const initiateChange = async () => {
    const url: string = `${rootUrl}/contacts`;
    const oldContacts = await fetchOldData(url) as IContact[];
    handleChanges<IContact>(
      contacts, oldContacts, oldContacts.map(c => c.id), url, props.token
    )
  }

  const addcontact = () => {
    const arrayLength = contacts.length;
    const id = contacts.sort(homeLink => homeLink.id)[arrayLength - 1].id + 1;
    setContacts([...contacts, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deletecontact = (id: number) => {
    setContacts(
      contacts.filter(contact =>
        contact.id !== id
      )
    )
   }

  return (
    <div className="CRUDContact-content">
      <form>
        <div className="CRUDContact-content__contacts">
          {contacts.map((contact, contactIndex) =>
            <div className="CRUDContact-content__contact" key={contactIndex}>
              <div key={contactIndex}>
                <img src={contacts[contactIndex].imgUrl} alt="logo" height="50rem" width="auto" />
                <input type="text" value={contacts[contactIndex].imgUrl} onChange={e => setContacts(contacts.map((p, linkIndex) => {
                  if (contactIndex === linkIndex) {
                    p.imgUrl = e.target.value
                  }
                  return p;
                }))}
                />
                <div className="CRUDContact-content__contact-text">
                  <textarea
                    value={contact.text}
                    onChange={e => setContacts(contacts.map((l, textindex) => {
                      if (contactIndex === textindex) {
                        l.text = e.target.value
                      }
                      return l;
                    }))}
                    rows={2}
                    cols={50}
                  />
                </div>
              </div>
              <button className="CRUDContact-content__project-delete" type="button" onClick={() => deletecontact(contact.id)}>Delete</button>
            </div>
          )}
        </div>
        <button type="button" onClick={() => addcontact()}>Add contact</button>
        <div className="CRUDContact-content__Save">
          <button type="submit" onClick={() => initiateChange()} disabled={!adminAccess}>Update Contacts</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
