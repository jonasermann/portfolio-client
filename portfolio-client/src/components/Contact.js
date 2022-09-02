import React from 'react';
import './Contact.css';
import mail from './email-icon.png';
import phone from './phone-icon.jpg';

const Contact = () => {

  return (
    <div className="Contact">
      <h3>You can reach me the following ways:</h3>

      <div className="Contact-content">
        <img src={mail} alt="mail icon" height="50rem" width="50rem" />
        <p>jonas.ermann@hotmail.com</p>
      </div>

      <div className="Contact-content">
        <img src={phone} alt="phone icon" height="50rem" width="50rem" />
        <p>076 815 56 56</p> 
      </div>
    </div>
    )
}

export default Contact;
