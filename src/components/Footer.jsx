import React from 'react';
import logo2 from '../assets/images/logo.png';
import b1 from '../assets/images/blog/b1.jpg';
import b2 from '../assets/images/blog/b2.jpg';
import b3 from '../assets/images/blog/b3.jpg';
import insta1 from '../assets/images/instagram/1.jpg';
import insta2 from '../assets/images/instagram/2.jpg';
import insta3 from '../assets/images/instagram/3.jpg';
import insta4 from '../assets/images/instagram/4.jpg';
import insta5 from '../assets/images/instagram/5.jpg';
import insta6 from '../assets/images/instagram/6.jpg';
import insta7 from '../assets/images/instagram/7.jpg';
import insta8 from '../assets/images/instagram/8.jpg';
import insta9 from '../assets/images/instagram/9.jpg';

const Footer = () => {
  return (
    <footer className="footer_01">
      <div className="container largeContainer">
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <div className="aboutWidget">
              <a href="/">
                <img src={logo2} alt="sgt solutions" />
              </a>
              <p>
                SGT Solutions is a Chennai-based geospatial
                & digital transformation company. 
                We bridge advanced spatial technologies with
                real-world governance challenges.
              </p>
              <div className="abIcon">
                <i className="twi-map-marker"></i>Alandur 124, MKN Rd, Ramapuram, Alandur, Chennai.
              </div>
              <div className="abIcon">
                <i className="twi-envelope"></i>
                <a href="mailto:info@email.com">sgtsolutionsinfo@gmail.com</a>
              </div>
              <div className="abIcon">
                <i className="twi-phone"></i>+91 89031 38792
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3 ml54">
            <div className="widget">
              <div className="wsubtitle">Clean & Flexible</div>
              <h3 className="widget_title">Latest Post</h3>
              
              <div className="pp_post_item">
                <img src={b1} alt="Blog" />
                <span>July 29, 2021</span>
                <a href="/single-blog">Master of Backyard Tiling</a>
              </div>
              
              <div className="pp_post_item">
                <img src={b2} alt="Blog" />
                <span>July 29, 2021</span>
                <a href="/single-blog">The rest of us Avoid Common</a>
              </div>
              
              <div className="pp_post_item">
                <img src={b3} alt="Blog" />
                <span>July 29, 2021</span>
                <a href="/single-blog">Finding hidden Gems of this sort</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-2">
            <div className="widget">
              <div className="wsubtitle">Clean & Flexible</div>
              <h3 className="widget_title">Quick Links</h3>
              <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Company</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/mega-menu">Mega Menu</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="widget gallery">
              <div className="wsubtitle">Clean & Flexible</div>
              <h3 className="widget_title">Instagram</h3>
              <div className="galleryShots">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta1} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta2} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta3} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta4} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta5} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta6} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta7} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta8} alt="Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <img src={insta9} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="ctaMail">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div className="subTitle">Updated about our Products</div>
                  <h2 className="secTitle">Sign Up Newsletter</h2>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="SubsrcribeForm">
                    <form className="yikes-easy-mc-form" action="#" method="post">
                      <input type="email" name="EMAIL" placeholder="Enter Your Email Address" />
                      <button className="yikes-easy-mc-submit-button" type="submit">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="Copyright">
              <span>Bepro</span> - Copyright 2021. Developed by{' '}
              <a href="https://themewar.com/" target="_blank" rel="noopener noreferrer">
                Themewar
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;