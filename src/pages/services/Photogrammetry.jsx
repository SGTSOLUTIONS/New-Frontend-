import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Photogrammetry = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (!name || !email) {
      setFeedback('❌ Please provide name and email.');
      return;
    }
    if (!email.includes('@')) {
      setFeedback('❌ Valid email required.');
      return;
    }
    setFeedback(`✅ Thanks ${name}! A photogrammetry specialist will contact ${email} within 24h.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  return (
    <div className="service-page-wrapper">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .service-page-wrapper {
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: #f8fafc;
          color: #0f172a;
          line-height: 1.5;
        }
        .service-page-wrapper .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .service-page-wrapper header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(2px);
          background: rgba(255,255,255,0.95);
        }
        .service-page-wrapper .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.4rem;
          background: #eef2ff;
          color: #1e293b;
          text-decoration: none;
          border-radius: 40px;
          font-weight: 500;
          transition: 0.25s ease;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
        }
        .service-page-wrapper .back-button:hover {
          background: #cbd5e1;
          transform: translateX(-4px);
        }
        .service-page-wrapper .service-hero {
          padding: 7rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0f7b6e, #2aa58e);
        }
        .service-page-wrapper .service-hero .container {
          position: relative;
          z-index: 2;
        }
        .service-page-wrapper .service-hero i {
          font-size: 4rem;
          background: rgba(255,255,255,0.2);
          color: #ffffff;
          padding: 0.8rem;
          border-radius: 60px;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .service-page-wrapper .service-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          color: white;
        }
        .service-page-wrapper .service-hero h1::after {
          content: '';
          display: block;
          width: 90px;
          height: 4px;
          background: linear-gradient(90deg, #4BC0B0, #ffffff);
          margin: 0.6rem auto 0;
          border-radius: 4px;
        }
        .service-page-wrapper .service-hero p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 1.4rem auto 0;
          padding: 1rem 2rem;
          border-radius: 60px;
          color: #ffffff;
          line-height: 1.6;
          background: rgba(0,0,0,0.3);
        }
        .service-page-wrapper .service-content {
          padding: 4rem 0;
        }
        .service-page-wrapper .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          border-left: 5px solid #0f7b6e;
          padding-left: 1rem;
        }
        .service-page-wrapper .lead-text {
          font-size: 1.2rem;
          color: #334155;
          margin: 1.5rem 0 2rem;
          max-width: 85%;
        }
        .service-page-wrapper .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        .service-page-wrapper .feature-card {
          background: white;
          border-radius: 28px;
          padding: 2rem 1.8rem;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.03);
          border: 1px solid #e9edf2;
        }
        .service-page-wrapper .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0,0,0,0.1);
          border-color: #b8e0d9;
        }
        .service-page-wrapper .feature-card i {
          font-size: 2.8rem;
          color: #0f7b6e;
          margin-bottom: 1.2rem;
          display: inline-block;
        }
        .service-page-wrapper .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }
        .service-page-wrapper .feature-card p {
          color: #475569;
          line-height: 1.5;
        }
        .service-page-wrapper .btn-primary {
          background: linear-gradient(100deg, #0f7b6e, #2aa58e);
          color: white;
          border: none;
          padding: 0.9rem 2.2rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          transition: 0.2s;
          box-shadow: 0 5px 12px rgba(15,123,110,0.3);
        }
        .service-page-wrapper .btn-primary:hover {
          background: linear-gradient(100deg, #0a5c52, #1e8572);
          transform: scale(1.02);
        }
        .service-page-wrapper .cta-center {
          text-align: center;
          margin: 3rem 0 1rem;
        }
        .service-page-wrapper hr {
          margin: 2rem 0;
          border: none;
          height: 2px;
          background: linear-gradient(90deg, #e2e8f0, #8fcdc0, #e2e8f0);
        }
        .service-page-wrapper .modal-overlay {
          display: ${showModal ? 'flex' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .service-page-wrapper .modal-content {
          background: white;
          max-width: 450px;
          width: 90%;
          border-radius: 32px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 25px 40px rgba(0,0,0,0.2);
        }
        .service-page-wrapper .modal-content input,
        .service-page-wrapper .modal-content textarea {
          width: 100%;
          padding: 0.8rem;
          border-radius: 60px;
          border: 1px solid #cbd5e1;
          font-family: inherit;
          margin-bottom: 0.8rem;
        }
        .service-page-wrapper .modal-content textarea {
          border-radius: 28px;
          resize: vertical;
        }
        .service-page-wrapper .modal-content .btn-submit {
          background: #0f7b6e;
          color: white;
          border: none;
          padding: 0.7rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
        }
        .service-page-wrapper .modal-content .btn-close {
          background: #e2e8f0;
          color: #1e293b;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 40px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 0.5rem;
        }
        .service-page-wrapper .feedback {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: #0f7b6e;
        }
        @media (max-width: 768px) {
          .service-page-wrapper .container { padding: 0 1.25rem; }
          .service-page-wrapper .service-hero h1 { font-size: 2.2rem; }
          .service-page-wrapper .service-hero p { font-size: 1rem; padding: 0.7rem 1.2rem; }
          .service-page-wrapper .lead-text { max-width: 100%; }
          .service-page-wrapper .feature-card { padding: 1.5rem; }
        }
      `}</style>

      <header>
        <div className="container">
          <Link to="/services" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Services
          </Link>
        </div>
      </header>

      <div className="service-hero">
        <div className="container">
          <i className="fas fa-camera"></i>
          <h1>Photogrammetry</h1>
          <p>Turn millions of overlapping images into geospatially-accurate 3D models, orthomosaics, and digital surface models — drone, aerial, and terrestrial photogrammetry for any project scale.</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <h2 className="section-title">From Pixels to Precision Geospatial Data</h2>
          <p className="lead-text">Photogrammetry extracts 3D measurements and realistic textures from standard digital imagery. Our end-to-end pipeline delivers survey-grade outputs at a fraction of traditional surveying costs.</p>

          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-drone"></i>
              <h3>UAV / Drone Photogrammetry</h3>
              <p>High-resolution orthomosaics, DSMs, and 3D meshes from automated drone flights.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-plane"></i>
              <h3>Manned Aerial Mapping</h3>
              <p>Large-area coverage with fixed-wing aircraft and metric cameras.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Close-Range & Terrestrial</h3>
              <p>Facade mapping, heritage documentation, and crime scene reconstruction.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-map"></i>
              <h3>Orthomosaics & Orthophotos</h3>
              <p>Geometrically corrected, seamless image mosaics with true orthorectification.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-cubes"></i>
              <h3>3D Mesh & Textured Models</h3>
              <p>Photo-realistic 3D models for digital twins and volume visualization.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-chart-line"></i>
              <h3>Contour & Volumetric Analysis</h3>
              <p>Generate contours from photogrammetric DSMs and compute cut/fill volumes.</p>
            </div>
          </div>

          <hr />

          <div className="cta-center">
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              <i className="fas fa-paper-plane"></i> Request Photogrammetry Quote
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#4b5563' }}>From 5 to 500 field users — we equip your team with modern photogrammetry solutions.</p>
          </div>
        </div>
      </div>

      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-camera" style={{ fontSize: '2.5rem', color: '#0f7b6e' }}></i>
          <h3 style={{ margin: '1rem 0 0.5rem' }}>Photogrammetry Inquiry</h3>
          <p style={{ marginBottom: '1rem' }}>Tell us about your area, required accuracy, and deliverables.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" id="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
            <textarea id="message" placeholder="Project scope (size, location, required accuracy, deliverables)" rows="2" value={formData.message} onChange={handleInputChange} />
            <button type="submit" className="btn-submit">Send Request</button>
          </form>
          <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
          <p className="feedback">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default Photogrammetry;