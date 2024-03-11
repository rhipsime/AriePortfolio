// ContactForm.js
import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(e.target); // Create FormData object from form data
    const formDataObject = Object.fromEntries(formData.entries()); // Convert FormData to plain JavaScript object
    console.log('Form data:', formDataObject); // Log form data to console
    // Add logic here to send form data to server or external service
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
