import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GeoProperty = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', org: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, org } = formData;
    if (!name || !email) {
      setFeedback('❌ Please provide name and email.');
      return;
    }
    if (!email.includes('@')) {
      setFeedback('❌ Valid email required.');
      return;
    }
    setFeedback(`✅ Thank you ${name}! A SRIS specialist will contact ${email} within 24 hours to discuss deployment for ${org || 'your organization'}.`);
    setFormData({ name: '', email: '', phone: '', org: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 3000);
  };

  const features = [
    { icon: 'fa-building', title: 'GIS-based Property & Asset Mapping', desc: 'Geo-referenced spatial data for buildings, roads, water connections, and tax properties with centimeter-level accuracy.' },
    { icon: 'fa-sync-alt', title: 'Real-time Data Synchronization', desc: 'Seamless sync between field surveys and central database — live updates for administrators.' },
    { icon: 'fa-mobile-alt', title: 'Mobile Field Collection & Verification', desc: 'Field teams collect, validate, and update asset data using offline-capable mobile GIS apps.' },
    { icon: 'fa-chart-simple', title: 'Property Tax Assessment & Monitoring', desc: 'Spatial intelligence for accurate tax calculation, revenue leakage detection, and trend analysis.' },
    { icon: 'fa-search-location', title: 'Detection of Unassessed Properties', desc: 'AI-assisted detection of unassessed, under-assessed, and unauthorized properties using imagery & algorithms.' },
    { icon: 'fa-tint', title: 'Water Connection & Revenue Tracking', desc: 'Map every water connection, track billing status, and identify defaulters via spatial dashboards.' },
    { icon: 'fa-chart-pie', title: 'Professional Tax Integration', desc: 'Unified revenue monitoring for commercial establishments by merging Professional Tax with Property Tax database.' },
    { icon: 'fa-road', title: 'Public Asset Inventory', desc: 'Complete inventory of roads, drainage networks, streetlights, and public infrastructure with condition assessment.' },
    { icon: 'fa-chart-line', title: 'Ward & Zone Revenue Dashboards', desc: 'Interactive dashboards for ward-wise and zone-wise revenue analysis, collection efficiency, and trend insights.' },
    { icon: 'fa-plug', title: 'Legacy System Integration', desc: 'Seamless integration with existing municipal databases, e-Governance systems, and third-party ERP platforms.' },
    { icon: 'fa-satellite-dish', title: 'Satellite & Drone Integration', desc: 'High-res satellite imagery and drone survey integration for accurate asset identification and change detection.' },
    { icon: 'fa-chart-bar', title: 'Automated MIS & Reporting', desc: 'Automated reports, customizable MIS dashboards, and scheduled notifications for administrators.' },
    { icon: 'fa-chalkboard-user', title: 'Spatial Analytics & Thematic Mapping', desc: 'Decision-support tools using heatmaps, cluster analysis, and thematic layers for revenue forecasting.' },
    { icon: 'fa-lock', title: 'Role-Based Access Control', desc: 'Secure data management with granular permissions — field staff, inspectors, tax officers, and administrators.' },
    { icon: 'fa-cloud-upload-alt', title: 'Cloud-Enabled Central Repository', desc: 'Multi-user access, centralized data lake, and high availability via cloud infrastructure.' }
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
          max-width: 1280px;
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
          background-image: url('/assets/images/service/tax2.jpg');
          background-repeat: no-repeat;
          background-position: center 35%;
          background-size: cover;
        }

        .service-page-wrapper .service-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(5, 5, 5, 0.6);
          z-index: 1;
        }

        .service-page-wrapper .service-hero .container {
          position: relative;
          z-index: 2;
        }

        .service-page-wrapper .service-hero i {
          font-size: 4rem;
          background: linear-gradient(135deg, #ffffff, #f3e8ff);
          color: #40ed3a;
          padding: 0.8rem;
          border-radius: 60px;
          margin-bottom: 1rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          display: inline-block;
          transition: 0.2s;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .service-page-wrapper .service-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff, #44ff0b, #ffffff, #30f116);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
          padding: 0 0.2rem;
        }

        .service-page-wrapper .service-hero h1::after {
          content: '';
          display: block;
          width: 90px;
          height: 4px;
          background: linear-gradient(90deg, #22d3ee, #ffffff);
          margin: 0.6rem auto 0;
          border-radius: 4px;
        }

        .service-page-wrapper .service-hero p {
          font-size: 1.2rem;
          max-width: 900px;
          margin: 1.4rem auto 0;
          background: rgb(64, 163, 7);
          backdrop-filter: blur(4px);
          padding: 1rem 2rem;
          border-radius: 60px;
          font-weight: 500;
          color: #ffffff;
          border-left: 4px solid #184d03;
          border-right: 4px solid #184d03;
          line-height: 1.6;
        }

        .service-page-wrapper .service-content {
          padding: 4rem 0;
        }

        .service-page-wrapper .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          border-left: 5px solid #0891b2;
          padding-left: 1rem;
        }

        .service-page-wrapper .section-subtitle {
          font-size: 1.1rem;
          color: #334155;
          margin-bottom: 2rem;
        }

        .service-page-wrapper .lead-text {
          font-size: 1.2rem;
          color: #334155;
          margin: 1.5rem 0 2rem;
          max-width: 85%;
        }

        .service-page-wrapper .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.8rem;
          margin: 3rem 0;
        }

        .service-page-wrapper .feature-card {
          background: white;
          border-radius: 28px;
          padding: 1.8rem;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
        }

        .service-page-wrapper .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
          border-color: #67e8f9;
        }

        .service-page-wrapper .feature-card i {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #0e7490, #22d3ee);
          -webkit-background-clip: text;
          background-clip: text;
          color: #0891b2;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .service-page-wrapper .feature-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .service-page-wrapper .feature-card p {
          color: #475569;
          line-height: 1.5;
        }

        .service-page-wrapper .btn-primary {
          background: linear-gradient(100deg, #0e7490, #0891b2);
          color: white;
          border: none;
          padding: 0.9rem 2rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1rem;
          transition: 0.2s;
          box-shadow: 0 5px 12px rgba(8, 145, 178, 0.3);
        }

        .service-page-wrapper .btn-primary:hover {
          background: linear-gradient(100deg, #0a5c73, #067a96);
          transform: translateY(-2px);
        }

        .service-page-wrapper .btn-outline {
          background: transparent;
          border: 2px solid #0891b2;
          color: #0891b2;
          padding: 0.7rem 1.5rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        .service-page-wrapper .btn-outline:hover {
          background: #0891b2;
          color: white;
        }

        .service-page-wrapper .cta-center {
          text-align: center;
          margin: 3rem 0 1rem;
        }

        .service-page-wrapper hr {
          margin: 2rem 0;
          border: none;
          height: 2px;
          background: linear-gradient(90deg, #e2e8f0, #67e8f9, #e2e8f0);
        }

        .service-page-wrapper .modal-overlay {
          display: ${showModal ? 'flex' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .service-page-wrapper .modal-content {
          background: white;
          max-width: 500px;
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
          border-radius: 24px;
          resize: vertical;
        }

        .service-page-wrapper .modal-content .btn-submit {
          background: #0891b2;
          color: white;
          border: none;
          padding: 0.8rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          margin-top: 0.5rem;
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
          width: 100%;
        }

        .service-page-wrapper .feedback {
          font-size: 0.8rem;
          margin-top: 0.8rem;
          color: #0891b2;
        }

        @media (max-width: 768px) {
          .service-page-wrapper .container {
            padding: 0 1.25rem;
          }
          .service-page-wrapper .service-hero h1 {
            font-size: 2rem;
          }
          .service-page-wrapper .service-hero p {
            font-size: 1rem;
            padding: 0.8rem 1.2rem;
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
          <i className="fas fa-chart-line"></i>
          <h1>Spatial Revenue Intelligence System</h1>
          <p>The Spatial Revenue Intelligent System (SRIS) is a smart digital Web GIS platform developed for efficient mapping and management of municipal properties. It enables real-time visualization, monitoring, and spatial analysis of assets such as buildings, roads, water connections, tax properties, Professional Tax and UGD through an interactive map-based system.</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Intelligent GIS for Urban Governance</h2>
            <p className="lead-text">SRIS empowers local bodies with a unified geospatial framework for asset inventory, revenue monitoring, and smart decision-making. From property tax to underground drainage, every asset is mapped, tracked, and analyzed.</p>
          </div>

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
              <i className="fas fa-paper-plane"></i> Request SRIS Demo
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#4b5563' }}>Transform your municipality's revenue management with spatial intelligence.</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-chart-line" style={{ fontSize: '2.5rem', color: '#0891b2' }}></i>
          <h3 style={{ margin: '1rem 0 0.5rem' }}>SRIS Implementation Inquiry</h3>
          <p style={{ marginBottom: '1rem' }}>Tell us about your municipality, number of properties, and revenue management goals.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Full Name *" value={formData.name} onChange={handleInputChange} required />
            <input type="email" id="email" placeholder="Email Address *" value={formData.email} onChange={handleInputChange} required />
            <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
            <input type="text" id="org" placeholder="Municipality / Organization Name" value={formData.org} onChange={handleInputChange} />
            <textarea id="message" rows="2" placeholder="Number of wards / properties / specific requirements..." value={formData.message} onChange={handleInputChange} />
            <button type="submit" className="btn-submit">Submit Inquiry</button>
          </form>
          <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
          <p className="feedback">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default GeoProperty;