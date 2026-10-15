import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import images
import achievementImg from '../../assets/images/home1/1.png';
import aboutImg from '../../assets/images/home1/about.png';
import blog1 from '../../assets/images/blog/1.jpg';
import blog2 from '../../assets/images/blog/2.jpg';
import blog3 from '../../assets/images/blog/3.jpg';
import ctaImg1 from '../../assets/images/home1/3.png';
import ctaImg2 from '../../assets/images/home1/4.png';
import servicesBg from '../../assets/images/Lidar/bg.png';

import trainFeature1 from '../../assets/images/Lidar/1.jpg';
import trainFeature2 from '../../assets/images/Lidar/2.jpg';
import trainFeature3 from '../../assets/images/Lidar/3.png';
import trainFeature4 from '../../assets/images/Lidar/4.jpg';
import trainFeature5 from '../../assets/images/Lidar/5.jpg';
import trainFeature6 from '../../assets/images/Lidar/6.png';
const trainFeatures = [
  { id: 1, icon: 'fa-chalkboard-teacher', title: 'GIS Fundamentals', description: 'GIS fundamentals and digital mapping for beginners and professionals.', image: trainFeature1, link: '/services/training/fundamentals' },
  { id: 2, icon: 'fa-satellite-dish', title: 'Remote Sensing & Image Analysis', description: 'Remote sensing and satellite image analysis for practical applications.', image: trainFeature2, link: '/services/training/remote-sensing' },
  { id: 3, icon: 'fa-plane', title: 'Drone Mapping & Processing', description: 'Drone mapping and data processing — from flight planning to deliverables.', image: trainFeature3, link: '/services/training/drone' },
  { id: 4, icon: 'fa-chart-line', title: 'Spatial Analysis & Decision-Making', description: 'Spatial analysis and decision-making with GIS for real-world problems.', image: trainFeature4, link: '/services/training/spatial-analysis' },
  { id: 5, icon: 'fa-mobile-alt', title: 'Mobile Data & Web GIS', description: 'Mobile data collection and web GIS dashboards.', image: trainFeature5, link: '/services/training/mobile-webgis' },
  { id: 6, icon: 'fa-brain', title: 'AI in Geospatial Analysis', description: 'Introduction to AI in geospatial analysis for modern workflows.', image: trainFeature6, link: '/services/training/ai' },
];

const blogs = [
  { id: 1, title: 'Building GIS Skills in Government Teams', date: '20 March, 2021', img: blog1 },
  { id: 2, title: 'Hands-On Training for Drone Mapping', date: '20 March, 2021', img: blog2 },
  { id: 3, title: 'Why Capacity Building Matters for GIS', date: '20 March, 2021', img: blog3 },
];

