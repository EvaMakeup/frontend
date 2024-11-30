import React from 'react'
import './con4.css';

export function Page4() {
  return (

    <div className="eva">
    <header className="header">
      <div className="logo">
        <img src="./imga/logo.jpg" alt="Makeup Work 1" />
      </div>
    </header>

    <section className="sec1">
      <div className="sec1-content">
        <div className="sec1-text">
          <h1>PRE-WEDDING LOOKS</h1>
          <p>
            Please CONTACT US and let us know your pre-wedding looks requirements or to book an appointment. We look forward to
                hearing from you!</p>
          <a href="#f-item-con" className="btn-discover">
            Contact us
          </a>
        </div>
        <div className="sec1-image">
          <img src="./imga/pre_try.jpg" alt="Aesthetic Beauty" />
        </div>
      </div>
      <h2 className="sec1-subtitle">
      Get Camera-Ready with Flawless Looks for Your Big Moments.</h2>
      <p className="sec1-description">From Romantic to Glamorous – We Create Your Perfect Pre-Wedding Look.</p>
    </section>

    <section className="sec1-dtl">
      <h3>PRE-WEDDING LOOKS</h3>
      <p>
      Pre-Wedding Looks: Crafting the Perfect Style for Your Special Moments
        <br />
        <br />
        
<br/>
Pre-wedding events are just as important as the big day itself, and I’m here to ensure you look and feel your best for each one. Here’s how I help you achieve flawless pre-wedding looks:
<br/>
<br/>
<strong>Customized for Each Occasion:</strong> <p>From engagement parties to bridal showers, I design makeup and hairstyles that match the theme and tone of your pre-wedding events, creating a unique look for every moment.</p>

<strong>Flawless & Long-Lasting:</strong><p> These events often last hours, and your look needs to stay fresh throughout. I use long-wearing products that ensure your makeup and hair look perfect from start to finish.</p>

<strong>Enhancing Your Outfits:</strong> <p>Each pre-wedding outfit deserves a look that complements it. I customize your makeup and hair to match your attire, creating a cohesive style that enhances your overall appearance.</p>

<strong>Picture-Perfect Glow:</strong> <p>Pre-wedding photos capture precious memories. I focus on making sure your makeup and hair look flawless in both real life and on camera, giving you a radiant glow in every shot.</p>

<strong>Creative & Personalized Looks:</strong> <p>Whether you want a soft, romantic look or something more bold and glamorous, I’m here to bring your vision to life. We can experiment with different styles that reflect your personality and style.</p>

<strong>Confidence & Comfort:</strong> <p>Pre-wedding events are full of excitement, and my goal is to make sure you feel comfortable and confident. I’ll create a look that lets you enjoy every moment while feeling beautiful and at ease.</p>

Let’s Start the Journey: <p>Ready to explore your pre-wedding looks? Whether it’s for your engagement or bridal shower, I’m here to help you shine. Reach out for a consultation, and let’s create the perfect style for your special days!</p>
</p>
    </section>

    <section id="sec1-gallery" className="sec1-gallery">
      <h2>Our Gallery</h2>
      <p>Browse through our past works, showcasing beautiful transformations.</p>
      <ul className="gallery-grid">
        {[...Array(15)].map((_, index) => (
          <li key={index} className="gallery-item">
            <figure>
              <img
                src={`./imga/sec3.${index + 1}.jpg`}
                alt={`Gallery Item ${index + 1}`}
              />
              <figcaption>Bridal Beauty {index + 1}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
};
