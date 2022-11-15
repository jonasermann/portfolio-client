import './Contact.css';
import { useSelector, shallowEqual } from "react-redux";

const Contact = () => {

  const contacts: IContact[] = useSelector(
    (state: AppState) => state.contacts,
    shallowEqual
  )

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
