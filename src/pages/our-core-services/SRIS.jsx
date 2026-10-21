import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import '@fortawesome/fontawesome-free/css/all.min.css';

import achievementImg from '../../assets/images/home1/1.png';
import aboutImg from '../../assets/images/home1/about.png';
import blog1 from '../../assets/images/blog/1.jpg';
import blog2 from '../../assets/images/blog/2.jpg';
import blog3 from '../../assets/images/blog/3.jpg';
import ctaImg1 from '../../assets/images/home1/3.png';
import ctaImg2 from '../../assets/images/home1/4.png';
import servicesBg from '../../assets/images/Lidar/bg.png';

import srisFeature1 from '../../assets/images/Lidar/1.jpg';
import srisFeature2 from '../../assets/images/Lidar/2.jpg';
import srisFeature3 from '../../assets/images/Lidar/3.png';
import srisFeature4 from '../../assets/images/Lidar/4.jpg';
import srisFeature5 from '../../assets/images/Lidar/5.jpg';
import srisFeature6 from '../../assets/images/Lidar/6.png';

const srisFeatures = [
  { id: 1, icon: 'fa-map', title: 'Map Every Property', description: 'Visualise every property and assessment status on a single GIS view.', image: srisFeature1, link: '/services/sris/property-map' },
  { id: 2, icon: 'fa-search-dollar', title: 'Identify Unassessed Properties', description: 'Detect unassessed and under-assessed properties with AI-assisted spatial analysis.', image: srisFeature2, link: '/services/sris/unassessed' },
  { id: 3, icon: 'fa-exclamation-triangle', title: 'Detect Anomalies', description: 'Spot revenue leakage and irregularities in property tax, professional tax and trade licence data.', image: srisFeature3, link: '/services/sris/anomalies' },
  { id: 4, icon: 'fa-mobile-alt', title: 'Mobile Field Apps', description: 'Equip surveyors and bill collectors with mobile apps for verified, location-tagged data capture.', image: srisFeature4, link: '/services/sris/mobile' },
  { id: 5, icon: 'fa-chart-line', title: 'Live Revenue Dashboards', description: 'Track collections and performance on live revenue dashboards for commissioners and officers.', image: srisFeature5, link: '/services/sris/dashboards' },
  { id: 6, icon: 'fa-shield-alt', title: 'Transparent Governance', description: 'Support transparent, data-driven governance with a full audit trail and role-based access.', image: srisFeature6, link: '/services/sris/governance' },
];

const blogs = [
  { id: 1, title: 'How SRIS Helps Municipalities Recover Lost Revenue', date: '20 March, 2021', img: blog1 },
  { id: 2, title: 'Spatial Revenue Intelligence in Practice', date: '20 March, 2021', img: blog2 },
  { id: 3, title: 'Bridging GIS and Property Tax Administration', date: '20 March, 2021', img: blog3 },
];

