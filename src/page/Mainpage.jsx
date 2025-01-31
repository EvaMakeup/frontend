import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-container" id="car">
      <Carousel
        showThumbs={false} // Hides thumbnails
        showStatus={false} // Hides status (like "1 of 3")
        infiniteLoop={true} // Enables infinite loop
        useKeyboardArrows={true} // Enables keyboard control
        swipeable={false} // Disables swipe on mobile
        autoPlay={true} // Auto-play slides
        interval={3000} // Interval between slides
        transitionTime={600} // Slide transition time
        emulateTouch={true} // Emulate swipe gestures for testing on desktop
      >
        {/* Add your images here */}
        <div>
          <img src='./imga/img1.jpg' alt='Slide 1' />
        </div>
        <div>
          <img src='./imga/img2.jpg' alt='Slide 2' />
        </div>
        <div>
          <img src='./imga/img3.jpg' alt='Slide 3' />
        </div>
        <div>
          <img src='./imga/img4.jpg' alt='Slide 3' />
        </div>
        <div>
          <img src='./imga/sec5.1.jpg' alt='Slide 3' />
        </div>
        <div>
          <img src='./imga/img6.jpg' alt='Slide 3' />
        </div>
        <div>
          <img src='./imga/img7.jpg' alt='Slide 3' />
        </div>
        <div>
          <img src='./imga/img8.jpg' alt='Slide 3' />
        </div>
      </Carousel>
    </div>

    
{/* service */}
<div className="heading-container">
      <h1 className="services-heading" id="servis">
        Our Services
      </h1>
    </div>
  

    <section className="content-section3">
        <div className="content3-left">
          <h3>Bridal Beauty, Tailored Just for You. Where Every Bride Shines Brightest.</h3>
          <h4>Timeless Beauty for Your Timeless Moment.</h4>
          <p>BRIDAL MAKEUP</p>
        </div>
       

        <div className="content3-right">
        <Link to="/page2">
            <img src="./imga/con1.png" alt="service2" />
            
            <h4>See More..</h4>
            </Link>
        </div>
      </section>
  
    <div>
      <section className="content-section2">
        <div className="content2-left">
          <Link to="/page3">
            <img src="./imga/con2.png" alt="service1" />
            <h4>See More..</h4>
            </Link>
        </div>

        <div className="content2-right">
          <h3>Unlock the Magic of Perfect Hairdays Curls, Waves, and Everything in Between!</h3>
          <h4>From Casual Chic to Red-Carpet Ready!</h4>
          
        </div>
      </section>PRE-WEDDING LOOKS

      <section className="content-section3">
        <div className="content3-left">
          <h3>Get Camera-Ready with Flawless Looks for Your Big Moments.</h3>
          <h4>From Romantic to Glamorous – We Create Your Perfect Pre-Wedding Look.</h4>
         <Link to="/page3">
            <img src="./imga/con2.png" alt="service1" />
            <h4>PRE-WEDDING LOOKS</h4>
            </Link>
        </div>
       

        <div className="content3-right">
        <Link to="/page4">
            <img src="./imga/con3.png" alt="service2" />
            
            <h4>See More..</h4>
            </Link>
        </div>
      </section>

      <section className="content-section4">
        <div className="content4-left">
        <Link to="/page5">
            <img src="./imga/con4.png" alt="service2" />
            <h4>See More..</h4>
          </Link>
        </div>

        <div className="content4-right">
          <h3>Adorn Your Hands with Stories in Henna. Mehndi Magic for Every Celebration.</h3>
          <h4>Henna That Captures Your Unique Style.</h4>
          <p><a href="content-section4.html">MEHNDI DESIGN</a></p>
        </div>
      </section>

      <section className="content-section5">
        <div className="content5-left">
          <h3>Unveil Your Inner Diva! Party-Perfect Looks, Crafted With Love.</h3>
          <h4>Where Makeup Becomes Art.</h4>
          <p><a href="content-section5.html">PARTY MAKEUP</a></p>
        </div>

        <div className="content5-right">
         <Link to="/Page6">
            <img src="./imga/con5.png" alt="service5" />
            <h4>See More..</h4>
          </Link>
        </div>
      </section>

      <section className="content-section6">
        <div className="content6-left">
        <Link to="/Page7">
            <img src="./imga/con6.png" alt="service6" />
            <h4>See More..</h4>
          </Link>
        </div>

        <div className="content6-right">
          <h3>Nail the Perfect Look, Every Time!</h3>
          <h4>Relax, Rejuvenate, Revitalize. Pamper Yourself with Pure Bliss.</h4>
          <p><a href="content-section6.html">NAIL ART, FOOT MASSAGE AND TEMPORARY TATTOOS</a></p>
        </div>
      </section>
    </div>
    <section className="about" id="about">
  <div className="background-left"></div>
  <div className="background-middle"></div>
  <div className="background-right"></div>
  <div className="content-wrapper">
    <div className="content">
      <h2>About Us</h2>
      <p>
        Hi, I am <strong>Farah Malik</strong>, a dedicated makeup artist based in the stunning state of Goa, with over <strong>9+ years of experience</strong> in transforming beauty and bringing out the best in every client.
        <br />
        Welcome to my beauty sanctuary, where your vision meets artistry! I love the beauty around me – in nature, in somebody’s eyes, in art, in a beautiful soundtrack, in a movie. That’s why I feel really fortunate to be able to create beauty myself. Designing beautiful, effortless, and timeless looks that my clients fall in love with makes me really happy.
        <br /><br />
        Specializing in <strong>Bridal Makeup, Party Makeup, Bridal & Guest Mehndi, Hair Styling, Nail Art</strong>, and many more.
        <br />
        Another wonderful thing about makeup is the almost therapeutic impact it can have on us. A good coat of mascara on your lashes, a touch of blusher on the cheeks, or rosy lipstick can make you feel like you can conquer the world! Not only because you can, but also because it brightens up your face, opens up your eyes, and makes your lips smile.
        <br /><br />
        With a passion for creating unforgettable experiences, I invite you to explore my services, and let’s make your special moments even more beautiful!
        <br />
        <strong>Let’s create something extraordinary together!</strong>
      </p>
    </div>
  </div>
