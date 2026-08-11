import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Consultancy = () => {
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
    setFeedback(`✅ Thanks ${name}! A GIS consultant will contact ${email} within 24h.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2500);
  };

  const features = [
    { icon: 'fa-clipboard-list', title: 'GIS Strategy & Planning', desc: 'Develop a tailored GIS roadmap aligned with your organizational goals, data maturity, and budget. We help you prioritize investments and build a sustainable geospatial capability.' },
    { icon: 'fa-sync-alt', title: 'Workflow Automation', desc: 'Streamline repetitive GIS tasks, data processing pipelines, and quality control using Python, ModelBuilder, and FME. Reduce manual effort and eliminate errors.' },
    { icon: 'fa-database', title: 'Data Migration & Integration', desc: 'Consolidate legacy spatial data, CAD, and tabular records into a unified GIS database. Seamlessly integrate with your existing ERP, CRM, or asset management systems.' },
    { icon: 'fa-chart-line', title: 'Spatial Analysis & Modeling', desc: 'Advanced geospatial analysis — suitability modeling, network analysis, predictive analytics, and machine learning on spatial data to uncover insights.' },
    { icon: 'fa-users', title: 'Capacity Building & Training', desc: 'Empower your team with custom GIS training programs. From basic map creation to advanced geoprocessing and automation.' },
    { icon: 'fa-building', title: 'Implementation Support', desc: 'End-to-end support for GIS software deployment, enterprise geodatabase setup, and custom application development.' }
  ];

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
          background-image: url('/assets/images/service/consultancy.jpg');
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
          background: linear-gradient(135deg, #ffffff, #fff3e6);
          color: #e67e22;
          padding: 0.8rem;
          border-radius: 60px;
          margin-bottom: 1rem;
          box-shadow: 0 15px 30px rgba(0,0,0,0.4);
          display: inline-block;
          transition: 0.2s;
        }
        .service-page-wrapper .service-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff, #f7b731, #ffffff, #e67e22);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
        .service-page-wrapper .service-hero h1::after {
          content: '';
          display: block;
          width: 90px;
          height: 4px;
          background: linear-gradient(90deg, #f7b731, #e67e22);
          margin: 0.6rem auto 0;
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(230,126,34,0.7);
        }
        .service-page-wrapper .service-hero p {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 1.4rem auto 0;
          background: rgba(150, 80, 10, 0.7);
          backdrop-filter: blur(4px);
          padding: 0.9rem 1.8rem;
          border-radius: 60px;
          font-weight: 500;
          color: #FFF6ED;
          letter-spacing: 0.3px;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
          border-left: 5px solid #f7b731;
          border-right: 5px solid #f7b731;
          display: inline-block;
          width: auto;
          box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }
        .service-page-wrapper .service-content {
          padding: 4rem 0;
        }
        .service-page-wrapper .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          border-left: 5px solid #e67e22;
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
          background: #ffffff;
          border-radius: 28px;
          padding: 2rem 1.8rem;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.03);
          border: 1px solid #e9edf2;
        }
        .service-page-wrapper .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0,0,0,0.1);
          border-color: #f7d9b0;
        }
        .service-page-wrapper .feature-card i {
          font-size: 2.8rem;
          background: linear-gradient(135deg, #b85d0e, #f7b731);
          -webkit-background-clip: text;
          background-clip: text;
          color: #e67e22;
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
          background: linear-gradient(100deg, #b85d0e, #e67e22);
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
          box-shadow: 0 5px 12px rgba(230,126,34,0.3);
        }
        .service-page-wrapper .btn-primary:hover {
          background: linear-gradient(100deg, #9e4d0b, #c96e1a);
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
          background: linear-gradient(90deg, #e2e8f0, #f7d9b0, #e2e8f0);
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
          background: #e67e22;
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
          color: #b85d0e;
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
          <i className="fas fa-clipboard-list"></i>
          <h1>GIS Consultancy Services</h1>
          <p>Strategic GIS advisory, workflow automation, data integration, and capacity building — transform your geospatial capabilities with expert guidance.</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <h2 className="section-title">Your Trusted GIS Advisory Partner</h2>
          <p className="lead-text">Whether you're starting your GIS journey or optimizing an enterprise system, our consultants provide independent, vendor-neutral advice. We help you design, implement, and scale geospatial solutions that deliver measurable business value.</p>

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
              <i className="fas fa-paper-plane"></i> Request a Consultation
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#4b5563' }}>From strategy to implementation — we guide you every step of the way.</p>
          </div>
        </div>
      </div>

      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-clipboard-list" style={{ fontSize: '2.5rem', color: '#e67e22' }}></i>
          <h3 style={{ margin: '1rem 0 0.5rem' }}>Consultancy Inquiry</h3>
          <p style={{ marginBottom: '1rem' }}>Tell us about your GIS challenges, goals, and timeline.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" id="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
            <textarea id="message" placeholder="Describe your GIS needs, challenges, or goals" rows="2" value={formData.message} onChange={handleInputChange} />
            <button type="submit" className="btn-submit">Send Request</button>
          </form>
          <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
          <p className="feedback">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;