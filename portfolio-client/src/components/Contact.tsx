import { useContext } from 'react';
import './Contact.css';
import { AppContext } from '../App'

const Contact = () => {

  const contactProps = useContext(AppContext).contactProps;
  const contacts = contactProps.contacts

  return (
    <div className="Contact">
      <h3>You can reach me the following ways:</h3>
      {contacts.map((contact, index) => (
        <div className="Contact-content" key={index}>
          <img src={contact.imgUrl} alt="mail icon" height="50rem" width="50rem" />
          <p>{contact.text}</p>
        </div>
        ))}
    </div>
   )
}

export default Contact;
