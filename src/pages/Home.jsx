import React, { useRef, useState } from 'react';

// Import Google Fonts from @fontsource
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';


// Import Font Awesome from npm
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import all images
import slider1 from '../assets/images/slider/1_4.jpg';
import slider2 from '../assets/images/slider/1_5.jpeg';
import service1 from '../assets/images/service/1.jpg';
import service2 from '../assets/images/service/2.jpg';
import service3 from '../assets/images/service/3.jpg';
import aboutImg from '../assets/images/home1/about.png';
import client1 from '../assets/images/home1/c1.png';
import client2 from '../assets/images/home1/c2.png';
import client3 from '../assets/images/home1/c3.png';
import achievementImg from '../assets/images/home1/1.png';
import clientLogo1 from '../assets/images/client-logo/1.png';
import clientLogo2 from '../assets/images/client-logo/2.png';
import clientLogo3 from '../assets/images/client-logo/3.png';
import clientLogo4 from '../assets/images/client-logo/4.png';
import price1 from '../assets/images/home1/p1.jpg';
import price2 from '../assets/images/home1/p2.jpg';
import price3 from '../assets/images/home1/p3.jpg';
import tabImg from '../assets/images/home1/2.png';
import team1 from '../assets/images/team/1.jpg';
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
import testimonial1 from '../assets/images/home1/t1.jpg';
import testimonial2 from '../assets/images/home1/t2.jpeg';
import testimonial3 from '../assets/images/home1/t3.jpeg';
import blog1 from '../assets/images/blog/1.jpg';
import blog2 from '../assets/images/blog/2.jpg';
import blog3 from '../assets/images/blog/3.jpg';
import blogAuthor1 from '../assets/images/blog/a1.jpg';
import blogAuthor2 from '../assets/images/blog/a2.jpg';
import blogAuthor3 from '../assets/images/blog/a3.jpg';
import ctaImg1 from '../assets/images/home1/3.png';
import ctaImg2 from '../assets/images/home1/4.png';

// Import video
import videoFile from '../assets/images/video.mp4';

