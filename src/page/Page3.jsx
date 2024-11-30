import React from 'react'
import './con3.css';

export function Page3() {
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
          <h1>HAIRSTYLING</h1>
          <p>
          Please CONTACT US and let us know your hairstyling requirements or to book an appointment. We look
                forward to
                hearing from you!</p>
          <a href="#f-item-con" className="btn-discover">
            Contact us
          </a>
        </div>
        <div className="sec1-image">
          <img src="./imga/sec2.2.jpg" alt="Aesthetic Beauty" />
        </div>
      </div>
      <h2 className="sec1-subtitle">
      Unlock the Magic of Perfect Hairdays Curls, Waves, and Everything in Between!</h2>
      <p className="sec1-description">From Casual Chic to Red-Carpet Ready!</p>
    </section>

    <section className="sec1-dtl">
      <h3>HAIRSTYLING SERVICES</h3>
      <p>
      Bridal Hairstyle & Makeup Services: Crafting Your Perfect Look
<br />
<br />
Long-Lasting Beauty: Your wedding is a day to remember, and your hairstyle and makeup should last through every moment—from the vows to the final dance.
<br />
Custom Hair Designs: Whether it’s elegant updos, romantic curls, or sleek modern styles, your bridal hairstyle will complement your gown and enhance your natural beauty.
<br />
Harmonized Perfection: Makeup and hairstyle work hand in hand to create a cohesive look. I ensure both align seamlessly with your dress, accessories, and overall wedding theme.
<br />
Camera-Ready Style: Every detail is crafted for perfection, ensuring your hair and makeup look flawless both in person and on camera.
<br />
Personalized Glam: From timeless elegance to bold, contemporary styles, your look will reflect your unique personality and vision.
<br />
Effortless Elegance: I balance modern trends with classic touches for a style that feels fresh yet timeless.
<br />
Confidence in Every Detail: The right hair and makeup enhance your best features, so you feel radiant and comfortable all day long.
<br />
<br />
Let’s Begin Your Bridal Journey! Ready to bring your dream wedding look to life? Schedule an online consultation or reach out to discuss your bridal hairstyle and makeup needs.
      </p>
    </section>

    <section id="sec1-gallery" className="sec1-gallery">
      <h2>Our Gallery</h2>
      <p>Browse through our past works, showcasing beautiful transformations.</p>
      <ul className="gallery-grid">
        {[...Array(11)].map((_, index) => (
          <li key={index} className="gallery-item">
            <figure>
              <img
                src={`./imga/sec2.${index + 1}.jpg`}
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
