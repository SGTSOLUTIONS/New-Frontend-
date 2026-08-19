import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Google Fonts
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import images
import aboutImg from '../../assets/images/home1/about.png';
import achievementImg from '../../assets/images/home1/1.png';
import clientLogo1 from '../../assets/images/client-logo/1.png';
import clientLogo2 from '../../assets/images/client-logo/2.png';
import clientLogo3 from '../../assets/images/client-logo/3.png';
import clientLogo4 from '../../assets/images/client-logo/4.png';
import team1 from '../../assets/images/team/1.jpg';
import team2 from '../../assets/images/team/2.jpg';
import team3 from '../../assets/images/team/3.jpg';
import testimonial1 from '../../assets/images/home1/t1.jpg';
import testimonial2 from '../../assets/images/home1/t2.jpeg';
import testimonial3 from '../../assets/images/home1/t3.jpeg';
import blog1 from '../../assets/images/blog/1.jpg';
import blog2 from '../../assets/images/blog/2.jpg';
import blog3 from '../../assets/images/blog/3.jpg';
import blogAuthor1 from '../../assets/images/blog/a1.jpg';
import blogAuthor2 from '../../assets/images/blog/a2.jpg';
import blogAuthor3 from '../../assets/images/blog/a3.jpg';
import ctaImg1 from '../../assets/images/home1/3.png';
import ctaImg2 from '../../assets/images/home1/4.png';
import servicesBg from '../../assets/images/Geo-property/bg.jpeg';

// GeoProperty specific images
import geoFeature1 from '../../assets/images/Geo-property/1.jpg';
import geoFeature2 from '../../assets/images/Geo-property/2.jpg';
import geoFeature3 from '../../assets/images/Geo-property/3.jpg';
import geoFeature4 from '../../assets/images/Geo-property/4.jpeg';
import geoFeature5 from '../../assets/images/Geo-property/5.jpg';
import geoFeature6 from '../../assets/images/Geo-property/6.jpg';

// SRIS Features
const srisFeatures = [
    {
        id: 1,
        icon: "fa-building",
        title: "GIS-based Property & Asset Mapping",
        description: "Geo-referenced spatial data for buildings, roads, water connections, and tax properties with centimeter-level accuracy.",
        image: geoFeature1,
        link: "/services/sris/mapping",
    },
    {
        id: 2,
        icon: "fa-sync-alt",
        title: "Real-time Data Synchronization",
        description: "Seamless sync between field surveys and central database — live updates for administrators.",
        image: geoFeature2,
        link: "/services/sris/sync",
    },
    {
        id: 3,
        icon: "fa-mobile-alt",
        title: "Mobile Field Collection & Verification",
        description: "Field teams collect, validate, and update asset data using offline-capable mobile GIS apps.",
        image: geoFeature3,
        link: "/services/sris/mobile",
    },
    {
        id: 4,
        icon: "fa-chart-simple",
        title: "Property Tax Assessment & Monitoring",
        description: "Spatial intelligence for accurate tax calculation, revenue leakage detection, and trend analysis.",
        image: geoFeature4,
        link: "/services/sris/tax",
    },
    {
        id: 5,
        icon: "fa-search-location",
        title: "Detection of Unassessed Properties",
        description: "AI-assisted detection of unassessed, under-assessed, and unauthorized properties using imagery & algorithms.",
        image: geoFeature5,
        link: "/services/sris/detection",
    },
    {
        id: 6,
        icon: "fa-tint",
        title: "Water Connection & Revenue Tracking",
        description: "Map every water connection, track billing status, and identify defaulters via spatial dashboards.",
        image: geoFeature6,
        link: "/services/sris/water",
    },
];

const teamMembers = [
  { id: 1, name: 'Arnika Sorkar', role: 'Web Designer', img: team1 },
  { id: 2, name: 'Georgie Haynes', role: 'Web Developer', img: team2 },
  { id: 3, name: 'Jizz Merkel', role: 'Business Expert', img: team3 },
  { id: 4, name: 'Sarah Chen', role: 'GIS Specialist', img: team1 }
];

