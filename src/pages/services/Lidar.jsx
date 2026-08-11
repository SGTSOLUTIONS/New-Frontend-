import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lidar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email) {
      setFeedback('❌ Please provide name and email.');
      return;
    }
    if (!email.includes('@')) {
      setFeedback('❌ Valid email required.');
      return;
    }
    setFeedback(`✅ Thanks ${name}! A LiDAR specialist will contact ${email} within 24h with sample datasets and a custom quote.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  const features = [
    { icon: 'fa-drone', title: 'UAV LiDAR Mapping', desc: 'Drone-mounted LiDAR for large-area topographic surveys, corridor mapping, and stockpile volumetrics. Achieve 5–10 cm vertical accuracy even under forest canopy.' },
    { icon: 'fa-car', title: 'Mobile LiDAR (MLS)', desc: 'Vehicle-based scanning for roads, railways, and urban corridors. Capture linear assets at highway speeds with cm-level relative accuracy.' },
    { icon: 'fa-building', title: 'Terrestrial Laser Scanning', desc: 'Stationary TLS for heritage documentation, as-built BIM, industrial plants, and forensic analysis. Sub-centimeter detail from multiple scan positions.' },
    { icon: 'fa-tree', title: 'Forestry & Vegetation Analysis', desc: 'Individual tree segmentation, canopy height models, biomass estimation, and fuel load mapping — essential for timber cruising and wildfire risk.' },
    { icon: 'fa-water', title: 'Topobathymetric LiDAR', desc: 'Green-wavelength LiDAR penetrates shallow water for riverbed, coastal, and reservoir mapping. Simultaneous land and submerged topography.' },
    { icon: 'fa-chart-line', title: 'Change Detection & Deformation', desc: 'Multi-temporal point cloud comparison for landslide monitoring, mine slope stability, and structural deflection analysis.' }
  ];

  return (
    <div className="service-page-wrapper">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

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
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(2px);
          background: rgba(255, 255, 255, 0.95);
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
          background-image: url('/assets/images/service/lidar.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .service-page-wrapper .service-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.6);
          z-index: 1;
        }

        .service-page-wrapper .service-hero .container {
          position: relative;
          z-index: 2;
        }

        .service-page-wrapper .service-hero i {
          font-size: 4rem;
          background: linear-gradient(135deg, #ffffff, #f3e8ff);
          color: #7c3aed;
          padding: 0.8rem;
          border-radius: 60px;
          margin-bottom: 1rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          display: inline-block;
          transition: 0.2s;
        }

        .service-page-wrapper .service-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #c4b5fd, #a78bfa, #8b5cf6, #7c3aed);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
          display: inline-block;
        }

        .service-page-wrapper .service-hero h1::after {
          content: '';
          display: block;
          width: 90px;
          height: 4px;
          background: linear-gradient(90deg, #a78bfa, #7c3aed);
          margin: 0.6rem auto 0;
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(124, 58, 237, 0.6);
        }

        .service-page-wrapper .service-hero p {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 1.4rem auto 0;
          background: rgba(81, 4, 126, 0.65);
          backdrop-filter: blur(4px);
          padding: 0.9rem 1.8rem;
          border-radius: 60px;
          font-weight: 500;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          border-left: 5px solid #a78bfa;
          border-right: 5px solid #a78bfa;
          display: inline-block;
          width: auto;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        .service-page-wrapper .service-hero p strong,
        .service-page-wrapper .service-hero p em {
          color: #d8b4fe;
          font-weight: 700;
        }

        .service-page-wrapper .service-content {
          padding: 4rem 0;
        }

        .service-page-wrapper .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          border-left: 5px solid #0c0c0c;
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
          background: rgb(47, 202, 230);
          border-radius: 28px;
          padding: 2rem 1.8rem;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #e9edf2;
        }

        .service-page-wrapper .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
          border-color: #c4b5fd;
        }

        .service-page-wrapper .feature-card i {
          font-size: 2.8rem;
          background: linear-gradient(135deg, #0a0a0a, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: #1b1b1b;
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
          background: linear-gradient(100deg, #7c3aed, #a78bfa);
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
          box-shadow: 0 5px 12px rgba(124, 58, 237, 0.3);
        }

        .service-page-wrapper .btn-primary:hover {
          background: linear-gradient(100deg, #6d28d9, #8b5cf6);
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
          background: linear-gradient(90deg, #e2e8f0, #c4b5fd, #e2e8f0);
        }

        .service-page-wrapper .modal-overlay {
          display: ${showModal ? 'flex' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
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
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.2);
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
          background: #7c3aed;
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
          color: #7c3aed;
        }

        @media (max-width: 768px) {
          .service-page-wrapper .container {
            padding: 0 1.25rem;
          }
          .service-page-wrapper .service-hero h1 {
            font-size: 2.2rem;
          }
          .service-page-wrapper .service-hero p {
            font-size: 1rem;
            padding: 0.7rem 1.2rem;
          }
          .service-page-wrapper .lead-text {
            max-width: 100%;
          }
          .service-page-wrapper .feature-card {
            padding: 1.5rem;
          }
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
          <i className="fas fa-cubes"></i>
          <h1>LiDAR • 3D Laser Scanning</h1>
          <p>Ultra-dense point clouds, vegetation penetration, and millimeter-accurate 3D models — drone, mobile, and terrestrial LiDAR for engineering, forestry, infrastructure, and digital twins.</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <h2 className="section-title">See Through Complexity, Capture Every Detail</h2>
          <p className="lead-text">LiDAR (Light Detection and Ranging) delivers millions of precise 3D points per second, penetrating dense vegetation and capturing bare earth, structures, and assets with unmatched accuracy. From aerial bathymetry to underground mine scanning, we transform raw point clouds into actionable intelligence.</p>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <i className={`fas ${feature.icon}`}></i>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <hr />

          <div className="cta-center">
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              <i className="fas fa-paper-plane"></i> Request LiDAR Consultation
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#4b5563' }}>From 10-hectare forest plots to 100km transmission lines — we deploy the right LiDAR platform for your accuracy and budget.</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-cubes" style={{ fontSize: '2.5rem', color: '#7c3aed' }}></i>
          <h3 style={{ margin: '1rem 0 0.5rem' }}>LiDAR Project Inquiry</h3>
          <p style={{ marginBottom: '1rem' }}>Tell us about your area, vegetation conditions, required accuracy, and deliverables.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" id="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
            <textarea id="message" placeholder="Project scope (size, location, canopy cover, required accuracy, point density)" rows="2" value={formData.message} onChange={handleInputChange} />
            <button type="submit" className="btn-submit">Send Request</button>
          </form>
          <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
          <p className="feedback">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default Lidar;