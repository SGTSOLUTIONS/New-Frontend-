import React from 'react';

// Import Google Fonts from @fontsource
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';


// Import Font Awesome from npm
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import all images
import slider1 from '../assets/images/slider/1_4.jpg';
import slider2 from '../assets/images/slider/1_5.png';
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
import testimonial1 from '../assets/images/home1/t1.png';
import testimonial2 from '../assets/images/home1/t2.png';
import blog1 from '../assets/images/blog/1.jpg';
import blog2 from '../assets/images/blog/2.jpg';
import blog3 from '../assets/images/blog/3.jpg';
import blogAuthor1 from '../assets/images/blog/a1.jpg';
import blogAuthor2 from '../assets/images/blog/a2.jpg';
import blogAuthor3 from '../assets/images/blog/a3.jpg';
import ctaImg1 from '../assets/images/home1/3.png';
import ctaImg2 from '../assets/images/home1/4.png';


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
      font-size: 14px !important;
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
`;

const Home = () => {
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
                    <span className="bg">Consulting Business</span>
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
                    Start Your Upcoming Modern <span style={{ color: '#bb0b0b' }}>Consulting</span>
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
                    Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven. Pellentesque pulvinar elementum habitant morbi tristique.
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
                      <span className="bp-text">Get Services</span>
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
                    <span className="bg">Consulting Business</span>
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
                    Start Your Upcoming Modern <span style={{ color: '#bb0b0b' }}>Consulting</span>
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
                    Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven. Pellentesque pulvinar elementum habitant morbi tristique.
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
                      <span className="bp-text">Get Services</span>
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
              <h2 className="secTitle">Core Level Values and <br /> Mazaing Services.</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="service_section_01 pb-5">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service_item_01">
                <div className="siThumb">
                  <img src={service1} alt="" className="img-fluid" />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className="fas fa-key"></i>
                  </div>
                  <h3><a href="single-service.html">Advanced Analytic</a></h3>
                  <p>Move with a great</p>
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
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3><a href="single-service.html">Corporate Finance</a></h3>
                  <p>Move with a great</p>
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
                  <h3><a href="single-service.html">Business Consultation</a></h3>
                  <p>Move with a great</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <div className="qu_link">Stop wasting time and Money on Finance. <a href="javascript:void(0);">Explore Company</a></div>
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
              <div className="subTitle">Just a Consultancy</div>
              <h2 className="secTitle">We are Certified Financial Experts</h2>
              <p>
                We craft unique digital experiences. With more than 7<br /> years of expertise we design.
              </p>
              <ul className="listItem withbg">
                <li><span><i className="twi-check-circle"></i>Innovative Approach Consultancy</span></li>
                <li><span><i className="twi-check-circle"></i>Flexibile Involvement Consultancy</span></li>
                <li><span><i className="twi-check-circle"></i>Personal Manager Consultancy</span></li>
              </ul>
              <a className="berpo_btn" href="contact.html">
                <span className="bp-shape"></span>
                <span className="bp-shape"></span>
                <span className="bp-shape"></span>
                <span className="bp-shape"></span>
                <span className="bp-text">Contact Now</span>
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
                  <h2><span className="counter">80</span><sup>+</sup></h2>
                  <h5>Partners in world wide</h5>
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
      <section className="videoSection01 py-5" style={{ background: '#f8f9fa' }}>
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">We Have added a new exciting feature in v2.0</div>
              <h2 className="secTitle">Organizations Realize the Benefits <br /> Forming Work Teams.</h2>
              <a href="https://player.vimeo.com/video/213907368?h=3685456d6c" className="popup_video" style={{
                display: 'inline-block',
                width: '80px',
                height: '80px',
                lineHeight: '80px',
                background: '#bb0b0b',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '30px',
                marginTop: '30px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}><i className="twi-play"></i></a>
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
                  <a id="business-tab" data-toggle="tab" href="#business" role="tab" aria-controls="business" aria-selected="false" className="nav-link">Business Growth</a>
                </li>
                <li role="presentation" className="nav-item">
                  <a className="nav-link active" id="financial-tab" data-toggle="tab" href="#financial" role="tab" aria-controls="financial" aria-selected="true">Financial Advice</a>
                </li>
                <li role="presentation" className="nav-item">
                  <a id="global-tab" data-toggle="tab" href="#global" role="tab" aria-controls="global" aria-selected="false" className="nav-link">Global Solutions</a>
                </li>
              </ul>
              <div className="tab-content mt-4">
                <div className="tab-pane fade animated slideInUp2" id="business" role="tabpanel" aria-labelledby="business-tab">
                  <div className="beproTabCon">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2 className="secTitle">Digital Marketing Allows Big Companies</h2>
                        <p>
                          We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.
                        </p>
                        <a className="berpo_btn" href="contact.html">
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-text">Contact Us</span>
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
                        <h2 className="secTitle">Digital Marketing Allows Big Companies</h2>
                        <p>
                          We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.
                        </p>
                        <a className="berpo_btn" href="contact.html">
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-text">Contact Us</span>
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
                        <h2 className="secTitle">Digital Marketing Allows Big Companies</h2>
                        <p>
                          We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.
                        </p>
                        <a className="berpo_btn" href="contact.html">
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-shape"></span>
                          <span className="bp-text">Contact Us</span>
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
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Arnika Sorkar</a></h3>
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
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Georgie Haynes</a></h3>
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
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Jizz Merkel</a></h3>
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
                <h3 className="mt-3"><a href="single-team.html" style={{ color: '#333', textDecoration: 'none' }}>Arnika Sorkar</a></h3>
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
              <div className="subTitle">Faqs & testimonial</div>
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
                        <i>1.</i> Wte Have added a new exciting feature in v2.0
                        <span></span>
                      </button>
                    </h2>
                  </div>
                  <div id="ma_collapes_01" className="collapse" aria-labelledby="ma_ac_01" data-parent="#befAccordion01">
                    <div className="card-body">
                      We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="ma_ac_02">
                    <h2 className="mb-0">
                      <button type="button" data-toggle="collapse" data-target="#ma_collapes_02" data-aria-expanded="true" data-aria-controls="ma_collapes_02">
                        <i>2.</i> how Consultancy Experts Work?
                        <span></span>
                      </button>
                    </h2>
                  </div>
                  <div id="ma_collapes_02" className="collapse show" aria-labelledby="ma_ac_02" data-parent="#befAccordion01">
                    <div className="card-body">
                      We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="ma_ac_03">
                    <h2 className="mb-0">
                      <button className="collapsed" type="button" data-toggle="collapse" data-target="#ma_collapes_03" data-aria-expanded="false" data-aria-controls="ma_collapes_03">
                        <i>3.</i> Wte Have added a new exciting feature in v2.0
                        <span></span>
                      </button>
                    </h2>
                  </div>
                  <div id="ma_collapes_03" className="collapse" aria-labelledby="ma_ac_03" data-parent="#befAccordion01">
                    <div className="card-body">
                      We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers
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
                  <div className="carousel-item active">
                    <div className="testiItem01" style={{ background: '#fff', padding: '30px', borderRadius: '10px' }}>
                      <h5>Provide Awesome Customer</h5>
                      <p className="quotation">
                        We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.
                      </p>
                      <div className="ts_author">
                        <img src={testimonial1} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                          <h5>Matt Sanchzi</h5>
                          <span>ThemeForest Exclusive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testiItem01" style={{ background: '#fff', padding: '30px', borderRadius: '10px' }}>
                      <h5>Provide Awesome Customer</h5>
                      <p className="quotation">
                        We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites,  We are committed to providing our customers with exceptional service.
                      </p>
                      <div className="ts_author">
                        <img src={testimonial2} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                          <h5>Mark Smith</h5>
                          <span>Envato Author</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators" style={{ position: 'relative', marginTop: '20px' }}>
                  <li data-target="#testimonialCarousel" data-slide-to="0" className="active" style={{ width: '12px', height: '12px', borderRadius: '50%' }}></li>
                  <li data-target="#testimonialCarousel" data-slide-to="1" style={{ width: '12px', height: '12px', borderRadius: '50%' }}></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose End */}

      {/* Blog Start */}
      <section className="blogSectiont01 py-5">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">Daily News</div>
              <h2 className="secTitle">Latest News</h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="blogItem01">
                <div className="blogThumb">
                  <img src={blog1} alt="" className="img-fluid" />
                </div>
                <div className="blogContent">
                  <a className="bmeta" href="single-blog.html"><i className="twi-calendar-alt1"></i>20 March, 2021</a>
                  <h3><a href="single-blog.html">Italic Mountains, she had a last view back</a></h3>
                  <div className="bpcon">
                    <a className="author" href="blog1.html"><img src={blogAuthor1} alt="" />Keesler Smith</a>
                    <a href="single-blog.html"><i className="twi-comment2"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blogItem01">
                <div className="blogThumb">
                  <img src={blog2} alt="" className="img-fluid" />
                </div>
                <div className="blogContent">
                  <a className="bmeta" href="single-blog.html"><i className="twi-calendar-alt1"></i>20 March, 2021</a>
                  <h3><a href="single-blog.html">Styles come and go. Design language not a style.</a></h3>
                  <div className="bpcon">
                    <a className="author" href="blog1.html"><img src={blogAuthor2} alt="" />Keesler Smith</a>
                    <a href="single-blog.html"><i className="twi-comment2"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blogItem01">
                <div className="blogThumb">
                  <img src={blog3} alt="" className="img-fluid" />
                </div>
                <div className="blogContent">
                  <a className="bmeta" href="single-blog.html"><i className="twi-calendar-alt1"></i>20 March, 2021</a>
                  <h3><a href="single-blog.html">Dharma Home Suites at Novia offers fully</a></h3>
                  <div className="bpcon">
                    <a className="author" href="blog1.html"><img src={blogAuthor3} alt="" />Keesler Smith</a>
                    <a href="single-blog.html"><i className="twi-comment2"></i></a>
                  </div>
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
                <h4><span style={{ color: '#bb0b0b' }}>We're</span>Creative</h4>
                <h2 style={{ fontSize: '48px', fontWeight: 700 }}>Business</h2>
                <h3 style={{ fontSize: '36px', fontWeight: 700 }}><span style={{ color: '#bb0b0b' }}>Solutions</span> Agency</h3>
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