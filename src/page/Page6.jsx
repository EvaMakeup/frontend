import React from 'react'
import './con6.css';

export function Page6() {
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
          <h1>PARTY MAKEUP</h1>
          <p>
          Please CONTACT US and let us know your party makeup requirements or to book an appointment. We look
                forward to
                hearing from you! </p>
          <a href="#f-item-con" className="btn-discover">
            Contact us
          </a>
        </div>
        <div className="sec1-image">
          <img src="./imga/party_try.png" alt="Aesthetic Beauty" />
        </div>
      </div>
      <h2 className="sec1-subtitle">
      Unveil Your Inner Diva! Party-Perfect Looks, Crafted With Love.
      </h2>
      <p className="sec1-description">Where Makeup Becomes Art.</p>
    </section>

    <section className="sec1-dtl">
      <h3>PARTY MAKEUP SERVICES</h3>
      <p>
       
      </p> Party Makeup Services: Elevating Your Look for Every Celebration
        <br/>
        Whether it’s a casual gathering or a glamorous night out, my party makeup services are designed to make you
        stand out at any event. Here’s how I help you shine:
        <br/>
        <br/>
        Tailored to the Occasion: <p>From chic dinner parties to high-energy celebrations, I create makeup looks that
            perfectly match the vibe of the event. Whether you want something subtle and classy or bold and dramatic, I
            customize each look to suit your style.</p>

        Long-Lasting Glam: <p>Party nights can be long, and your makeup needs to keep up. I use high-quality,
            long-lasting products to ensure your makeup stays flawless from the first cocktail to the last dance.</p>

        Matching Your Outfit:<p> Your makeup should be a perfect complement to your attire. I carefully design looks
            that not only enhance your natural features but also harmonize with your outfit, creating a seamless and
            stunning appearance.</p>

        Camera-Ready Glow: <p>Whether it’s a casual selfie or professional photography, I make sure your makeup looks
            perfect under all kinds of lighting, giving you a radiant, camera-ready glow that will make you feel
            confident.</p>

        Creative & Unique Looks: <p>I love experimenting with colors and styles to create unique makeup looks that
            reflect your personality. Whether it’s a classic smoky eye or a pop of color, I’ll make sure you feel
            fabulous and unique.</p>

        Confidence & Comfort:<p> My goal is to enhance your natural beauty while making sure you feel comfortable and
            confident throughout the event. I create looks that make you feel as amazing as you look, boosting your
            confidence for the entire night.</p>

        Let’s Get Ready to Party: <p>Whether you have a birthday, cocktail party, or any special celebration coming up,
            I’m here to help you create the perfect party makeup look. Reach out to book a consultation and let’s make
            sure you steal the spotlight!</p>
    </section>

    <section id="sec1-gallery" className="sec1-gallery">
      <h2>Our Gallery</h2>
      <p>Browse through our past works, showcasing beautiful transformations.</p>
      <ul className="gallery-grid">
        {[...Array(14)].map((_, index) => (
          <li key={index} className="gallery-item">
            <figure>
              <img
                src={`./imga/sec5.${index + 1}.jpg`}
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