const testimonials = [
  {
    id: 1,
    name: 'Coimbatore City Municipal Corporation',
    role: 'ThemeForest Exclusive',
    text: 'SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation. By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries and integrated spatial data seamlessly.',
    img: testimonial1
  },
  {
    id: 2,
    name: 'Marutham Foundation',
    role: 'Envato Author',
    text: 'SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped track ecological degradation, siltation levels, and natural inlet channels across project zones.',
    img: testimonial2
  },
  {
    id: 3,
    name: 'Institute for Water Studies',
    role: 'Envato Author',
    text: 'SGT Solutions completed extensive spatial mapping and water quality analysis for the Institute for Water Studies, Chennai. Using geospatial technology, they tracked water bodies and aquifer profiles.',
    img: testimonial3
  },
];

const blogs = [
  {
    id: 1,
    title: 'GIS for Municipal Revenue Management',
    date: '20 March, 2021',
    author: 'Keesler Smith',
    img: blog1,
    authorImg: blogAuthor1
  },
  {
    id: 2,
    title: 'Smart City Asset Mapping with SRIS',
    date: '20 March, 2021',
    author: 'Keesler Smith',
    img: blog2,
    authorImg: blogAuthor2
  },
  {
    id: 3,
    title: 'Property Tax Optimization Using Spatial Data',
    date: '20 March, 2021',
    author: 'Keesler Smith',
    img: blog3,
    authorImg: blogAuthor3
  }
];

