import './Contact.css';
import { useSelector, shallowEqual } from 'react-redux';
import { getImgUrl } from '../../libraries/portfolioLibrary';

const Contact = () => {

  const contacts: IContact[] = useSelector(
    (state: AppState) => state.contacts,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  return (
    <div className="Contact">
      <h3>You can reach me the following ways:</h3>
      {contacts.map((contact, index) => 
          <div className="Contact-content" key={index}>
            <img src={getImgUrl(contact.imgUrl, baseUrl)} alt="mail icon" height="50rem" width="50rem" />
            <p>{contact.text}</p>
          </div>
        )}
    </div>
   )
}

export default Contact;
