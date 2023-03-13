import React from 'react';

function ContactsPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p dangerouslySetInnerHTML={{ __html: 'voici comment nous contacter' }}></p>
      <ul>
        <li>Email: info@website.com</li>
        <li>Phone: 00889</li>
      </ul>
    </div>
  );
}

export default ContactsPage;
