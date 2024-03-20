// Contact.jsx
import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="container">
      <ContactDetails />
      <ContactForm />
    </div>
  );
}

export default Contact;
