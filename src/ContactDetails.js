// ContactDetails.js
import React from 'react';

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <h2>Contact Details</h2>
      <div className="card">
        <h3>Email</h3>
        <p>example@example.com</p>
        <button className="reveal-btn">Reveal</button>
      </div>
      {/* Add other contact details cards */}
    </section>
  );
}

export default ContactDetails;
