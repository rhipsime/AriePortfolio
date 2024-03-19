import React, { useRef } from 'react';

const ContactForm = () => {
  const formRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(e.target); // Create FormData object from form data
    const formDataObject = Object.fromEntries(formData.entries()); // Convert to plain JavaScript object
    console.log('Form data:', formDataObject); // Log form data to console
    
    // Save form data to local storage
    localStorage.setItem('contactFormData', JSON.stringify(formDataObject));

    // Clear the form after submission
    formRef.current.reset();
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form ref={formRef} id="contactForm" onSubmit={handleSubmit}>
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
