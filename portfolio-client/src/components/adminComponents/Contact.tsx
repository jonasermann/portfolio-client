import { useContext } from 'react';
import './Contact.css';
import { AppContext } from '../../App';

interface IContactProps {
  token: string;
}

const Contact = (props: IContactProps) => {

  const adminAccess = props.token !== 'Not Authorized';
  const contactProps = useContext(AppContext).contactProps;
  const contacts = contactProps.contacts;
  const setContacts = contactProps.setContacts;

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

  const handleContacts = () => {

  }

  return (
    <div className="Contact-content">
      <form>
        <div className="Contact-content__contacts">
          {contacts.map((contact, contactIndex) =>
            <div className="Contact-content__contact">
              <div key={contactIndex}>
                <img src={contacts[contactIndex].imgUrl} alt="logo" height="50rem" width="auto" />
                <input type="text" value={contacts[contactIndex].imgUrl} onChange={e => setContacts(contacts.map((p, linkIndex) => {
                  if (contactIndex === linkIndex) {
                    p.imgUrl = e.target.value
                  }
                  return p;
                }))}
                />
                <div className="Contact-content__contact-text">
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
              <button className="Contact-content__project-delete" type="button" onClick={() => deletecontact(contact.id)}>Delete</button>
            </div>
          )}
        </div>
        <button type="button" onClick={() => addcontact()}>Add contact</button>
        <div className="Contact-content__Save">
          <button type="submit" onClick={() => handleContacts()} disabled={!adminAccess}>Update Database</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
