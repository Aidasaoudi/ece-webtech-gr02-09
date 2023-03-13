import React from 'react';

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p dangerouslySetInnerHTML={{ __html: 'Voici la page de notre site qui parle de nous'}}></p>
    </div>
  );
}

export default AboutPage;