const SRIS = () => {
  const [activeTab, setActiveTab] = useState('capabilities');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (!name || !email) return setFeedback('❌ Please provide name and email.');
    if (!email.includes('@')) return setFeedback('❌ Valid email required.');
    setFeedback(`✅ Thanks ${name}! An SRIS specialist will contact ${email} within 24h.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => { setShowModal(false); setFeedback(''); }, 2800);
  };

  return (
    <div className="service-page">
      <style>{`
        .service-page *{margin:0;padding:0;box-sizing:border-box}
        .service-page{font-family:'Poppins','Roboto',sans-serif;background:#fff;color:#1a1a2e;line-height:1.7;overflow-x:hidden}
        .service-page a{text-decoration:none;transition:all .3s ease}
        .service-page img{max-width:100%;height:auto;display:block}
        .service-page .container{width:100%;max-width:1200px;margin:0 auto;padding:0 20px}
        .subTitle{font-size:17px;letter-spacing:2.5px;text-transform:uppercase;color:#bb0b0b;font-weight:600;margin-bottom:6px}
        .secTitle{font-size:38px;font-weight:700;line-height:1.2;color:#0a1922;margin-bottom:12px}
        .secTitle span{color:#bb0b0b}
        .berpo_btn{display:inline-block;background:#bb0b0b;color:#fff;font-weight:600;padding:1px 38px;border-radius:50px;font-size:15px;border:none;cursor:pointer;transition:all .3s ease;text-align:center}
        .berpo_btn:hover{background:#9e0909;transform:translateY(-2px);box-shadow:0 8px 25px rgba(187,11,11,.25)}
        .berpo_btn-outline{display:inline-block;background:transparent;color:#bb0b0b;font-weight:600;padding:12px 36px;border-radius:50px;font-size:15px;border:2px solid #bb0b0b;cursor:pointer;transition:all .3s ease}
        .berpo_btn-outline:hover{background:#bb0b0b;color:#fff;transform:translateY(-2px)}
        .hero-section{position:relative;padding:120px 0 80px;background:linear-gradient(135deg,#f1f1f1 0%,#1a2a3a 100%);overflow:hidden}
        .hero-section::before{content:'';position:absolute;inset:0;background:url(${servicesBg}) center/cover;z-index:0}
        .hero-section .container{position:relative;z-index:1}
        .hero-title{font-size:48px;font-weight:700;color:#fff;line-height:1.2;margin-bottom:16px}
        .hero-title span{color:#bb0b0b}
        .hero-description{font-size:18px;color:#b0b0c8;max-width:700px;margin:0 auto 30px;line-height:1.8}
        .service-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        .service_item_01 {
          width: 100%;
          height: 450px; /* Change box height here */
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,.06);
          transition: all .35s ease;
          border: 1px solid #f0f0f5;
        }
        .service_item_01:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(187,11,11,.10);border-color:#bb0b0b30}
        .service_item_01 .siThumb {
           position: relative;
           overflow: hidden;
           height: 200px; /* Image height */
        }
        .service_item_01 .siThumb img {
           width: 100%;
           height: 100%;
           object-fit: cover;
        }
        .service_item_01:hover .siThumb img{transform:scale(1.05)}
        .service_item_01 .sitem_con {
           padding: 35px 20px 28px;
           text-align: center;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: flex-start;
           width: 100%;
        }
        .service_item_01 .ibMeta{
           width:60px;
           height:60px;
           border-radius:50%;
           display:flex;
           align-items:center;
           justify-content:center;
           margin:px auto 16px;
           font-size:26px;
           color:#bb0b0b;
           transition:.3s;
           background:#fff;
           box-shadow:0 4px 15px rgba(187,11,11,.12)
        }
        .service_item_01:hover .ibMeta{background:#bb0b0b;color:#fff}
        .service_item_01 h3 {
           width: 100%;
           text-align: center;
           font-size: 20px;
           font-weight: 600;
           margin-bottom: 10px;
        }
        .service_item_01 h3 a{color:#0a1922}
        .service_item_01 h3 a:hover{color:#bb0b0b}
        .service_item_01 p {
           width: 100%;
           text-align: center;
           color: #5a5a72;
           font-size: 15px;
           margin: 0 auto;
        }
        .section-padding{padding:70px 0}
        .bg-light{background:#f8f9fc}
        .bg-dark{background:#0a1922;color:#fff}
        .text-center{text-align:center}
        .mt-5{margin-top:40px}
        .mb-4{margin-bottom:30px}
        .achievement-wrap{display:flex;align-items:center;gap:50px}
        .achievement-content{flex:1}
        .achievement-image{flex:1;position:relative}
        .achievement-image img{border-radius:20px}
        .client-badge{position:absolute;bottom:20px;right:20px;background:#fff;padding:20px 28px;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.08);text-align:center}
        .client-badge h2{font-size:42px;font-weight:800;color:#bb0b0b}
        .client-badge h5{font-size:14px;color:#5a5a72;font-weight:500}
        .listItem{list-style:none;margin:20px 0 28px}
        .listItem li{padding:10px 0;font-size:16.5px;color:#4a4a62}
        .listItem li i{color:#bb0b0b;margin-right:12px}
        .beproTab{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-bottom:30px;border-bottom:2px solid #eee;padding-bottom:4px}
        .beproTab .nav-link{padding:10px 28px;background:transparent;border:none;font-weight:600;color:#5a5a72;border-radius:30px;font-size:15px;cursor:pointer;transition:.3s}
        .beproTab .nav-link.active{background:#bb0b0b;color:#fff}
        .beproTab .nav-link:hover:not(.active){background:#f0f0f5}
        .tab-pane{display:none;animation:fadeUp .4s ease}
        .tab-pane.active{display:block}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .tab-content-inner{display:flex;align-items:flex-start;gap:40px}
        .tab-content-inner .text-col{flex:1.2}
        .tab-content-inner .img-col{flex:1}
        .tab-content-inner .img-col img{border-radius:16px;width:100%}
        .tab-info-block{margin:18px 0}
        .tab-info-block h4{font-size:16px;font-weight:600;color:#0a1922;margin-bottom:10px}
        .tab-info-block ul{list-style:none}
        .tab-info-block ul li{font-size:15px;color:#4a4a62;padding:6px 0;display:flex;align-items:flex-start}
        .tab-info-block ul li i{color:#bb0b0b;margin-right:10px;margin-top:6px;font-size:13px}
        .blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:30px}
        .blogItem01{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.04);transition:.3s}
        .blogItem01:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.06)}
        .blogThumb img{width:100%;aspect-ratio:16/10;object-fit:cover}
        .blogContent{padding:20px 22px 24px}
        .blogContent .bmeta{font-size:13px;color:#7a7a92;display:inline-block;margin-bottom:8px}
        .blogContent .bmeta i{margin-right:6px}
        .blogContent h3{font-size:18px;font-weight:600;line-height:1.4;margin-bottom:12px}
        .blogContent h3 a{color:#0a1922}
        .blogContent h3 a:hover{color:#bb0b0b}
        .cta-wrap{display:flex;align-items:center;gap:50px}
        .cta-content{flex:1}
        .cta-content h2{font-size:48px;font-weight:700;line-height:1.1}
        .cta-content h3{font-size:36px;font-weight:700}
        .cta-content h4{font-size:22px;font-weight:400;margin-bottom:10px}
        .cta-content .highlight{color:#bb0b0b}
        .cta-images{flex:1;display:flex;flex-direction:column;gap:20px}
        .cta-images img{border-radius:16px;width:100%}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}
        .modal-content{background:#fff;border-radius:20px;max-width:600px;width:100%;padding:40px;position:relative;max-height:90vh;overflow-y:auto}
        .modal-close{position:absolute;top:16px;right:20px;background:none;border:none;font-size:28px;cursor:pointer;color:#7a7a92;transition:.3s}
        .modal-close:hover{color:#bb0b0b;transform:rotate(90deg)}
        .modal-content .subTitle{font-size:14px}
        .modal-content .secTitle{font-size:28px}
        .form-group{margin-bottom:20px}
        .form-group label{display:block;font-weight:600;margin-bottom:6px;color:#0a1922}
        .form-group input,.form-group textarea{width:100%;padding:12px 16px;border:2px solid #e0e0e8;border-radius:10px;font-size:15px;transition:.3s;font-family:inherit}
        .form-group input:focus,.form-group textarea:focus{outline:none;border-color:#bb0b0b;box-shadow:0 0 0 4px rgba(187,11,11,.1)}
        .form-group textarea{resize:vertical;min-height:100px}
        .feedback-message{padding:12px 16px;border-radius:10px;margin-bottom:16px;font-weight:500}
        .feedback-message.success{background:#d4edda;color:#155724}
        .feedback-message.error{background:#f8d7da;color:#721c24}
        @media (max-width:1024px){
          .service-grid{grid-template-columns:repeat(2,1fr)}
          .blog-grid{grid-template-columns:repeat(2,1fr)}
          .achievement-wrap,.cta-wrap,.tab-content-inner{flex-direction:column}
          .secTitle{font-size:32px}
          .hero-title{font-size:36px}
          .service_item_01 .siThumb{height:180px}
        }
        @media (max-width:768px){
          .container{padding:0 16px}
          .section-padding{padding:50px 0}
          .secTitle{font-size:26px}
          .subTitle{font-size:11px;letter-spacing:1.8px}
          .hero-title{font-size:28px}
          .hero-description{font-size:16px}
          .hero-section{padding:80px 0 60px}
          .service-grid{grid-template-columns:1fr 1fr;gap:16px}
          .service_item_01 .siThumb{height:150px}
          .service_item_01 .sitem_con{padding:16px 14px 20px}
          .service_item_01 h3{font-size:16px}
          .service_item_01 p{font-size:13px}
          .service_item_01 .ibMeta{width:50px;height:50px;font-size:20px;margin:-30px auto 12px}
          .blog-grid{grid-template-columns:1fr}
          .beproTab .nav-link{padding:8px 18px;font-size:13px}
          .client-badge{position:relative;bottom:auto;right:auto;margin-top:-20px;padding:16px 20px}
          .client-badge h2{font-size:32px}
          .cta-content h2{font-size:34px}
          .cta-content h3{font-size:26px}
          .cta-content h4{font-size:18px}
          .berpo_btn{padding:12px 28px;font-size:14px}
          .modal-content{padding:24px}
        }
        @media (max-width:480px){
          .service-grid{grid-template-columns:1fr;gap:16px}
          .service_item_01 .siThumb{height:200px}
          .secTitle{font-size:22px}
          .hero-title{font-size:24px}
          .beproTab .nav-link{padding:6px 14px;font-size:12px}
          .berpo_btn{padding:10px 22px;font-size:13px}
        }
      `}</style>

      <section className="hero-section">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title mt-5">Spatial Revenue <span>Intelligence System</span></h1>
            <p className="hero-description">
              Find the revenue your municipality is missing. SRIS connects property tax, professional tax, trade licence and water charges with spatial data.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Request a Demo <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
              <a href="#features" className="berpo_btn-outline">Explore SRIS</a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Featured Solution</div>
            <h2 className="secTitle">Find the Revenue Your <span>Municipality Is Missing</span></h2>
            <p style={{ color: '#5a5a72', maxWidth: '700px', margin: '0 auto' }}>
              SRIS is an integrated GIS platform that connects property tax, professional tax, trade licence and water charges with spatial data. It helps municipalities identify revenue gaps, monitor field operations and strengthen revenue administration.
            </p>
          </div>

          <div className="service-grid">
            {srisFeatures.map((feature) => (
              <div className="service_item_01" key={feature.id}>
                <div className="siThumb"><img src={feature.image} alt={feature.title} /></div>
                <div className="sitem_con">
                  <div className="ibMeta"><i className={`fas ${feature.icon}`}></i></div>
                  <h3><Link to={feature.link}>{feature.title}</Link></h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button onClick={() => setShowModal(true)} className="berpo_btn">
              Request an SRIS Demo <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="achievement-wrap">
            <div className="achievement-content">
              <div className="subTitle">Our Impact</div>
              <h2 className="secTitle">Revenue <span>Excellence</span></h2>
              <p style={{ color: '#4a4a62', marginBottom: '16px' }}>
                Maximise revenue potential, minimise leakage and enable transparent governance for municipalities across India.
              </p>
              <ul className="listItem">
                <li><i className="fas fa-check-circle"></i> Map every property and assessment status</li>
                <li><i className="fas fa-check-circle"></i> Identify unassessed and under-assessed properties</li>
                <li><i className="fas fa-check-circle"></i> AI-assisted spatial anomaly detection</li>
                <li><i className="fas fa-check-circle"></i> Live revenue dashboards for officers</li>
              </ul>
              <button onClick={() => setShowModal(true)} className="berpo_btn">Request a Demo</button>
            </div>
            <div className="achievement-image">
              <img src={achievementImg} alt="Achievement" />
              <div className="client-badge"><h2>25<sup>+</sup></h2><h5>Municipalities</h5></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Capabilities</div>
            <h2 className="secTitle">Key <span>Capabilities</span></h2>
          </div>

          <div className="beproTab">
            <button className={`nav-link ${activeTab === 'capabilities' ? 'active' : ''}`} onClick={() => setActiveTab('capabilities')}>Capabilities</button>
            <button className={`nav-link ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
            <button className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')}>Benefits</button>
          </div>

          <div className="tab-content">
            {activeTab === 'capabilities' && (
              <div className="tab-pane active">
                <div className="tab-content-inner">
                  <div className="text-col">
                    <h2 className="secTitle" style={{ fontSize: '28px' }}>Key <span>Capabilities</span></h2>
                    <p>SRIS brings property, tax and spatial data together on one platform for revenue administration.</p>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-cube" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>What SRIS Delivers</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Map every property and visualise assessment status</span></li>
                        <li><i className="fas fa-check"></i><span>Identify unassessed and under-assessed properties</span></li>
                        <li><i className="fas fa-check"></i><span>Detect anomalies with AI-assisted spatial analysis</span></li>
                        <li><i className="fas fa-check"></i><span>Equip surveyors with mobile apps</span></li>
                        <li><i className="fas fa-check"></i><span>Track collections on live revenue dashboards</span></li>
                        <li><i className="fas fa-check"></i><span>Support transparent, data-driven governance</span></li>
                      </ul>
                    </div>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-star" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Our Goal</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Maximise revenue potential</span></li>
                        <li><i className="fas fa-check"></i><span>Minimise leakage</span></li>
                        <li><i className="fas fa-check"></i><span>Enable transparent governance</span></li>
                      </ul>
                    </div>
                    <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>Request a Demo</button>
                  </div>
                  <div className="img-col"><img src={aboutImg} alt="Capabilities" /></div>
                </div>
              </div>
            )}
            {activeTab === 'workflow' && (
              <div className="tab-pane active">
                <div className="tab-content-inner">
                  <div className="text-col">
                    <h2 className="secTitle" style={{ fontSize: '28px' }}>How SRIS <span>Works</span></h2>
                    <p>From mapping to collection — a connected revenue workflow.</p>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-cube" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Workflow</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Survey properties with mobile apps</span></li>
                        <li><i className="fas fa-check"></i><span>Digitise and validate records in the GIS</span></li>
                        <li><i className="fas fa-check"></i><span>AI analyses anomalies and matches to tax records</span></li>
                        <li><i className="fas fa-check"></i><span>Officers review flagged properties on dashboards</span></li>
                        <li><i className="fas fa-check"></i><span>Field teams collect and reconcile revenue</span></li>
                        <li><i className="fas fa-check"></i><span>Performance is tracked live, with a full audit trail</span></li>
                      </ul>
                    </div>
                    <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>Discuss SRIS</button>
                  </div>
                  <div className="img-col"><img src={aboutImg} alt="Workflow" /></div>
                </div>
              </div>
            )}
            {activeTab === 'benefits' && (
              <div className="tab-pane active">
                <div className="tab-content-inner">
                  <div className="text-col">
                    <h2 className="secTitle" style={{ fontSize: '28px' }}>Key <span>Benefits</span></h2>
                    <p>Why municipalities choose SRIS.</p>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-star" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Benefits</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Higher revenue recovery from unassessed properties</span></li>
                        <li><i className="fas fa-check"></i><span>Real-time visibility for commissioners and officers</span></li>
                        <li><i className="fas fa-check"></i><span>Faster field surveys and reconciliations</span></li>
                        <li><i className="fas fa-check"></i><span>Consistent, auditable revenue records</span></li>
                        <li><i className="fas fa-check"></i><span>Greater transparency and accountability</span></li>
                        <li><i className="fas fa-check"></i><span>A platform that grows with the municipality</span></li>
                      </ul>
                    </div>
                    <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>See Benefits in Action</button>
                  </div>
                  <div className="img-col"><img src={aboutImg} alt="Benefits" /></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Insights</div>
            <h2 className="secTitle">Latest <span>SRIS</span> Articles</h2>
          </div>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div className="blogItem01" key={blog.id}>
                <div className="blogThumb"><img src={blog.img} alt={blog.title} /></div>
                <div className="blogContent">
                  <span className="bmeta"><i className="fas fa-calendar-alt"></i> {blog.date}</span>
                  <h3><Link to="/blog">{blog.title}</Link></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-content">
              <h4>We're <span className="highlight">Creative</span></h4>
              <h2>Spatial Revenue</h2>
              <h3><span className="highlight">Intelligence</span> Agency</h3>
              <p style={{ color: '#b0b0c8', margin: '16px 0 24px', maxWidth: '90%' }}>
                Ready to find the revenue your municipality is missing?
              </p>
              <button onClick={() => setShowModal(true)} className="berpo_btn">Request a Demo</button>
            </div>
            <div className="cta-images">
              <img src={ctaImg1} alt="CTA" />
              <img src={ctaImg2} alt="CTA" />
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="text-center mb-4">
              <div className="subTitle">SRIS Inquiry</div>
              <h2 className="secTitle">Request an <span>SRIS Demo</span></h2>
              <p style={{ color: '#5a5a72' }}>Tell us about your municipality and revenue goals.</p>
            </div>
            {feedback && (
              <div className={`feedback-message ${feedback.includes('✅') ? 'success' : 'error'}`}>{feedback}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your municipality..." />
              </div>
              <button type="submit" className="berpo_btn" style={{ width: '100%' }}>
                Submit Inquiry <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SRIS;