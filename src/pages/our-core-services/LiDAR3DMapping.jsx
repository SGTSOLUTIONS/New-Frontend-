import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Google Fonts
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Images
import achievementImg from '../../assets/images/home1/1.png';
import aboutImg from '../../assets/images/home1/about.png';
import blog1 from '../../assets/images/blog/1.jpg';
import blog2 from '../../assets/images/blog/2.jpg';
import blog3 from '../../assets/images/blog/3.jpg';
import ctaImg1 from '../../assets/images/home1/3.png';
import ctaImg2 from '../../assets/images/home1/4.png';
import servicesBg from '../../assets/images/Lidar/bg.png';

// LiDAR specific images
import lidarFeature1 from '../../assets/images/Lidar/1.jpg';
import lidarFeature2 from '../../assets/images/Lidar/2.jpg';
import lidarFeature3 from '../../assets/images/Lidar/3.png';
import lidarFeature4 from '../../assets/images/Lidar/4.jpg';
import lidarFeature5 from '../../assets/images/Lidar/5.jpg';
import lidarFeature6 from '../../assets/images/Lidar/6.png';

// ===== LiDAR Service Features =====
const lidarFeatures = [
  {
    id: 1,
    icon: 'fa-cubes',
    title: 'LiDAR Point Cloud Acquisition',
    description:
      'High-density point clouds from drone, aerial, or terrestrial LiDAR systems. Capture millions of points per second with sub-centimeter accuracy.',
    image: lidarFeature1,
    link: '/services/lidar/acquisition',
  },
  {
    id: 2,
    icon: 'fa-layer-group',
    title: 'DEM / DTM Generation',
    description:
      'High-resolution Digital Elevation Models and Digital Terrain Models for topographic mapping, flood modelling, and engineering design.',
    image: lidarFeature2,
    link: '/services/lidar/dem',
  },
  {
    id: 3,
    icon: 'fa-tree',
    title: 'Vegetation & Canopy Analysis',
    description:
      'Forest structure analysis, biomass estimation, and canopy height models for environmental monitoring and forestry management.',
    image: lidarFeature3,
    link: '/services/lidar/vegetation',
  },
  {
    id: 4,
    icon: 'fa-building',
    title: '3D Building & Infrastructure Modelling',
    description:
      'Detailed 3D building models, infrastructure extraction, and city-scale digital twins from LiDAR point clouds.',
    image: lidarFeature4,
    link: '/services/lidar/building',
  },
  {
    id: 5,
    icon: 'fa-chart-line',
    title: 'Change Detection & Monitoring',
    description:
      'Multi-temporal LiDAR analysis for terrain change detection, erosion monitoring, and infrastructure deformation tracking.',
    image: lidarFeature5,
    link: '/services/lidar/change-detection',
  },
  {
    id: 6,
    icon: 'fa-water',
    title: 'Bathymetric & Hydrographic LiDAR',
    description:
      'Near-shore bathymetric surveys and hydrographic mapping using green-wavelength LiDAR systems for coastal and inland water bodies.',
    image: lidarFeature6,
    link: '/services/lidar/bathymetric',
  },
];