// Add responsive CSS
const responsiveStyles = `
  /* Responsive Styles */
  @media (max-width: 1199.98px) {
    .hero-content h1 {
      font-size: 50px !important;
      line-height: 60px !important;
    }
    .hero-content {
      padding: 0 5% !important;
    }
  } .testiItem01 .quotation {
      font-size: 16px !important;
    }
      .carousel-testimonial {
  height: 400px;
  overflow: hidden;
}

.carousel-testimonial img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  @media (max-width: 991.98px) {
    .hero-content h1 {
      font-size: 42px !important;
      line-height: 52px !important;
    }
    .hero-content p {
      font-size: 16px !important;
      line-height: 26px !important;
    }
    .hero-slide {
      min-height: 600px !important;
      padding: 0 8% !important;
    }
    .achievement-img {
      margin-top: 30px;
    }
    .cta-thumb {
      margin-top: 30px;
    }
    .pricing-item-01 {
      margin-bottom: 30px;
    }
    .blogItem01 {
      margin-bottom: 30px;
    }
    .team_01 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .hero-content h1 {
      font-size: 32px !important;
      line-height: 42px !important;
    }
    .hero-content .sub-title {
      font-size: 12px !important;
    }
    .hero-content p {
      font-size: 14px !important;
      line-height: 24px !important;
    }
    .hero-slide {
      min-height: 500px !important;
      padding: 0 5% !important;
      text-align: center !important;
    }
    .hero-content {
      max-width: 100% !important;
      text-align: center !important;
    }
    .hero-content .btn-wrapper {
      text-align: center !important;
    }
    .secTitle {
      font-size: 28px !important;
    }
    .subTitle {
      font-size: 13px !important;
    }
    .service_item_01 {
      margin-bottom: 25px;
    }
    .client-logo-item {
      margin-bottom: 20px;
    }
    .testimonialSection01 .row {
      flex-direction: column-reverse;
    }
    .testimonialSection01 .col-md-6:first-child {
      margin-top: 30px;
    }
    .ctaCon {
      text-align: center;
    }
    .ctaCon h2 {
      font-size: 36px !important;
    }
    .ctaCon h3 {
      font-size: 28px !important;
    }
    .ctaCon h4 {
      font-size: 20px !important;
    }
    .pricingTab a {
      padding: 8px 20px !important;
      font-size: 14px !important;
    }
    .beproTab li a {
      padding: 10px 15px !important;
      font-size: 14px !important;
    }
    .beproTabCon .secTitle {
      font-size: 24px !important;
    }
    .beproTabCon .col-md-6:last-child {
      margin-top: 20px;
    }
    .beproTabCon img {
      width: 100%;
    }
  }

  @media (max-width: 575.98px) {
    .hero-slide {
      min-height: 450px !important;
      padding: 0 15px !important;
    }
    .hero-content h1 {
      font-size: 26px !important;
      line-height: 36px !important;
    }
    .hero-content p {
      font-size: 13px !important;
      line-height: 22px !important;
      margin-bottom: 20px !important;
    }
    .hero-content .sub-title {
      font-size: 11px !important;
      letter-spacing: 1.5px !important;
    }
    .secTitle {
      font-size: 24px !important;
    }
    .subTitle {
      font-size: 12px !important;
    }
    .berpo_btn {
      padding: 12px 25px !important;
      font-size: 13px !important;
    }
    .carousel-control-prev,
    .carousel-control-next {
      display: none !important;
    }
    .carousel-indicators {
      bottom: 10px !important;
    }
    .carousel-indicators li {
      width: 8px !important;
      height: 8px !important;
    }
    .testiItem01 {
      padding: 20px !important;
    }
    .testiItem01 h5 {
      font-size: 18px !important;
    }
    .testiItem01 .quotation {
      font-size: 1px !important;
    }
    .ts_author img {
      width: 60px !important;
      height: 60px !important;
    }
    .ts_author h5 {
      font-size: 16px !important;
    }
    .price-thumb img {
      width: 100%;
    }
    .pricing-item-01 {
      padding: 20px !important;
    }
    .pricing-item-01 .p-title {
      font-size: 20px !important;
    }
    .pricing-item-01 .p-price {
      font-size: 28px !important;
    }
    .blogContent h3 {
      font-size: 18px !important;
    }
    .blogContent .bmeta {
      font-size: 13px !important;
    }
    .bpcon .author {
      font-size: 13px !important;
    }
    .accordion .card-header button {
      font-size: 14px !important;
      padding: 12px 15px !important;
    }
    .accordion .card-body {
      font-size: 14px !important;
      padding: 15px !important;
    }
    .ctaThumb img {
      width: 100%;
    }
    .ctaThumb .ctaborder {
      margin-bottom: 15px;
    }
    .clinetWorlwide {
      margin-top: 20px;
    }
    .ClientNumber {
      position: relative !important;
      margin-top: 15px !important;
      transform: none !important;
    }
    .ClientNumber h2 {
      font-size: 36px !important;
    }
    .listItem li {
      font-size: 14px !important;
    }
  }

  /* Additional responsive fixes */
  .container.largeContainer {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 1200px) {
    .container.largeContainer {
      max-width: 1200px;
    }
  }

  @media (min-width: 1400px) {
    .container.largeContainer {
      max-width: 1320px;
    }
  }

  /* Carousel indicator styling */
  .carousel-indicators li {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.5);
    border: none;
    margin: 0 5px;
  }

  .carousel-indicators .active {
    background-color: #bb0b0b;
  }

  /* Pricing tab active state */
  .pricingTab .active {
    background: #bb0b0b !important;
    color: #fff !important;
  }

  .pricingTab a {
    display: inline-block;
    padding: 10px 30px;
    background: #f5f5f5;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    margin: 0 5px;
    border-radius: 5px;
  }

  .pricingTab a:hover {
    background: #bb0b0b;
    color: #fff;
  }

  /* Accordion styling */
  .accordion .card {
    border: none;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .accordion .card-header {
    background: #f8f9fa;
    padding: 0;
    border: none;
  }

  .accordion .card-header button {
    width: 100%;
    text-align: left;
    padding: 15px 20px;
    background: transparent;
    border: none;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .accordion .card-header button:hover {
    color: #bb0b0b;
  }

  .accordion .card-body {
    padding: 20px;
    background: #fff;
    color: #666;
  }

  /* Team social icons */
  .tm_social a {
    display: inline-block;
    margin: 0 5px;
    color: #333;
    transition: all 0.3s ease;
  }

  .tm_social a:hover {
    color: #bb0b0b;
  }

  /* Blog styling */
  .blogContent {
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border-radius: 0 0 5px 5px;
  }

  .blogContent .bmeta {
    color: #999;
    text-decoration: none;
    font-size: 14px;
  }

  .blogContent h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  .blogContent h3 a {
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .blogContent h3 a:hover {
    color: #bb0b0b;
  }

  .bpcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  .bpcon .author {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #666;
  }

  .bpcon .author img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .bpcon a:last-child {
    color: #999;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .bpcon a:last-child:hover {
    color: #bb0b0b;
  }

  /* Button styling */
  .berpo_btn {
    display: inline-block;
    position: relative;
    padding: 15px 35px;
    background: #bb0b0b;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .berpo_btn:hover {
    background: #a00a0a;
    color: #fff;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(187, 11, 11, 0.3);
  }

  .berpo_btn .bp-text {
    position: relative;
    z-index: 1;
  }

  /* Testimonial styling */
  .testiItem01 {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  }

  .testiItem01 .quotation {
    font-style: italic;
    color: #666;
    line-height: 1.8;
  }

  .ts_author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  .ts_author img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  .ts_author h5 {
    margin: 0;
    font-weight: 600;
    color: #333;
  }

  .ts_author span {
    color: #999;
    font-size: 14px;
  }

  /* Video Section Styles */
  .video-wrapper {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    background: #000;
    cursor: pointer;
  }

  .video-wrapper video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  .video-wrapper .play-button-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 10;
    pointer-events: none;
  }

  .video-wrapper .play-button-overlay .play-icon {
    width: 80px;
    height: 80px;
    background: #bb0b0b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: auto;
    box-shadow: 0 0 0 15px rgba(187, 11, 11, 0.3);
  }

  .video-wrapper .play-button-overlay .play-icon:hover {
    transform: scale(1.1);
    background: #a00a0a;
    box-shadow: 0 0 0 20px rgba(187, 11, 11, 0.4);
  }

  .video-wrapper .play-button-overlay .play-icon i {
    color: #fff;
    font-size: 35px;
    margin-left: 5px;
  }

  .video-wrapper .play-button-overlay.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .video-wrapper:hover .play-button-overlay:not(.hidden) {
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .video-wrapper .play-button-overlay .play-icon {
      width: 60px;
      height: 60px;
    }
    .video-wrapper .play-button-overlay .play-icon i {
      font-size: 25px;
    }
    .video-wrapper .play-button-overlay .play-icon {
      box-shadow: 0 0 0 10px rgba(187, 11, 11, 0.3);
    }
  }

  @media (max-width: 576px) {
    .video-wrapper .play-button-overlay .play-icon {
      width: 50px;
      height: 50px;
    }
    .video-wrapper .play-button-overlay .play-icon i {
      font-size: 20px;
    }
    .video-wrapper .play-button-overlay .play-icon {
      box-shadow: 0 0 0 8px rgba(187, 11, 11, 0.3);
    }
  }
`;


