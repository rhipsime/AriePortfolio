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
      <h2>Contact Details</h2>
      <div className={`card ${revealed ? 'revealed' : ''}`}>
        <h3>Let's Connect</h3>
        <p>Click for more</p>
        {/* Show contact details if revealed, otherwise show the reveal button */}
        {revealed ? (
          <div>
            <p>GitHub: https://github.com/rhipsime</p>
            <p>LinkedIn: https://www.linkedin.com/in/arie-david-/</p>
            <p>Email: ariedavid98@gmail.com</p>
            <p>Phone: 07123456</p>
            <p>CV: <a href="path_to_cv.pdf">Download</a></p>
          </div>
        ) : (
          <button className="reveal-btn" onClick={toggleRevealed}>Reveal</button>
        )}
      </div>
    </section>
  );
}

export default ContactDetails;
