import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import Google Fonts from @fontsource
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';

// Import Font Awesome from npm
import '@fortawesome/fontawesome-free/css/all.min.css';

import clientLogo1 from "../assets/images/client-logo/1.png";
import clientLogo2 from "../assets/images/client-logo/2.png";
import clientLogo3 from "../assets/images/client-logo/3.png";
import clientLogo4 from "../assets/images/client-logo/4.png";

import ctaImg1 from "../assets/images/home1/3.png";
import ctaImg2 from "../assets/images/home1/4.png";

import servicesBg from "../assets/images/service/services-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [feedback, setFeedback] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setFeedback('⚠️ Please fill all required fields.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      return;
    }

    if (!email.includes('@')) {
      setFeedback('📧 Please enter a valid email address.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      return;
    }

    setFeedback(`✅ Thanks ${name}! Your message has been sent. Our team will respond within 24 hours.`);
    setShowToast(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    setTimeout(() => {
      setShowToast(false);
      setFeedback('');
    }, 4000);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <style>{`
        /* ===== GLOBAL RESET & BASE ===== */
        .contact-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .contact-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-page img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        .subTitle {
          font-size: 17px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #bb0b0b;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .secTitle {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .secTitle span {
          color: #bb0b0b;
        }

        /* ===== BUTTONS ===== */
        .berpo_btn {
          display: inline-block;
          background: #bb0b0b;
          color: #ffffff;
          font-weight: 600;
          padding: 1px 38px;
          border-radius: 50px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #fff;
        }

        .berpo_btn-outline {
          display: inline-block;
          background: transparent;
          color: #bb0b0b;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 50px;
          font-size: 15px;
          border: 2px solid #bb0b0b;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .berpo_btn-outline:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f1f1f1 0%, #1a2a3a 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${servicesBg}) center/cover;
          opacity: 1;
          z-index: 0;
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 64px;
          color: #bb0b0b;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: #bb0b0b;
        }

        .hero-description {
          font-size: 18px;
          color: #b0b0c8;
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #f8f9fc;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
        }

        .text-white .secTitle {
          color: #ffffff;
        }

        .mt-5 {
          margin-top: 40px;
        }

        .mb-4 {
          margin-bottom: 30px;
        }

        /* ===== CONTACT GRID ===== */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }

        .contact-info-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .contact-info-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .contact-info-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
          padding: 8px 0;
          transition: transform 0.2s ease;
        }

        .contact-detail-item:hover {
          transform: translateX(6px);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: #bb0b0b10;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #bb0b0b;
          font-size: 18px;
          flex-shrink: 0;
          transition: 0.3s;
        }

        .contact-detail-item:hover .contact-icon {
          background: #bb0b0b;
          color: #ffffff;
        }

        .contact-detail-item .contact-text {
          font-size: 15px;
          color: #4a4a62;
          line-height: 1.6;
        }

        .contact-detail-item .contact-text strong {
          color: #0a1922;
          font-weight: 600;
        }

        .contact-detail-item a {
          color: #4a4a62;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-detail-item a:hover {
          color: #bb0b0b;
        }

        .business-hours {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #f0f0f5;
        }

        .business-hours h4 {
          font-size: 16px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 12px;
        }

        .business-hours p {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #4a4a62;
          padding: 4px 0;
        }

        .business-hours p span:last-child {
          font-weight: 600;
          color: #0a1922;
        }

        .social-links-contact {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-links-contact a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 16px;
          transition: 0.3s;
        }

        .social-links-contact a:hover {
          background: #bb0b0b;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* ===== MAP CARD ===== */
        .map-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .map-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .map-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .map-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .map-preview {
          background: #f8f9fc;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 2px solid #f0f0f5;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-preview:hover {
          border-color: #bb0b0b;
          transform: scale(1.01);
        }

        .map-placeholder {
          background: linear-gradient(135deg, #f0f0f5, #e8e8f0);
          padding: 60px 20px;
          text-align: center;
        }

        .map-placeholder i {
          font-size: 48px;
          color: #bb0b0b;
          margin-bottom: 12px;
        }

        .map-placeholder p {
          font-weight: 600;
          color: #0a1922;
          margin-top: 8px;
        }

        .map-placeholder .address-text {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 400;
          margin-top: 4px;
        }

        .google-map-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #bb0b0b;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .google-map-btn:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #ffffff;
        }

        .map-directions-note {
          font-size: 13px;
          color: #7a7a92;
          margin-top: 12px;
          text-align: center;
        }

        .map-directions-note i {
          color: #bb0b0b;
          margin-right: 6px;
        }

        /* ===== CONTACT FORM ===== */
        .contact-form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 35px;
          margin-top: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f5;
          transition: all 0.3s ease;
        }

        .contact-form-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.08);
          border-color: #bb0b0b30;
        }

        .contact-form-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a1922;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }

        .contact-form-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #bb0b0b;
          border-radius: 3px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          color: #0a1922;
          margin-bottom: 6px;
        }

        .form-group label .required {
          color: #bb0b0b;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 18px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s ease;
          background: #fafafc;
          color: #1a1a2e;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.08);
          background: #ffffff;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%235a5a72'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
          cursor: pointer;
        }

        .form-group textarea::placeholder,
        .form-group input::placeholder {
          color: #9a9aae;
        }

        .btn-submit {
          background: #bb0b0b;
          color: #ffffff;
          padding: 14px 38px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-submit:hover {
          background: #9e0909;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(187, 11, 11, 0.25);
          color: #ffffff;
        }

        /* ===== CLIENTS ===== */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
          
        
        }

        .client-logo-item {
          opacity: 1;
          transition: 0.3s;
          filter: grayscale(0.3);
          text-align:center;
          margin-left:65px;
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
          margin-left:110px;
          
          
        }

        /* ===== CTA ===== */
        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 700;
        }

        .cta-content h4 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cta-content .highlight {
          color: #bb0b0b;
        }

        .cta-images {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cta-images img {
          border-radius: 16px;
          width: 100%;
        }

        /* ===== TOAST ===== */
        .toast-message {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #0a1922;
          color: #ffffff;
          padding: 16px 28px;
          border-radius: 12px;
          z-index: 9999;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 90%;
          font-weight: 500;
          border-left: 4px solid #bb0b0b;
        }

        .toast-message.show {
          opacity: 1;
          transform: translateY(0);
        }

        .toast-message.success {
          border-left-color: #28a745;
        }

        .toast-message.error {
          border-left-color: #dc3545;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .secTitle {
            font-size: 32px;
          }
          .hero-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          .section-padding {
            padding: 50px 0;
          }
          .secTitle {
            font-size: 26px;
          }
          .subTitle {
            font-size: 11px;
            letter-spacing: 1.8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-description {
            font-size: 16px;
          }
          .hero-section {
            padding: 80px 0 60px;
          }
          .contact-info-card,
          .map-card,
          .contact-form-card {
            padding: 24px 20px;
          }
          .contact-info-card h3,
          .map-card h3,
          .contact-form-card h3 {
            font-size: 20px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .cta-content h2 {
            font-size: 34px;
          }
          .cta-content h3 {
            font-size: 26px;
          }
          .cta-content h4 {
            font-size: 18px;
          }
          .berpo_btn {
            padding: 12px 28px;
            font-size: 14px;
          }
          .business-hours p {
            flex-direction: column;
            gap: 2px;
          }
          .toast-message {
            bottom: 20px;
            right: 20px;
            left: 20px;
            max-width: 100%;
            padding: 14px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .secTitle {
            font-size: 22px;
          }
          .hero-title {
            font-size: 24px;
          }
          .contact-detail-item {
            gap: 12px;
          }
          .contact-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 15px;
          }
          .contact-detail-item .contact-text {
            font-size: 14px;
          }
          .map-placeholder {
            padding: 40px 16px;
          }
          .map-placeholder i {
            font-size: 36px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .btn-submit {
            padding: 12px 24px;
            font-size: 14px;
          }
          .google-map-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>

      {/* ===== TOAST ===== */}
      <div className={`toast-message ${showToast ? 'show' : ''} ${feedback.includes('✅') ? 'success' : feedback.includes('⚠️') || feedback.includes('📧') ? 'error' : ''}`}>
        {feedback}
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center">
            <div className="hero-icon">
              <br />

            </div>
            <h1 className="hero-title mt-5">
              Get In <span>Touch</span>
            </h1>
            <p className="hero-description">
              We're here to bring your geospatial vision to life — reach out anytime.
              Whether you have a project in mind or just want to learn more, we'd love to hear from you.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact-form" className="berpo_btn">
                Send a Message <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </a>
              <a href="#location" className="berpo_btn-outline">
                Find Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Contact Us</div>
            <h2 className="secTitle">
              Let's <span>Connect</span>
            </h2>
            <p style={{ color: '#5a5a72', maxWidth: '700px', margin: '0 auto' }}>
              Have a question, project idea, or partnership opportunity? Reach out to us using the form below
              or through our contact details. We respond within 24 hours.
            </p>
          </div>

          {/* ===== CONTACT GRID ===== */}
          <div className="contact-grid">
            {/* ===== CONTACT INFO ===== */}
            <div className="contact-info-card" id="location">
              <h3>Contact Information</h3>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <strong>Office Address</strong><br />
                  New 533, Old 124, MKN Rd, First floor,<br />
                  Alandur, Chennai, Tamil Nadu 600016
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <strong>Phone</strong><br />
                  <a href="tel:+918903138792">+91 89031 38792</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <strong>Email</strong><br />
                  <a href="mailto:sgtsolutionsinfo@gmail.com">sgtsolutionsinfo@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="contact-text">
                  <strong>Website</strong><br />
                  <a href="#">www.sgtsolutions.in</a>
                </div>
              </div>

              <div className="business-hours">
                <h4><i className="fas fa-clock" style={{ color: '#bb0b0b', marginRight: '8px' }}></i> Business Hours</h4>
                <p>
                  <span>Monday - Saturday</span>
                  <span>9:00 AM – 5:00 PM</span>
                </p>
                <p>
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>

              <div className="social-links-contact">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* ===== MAP CARD ===== */}
            <div className="map-card">
              <h3><i className="fas fa-map-pin" style={{ color: '#bb0b0b', marginRight: '8px' }}></i> Our Location</h3>

              <div
                className="map-preview"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=124+MKN+Rd+Ramapuram+Alandur+Chennai', '_blank')}
              >
                <div className="map-placeholder">
                  <i className="fas fa-map-marked-alt"></i>
                  <p>SGT Solutions, Alandur</p>
                  <div className="address-text">
                    <i className="fas fa-location-dot" style={{ color: '#bb0b0b', marginRight: '6px' }}></i>
                    124, MKN Rd, Ramapuram, Alandur, Chennai
                  </div>
                </div>
              </div>

              <button
                className="google-map-btn"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=124+MKN+Rd+Ramapuram+Alandur+Chennai', '_blank')}
              >
                <i className="fab fa-google"></i> Open in Google Maps
              </button>

              <p className="map-directions-note">
                <i className="fas fa-directions"></i> Click on the map or button for directions
              </p>
            </div>
          </div>

          {/* ===== CONTACT FORM ===== */}
          <div className="contact-form-card" id="contact-form">
            <h3><i className="fas fa-paper-plane" style={{ color: '#bb0b0b', marginRight: '8px' }}></i> Send us a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="web-gis">Web GIS Development</option>
                    <option value="mobile-gis">Mobile GIS App</option>
                    <option value="geo-property">Spatial Revenue Intelligence System</option>
                    <option value="lidar">LiDAR / Drone Survey</option>
                    <option value="photogrammetry">Photogrammetry</option>
                    <option value="2d-mapping">2D Mapping</option>
                    <option value="consultancy">Consultancy Services</option>
                    <option value="web-dev">Website Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or query..."
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                Send Inquiry <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Trusted Partners</div>
            <h2 className="secTitle">Our <span>Clients</span></h2>
          </div>
          <br />
          <div className="row">

            <div className="col-md-4">
              <div className="client-logo-item">
                <img src={clientLogo2} alt="Client" />
                <p>Coimbatore Municipal Corporation</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="client-logo-item">
                <img src={clientLogo3} alt="Client" />
                <p>Marutham Foundation</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="client-logo-item">
                <img src={clientLogo4} alt="Client" />
                <p>Chennai Metro Water Supply</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-content">
              <h4>We're <span className="highlight">Creative</span></h4>
              <h2>Geospatial</h2>
              <h3><span className="highlight">Solutions</span> Agency</h3>
              <p style={{ color: '#b0b0c8', margin: '16px 0 24px', maxWidth: '90%' }}>
                Ready to transform your ideas into reality? Let's start a conversation today.
              </p>
              <a href="#contact-form" className="berpo_btn">
                Start a Project
              </a>
            </div>
            <div className="cta-images">
              <img src={ctaImg1} alt="CTA" />
              <img src={ctaImg2} alt="CTA" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;