// ===== Tab content (What We Deliver / Where It Helps / Key Benefits) =====
const tabsData = {
  acquisition: {
    label: 'Point Cloud',
    title: 'Point Cloud <span>Acquisition</span>',
    description:
      'High-density point clouds from drone, aerial, or terrestrial LiDAR systems. Capture millions of points per second with sub-centimetre accuracy.',
    deliverables: [
      'Classified point clouds (ground, vegetation, buildings)',
      'High-density raw and processed point cloud files (LAS/LAZ)',
      'Intensity and return-number data for advanced analysis',
      'Data ready for DEM/DTM and 3D modelling workflows',
    ],
    helps: [
      'Infrastructure and corridor design',
      'Flood and drainage studies',
      'Smart city 3D models',
      'Utility and asset inspection',
    ],
    benefits: [
      'Very detailed, accurate elevation data',
      'Reduced need for repeat site visits',
      'Better flood and drainage modelling',
      'Integrates directly with GIS and CAD tools',
    ],
    image: aboutImg,
    buttonText: 'Request Point Cloud',
  },
  dem: {
    label: 'DEM / DTM',
    title: 'DEM / DTM <span>Generation</span>',
    description:
      'High-resolution Digital Elevation Models and Digital Terrain Models for topographic mapping, flood modelling, and engineering design.',
    deliverables: [
      'Bare-earth Digital Terrain Models (DTM)',
      'Digital Surface Models (DSM) with vegetation and structures',
      'Contour maps and spot heights',
      'Terrain inputs for hydrological and flood modelling',
    ],
    helps: [
      'Topographic mapping and surveying',
      'Flood and drainage modelling',
      'Engineering and site design',
      'Corridor and alignment planning',
    ],
    benefits: [
      'Accurate, high-resolution terrain data',
      'Ready for hydrological modelling',
      'Fewer ground control points required',
      'Compatible with GIS, CAD and BIM',
    ],
    image: aboutImg,
    buttonText: 'Request DEM / DTM',
  },
  vegetation: {
    label: 'Vegetation',
    title: 'Vegetation <span>Analysis</span>',
    description:
      'Forest structure analysis, biomass estimation, and canopy height models for environmental monitoring and forestry management.',
    deliverables: [
      'Canopy Height Models (CHM)',
      'Vegetation classification and density maps',
      'Biomass and carbon stock estimation',
      'Forest structure and gap analysis',
    ],
    helps: [
      'Forestry and plantation management',
      'Environmental and watershed monitoring',
      'Carbon credit and sustainability reporting',
      'Urban tree inventory and management',
    ],
    benefits: [
      'Accurate canopy and vegetation metrics',
      'Consistent coverage across large areas',
      'Repeatable for long-term monitoring',
      'Directly usable in environmental reports',
    ],
    image: aboutImg,
    buttonText: 'Request Vegetation Analysis',
  },
};

// ===== Blogs =====
const blogs = [
  {
    id: 1,
    title: 'LiDAR Technology: A Comprehensive Guide',
    date: '20 March, 2021',
    img: blog1,
  },
  {
    id: 2,
    title: 'From Point Clouds to 3D Models',
    date: '20 March, 2021',
    img: blog2,
  },
  {
    id: 3,
    title: 'LiDAR Applications in Forestry',
    date: '20 March, 2021',
    img: blog3,
  },
];