const GISTrainingCapacityBuilding = () => {
  const [activeTab, setActiveTab] = useState('programmes');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (!name || !email) return setFeedback('❌ Please provide name and email.');
    if (!email.includes('@')) return setFeedback('❌ Valid email required.');
    setFeedback(`✅ Thanks ${name}! Our training team will contact ${email} within 24h.`);
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
        .service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:40px}
        .service_item_01{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.06);transition:all .35s ease;border:1px solid #f0f0f5}
        .service_item_01:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(187,11,11,.10);border-color:#bb0b0b30}
        .service_item_01 .siThumb{position:relative;overflow:hidden;height:220px}
        .service_item_01 .siThumb img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
        .service_item_01:hover .siThumb img{transform:scale(1.05)}
        .service_item_01 .sitem_con{padding:35px 20px 28px;text-align:center}
        .service_item_01 .ibMeta{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:-55px auto 16px;font-size:26px;color:#bb0b0b;transition:.3s;background:#fff;box-shadow:0 4px 15px rgba(187,11,11,.12)}
        .service_item_01:hover .ibMeta{background:#bb0b0b;color:#fff}
        .service_item_01 h3{font-size:20px;font-weight:600;margin-bottom:10px}
        .service_item_01 h3 a{color:#0a1922}
        .service_item_01 h3 a:hover{color:#bb0b0b}
        .service_item_01 p{color:#5a5a72;font-size:15px}
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
            <h1 className="hero-title mt-5">GIS Training &amp; <span>Capacity Building</span></h1>
            <p className="hero-description">
              Practical GIS, remote sensing and drone training for government departments, colleges and professionals, so your team can use spatial technology with confidence.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Enquire About Training <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
              <a href="#features" className="berpo_btn-outline">Explore Programmes</a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">GIS Training Services</div>
            <h2 className="secTitle">Build GIS Skills Your Team Can Use <span>from Day One</span></h2>
            <p style={{ color: '#5a5a72', maxWidth: '700px', margin: '0 auto' }}>
              Technology only delivers value when people know how to use it. Our training programmes give government teams, students and professionals practical, hands-on skills in GIS and geospatial technology.
            </p>
          </div>

          <div className="service-grid">
            {trainFeatures.map((feature) => (
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
              Discuss Training Needs <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="achievement-wrap">
            <div className="achievement-content">
              <div className="subTitle">Our Impact</div>
              <h2 className="secTitle">Training <span>Excellence</span></h2>
              <p style={{ color: '#4a4a62', marginBottom: '16px' }}>
                Hands-on training programmes designed for government departments, colleges and professionals.
              </p>
              <ul className="listItem">
                <li><i className="fas fa-check-circle"></i> Government and municipal departments</li>
                <li><i className="fas fa-check-circle"></i> Engineering, geography and planning colleges</li>
                <li><i className="fas fa-check-circle"></i> Research scholars and students</li>
                <li><i className="fas fa-check-circle"></i> Consulting and infrastructure firms</li>
              </ul>
              <button onClick={() => setShowModal(true)} className="berpo_btn">Enquire About Training</button>
            </div>
            <div className="achievement-image">
              <img src={achievementImg} alt="Achievement" />
              <div className="client-badge"><h2>500<sup>+</sup></h2><h5>Professionals Trained</h5></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Programmes</div>
            <h2 className="secTitle">Our <span>Training</span> Modules</h2>
          </div>

          <div className="beproTab">
            <button className={`nav-link ${activeTab === 'programmes' ? 'active' : ''}`} onClick={() => setActiveTab('programmes')}>Programmes</button>
            <button className={`nav-link ${activeTab === 'audience' ? 'active' : ''}`} onClick={() => setActiveTab('audience')}>Audience</button>
            <button className={`nav-link ${activeTab === 'formats' ? 'active' : ''}`} onClick={() => setActiveTab('formats')}>Formats</button>
          </div>

          <div className="tab-content">
            {activeTab === 'programmes' && (
              <div className="tab-pane active">
                <div className="tab-content-inner">
                  <div className="text-col">
                    <h2 className="secTitle" style={{ fontSize: '28px' }}>What We <span>Deliver</span></h2>
                    <p>Hands-on modules covering the full range of geospatial skills your team needs.</p>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-cube" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Modules</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>GIS fundamentals and digital mapping</span></li>
                        <li><i className="fas fa-check"></i><span>Remote sensing and satellite image analysis</span></li>
                        <li><i className="fas fa-check"></i><span>Drone mapping and data processing</span></li>
                        <li><i className="fas fa-check"></i><span>Spatial analysis and decision-making with GIS</span></li>
                        <li><i className="fas fa-check"></i><span>Mobile data collection and web GIS dashboards</span></li>
                        <li><i className="fas fa-check"></i><span>Introduction to AI in geospatial analysis</span></li>
                        <li><i className="fas fa-check"></i><span>Custom workshops designed around your needs</span></li>
                        <li><i className="fas fa-check"></i><span>Certificate of participation</span></li>
                      </ul>
                    </div>
                    <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>Enquire About Programmes</button>
                  </div>
                  <div className="img-col"><img src={aboutImg} alt="Programmes" /></div>
                </div>
              </div>
            )}
            {activeTab === 'audience' && (
              <div className="tab-pane active">
                <div className="tab-content-inner">
                  <div className="text-col">
                    <h2 className="secTitle" style={{ fontSize: '28px' }}>Who It's <span>For</span></h2>
                    <p>Our programmes are designed for a wide range of learners.</p>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-map-marker-alt" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Where It Helps</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Government and municipal departments</span></li>
                        <li><i className="fas fa-check"></i><span>Engineering, geography and planning colleges</span></li>
                        <li><i className="fas fa-check"></i><span>Research scholars and students</span></li>
                        <li><i className="fas fa-check"></i><span>Consulting and infrastructure firms</span></li>
                        <li><i className="fas fa-check"></i><span>Departments adopting a new GIS platform such as SRIS</span></li>
                      </ul>
                    </div>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-star" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Key Benefits</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Hands-on learning with real-world examples</span></li>
                        <li><i className="fas fa-check"></i><span>Training tailored to your data and workflows</span></li>
                        <li><i className="fas fa-check"></i><span>Teams that can run and maintain GIS systems on their own</span></li>
                        <li><i className="fas fa-check"></i><span>Flexible formats: on-site, online or workshop series</span></li>
                      </ul>
                    </div>
                    <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>Discuss Your Audience</button>
                  </div>
                  <div className="img-col"><img src={aboutImg} alt="Audience" /></div>
                </div>
              </div>
            )}
            {activeTab === 'formats' && (
              <div className="tab-pane active">
                <div className="tab-content-inner">
                  <div className="text-col">
                    <h2 className="secTitle" style={{ fontSize: '28px' }}>Flexible <span>Formats</span></h2>
                    <p>Choose the delivery format that fits your team's schedule and location.</p>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-cube" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Formats</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>On-site workshops at your office</span></li>
                        <li><i className="fas fa-check"></i><span>Online live sessions</span></li>
                        <li><i className="fas fa-check"></i><span>Multi-week workshop series</span></li>
                        <li><i className="fas fa-check"></i><span>Custom modules and case studies</span></li>
                      </ul>
                    </div>
                    <div className="tab-info-block">
                      <h4><i className="fas fa-star" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>Key Benefits</h4>
                      <ul>
                        <li><i className="fas fa-check"></i><span>Learn from practitioners on real projects</span></li>
                        <li><i className="fas fa-check"></i><span>Flexible scheduling for busy teams</span></li>
                        <li><i className="fas fa-check"></i><span>Certificate of participation</span></li>
                        <li><i className="fas fa-check"></i><span>Ongoing support after training</span></li>
                      </ul>
                    </div>
                    <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>Discuss Formats</button>
                  </div>
                  <div className="img-col"><img src={aboutImg} alt="Formats" /></div>
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
            <h2 className="secTitle">Latest <span>Training</span> Articles</h2>
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
              <h2>GIS Training &amp;</h2>
              <h3><span className="highlight">Capacity Building</span> Agency</h3>
              <p style={{ color: '#b0b0c8', margin: '16px 0 24px', maxWidth: '90%' }}>
                Ready to build GIS skills your team can use from day one?
              </p>
              <button onClick={() => setShowModal(true)} className="berpo_btn">Enquire About Training</button>
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
              <div className="subTitle">Training Inquiry</div>
              <h2 className="secTitle">Enquire About <span>Training</span></h2>
              <p style={{ color: '#5a5a72' }}>Tell us about your team, skills needed, and preferred format.</p>
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
                <label htmlFor="message">Training Needs</label>
                <textarea id="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your team, skills needed, and preferred format..." />
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

export default GISTrainingCapacityBuilding;