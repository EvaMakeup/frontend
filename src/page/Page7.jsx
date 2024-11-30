import React from 'react'
import './con7.css';

export function Page7() {
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
          <h1>NAIL ART, FOOT MASSAGE AND TEMPORARY TATOOS</h1>
          <p>
          Please CONTACT US and let us know your nail art, foot massage and temporary tatoos requirements or to book an appointment. We look forward to
          hearing from you!
          </p>
          <a href="#f-item-con" className="btn-discover">
            Contact us
          </a>
        </div>
        <div className="sec1-image">
          <img src="./imga/sec6.9.jpg" alt="Aesthetic Beauty" />
        </div>
      </div>
      <h2 className="sec1-subtitle">
      Nails the Perfect Look, Every Time!
      </h2>
      <p className="sec1-description">Relax, Rejuvenate, Revitalize. Pamper Yourself with Pure Bliss.</p>
    </section>

    <section className="sec1-dtl">
      <h3>NAIL ART, FOOT MASSAGE AND TEMPORARY TATOOS</h3>
      <p>
      Nail Art, Foot Massage, and Temporary Tattoos: Treat Yourself to a Full Beauty Experience
<br/>
Whether you're getting ready for a special event or simply indulging in some self-care, my services in nail art, foot massage, and temporary tattoos are designed to make you look and feel amazing. Here’s how I elevate your beauty and relaxation experience:
<br/>
<br/>
<strong> Nail Art:</strong> Express Your Style Through Your Nails

<p>Your nails are a canvas, and I’m here to transform them into stunning works of art. From intricate designs to simple elegance, I offer a variety of styles tailored to your preferences. Whether it's bold colors, delicate patterns, or trendy accents, your nails will be a statement piece that complements your overall look.</p>

<strong>Long-Lasting Durability:</strong> <p>Using high-quality polishes and techniques, I ensure your nail art lasts through the week, keeping your hands looking flawless.</p>

<strong>Customized Designs:</strong> <p>I’ll work with you to create personalized nail art that reflects your unique style, whether it’s for a party, a wedding, or just a fun look for the weekend.</p>

Foot Massage: Relax and Rejuvenate

<p>After a long day, your feet deserve some pampering. My foot massage service is designed to relieve tension, boost circulation, and leave you feeling relaxed and refreshed.</p>

<strong>Soothing Comfort:</strong> <p>I use techniques that target pressure points to relieve stress, ensuring a deeply relaxing experience that rejuvenates your entire body.</p>

<strong>Perfect Add-On to Pedicures:</strong> <p>Combine your foot massage with a pedicure for the ultimate indulgence, leaving your feet not only feeling soft but looking fabulous too.</p>

Temporary Tattoos: Creative, Fun, and Stylish

<p>Temporary tattoos are a fun and creative way to express yourself without the commitment of permanent ink. Whether you're looking for something bold, playful, or elegant, I offer a wide variety of designs that suit any occasion.</p>

<strong>Customizable Designs:</strong> <p>From trendy minimalistic styles to intricate patterns, I create temporary tattoos that match your style and the theme of your event.</p>

Safe & Skin-Friendly:<p> I use high-quality, skin-safe products that are easy to apply and remove, ensuring a flawless look without irritation.</p>

Let’s Pamper You from Head to Toe

Whether you're looking for intricate nail art, a relaxing foot massage, or fun temporary tattoos, I’m here to provide a full beauty experience that leaves you feeling refreshed and glamorous. Book an appointment today, and let’s make your self-care session unforgettable!

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
