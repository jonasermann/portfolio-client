import { useState, useEffect, useContext } from 'react';
import './CRUDContact.css';
import { AppContext } from '../App';

interface IContactProps {
  token: string;
}

interface IContact {
  id: number
  text: string
  imgUrl: string
}

const Contact = (props: IContactProps) => {

  const [oldContacts, setOldContacts] = useState([{id: 1, text: '', imgUrl: ''}])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/contacts')
      .then(response => response.json())
      .then(result => setOldContacts(result));
  }, []);

  const adminAccess = props.token.length > 163;
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

  const postContact = (text: string, imgUrl: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/Contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ text, imgUrl })
    })
  }

  const putContact = (contact: IContact) => {
    fetch('https://jeportapi.azurewebsites.net/api/Contacts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(contact)
    })
  }

  const deleteContact = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/Contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
  }

  const handleContacts = () => {

    const oldContactsLength = oldContacts.length;
    const newContactsLength = contacts.length;
    const contactDifference = oldContactsLength - newContactsLength;

    if (contactDifference < 0) {
      for (let i = 0; i < oldContactsLength; i++) {
        putContact(contacts[i])
      }
      for (let i = oldContactsLength; i < newContactsLength; i++) {
        postContact(contacts[i].text, contacts[i].imgUrl)
      }
    }

    if (contactDifference === 0) {
      for (let i = 0; i < oldContactsLength; i++) {
        putContact(contacts[i])
      }
    }

    if (contactDifference > 0) {
      for (let i = 0; i < newContactsLength; i++) {
        putContact(contacts[i])
      }
      for (let i = newContactsLength; i < oldContactsLength; i++) {
        deleteContact(oldContacts[i].id)
      }
    }
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
          <button type="button" onClick={() => handleContacts()} disabled={!adminAccess}>Update Contacts</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