const GeoProperty = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('mapping');
  const [openAccordion, setOpenAccordion] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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
    setFeedback(`✅ Thanks ${name}! A SRIS specialist will contact ${email} within 24h with portfolio examples and a custom proposal.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  return (
    <div className="service-page">
      <style>{`
        /* Same CSS as WebGis.jsx - Copy the entire style block from WebGis.jsx */
        /* ===== GLOBAL RESET & BASE ===== */
        .service-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .service-page {
          font-family: 'Poppins', 'Roboto', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .service-page a {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-page img {
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

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service_item_01 {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f0f0f5;
        }

        .service_item_01:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(187, 11, 11, 0.10);
          border-color: #bb0b0b30;
        }

        .service_item_01 .siThumb {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .service_item_01 .siThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service_item_01:hover .siThumb img {
          transform: scale(1.05);
        }

       .service_item_01 .sitem_con {
          padding: 35px 20px 28px;
          text-align: center;
        }

     .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -55px 110px 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          background: #fff;
          box-shadow: 0 4px 15px rgba(187, 11, 11, 0.12);
        }


        .service_item_01:hover .ibMeta {
          background: #bb0b0b;
          color: #fff;
        }

        .service_item_01 h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service_item_01 h3 a {
          color: #0a1922;
        }

        .service_item_01 h3 a:hover {
          color: #bb0b0b;
        }

        .service_item_01 p {
          color: #5a5a72;
          font-size: 15px;
          margin-bottom: 0;
        }

        .section-padding {
          padding: 70px 0;
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

        .mt-5 {
          margin-top: 40px;
        }

        .achievement-wrap {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-image {
          flex: 1;
          position: relative;
        }

        .achievement-image img {
          border-radius: 20px;
        }

        .client-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          padding: 20px 28px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .client-badge h2 {
          font-size: 42px;
          font-weight: 800;
          color: #bb0b0b;
        }

        .client-badge h5 {
          font-size: 14px;
          color: #5a5a72;
          font-weight: 500;
        }

        .listItem {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
        }

        .listItem li {
          padding: 10px 0;
          font-size: 16.5px;
          color: #4a4a62;
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
        }

        .client-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: center;
          justify-items: center;
        }

        .client-logo-item {
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(0.3);
        }

        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }

        .client-logo-item img {
          max-height: 70px;
          object-fit: contain;
        }

        .beproTab {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 2px solid #eee;
          padding-bottom: 4px;
        }

        .beproTab .nav-link {
          padding: 10px 28px;
          background: transparent;
          border: none;
          font-weight: 600;
          color: #5a5a72;
          border-radius: 30px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .beproTab .nav-link.active {
          background: #bb0b0b;
          color: #fff;
        }

        .beproTab .nav-link:hover:not(.active) {
          background: #f0f0f5;
        }

        .tab-pane {
          display: none;
          animation: fadeUp 0.4s ease;
        }

        .tab-pane.active {
          display: block;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tab-content-inner {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .tab-content-inner .text-col {
          flex: 1;
        }

        .tab-content-inner .img-col {
          flex: 1;
        }

        .tab-content-inner .img-col img {
          border-radius: 16px;
          width: 100%;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .team_01 {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px 16px 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .team_01:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.06);
        }

        .team_01 img {
          border-radius: 12px;
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
        }

        .team_01 h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 2px;
        }

        .team_01 h3 a {
          color: #0a1922;
        }

        .team_01 p {
          color: #7a7a92;
          font-size: 14px;
        }

        .tm_social {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .tm_social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f0f5;
          border-radius: 50%;
          color: #2a2a42;
          font-size: 14px;
          transition: 0.3s;
        }

        .tm_social a:hover {
          background: #bb0b0b;
          color: #fff;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .testiItem01 {
          background: #fff;
          padding: 30px 28px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .testiItem01 h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .testiItem01 .quotation {
          font-size: 15px;
          color: #4a4a62;
          font-style: italic;
          line-height: 1.8;
        }

        .ts_author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
        }

        .ts_author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }

        .ts_author h5 {
          margin: 0;
          font-size: 17px;
        }

        .ts_author span {
          color: #7a7a92;
          font-size: 14px;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .testimonial-controls button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0dd;
          cursor: pointer;
          transition: 0.3s;
          padding: 0;
        }

        .testimonial-controls button.active {
          background: #bb0b0b;
          width: 36px;
          border-radius: 20px;
        }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .accordion-header {
          padding: 16px 22px;
          background: #f8f9fc;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: #0a1922;
        }

        .accordion-header:hover {
          background: #f0f1f8;
        }

        .accordion-header i {
          color: #bb0b0b;
          margin-right: 10px;
        }

        .accordion-header .arrow {
          transition: 0.3s;
          font-size: 14px;
          color: #7a7a92;
        }

        .accordion-header.active .arrow {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 0 22px 20px;
          display: none;
          color: #4a4a62;
          font-size: 15px;
        }

        .accordion-body.open {
          display: block;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 30px;
        }

        .blogItem01 {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: 0.3s;
        }

        .blogItem01:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .blogThumb img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
        }

        .blogContent {
          padding: 20px 22px 24px;
        }

        .blogContent .bmeta {
          font-size: 13px;
          color: #7a7a92;
          display: inline-block;
          margin-bottom: 8px;
        }

        .blogContent .bmeta i {
          margin-right: 6px;
        }

        .blogContent h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .blogContent h3 a {
          color: #0a1922;
        }

        .blogContent h3 a:hover {
          color: #bb0b0b;
        }

        .bpcon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #eee;
        }

        .bpcon .author {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2a2a42;
          font-size: 14px;
        }

        .bpcon .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .bpcon a:last-child {
          color: #7a7a92;
          font-size: 18px;
        }

        .bpcon a:last-child:hover {
          color: #bb0b0b;
        }

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

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #7a7a92;
          transition: 0.3s;
        }

        .modal-close:hover {
          color: #bb0b0b;
          transform: rotate(90deg);
        }

        .modal-content .subTitle {
          font-size: 14px;
        }

        .modal-content .secTitle {
          font-size: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0a1922;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e8;
          border-radius: 10px;
          font-size: 15px;
          transition: 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #bb0b0b;
          box-shadow: 0 0 0 4px rgba(187, 11, 11, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .feedback-message {
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .feedback-message.success {
          background: #d4edda;
          color: #155724;
        }

        .feedback-message.error {
          background: #f8d7da;
          color: #721c24;
        }

        @media (max-width: 1024px) {
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: 1fr; }
          .achievement-wrap { flex-direction: column; }
          .cta-wrap { flex-direction: column; }
          .tab-content-inner { flex-direction: column; }
          .secTitle { font-size: 32px; }
          .hero-title { font-size: 36px; }
          .service_item_01 .siThumb { height: 180px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .section-padding { padding: 50px 0; }
          .secTitle { font-size: 26px; }
          .subTitle { font-size: 11px; letter-spacing: 1.8px; }
          .hero-title { font-size: 28px; }
          .hero-description { font-size: 16px; }
          .hero-section { padding: 80px 0 60px; }
          .service-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 150px; }
          .service_item_01 .sitem_con { padding: 16px 14px 20px; }
          .service_item_01 h3 { font-size: 16px; }
          .service_item_01 p { font-size: 13px; }
          .service_item_01 .ibMeta { width: 50px; height: 50px; font-size: 20px; margin: -30px auto 12px; }
          .client-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .blog-grid { grid-template-columns: 1fr; }
          .beproTab .nav-link { padding: 8px 18px; font-size: 13px; }
          .client-badge { position: relative; bottom: auto; right: auto; margin-top: -20px; padding: 16px 20px; }
          .client-badge h2 { font-size: 32px; }
          .cta-content h2 { font-size: 34px; }
          .cta-content h3 { font-size: 26px; }
          .cta-content h4 { font-size: 18px; }
          .berpo_btn { padding: 12px 28px; font-size: 14px; }
          .testiItem01 { padding: 20px 18px; }
          .accordion-header { font-size: 14px; padding: 14px 16px; }
          .accordion-body { font-size: 14px; padding: 0 16px 16px; }
          .ts_author img { width: 50px; height: 50px; }
          .team_01 { padding: 14px 10px; }
          .team_01 h3 { font-size: 15px; }
          .tm_social a { width: 32px; height: 32px; font-size: 12px; }
          .blogContent h3 { font-size: 16px; }
          .modal-content { padding: 24px; }
        }

        @media (max-width: 480px) {
          .service-grid { grid-template-columns: 1fr; gap: 16px; }
          .service_item_01 .siThumb { height: 200px; }
          .team-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .client-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .secTitle { font-size: 22px; }
          .hero-title { font-size: 24px; }
          .beproTab .nav-link { padding: 6px 14px; font-size: 12px; }
          .berpo_btn { padding: 10px 22px; font-size: 13px; }
          .testimonial-grid { gap: 20px; }
          .cta-content h2 { font-size: 28px; }
          .cta-content h3 { font-size: 22px; }
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center">
            
            <h1 className="hero-title mt-5"><br />
              Spatial Revenue Intelligence System
            </h1>
            <p className="hero-description">
              The Spatial Revenue Intelligent System (SRIS) is a smart digital Web GIS platform developed for efficient mapping and management of municipal properties. It enables real-time visualization, monitoring, and spatial analysis of assets such as buildings, roads, water connections, tax properties, Professional Tax and UGD through an interactive map-based system.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Request SRIS Demo <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
              <a href="#features" className="berpo_btn-outline">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">SRIS Features</div>
            <h2 className="secTitle">
              Intelligent GIS for <span>Urban Governance</span>
            </h2>
            <p style={{ color: '#5a5a72', maxWidth: '700px', margin: '0 auto' }}>
              SRIS empowers local bodies with a unified geospatial framework for asset inventory, revenue monitoring, and smart decision-making. From property tax to underground drainage, every asset is mapped, tracked, and analyzed.
            </p>
          </div>

          <div className="service-grid">
            {srisFeatures.map(feature => (
              <div className="service_item_01" key={feature.id}>
                <div className="siThumb">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3><Link to={feature.link}>{feature.title}</Link></h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button onClick={() => setShowModal(true)} className="berpo_btn">
              Discuss Your Project <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENT ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="achievement-wrap">
            <div className="achievement-content">
              <div className="subTitle">Our Impact</div>
              <h2 className="secTitle">SRIS <span>Excellence</span></h2>
              <p style={{ color: '#4a4a62', marginBottom: '16px' }}>
                Deploying SRIS across municipalities to transform revenue management, asset tracking, and citizen services through spatial intelligence.
              </p>
              <ul className="listItem">
                <li><i className="fas fa-check-circle"></i> GIS-based property & asset mapping</li>
                <li><i className="fas fa-check-circle"></i> Real-time data synchronization</li>
                <li><i className="fas fa-check-circle"></i> Mobile field collection & verification</li>
                <li><i className="fas fa-check-circle"></i> Property tax assessment & monitoring</li>
              </ul>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Get a Demo
              </button>
            </div>
            <div className="achievement-image">
              <img src={achievementImg} alt="Achievement" />
              <div className="client-badge">
                <h2>150<sup>+</sup></h2>
                <h5>Municipal Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Solutions</div>
            <h2 className="secTitle">SRIS <span>Capabilities</span></h2>
          </div>

          <div className="beproTab">
            <button
              className={`nav-link ${activeTab === 'mapping' ? 'active' : ''}`}
              onClick={() => setActiveTab('mapping')}
            >
              Asset Mapping
            </button>
            <button
              className={`nav-link ${activeTab === 'tax' ? 'active' : ''}`}
              onClick={() => setActiveTab('tax')}
            >
              Tax Assessment
            </button>
            <button
              className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
          </div>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab === 'mapping' ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2 className="secTitle" style={{ fontSize: '28px' }}>Asset <span>Mapping</span></h2>
                  <p>Comprehensive GIS-based mapping of all municipal assets including buildings, roads, water connections, and tax properties with centimeter-level accuracy.</p>
                  <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>
                    Start Asset Mapping
                  </button>
                </div>
                <div className="img-col">
                  <img src={aboutImg} alt="Asset Mapping" />
                </div>
              </div>
            </div>
            <div className={`tab-pane ${activeTab === 'tax' ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2 className="secTitle" style={{ fontSize: '28px' }}>Tax <span>Assessment</span></h2>
                  <p>Accurate property tax calculation, revenue leakage detection, and trend analysis using spatial intelligence and AI-assisted property detection.</p>
                  <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>
                    Optimize Tax Assessment
                  </button>
                </div>
                <div className="img-col">
                  <img src={aboutImg} alt="Tax Assessment" />
                </div>
              </div>
            </div>
            <div className={`tab-pane ${activeTab === 'analytics' ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2 className="secTitle" style={{ fontSize: '28px' }}>Analytics <span>Dashboards</span></h2>
                  <p>Interactive dashboards for ward-wise and zone-wise revenue analysis, collection efficiency, and trend insights with automated MIS reporting.</p>
                  <button onClick={() => setShowModal(true)} className="berpo_btn" style={{ marginTop: '16px' }}>
                    Explore Analytics
                  </button>
                </div>
                <div className="img-col">
                  <img src={aboutImg} alt="Analytics" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== BLOG ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Insights</div>
            <h2 className="secTitle">Latest <span>SRIS</span> Articles</h2>
          </div>
          <div className="blog-grid">
            {blogs.map(blog => (
              <div className="blogItem01" key={blog.id}>
                <div className="blogThumb">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blogContent">
                  <span className="bmeta"><i className="fas fa-calendar-alt"></i> {blog.date}</span>
                  <h3><Link to="/blog">{blog.title}</Link></h3>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-content">
              <h4>We're <span className="highlight">Creative</span></h4>
              <h2>SRIS Platform</h2>
              <h3><span className="highlight">Solutions</span> Agency</h3>
              <p style={{ color: '#b0b0c8', margin: '16px 0 24px', maxWidth: '90%' }}>
                Ready to transform your municipality's revenue management with spatial intelligence?
              </p>
              <button onClick={() => setShowModal(true)} className="berpo_btn">
                Start Your SRIS Project
              </button>
            </div>
            <div className="cta-images">
              <img src={ctaImg1} alt="CTA" />
              <img src={ctaImg2} alt="CTA" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="text-center mb-4">
              <div className="subTitle">SRIS Inquiry</div>
              <h2 className="secTitle">Request a <span>Demo</span></h2>
              <p style={{ color: '#5a5a72' }}>
                Tell us about your municipality, number of properties, and revenue management goals.
              </p>
            </div>

            {feedback && (
              <div className={`feedback-message ${feedback.includes('✅') ? 'success' : 'error'}`}>
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
                  placeholder="Tell us about your municipality, number of properties, and revenue management goals..."
                />
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

export default GeoProperty;