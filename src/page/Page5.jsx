import React from 'react'
import './con5.css';

export function Page5() {
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
          <h1>MEHNDI DESIGN</h1>
          <p>
          Please CONTACT US and let us know your mehndi design requirements or to book an appointment. We look forward to
          hearing from you!</p>
          <a href="#f-item-con" className="btn-discover">
            Contact us
          </a>
        </div>
        <div className="sec1-image">
          <img src="./imga/meh_try.png" alt="Aesthetic Beauty" />
        </div>
      </div>
      <h2 className="sec1-subtitle">
      Adorn Your Hands with Stories in Henna. Mehndi Magic for Every Celebration.
      </h2>
      <p className="sec1-description">Henna That Captures Your Unique Style.</p>
    </section>

    <section className="sec1-dtl">
      <h3>MEHNDI SERVICES</h3>
      <p>
      Mehendi Services: Adorning Your Hands with Elegant Designs
<br/>
Mehendi is a beautiful tradition, and I’m dedicated to making sure your hands and feet look stunning for your special occasions. Here’s how I bring this ancient art to life:
<br/>
<br/>
Custom Designs for Every Event: <p>Whether it’s for a wedding, engagement, or festive celebration, I create mehendi designs that suit the occasion. From intricate bridal patterns to simple, elegant motifs, I tailor the designs to match your style and preferences.</p>

Long-Lasting Stain: <p>The beauty of mehendi lies in its rich, dark stain. I use high-quality, natural henna to ensure your mehendi not only looks beautiful but also lasts long, providing a deep color that enhances your look for days to come.</p>

Complementing Your Look: <p>Your mehendi should complement your attire and overall style. I design patterns that align with your outfit, ensuring a cohesive and harmonious appearance for your special day.</p>

Precision & Detail: <p>Mehendi is all about intricate detail, and I pride myself on creating designs that are not only beautiful but also precise. Every curve, swirl, and motif is crafted with care, giving you the perfect finishing touch.</p>

Creative & Personalized Art: <p>Whether you want traditional Indian, Arabic, or contemporary mehendi styles, I work with you to create personalized designs that reflect your personality and vision.</p>

Comfort & Relaxation: <p>Getting mehendi applied should be a relaxing experience. I ensure that you feel comfortable throughout the process, so you can enjoy the pampering while I create a masterpiece on your hands.</p>

Let’s Create Something Beautiful: <p>Ready to adorn your hands with stunning mehendi? Whether it’s for a wedding, festival, or any special event, let’s connect to discuss your design ideas and make your occasion even more memorable!</p>
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
                src={`./imga/sec6.${index + 1}.jpg`}
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
