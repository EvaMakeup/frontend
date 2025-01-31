import React, { useState } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './App.css'; // Assuming this is your main CSS file

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Link, Route , Routes } from 'react-router-dom';
import Main from './page/Mainpage';
import { Page2 } from './page/Page2';
import { Page3 } from './page/Page3';
import { Page4 } from './page/Page4';
import { Page5 } from './page/Page5';
import { Page6 } from './page/Page6';
import { Page7 } from './page/Page7';
import { Review } from './page/Review';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <img src="./imga/logo.jpg" alt="Logo" />
        </div>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <a href="#servis" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="./imga/Eva_Portfolio.pdf" onClick={toggleMenu}>Portfolio</a>
          <a href="#galaery" onClick={toggleMenu}>Gallery</a>
          <a href="#testimonials-clean" onClick={toggleMenu}>Reviews</a>
          <a href="#foot" onClick={toggleMenu}>Contact</a>
          <div className="social-icons">
            <a href="https://www.instagram.com/makeupingoa?utm_source=qr&igsh=MWkzcWhyc2ZpaGZiNQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/19v77XZxRU/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`dot ${isActive ? 'active' : ''}`}></div>
          <div className={`dot ${isActive ? 'active' : ''}`}></div>
          <div className={`dot ${isActive ? 'active' : ''}`}></div>
        </div>
      </nav>
   <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/page2' element={<Page2/>} />
    <Route path='/page3' element={<Page3/>} />
    <Route path='/page4' element={<Page4/>} />
    <Route path='/page5' element={<Page5/>} />
    <Route path='/page6' element={<Page6/>} />
    <Route path='/page7' element={<Page7/>} />
    <Route path='/Review' element={<Review/>} />
    
   </Routes>
    <footer className="footer" id='foot'>
      <div className="f-item-con" id="f-item-con">
        <div className="app-info">
          <span className="app-name">
            <span className="app-initial">EVA</span> MAKEUP IN GOA
          </span>
          <p>
            Hi, I'm <strong>Farah Malik</strong>, a dedicated makeup artist based in Goa with over 9 years of
            experience. I specialize in <strong>Bridal Makeup, Party Makeup, Mehndi, Hair Styling, Nail Art</strong> and more. My passion is creating timeless, effortless beauty that enhances my clients’ natural features. I believe makeup can be transformative, boosting confidence and brightening your entire look. Let’s connect and make your special moments even more beautiful!
          </p>
        </div>
        <div className="useful-links">
          <div className="footer-title">OUR LINKS</div>
          <ul>
            <li><a href="#car">Home</a></li>
            <li><a href="#servis">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="./imga/Eva_Portfolio.pdf">Portfolio</a></li>
            <li><a href="#galaery">Gallery</a></li>
            <li><a href="#testimonials-clean">Review</a></li>
            <li><a href="#foot">Contact</a></li>
            <li><a href="https://www.instagram.com/makeupingoa?utm_source=qr&igsh=MWkzcWhyc2ZpaGZiNQ==">Instagram/a></li>
            <li><a href="https://www.facebook.com/share/19v77XZxRU/?mibextid=qi2Omg">Facebook/a></li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <ul>
            <li className="fa fa-phone"> +91-9689-077-200</li>
            <li className="fa fa-phone"> +91-8805-898-806</li>
            <li className="fas fa-envelope"> farah.makeupingoa@gmail.com</li>
            <li className="fas fa-map-marker-alt"> Eva Hair And Beauty Salon, Shop no-3, Rajesh Apartment, Shirvodem, Margao, Goa</li>
          </ul>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.0554398756026!2d73.9583688984853!3d15.264772198415088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb31b1423ae2b%3A0x5b24f2bb90d57fd7!2sEva%20hair%20and%20beauty%20salon!5e0!3m2!1sen!2sin!4v1728296962825!5m2!1sen!2sin"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className='cr-con'>Copyright &copy; 2024 | Made by Eva Makeup</div>
    </footer>

  
    </>
  );
};

export default App;
