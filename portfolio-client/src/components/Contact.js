import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {

  const [contacts, setContacts] = useState([{ imgUrl: '', text: '' }])

  useEffect(() => {
    fetch('https://localhost:7140/api/contacts')
      .then(response => response.json())
      .then(result => setContacts(result));
  }, []);

  return (
    <div className="Contact">
      <h3>You can reach me the following ways:</h3>
      {contacts.map(contact => (
        <div className="Contact-content">
          <img src={contact.imgUrl} alt="mail icon" height="50rem" width="50rem" />
          <p>{contact.text}</p>
        </div>
        ))}
    </div>
    )
}

export default Contact;