const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {/* Inject responsive styles */}
      <style>{responsiveStyles}</style>

      {/* Begin:: Hero Slider (Bootstrap 4 Carousel) */}
      <section className="slider_01">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
          data-pause="false"
        >
          <ol className="carousel-indicators">
            <li data-target="#heroCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#heroCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active hero-slide">
              <div
                style={{
                  backgroundImage: `url(${slider1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '750px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 15%',
                  position: 'relative'
                }}
                className="hero-slide"
              >
                <div className="hero-content" style={{ maxWidth: '670px', width: '100%' }}>
                  <div
                    className="sub-title text-uppercase"
                    style={{
                      color: '#bb0b0b',
                      fontSize: '14px',
                      fontWeight: 700,
                      lineHeight: '28px',
                      letterSpacing: '2.8px',
                      marginBottom: '10px'
                    }}
                  >
                   <br /><br /> <span className="bg">GEOSPATIAL & DIGITAL SOLUTIONS</span>
                  </div>
                  <h1
                    className="headFont"
                    style={{
                      color: '#ffffff',
                      fontSize: '70px',
                      fontWeight: 700,
                      lineHeight: '80px',
                      marginBottom: '20px'
                    }}
                  >
                  Mapping the World.Building Smarter<span style={{ color: '#bb0b0b' }}> Solutions.</span>
                  </h1>
                  <p
                    style={{
                      color: '#d9d9d9',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '28px',
                      marginBottom: '30px'
                    }}
                  >
                    We deliver innovative geospatial solutions that transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial intelligence, we help organizations make better decisions.
                  </p>
                  <div className="btn-wrapper">
                    <a
                      className="berpo_btn"
                      href="service1.html"
                    >
                      <span className="bp-shape"></span>
                      <span className="bp-shape"></span>
                      <span className="bp-shape"></span>
                      <span className="bp-shape"></span>
                      <span className="bp-text">EXPLORE OUR SERVICES</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item hero-slide">
              <div
                style={{
                  backgroundImage: `url(${slider2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '750px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 15%',
                  position: 'relative'
                }}
                className="hero-slide"
              >
                <div className="hero-content" style={{ maxWidth: '670px', width: '100%' }}>
                  <div
                    className="sub-title text-uppercase"
                    style={{
                      color: '#bb0b0b',
                      fontSize: '14px',
                      fontWeight: 700,
                      lineHeight: '28px',
                      letterSpacing: '2.8px',
                      marginBottom: '10px'
                    }}
                  >
                   <br /> <span className="bg">SGT SOLUTIONS</span>
                  </div>
                  <h1
                    className="headFont"
                    style={{
                      color: '#ffffff',
                      fontSize: '70px',
                      fontWeight: 700,
                      lineHeight: '80px',
                      marginBottom: '20px'
                    }}
                  >
                     See More. Map Better.<span style={{ color: '#bb0b0b' }}>Decide Smarter.</span>
                  </h1>
                  <p
                    style={{
                      color: '#d9d9d9',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '26px',
                      marginBottom: '30px'
                    }}
                  >
                    Advanced GIS, surveying, mapping, and spatial intelligence solutions designed for a connected world.
                  </p>
                  <div className="btn-wrapper">
                    <a
                      className="berpo_btn"
                      href="service1.html"
                    >
                      <span className="bp-shape"></span>
                      <span className="bp-shape"></span>
                      <span className="bp-shape"></span>
                      <span className="bp-shape"></span>
                      <span className="bp-text">DISCOVER MORE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      {/* End:: Hero Slider */}

      {/* Services Start */}
      <section className="serviceSectionTitle py-5">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="subTitle">Services</div>
              <h2 className="secTitle">What We Do <br /> Our Geospatial & Digital Services </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="service_section_01 pb-5">
        <div className="container largeContainer">
          <div className="row p-3">
            <div className="col-lg-4 col-md-6">
              <div className="service_item_01">
                <div className="siThumb">
                  <img src={service1} alt="" className="img-fluid" />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3><a href='/services/web-gis'>Web GIS</a></h3>
                  <p>Web-based mapping portals for land records and asset tracking.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service_item_01">
                <div className="siThumb">
                  <img src={service2} alt="" className="img-fluid" />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <h3><a href='/services/geo-property'>Spatial Revenue Intelligence</a></h3>
                  <p>Digitize buildings and parcels from aerial imagery.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service_item_01">
                <div className="siThumb">
                  <img src={service3} alt="" className="img-fluid" />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3><a href='/services/drone-survey'>Drone & DGPS Survey</a></h3>
                  <p>Centimeter-level accuracy for property mapping.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <div className="qu_link">From Web GIS and drone surveys to spatial analytics, we help organizations turn location data into actionable insights. <a href="javascript:void(0);">Explore Company</a></div>
            </div>
          </div>
        </div>
      </section>
      {/* Services End */}

      {/* Achievement Start */}
      <section className="achivementSection01 py-5">
        <div className="container largeContainer">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="subTitle">GEOSPATIAL EXPERTISE</div>
              <h2 className="secTitle">Turning Location Data Into Real-World Solutions</h2>
              <p>
                We combine GIS, remote sensing, surveying, drone technology, and spatial analytics to deliver accurate<br /> information for better planning and decision-making.
              </p>
              <ul className="listItem withbg">
                <li><span><i className="twi-check-circle"></i>Accurate GIS & Mapping Solutions</span></li>
                <li><span><i className="twi-check-circle"></i>Drone & DGPS Surveying</span></li>
                <li><span><i className="twi-check-circle"></i>Spatial Data & Remote Sensing</span></li>
              </ul>
              <a className="berpo_btn" href="contact.html">
                <span className="bp-shape"></span>
                <span className="bp-shape"></span>
                <span className="bp-shape"></span>
                <span className="bp-shape"></span>
                <span className="bp-text">Explore Our Services</span>
              </a>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="clinetWorlwide position-relative">
                <img src={achievementImg} alt="" className="img-fluid achievement-img" />
                <div className="ClientNumber countfact" data-count="80" style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: '#fff',
                  padding: '20px 30px',
                  borderRadius: '10px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center'
                }}>
                  <h2><span className="counter">10</span><sup>+</sup></h2>
                  <h5>GEOSPATIAL SERVICES</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievement End */}

      {/* Client Logo Start */}
      <section className="clientSection01 py-5">
        <div className="container largeContainer">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 text-center mb-4 mb-md-0 client-logo-item">
              <a href="javascript:void(0);"><img src={clientLogo1} alt="" className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} /></a>
            </div>
            <div className="col-6 col-md-3 text-center mb-4 mb-md-0 client-logo-item">
              <a href="javascript:void(0);"><img src={clientLogo2} alt="" className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} /></a>
            </div>
            <div className="col-6 col-md-3 text-center client-logo-item">
              <a href="javascript:void(0);"><img src={clientLogo3} alt="" className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} /></a>
            </div>
            <div className="col-6 col-md-3 text-center client-logo-item">
              <a href="javascript:void(0);"><img src={clientLogo4} alt="" className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} /></a>
            </div>
          </div>
        </div>
      </section>
      {/* Client Logo End */}

      {/* Video Section Start */} 
      <section className="videoSection01 py-5" style={{ background: '#bdcfe0' }}>
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">GEOSPATIAL TECHNOLOGY</div>
              <h2 className="secTitle">Turning Location Data Into Smarter Decisions</h2>
              
              {/* Custom Video Player with Clickable Play Icon */}
              <div className="video-wrapper" onClick={togglePlay}>
                <video 
                  ref={videoRef}
                  playsInline
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                  poster={slider1}
                  onEnded={handleVideoEnd}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay */}
                <div className={`play-button-overlay ${isPlaying ? 'hidden' : ''}`}>
                  <div className="play-icon">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section End */}

      {/* Tab Section Start */}
      <section className="tabSection01 py-5">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav beproTab justify-content-center flex-wrap" id="beproTab" role="tablist">
                <li role="presentation" className="nav-item">
                  <a id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="false" className="nav-link">GIS & MAPPING</a>
                </li>
                <li role="presentation" className="nav-item">
                  <a className="nav-link active" id="financial-tab" data-toggle="tab" href="#financial" role="tab" aria-controls="financial" aria-selected="true">SURVEYING & DATA</a>
                </li>
                <li role="presentation" className="nav-item">
                  <a id="global-tab" data-toggle="tab" href="#global" role="tab" aria-controls="global" aria-selected="false" className="nav-link">SPATIAL INTELLIGENCE</a>
                </li>
              </ul>
              <div className="tab-content mt-4">
                <div className="tab-pane fade animated slideInUp2" id="business" role="tabpanel" aria-labelledby="business-tab">
                  <div className="beproTabCon">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2 className="secTitle">Geospatial Solutions for a Smarter World</h2>
                        <p>
                          We transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial analysis, SGT Solutions helps organizations understand their environment and make better decisions.
                        </p>
                        <a className="berpo_btn" href="contact.html">
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-text">EXPLORE OUR SERVICES</span>
                        </a>
                      </div>
                      <div className="col-md-6">
                        <img src={tabImg} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active animated slideInUp2" id="financial" role="tabpanel" aria-labelledby="financial-tab">
                  <div className="beproTabCon">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2 className="secTitle">Geospatial Solutions for a Smarter World</h2>
                        <p>
                          We transform location data into accurate, actionable insights. From GIS and aerial mapping to drone surveys and spatial analysis, SGT Solutions helps organizations understand their environment and make better decisions.
                        </p>
                        <a className="berpo_btn" href="contact.html">
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-text">EXPLORE OUR SERVICES</span>
                        </a>
                      </div>
                      <div className="col-md-6">
                        <img src={tabImg} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade animated slideInUp2" id="global" role="tabpanel" aria-labelledby="global-tab">
                  <div className="beproTabCon">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2 className="secTitle">Geospatial Solutions for a Smarter World</h2>
                        <p>
                          We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.
                        </p>
                        <a className="berpo_btn" href="contact.html">
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-text">EXPLORE OUR SERVICES</span>
                        </a>
                      </div>
                      <div className="col-md-6">
                        <img src={tabImg} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dividSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="diviborder"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Tab Section End */}

      {/* Team Start */}
      <section className="teamSection01 py-5">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">Our Members</div>
              <h2 className="secTitle">Meet Our Latest <br />Team Member</h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team_01 text-center">
                <div className="tm_thumb position-relative">
                  <img src={team1} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
                  <div className="tm_social" style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <a href="https://www.facebook.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-facebook-square"></i>Facebook</a>
                    <a href="https://twitter.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-twitter"></i>Twitter</a>
                    <a href="https://linkedin.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-youtube"></i>Youtube</a>
                  </div>
                </div>
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Mohana</a></h3>
                <p style={{ color: '#999' }}>Web Designer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team_01 text-center">
                <div className="tm_thumb position-relative">
                  <img src={team2} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
                  <div className="tm_social" style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <a href="https://www.facebook.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-facebook-square"></i>Facebook</a>
                    <a href="https://twitter.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-twitter"></i>Twitter</a>
                    <a href="https://linkedin.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-youtube"></i>Youtube</a>
                  </div>
                </div>
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Sheikh</a></h3>
                <p style={{ color: '#999' }}>Web Developer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team_01 text-center">
                <div className="tm_thumb position-relative">
                  <img src={team3} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
                  <div className="tm_social" style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <a href="https://www.facebook.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-facebook-square"></i>Facebook</a>
                    <a href="https://twitter.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-twitter"></i>Twitter</a>
                    <a href="https://linkedin.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-youtube"></i>Youtube</a>
                  </div>
                </div>
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Nithish</a></h3>
                <p style={{ color: '#999' }}>Business Expert</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team_01 text-center">
                <div className="tm_thumb position-relative">
                  <img src={team1} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
                  <div className="tm_social" style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <a href="https://www.facebook.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-facebook-square"></i>Facebook</a>
                    <a href="https://twitter.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-twitter"></i>Twitter</a>
                    <a href="https://linkedin.com/" style={{ background: '#fff', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none', color: '#333', fontSize: '12px' }}><i className="twi-youtube"></i>Youtube</a>
                  </div>
                </div>
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Gayathiri</a></h3>
                <p style={{ color: '#999' }}>Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team End */}

{/* Testimonial Start */}
<section className="testimonialSection01 py-5" style={{ background: '#f8f9fa' }}>
  <div className="container largeContainer">
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="subTitle">testimonial</div>
        <h2 className="secTitle">What Our Clients Say</h2>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6">
        <div className="accordion bepAccordion" id="befAccordion01">
          <div className="card">
            <div className="card-header" id="ma_ac_01">
              <h2 className="mb-0">
                <button className="collapsed" type="button" data-toggle="collapse" data-target="#ma_collapes_01" data-aria-expanded="false" data-aria-controls="ma_collapes_01">
                  <i>1.</i> Why Choose Our Sgt Solutions?
                  <span></span>
                </button>
              </h2>
            </div>
            <div id="ma_collapes_01" className="collapse" aria-labelledby="ma_ac_01" data-parent="#befAccordion01">
              <div className="card-body">
                We combine cutting-edge technology with deep domain expertise to deliver accurate, actionable spatial intelligence.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="ma_ac_02">
              <h2 className="mb-0">
                <button type="button" data-toggle="collapse" data-target="#ma_collapes_02" data-aria-expanded="true" data-aria-controls="ma_collapes_02">
                  <i>2.</i> How Do We Ensure Accuracy
                  <span></span>
                </button>
              </h2>
            </div>
            <div id="ma_collapes_02" className="collapse show" aria-labelledby="ma_ac_02" data-parent="#befAccordion01">
              <div className="card-body">
                We use high-precision LiDAR, DGPS, and photogrammetry with rigorous quality control at every stage.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="ma_ac_03">
              <h2 className="mb-0">
                <button className="collapsed" type="button" data-toggle="collapse" data-target="#ma_collapes_03" data-aria-expanded="false" data-aria-controls="ma_collapes_03">
                  <i>3.</i> What Industries Do We Serve?
                  <span></span>
                </button>
              </h2>
            </div>
            <div id="ma_collapes_03" className="collapse" aria-labelledby="ma_ac_03" data-parent="#befAccordion01">
              <div className="card-body">
                Urban planning, agriculture, real estate, infrastructure, environmental monitoring, and government.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="4000"
          data-pause="false"
        >
          <div className="carousel-inner">
            {/* Testimonial 1 */}
            <div className="carousel-item  carousel-testimonial active">
              <div className="testiItem01" style={{ background: '#fff', padding: '30px', borderRadius: '10px' }}>
                <h5>Exceptional Service</h5>
                <p className="quotation">
                  "SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation.By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries andintegrated spatial data seamlessly. Their technology has been highly effective inidentifying previously unassessed commercial structures and verifying built-up areavariations."
                </p>
                <div className="ts_author">
                  <img src={testimonial1} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h5>Coimbatore City Municipal Corporation</h5>
                    <span>Government Partner</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="carousel-item carousel-testimonial">
              <div className="testiItem01" style={{ background: '#fff', padding: '30px', borderRadius: '10px' }}>
                <h5>Environmental Excellence</h5>
                <p className="quotation">
                  "SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped trackecological degradation, siltation levels, and natural inlet channels across projectzones.Dr. Saravani and her team successfully bridged cutting-edge technology withgrassroots environmental restoration, optimizing rainwater harvesting catchments forwater body renovation initiatives."
                </p>
                <div className="ts_author">
                  <img src={testimonial2} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h5>Marutham Foundation</h5>
                    <span>Environmental Partner</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 - NEW */}
            <div className="carousel-item carousel-testimonial">
              <div className="testiItem01" style={{ background: '#fff', padding: '30px', borderRadius: '10px' }}>
                <h5>Exceptional Service</h5>
                <p className="quotation">
                 "SGT Solutions completed extensive spatial mapping and waterquality analysis for the Institute for Water Studies, Chennai. Using geospatiallogy, they tracked water bodies and aquifer profiles, while lab-based indexin measured critical chemical parameters and contamination trends. Their work providedreliable datasets, significantly aiding research and water resource managementinitiatives."
                </p>
                <div className="ts_author">
                  <img src={testimonial3} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h5>Institute for Water Studies</h5>
                    <span>Government Agency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Indicators - Updated to 3 */}
          <ol className="carousel-indicators" style={{ position: 'relative', marginTop: '20px' }}>
            <li data-target="#testimonialCarousel" data-slide-to="0" className="active" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#bb0b0b', border: 'none' }}></li>
            <li data-target="#testimonialCarousel" data-slide-to="1" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ccc', border: 'none' }}></li>
            <li data-target="#testimonialCarousel" data-slide-to="2" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ccc', border: 'none' }}></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Testimonial End */}

      {/* Blog Start */}
      <section className="blogSectiont01 py-5">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">GEOSPATIAL INSIGHTS</div>
              <h2 className="secTitle">Latest Geospatial Insights</h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="blogItem01">
                <div className="blogThumb">
                  <img src={blog1} alt="" className="img-fluid" />
                </div>
                <div className="blogContent">
                  <a className="bmeta" href="single-blog.html"><i className="twi-calendar-alt1"></i>12 August, 2026</a>
                  <h3><a href="single-blog.html">How GIS Is Transforming Modern Property Mapping</a></h3>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blogItem01">
                <div className="blogThumb">
                  <img src={blog2} alt="" className="img-fluid" />
                </div>
                <div className="blogContent">
                  <a className="bmeta" href="single-blog.html"><i className="twi-calendar-alt1"></i>5 August, 2026</a>
                  <h3><a href="single-blog.html">The Role of Drones in Modern Land Surveying</a></h3>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blogItem01">
                <div className="blogThumb">
                  <img src={blog3} alt="" className="img-fluid" />
                </div>
                <div className="blogContent">
                  <a className="bmeta" href="single-blog.html"><i className="twi-calendar-alt1"></i>28 July, 2026</a>
                  <h3><a href="single-blog.html">Turning Aerial Imagery Into Actionable Insights</a></h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}

      {/* Call To Action Start */}
      <section className="ctaSectiont01 py-5" style={{ background: '#1a1a1a', color: '#fff' }}>
        <div className="container largeContainer">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="ctaCon">
                <h4><span style={{ color: '#bb0b0b' }}>Mapping</span>Data.</h4>
                <h2 style={{ fontSize: '48px', fontWeight: 700 }}>Creating</h2>
                <h3 style={{ fontSize: '36px', fontWeight: 700 }}><span style={{ color: '#bb0b0b' }}></span> Impact</h3>
                <a className="berpo_btn" href="contact.html" style={{ marginTop: '20px' }}>
                  <span className="bp-shape"></span>
                  <span className="bp-shape"></span>
                  <span className="bp-shape"></span>
                  <span className="bp-shape"></span>
                  <span className="bp-text">Contact Us</span>
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="ctaThumb text-center cta-thumb">
                <img className="ctaborder" src={ctaImg1} alt="" style={{ maxWidth: '100%' }} />
                <img src={ctaImg2} alt="" style={{ maxWidth: '100%', marginTop: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action End */}
    </>
  );
};

export default Home;