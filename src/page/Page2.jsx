import React from 'react'
import './con2.css';

export function Page2() {
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
          <h1>BRIDAL MAKEUP</h1>
          <p>
            Please CONTACT US and let us know your bridal requirements or to
            book an appointment. We look forward to hearing from you!
          </p>
          <a href="#f-item-con" className="btn-discover">
            Contact us
          </a>
        </div>
        <div className="sec1-image">
          <img src="./imga/img8.jpg" alt="Aesthetic Beauty" />
        </div>
      </div>
      <h2 className="sec1-subtitle">
        Bridal Beauty, Tailored Just for You. Where Every Bride Shines
        Brightest.
      </h2>
      <p className="sec1-description">Timeless Beauty for Your Timeless Moment.</p>
    </section>

    <section className="sec1-dtl">
      <h3>BRIDAL SERVICES</h3>
      <p>
        Bridal Makeup Services: Enhancing Your Wedding Day Beauty
        <br />
        <br />
        <strong>Long-Lasting Looks:</strong> Your wedding day is a marathon,
        not a sprint. My makeup is designed to withstand the entire event,
        from the “I do’s” to the dance floor.
        <br />
        <strong>Complementing Your Outfit:</strong> Your makeup should
        harmonize with your dress and overall style. I tailor each look to
        enhance your natural beauty and match your attire.
        <br />
        <strong>Photogenic Perfection:</strong> Cameras will be flashing all
        day. I ensure that your makeup looks flawless both in person and in
        photographs.
        <br />
        <strong>Personalized Creativity:</strong> Whether it’s a classic or
        bold look, I’ll create something unique that reflects your
        personality.
        <br />
        <strong>Timeless Elegance:</strong> I strike a balance between modern
        trends and classic elegance.
        <br />
        <strong>Confidence Boost:</strong> I want you to feel comfortable and
        beautiful, emphasizing your best features.
        <br />
        <br />
        Ready to Begin? If you’re ready to explore bridal looks or discuss
        your wedding makeup, let’s connect. Book an online consultation or
        reach out for more details.
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
                src={`./imga/sec1.${index + 1}.jpg`}
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