// ============================================================
// Component
// ============================================================
const LiDAR3DMapping = () => {
  const [activeTab, setActiveTab] = useState('acquisition');
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
    setFeedback(
      `✅ Thanks ${name}! A LiDAR specialist will contact ${email} within 24h with portfolio examples and a custom quote.`
    );
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  const activeData = tabsData[activeTab];

  return (
    <div className="service-page">
      <style>{`
        /* ============ GLOBAL ============ */
        .service-page * { margin:0; padding:0; box-sizing:border-box; }
        .service-page {
          font-family:'Poppins','Roboto',sans-serif;
          background:#ffffff; color:#1a1a2e;
          line-height:1.7; overflow-x:hidden;
        }
        .service-page a { text-decoration:none; transition:all .3s ease; }
        .service-page img { max-width:100%; height:auto; display:block; }
        .service-page .container {
          width:100%; max-width:1200px;
          margin:0 auto; padding:0 20px;
        }

        /* ============ TYPOGRAPHY ============ */
        .subTitle {
          font-size:17px; letter-spacing:2.5px;
          text-transform:uppercase; color:#bb0b0b;
          font-weight:600; margin-bottom:6px;
        }
        .secTitle {
          font-size:38px; font-weight:700;
          line-height:1.2; color:#0a1922; margin-bottom:12px;
        }
        .secTitle span { color:#bb0b0b; }

        /* ============ BUTTONS ============ */
        .berpo_btn {
          display:inline-block; background:#bb0b0b; color:#fff;
          font-weight:600; padding:1px 38px; border-radius:50px;
          font-size:15px; border:none; cursor:pointer;
          transition:all .3s ease; text-align:center;
        }
        .berpo_btn:hover {
          background:#9e0909; transform:translateY(-2px);
          box-shadow:0 8px 25px rgba(187,11,11,.25); color:#fff;
        }
        .berpo_btn-outline {
          display:inline-block; background:transparent; color:#bb0b0b;
          font-weight:600; padding:12px 36px; border-radius:50px;
          font-size:15px; border:2px solid #bb0b0b; cursor:pointer;
          transition:all .3s ease; text-align:center;
        }
        .berpo_btn-outline:hover {
          background:#bb0b0b; color:#fff; transform:translateY(-2px);
        }

        /* ============ HERO ============ */
        .hero-section {
          position:relative; padding:120px 0 80px;
          background:linear-gradient(135deg,#f1f1f1 0%,#1a2a3a 100%);
          overflow:hidden;
        }
        .hero-section::before {
          content:''; position:absolute; inset:0;
          background:url(${servicesBg}) center/cover;
          z-index:0;
        }
        .hero-section .container { position:relative; z-index:1; }
        .hero-title {
          font-size:48px; font-weight:700; color:#fff;
          line-height:1.2; margin-bottom:16px;
        }
        .hero-title span { color:#bb0b0b; }
        .hero-description {
          font-size:18px; color:#b0b0c8; max-width:700px;
          margin:0 auto 30px; line-height:1.8;
        }

        /* ============ SERVICE CARDS ============ */
        .service-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:30px; margin-top:40px;
        }
        .service_item_01 {
          background:#fff; border-radius:16px; overflow:hidden;
          box-shadow:0 4px 20px rgba(0,0,0,.06);
          transition:all .35s ease; border:1px solid #f0f0f5;
        }
        .service_item_01:hover {
          transform:translateY(-6px);
          box-shadow:0 12px 40px rgba(187,11,11,.10);
          border-color:#bb0b0b30;
        }
        .service_item_01 .siThumb {
          position:relative; overflow:hidden; height:220px;
        }
        .service_item_01 .siThumb img {
          width:100%; height:100%; object-fit:cover;
          transition:transform .5s ease;
        }
        .service_item_01:hover .siThumb img { transform:scale(1.05); }
        .service_item_01 .sitem_con {
          padding:35px 20px 28px; text-align:center;
        }
        .service_item_01 .ibMeta {
          width:60px; height:60px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          margin:-55px auto 16px; font-size:26px; color:#bb0b0b;
          background:#fff; box-shadow:0 4px 15px rgba(187,11,11,.12);
          transition:.3s;
        }
        .service_item_01:hover .ibMeta { background:#bb0b0b; color:#fff; }
        .service_item_01 h3 {
          font-size:20px; font-weight:600; margin-bottom:10px;
        }
        .service_item_01 h3 a { color:#0a1922; }
        .service_item_01 h3 a:hover { color:#bb0b0b; }
        .service_item_01 p { color:#5a5a72; font-size:15px; }

        /* ============ SECTIONS ============ */
        .section-padding { padding:70px 0; }
        .bg-light { background:#f8f9fc; }
        .bg-dark { background:#0a1922; color:#fff; }
        .text-center { text-align:center; }
        .mt-5 { margin-top:40px; }
        .mb-4 { margin-bottom:30px; }

        /* ============ ACHIEVEMENT ============ */
        .achievement-wrap {
          display:flex; align-items:center; gap:50px;
        }
        .achievement-content { flex:1; }
        .achievement-image { flex:1; position:relative; }
        .achievement-image img { border-radius:20px; }
        .client-badge {
          position:absolute; bottom:20px; right:20px;
          background:#fff; padding:20px 28px; border-radius:16px;
          box-shadow:0 10px 30px rgba(0,0,0,.08); text-align:center;
        }
        .client-badge h2 {
          font-size:42px; font-weight:800; color:#bb0b0b; line-height:1.2;
        }
        .client-badge h5 { font-size:14px; color:#5a5a72; font-weight:500; }
        .listItem { list-style:none; margin:20px 0 28px; }
        .listItem li { padding:10px 0; font-size:16.5px; color:#4a4a62; }
        .listItem li i { color:#bb0b0b; margin-right:12px; }

        /* ============ TABS ============ */
        .beproTab {
          display:flex; justify-content:center; flex-wrap:wrap;
          gap:8px; margin-bottom:30px;
          border-bottom:2px solid #eee; padding-bottom:4px;
        }
        .beproTab .nav-link {
          padding:10px 28px; background:transparent; border:none;
          font-weight:600; color:#5a5a72; border-radius:30px;
          font-size:15px; cursor:pointer; transition:.3s;
        }
        .beproTab .nav-link.active { background:#bb0b0b; color:#fff; }
        .beproTab .nav-link:hover:not(.active) { background:#f0f0f5; }
        .tab-pane { display:none; animation:fadeUp .4s ease; }
        .tab-pane.active { display:block; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .tab-content-inner {
          display:flex; align-items:flex-start; gap:40px;
        }
        .tab-content-inner .text-col { flex:1.2; }
        .tab-content-inner .img-col { flex:1; }
        .tab-content-inner .img-col img {
          border-radius:16px; width:100%;
        }
        .tab-info-block { margin:18px 0; }
        .tab-info-block h4 {
          font-size:16px; font-weight:600;
          color:#0a1922; margin-bottom:10px;
        }
        .tab-info-block ul {
          list-style:none; padding:0;
        }
        .tab-info-block ul li {
          font-size:15px; color:#4a4a62;
          padding:6px 0; display:flex; align-items:flex-start;
        }
        .tab-info-block ul li i {
          color:#bb0b0b; margin-right:10px; margin-top:6px;
          font-size:13px;
        }

        /* ============ BLOG ============ */
        .blog-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:28px; margin-top:30px;
        }
        .blogItem01 {
          background:#fff; border-radius:16px; overflow:hidden;
          box-shadow:0 4px 16px rgba(0,0,0,.04); transition:.3s;
        }
        .blogItem01:hover {
          transform:translateY(-4px);
          box-shadow:0 12px 32px rgba(0,0,0,.06);
        }
        .blogThumb img {
          width:100%; aspect-ratio:16/10; object-fit:cover;
        }
        .blogContent { padding:20px 22px 24px; }
        .blogContent .bmeta {
          font-size:13px; color:#7a7a92;
          display:inline-block; margin-bottom:8px;
        }
        .blogContent .bmeta i { margin-right:6px; }
        .blogContent h3 {
          font-size:18px; font-weight:600;
          line-height:1.4; margin-bottom:12px;
        }
        .blogContent h3 a { color:#0a1922; }
        .blogContent h3 a:hover { color:#bb0b0b; }

        /* ============ CTA ============ */
        .cta-wrap { display:flex; align-items:center; gap:50px; }
        .cta-content { flex:1; }
        .cta-content h2 { font-size:48px; font-weight:700; line-height:1.1; }
        .cta-content h3 { font-size:36px; font-weight:700; }
        .cta-content h4 { font-size:22px; font-weight:400; margin-bottom:10px; }
        .cta-content .highlight { color:#bb0b0b; }
        .cta-images {
          flex:1; display:flex; flex-direction:column; gap:20px;
        }
        .cta-images img { border-radius:16px; width:100%; }

        /* ============ MODAL ============ */
        .modal-overlay {
          position:fixed; inset:0; background:rgba(0,0,0,.7);
          z-index:9999; display:flex; align-items:center;
          justify-content:center; padding:20px;
        }
        .modal-content {
          background:#fff; border-radius:20px; max-width:600px;
          width:100%; padding:40px; position:relative;
          max-height:90vh; overflow-y:auto;
        }
        .modal-close {
          position:absolute; top:16px; right:20px;
          background:none; border:none; font-size:28px;
          cursor:pointer; color:#7a7a92; transition:.3s;
        }
        .modal-close:hover { color:#bb0b0b; transform:rotate(90deg); }
        .modal-content .subTitle { font-size:14px; }
        .modal-content .secTitle { font-size:28px; }
        .form-group { margin-bottom:20px; }
        .form-group label {
          display:block; font-weight:600;
          margin-bottom:6px; color:#0a1922;
        }
        .form-group input,
        .form-group textarea {
          width:100%; padding:12px 16px;
          border:2px solid #e0e0e8; border-radius:10px;
          font-size:15px; transition:.3s; font-family:inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline:none; border-color:#bb0b0b;
          box-shadow:0 0 0 4px rgba(187,11,11,.1);
        }
        .form-group textarea { resize:vertical; min-height:100px; }
        .feedback-message {
          padding:12px 16px; border-radius:10px;
          margin-bottom:16px; font-weight:500;
        }
        .feedback-message.success { background:#d4edda; color:#155724; }
        .feedback-message.error   { background:#f8d7da; color:#721c24; }

        /* ============ RESPONSIVE ============ */
        @media (max-width:1024px) {
          .service-grid { grid-template-columns:repeat(2,1fr); }
          .blog-grid    { grid-template-columns:repeat(2,1fr); }
          .achievement-wrap { flex-direction:column; }
          .cta-wrap { flex-direction:column; }
          .tab-content-inner { flex-direction:column; }
          .secTitle { font-size:32px; }
          .hero-title { font-size:36px; }
          .service_item_01 .siThumb { height:180px; }
        }
        @media (max-width:768px) {
          .container { padding:0 16px; }
          .section-padding { padding:50px 0; }
          .secTitle { font-size:26px; }
          .subTitle { font-size:11px; letter-spacing:1.8px; }
          .hero-title { font-size:28px; }
          .hero-description { font-size:16px; }
          .hero-section { padding:80px 0 60px; }
          .service-grid { grid-template-columns:1fr 1fr; gap:16px; }
          .service_item_01 .siThumb { height:150px; }
          .service_item_01 .sitem_con { padding:16px 14px 20px; }
          .service_item_01 h3 { font-size:16px; }
          .service_item_01 p { font-size:13px; }
          .service_item_01 .ibMeta {
            width:50px; height:50px; font-size:20px;
            margin:-30px auto 12px;
          }
          .blog-grid { grid-template-columns:1fr; }
          .beproTab .nav-link { padding:8px 18px; font-size:13px; }
          .client-badge {
            position:relative; bottom:auto; right:auto;
            margin-top:-20px; padding:16px 20px;
          }
          .client-badge h2 { font-size:32px; }
          .cta-content h2 { font-size:34px; }
          .cta-content h3 { font-size:26px; }
          .cta-content h4 { font-size:18px; }
          .berpo_btn { padding:12px 28px; font-size:14px; }
          .modal-content { padding:24px; }
        }
        @media (max-width:480px) {
          .service-grid { grid-template-columns:1fr; gap:16px; }
          .service_item_01 .siThumb { height:200px; }
          .secTitle { font-size:22px; }
          .hero-title { font-size:24px; }
          .beproTab .nav-link { padding:6px 14px; font-size:12px; }
          .berpo_btn { padding:10px 22px; font-size:13px; }
          .cta-content h2 { font-size:28px; }
          .cta-content h3 { font-size:22px; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title mt-5">
              LiDAR &amp; <span>3D Mapping</span>
            </h1>
            <p className="hero-description">
              Precision 3D terrain models, point clouds and spatial datasets for infrastructure
              assessment and detailed planning — even beneath vegetation.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Request LiDAR Quote{' '}
                <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
              <a href="#features" className="berpo_btn-outline">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">LiDAR &amp; 3D Mapping Services</div>
            <h2 className="secTitle">
              Precision Point Cloud <span>Intelligence</span>
            </h2>
            <p style={{ color: '#5a5a72', maxWidth: '700px', margin: '0 auto' }}>
              LiDAR measures the ground and everything on it with exceptional detail, even beneath
              vegetation. We turn that data into accurate terrain models and 3D datasets for
              engineering, flood analysis and infrastructure assessment.
            </p>
          </div>

          <div className="service-grid">
            {lidarFeatures.map((feature) => (
              <div className="service_item_01" key={feature.id}>
                <div className="siThumb">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3>
                    <Link to={feature.link}>{feature.title}</Link>
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button onClick={() => setShowModal(true)} className="berpo_btn">
              Discuss Your Project{' '}
              <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENT ================= */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="achievement-wrap">
            <div className="achievement-content">
              <div className="subTitle">Our Impact</div>
              <h2 className="secTitle">
                LiDAR &amp; 3D <span>Excellence</span>
              </h2>
              <p style={{ color: '#4a4a62', marginBottom: '16px' }}>
                Delivering high-precision LiDAR and 3D mapping solutions for topographic mapping,
                forestry management, urban planning and infrastructure projects of any scale.
              </p>
              <ul className="listItem">
                <li>
                  <i className="fas fa-check-circle"></i> Classified point clouds
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> High-accuracy DTM / DSM
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 3D building &amp; structure models
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Corridor mapping for roads, rail &amp; power lines
                </li>
              </ul>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Get a LiDAR Quote
              </button>
            </div>
            <div className="achievement-image">
              <img src={achievementImg} alt="Achievement" />
              <div className="client-badge">
                <h2>
                  90<sup>+</sup>
                </h2>
                <h5>LiDAR Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Solutions</div>
            <h2 className="secTitle">
              Our <span>LiDAR</span> Capabilities
            </h2>
          </div>

          <div className="beproTab">
            {Object.entries(tabsData).map(([key, value]) => (
              <button
                key={key}
                className={`nav-link ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {value.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2
                    className="secTitle"
                    style={{ fontSize: '28px' }}
                    dangerouslySetInnerHTML={{ __html: activeData.title }}
                  />
                  <p>{activeData.description}</p>

                  <div className="tab-info-block">
                    <h4>
                      <i className="fas fa-cube" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>
                      What We Deliver
                    </h4>
                    <ul>
                      {activeData.deliverables.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-check"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tab-info-block">
                    <h4>
                      <i className="fas fa-map-marker-alt" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>
                      Where It Helps
                    </h4>
                    <ul>
                      {activeData.helps.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-check"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tab-info-block">
                    <h4>
                      <i className="fas fa-star" style={{ color: '#bb0b0b', marginRight: '8px' }}></i>
                      Key Benefits
                    </h4>
                    <ul>
                      {activeData.benefits.map((item, i) => (
                        <li key={i}>
                          <i className="fas fa-check"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowModal(true)}
                    className="berpo_btn"
                    style={{ marginTop: '16px' }}
                  >
                    {activeData.buttonText}
                  </button>
                </div>
                <div className="img-col">
                  <img src={activeData.image} alt={activeData.label} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Insights</div>
            <h2 className="secTitle">
              Latest <span>LiDAR</span> Articles
            </h2>
          </div>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div className="blogItem01" key={blog.id}>
                <div className="blogThumb">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blogContent">
                  <span className="bmeta">
                    <i className="fas fa-calendar-alt"></i> {blog.date}
                  </span>
                  <h3>
                    <Link to="/blog">{blog.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-content">
              <h4>
                We're <span className="highlight">Creative</span>
              </h4>
              <h2>LiDAR &amp; 3D Mapping</h2>
              <h3>
                <span className="highlight">Point Cloud</span> Agency
              </h3>
              <p style={{ color: '#b0b0c8', margin: '16px 0 24px', maxWidth: '90%' }}>
                Ready to transform your projects with precision LiDAR point cloud intelligence?
              </p>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Start Your LiDAR Project
              </button>
            </div>
            <div className="cta-images">
              <img src={ctaImg1} alt="CTA" />
              <img src={ctaImg2} alt="CTA" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className="text-center mb-4">
              <div className="subTitle">LiDAR Inquiry</div>
              <h2 className="secTitle">
                Request a <span>LiDAR Quote</span>
              </h2>
              <p style={{ color: '#5a5a72' }}>
                Tell us about your area, required accuracy, and deliverables.
              </p>
            </div>

            {feedback && (
              <div
                className={`feedback-message ${
                  feedback.includes('✅') ? 'success' : 'error'
                }`}
              >
                {feedback}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your area, required accuracy, and deliverables..."
                />
              </div>
              <button type="submit" className="berpo_btn" style={{ width: '100%' }}>
                Submit Inquiry{' '}
                <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiDAR3DMapping;