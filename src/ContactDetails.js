import React, { useState } from 'react';

const ContactDetails = () => {
  // State to track whether the contact details are revealed or not
  const [revealed, setRevealed] = useState(false);

  // Function to toggle the revealed state
  const toggleRevealed = () => {
    setRevealed(!revealed);
  };

  return (
    <section className="contact-details">
      <h2>Let's Connect</h2>
      <div className={`card ${revealed ? 'revealed' : ''}`}>
        <h3>Contact Details</h3>
        <p>Click for more</p>
        {/* Show contact details if revealed, otherwise show the reveal button */}
        {revealed ? (
          <div>
            <p>GitHub: https://github.com/rhipsime</p>
            <p>LinkedIn: https://www.linkedin.com/in/arie-david-/</p>
            <p>Email: ariedavid98@gmail.com</p>
            <p>Phone: 07123456</p>
            <p>CV: <a href="https://docs.google.com/document/d/1gkahlug64ZRGqZ9SsWpJFGXpq02kXCHDqGMM4xnDC0o/edit" target="_blank" rel="noopener noreferrer">Download</a></p>
          </div>
        ) : (
          <button className="reveal-btn" onClick={toggleRevealed}>Reveal</button>
        )}
      </div>
    </section>
  );
}

export default ContactDetails;
