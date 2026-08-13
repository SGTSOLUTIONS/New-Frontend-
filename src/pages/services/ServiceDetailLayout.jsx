import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetailLayout = ({ 
  heroIcon, 
  heroTitle, 
  heroDescription, 
  sectionTitle, 
  leadText, 
  features, 
  ctaText, 
  ctaSubtext,
  modalTitle,
  modalDescription,
  handleSubmit,
  formData,
  handleInputChange,
  feedback,
  showModal,
  setShowModal,
  brandColor = '#2c6e9e',
  gradientColors = 'linear-gradient(100deg, #1e4a76, #2c6e9e)',
  iconBg = 'linear-gradient(135deg, #1e4a76, #4a8fc7)'
}) => {
  return (
    <div className="service-detail-page">
      <header>
        <div className="container">
          <Link to="/services" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Services
          </Link>
        </div>
      </header>

      <div className="service-hero">
        <div className="container">
          <i className={`fas ${heroIcon}`} style={{ color: brandColor }}></i>
          <h1 style={{ 
            background: `linear-gradient(135deg, #ffffff, ${brandColor})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>{heroTitle}</h1>
          <p>{heroDescription}</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="lead-text">{leadText}</p>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <i 
                  className={`fas ${feature.icon}`}
                  style={{
                    background: iconBg,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: brandColor
                  }}
                ></i>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <hr />

          <div className="cta-center">
            <button 
              className="btn-primary" 
              onClick={() => setShowModal(true)}
              style={{ background: gradientColors }}
            >
              <i className="fas fa-paper-plane"></i> {ctaText}
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#4b5563' }}>{ctaSubtext}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal-overlay" style={{ display: showModal ? 'flex' : 'none' }} onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <i className={`fas ${heroIcon}`} style={{ fontSize: '2.5rem', color: brandColor }}></i>
          <h3 style={{ margin: '1rem 0 0.5rem' }}>{modalTitle}</h3>
          <p style={{ marginBottom: '1rem' }}>{modalDescription}</p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" id="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
            <textarea id="message" placeholder="Project scope (size, location, required accuracy, deliverables)" rows="2" value={formData.message} onChange={handleInputChange} />
            <button 
              type="submit" 
              className="btn-submit"
              style={{ background: gradientColors }}
            >
              Send Request
            </button>
          </form>
          <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
          <p className="feedback" style={{ color: brandColor }}>{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;