</section>


{/* Gallery Section */}

<div className="heading-container" id="galaery">
      <h1 className="services-heading">
        Gallery
      </h1>
    </div>
  
{/* Gallery Section */}
<div className="containers" id="containers">
  <div className="gallery-grid">
    <img src="./imga/gal1.jpg" className="gallery" alt="Gallery  1" />
    <img src="./imga/gal2.jpg" className="gallery" alt="Gallery  2" />
    <img src="./imga/gal3.jpg" className="gallery" alt="Gallery  3" />
    <img src="./imga/gal4.jpg" className="gallery" alt="Gallery  4" />
    <img src="./imga/gal5.jpg" className="gallery" alt="Gallery 5" />
    <img src="./imga/gal6.jpg" className="gallery" alt="Gallery 6" />
    <img src="./imga/gal7.jpg" className="gallery" alt="Gallery 7" />
  </div>

</div>
{/*review*/}
<div className="heading-container">
      <h1 className="services-heading">
        Reviews
      </h1>
    </div>

<div className="testimonials-clean" id="testimonials-clean">
      <div className="container">
        <div className="intro">
          <p className="text-center">
            Our customers love us! Read what they have to say below.
          </p>
        </div>
        <div className="row people">
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Good work, I recently had my makeup done by EVA Makeup, and I was thrilled with the results! They took
                the time to understand my style and delivered a flawless look that lasted all day. The attention to
                detail was exceptional, especially with the eye makeup. I received so many compliments and felt confident
                throughout the event. The atmosphere was welcoming, and the products used were high quality. I can't
                recommend them enough for anyone seeking professional makeup services!
              </p>
            </div>
            <div className="author">
              <img className="rounded-circle" src="./imga/img3.jpg" alt="Anita Agarwal" />
              <h5 className="name">Anita Agarwal</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Great, preferences and created a stunning look that lasted all day. The quality of the products used was
                top-notch, and I received so many compliments. Highly recommend for anyone looking for professional
                makeup services!.
              </p>
            </div>
            <div className="author">
              <img className="rounded-circle" src="./imga/img4.jpg" alt="Sanjana Biswas" />
              <h5 className="name">Sanjana Biswas</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                I recently had the pleasure of getting my makeup done by EVA Makeup, and I couldn’t be happier with the
                experience! From the moment I arrived, the atmosphere was warm and inviting, making me feel comfortable
                right away. The artist took the time to discuss my preferences and offered valuable suggestions. They
                skillfully applied the makeup, paying close attention to every detail. The foundation matched my skin
                perfectly, and the eye makeup was absolutely stunning, bringing out my features beautifully. What impressed
                me most was how well the makeup lasted throughout the day. I received countless compliments and felt
                confident at my event. Plus, the products used were of high quality and felt lightweight on my skin. Overall,
                I highly recommend EVA Makeup for anyone looking for professional and personalized makeup services. I can’t
                wait to return for my next occasion!
              </p>
            </div>
            <div className="author">
              <img className="rounded-circle" src="./imga/img5.jpg" alt="Sneha Sarkar" />
              <h5 className="name">Sneha Sarkar</h5>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/Review"> Read More</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main;
