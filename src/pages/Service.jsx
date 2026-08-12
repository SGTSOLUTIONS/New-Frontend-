import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Google Fonts from @fontsource
import '@fontsource/poppins';
import '@fontsource/roboto';
import '@fontsource/open-sans';

// Import Font Awesome from npm
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import all images
import slider1 from '../assets/images/slider/1_4.jpg';
import slider2 from '../assets/images/slider/1_5.jpeg';

// Service images
import service1 from '../assets/images/service/1.jpg';
import service2 from '../assets/images/service/2.jpg';
import service3 from '../assets/images/service/3.jpg';

// Other images
import aboutImg from '../assets/images/home1/about.png';
import achievementImg from '../assets/images/home1/1.png';
import clientLogo1 from '../assets/images/client-logo/1.png';
import clientLogo2 from '../assets/images/client-logo/2.png';
import clientLogo3 from '../assets/images/client-logo/3.png';
import clientLogo4 from '../assets/images/client-logo/4.png';
import team1 from '../assets/images/team/1.jpg';
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
import testimonial1 from '../assets/images/home1/t1.jpg';
import testimonial2 from '../assets/images/home1/t2.jpeg';
import testimonial3 from '../assets/images/home1/t3.jpeg';
import blog1 from '../assets/images/blog/1.jpg';
import blog2 from '../assets/images/blog/2.jpg';
import blog3 from '../assets/images/blog/3.jpg';
import blogAuthor1 from '../assets/images/blog/a1.jpg';
import blogAuthor2 from '../assets/images/blog/a2.jpg'; 
import blogAuthor3 from '../assets/images/blog/a3.jpg';
import ctaImg1 from '../assets/images/home1/3.png';
import ctaImg2 from '../assets/images/home1/4.png';

// Background image
import servicesBg from '../assets/images/service/services-bg.jpg';

// Service data
const services = [
  {
    id: 1,
    icon: 'fa-globe',
    title: 'Web GIS',
    description: 'Web-based mapping portals for land records and asset tracking.',
    image: service1,
    link: '/services/web-gis'
  },
  {
    id: 2,
    icon: 'fa-mobile-alt',
    title: 'Mobile GIS',
    description: 'Offline field applications for property surveys and data collection.',
    image: service2,
    link: '/services/mobile-gis'
  },
  {
    id: 3,
    icon: 'fa-map-marked-alt',
    title: 'Spatial Revenue Intelligence',
    description: 'Digitize buildings and parcels from aerial imagery for property tax management.',
    image: service3,
    link: '/services/geo-property'
  },
  {
    id: 4,
    icon: 'fa-satellite',
    title: 'LiDAR',
    description: 'High-precision 3D scanning for urban and infrastructure models.',
    image: service1,
    link: '/services/lidar'
  },
  {
    id: 5,
    icon: 'fa-camera',
    title: 'Photogrammetry',
    description: 'Accurate maps and 3D models generated from drone and aerial imagery.',
    image: service2,
    link: '/services/photogrammetry'
  },
  {
    id: 6,
    icon: 'fa-drone',
    title: 'Drone & DGPS Survey',
    description: 'Centimeter-level accuracy for property and infrastructure mapping.',
    image: service3,
    link: '/services/drone-survey'
  },
  {
    id: 7,
    icon: 'fa-map',
    title: '2D Mapping',
    description: 'Clear and accurate maps showing land use, boundaries and assets.',
    image: service1,
    link: '/services/2d-mapping'
  },
  {
    id: 8,
    icon: 'fa-clipboard-list',
    title: 'Consultancy Services',
    description: 'GIS strategy, workflow automation, implementation and professional training.',
    image: service2,
    link: '/services/consultancy'
  },
  {
    id: 9,
    icon: 'fa-laptop-code',
    title: 'Website Development',
    description: 'Modern responsive websites, GIS portals and enterprise web applications.',
    image: service3,
    link: '/services/web-development'
  }
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
    text: 'SGT Solutions successfully delivered the comprehensive Property Survey Mapping project for Coimbatore City Municipal Corporation. By deploying their proprietary Spatial Revenue Intelligence System (SRIS), they accurately mapped urban property boundaries andintegrated spatial data seamlessly. Their technology has been highly effective inidentifying previously unassessed commercial structures and verifying built-up areavariations.',
    img: testimonial1
  },
   {
    id: 2,
    name: 'Marutham Foundation',
    role: 'Envato Author',
    text: 'SGT Solutions has been a vital technical partner for the Marutham Foundation. Their advanced GIS analysis and hydro-spatial mapping helped trackecological degradation, siltation levels, and natural inlet channels across projectzones. Dr. Saravani and her team successfully bridged cutting-edge technology withgrassroots environmental restoration, optimizing rainwater harvesting catchments forwater body renovation initiatives.',
    img: testimonial2
  },
   {
    id: 3,
    name: 'Institute for Water Studies',
    role: 'Envato Author',
    text: 'SGT Solutions completed extensive spatial mapping and waterquality analysis for the Institute for Water Studies, Chennai. Using geospatiallogy, they tracked water bodies and aquifer profiles, while lab-based indexin measured critical chemical parameters and contamination trends. Their work providedreliable datasets, significantly aiding research and water resource managementinitiatives.',
    img: testimonial3
  },
];

const blogs = [
  {
    id: 1,
    title: 'Italic Mountains, she had a last view back',
    date: '20 March, 2021',
    author: 'Keesler Smith',
    img: blog1,
    authorImg: blogAuthor1
  },
  {
    id: 2,
    title: 'Styles come and go. Design language not a style.',
    date: '20 March, 2021',
    author: 'Keesler Smith',
    img: blog2,
    authorImg: blogAuthor2
  },
  {
    id: 3,
    title: 'Dharma Home Suites at Novia offers fully',
    date: '20 March, 2021',
    author: 'Keesler Smith',
    img: blog3,
    authorImg: blogAuthor3
  }
];

const Service = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('financial');
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="service-page">
      <style>{`
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

        /* ===== SERVICE CARDS ===== */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
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
          text-align: center;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 0 0 15px 15px;
        }

        .service_item_01 .ibMeta {
          width: 60px;
          height: 60px;
          background: #bb0b0b10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -40px auto 16px;
          font-size: 26px;
          color: #bb0b0b;
          transition: 0.3s;
          position: sticky;
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

        /* ===== SECTION SPACING ===== */
        .section-padding {
          padding: 70px 0;
        }

        .section-padding-sm {
          padding: 50px 0;
        }

        .bg-light {
          background: #189144;
          background-color: rgb(84, 32, 49) !important;
        }

        .bg-dark {
          background: #0a1922;
          color: #fff;
        }

        /* ===== ACHIEVEMENT ===== */
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
          padding: 12.5pxS;
          font-size: 16.5px;
          color: #d6d6e3;
         
        }

        .listItem li i {
          color: #bb0b0b;
          margin-right: 12px;
          padding:10px;
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

        /* ===== TABS ===== */
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
          width: 200%;
        }

        /* ===== TEAM ===== */
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

        /* ===== TESTIMONIALS ===== */
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

        /* ===== ACCORDION ===== */
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

        /* ===== BLOG ===== */
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .achievement-wrap {
            flex-direction: column;
          }
          .cta-wrap {
            flex-direction: column;
          }
          .tab-content-inner {
            flex-direction: column;
          }
          .secTitle {
            font-size: 32px;
          }
          .service_item_01 .siThumb {
            height: 180px;
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
        .subTitle h1 {
    color: red;
}
          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 150px;
          }
          .service_item_01 .sitem_con {
            padding: 22px 35px 23px 105px;
          }
          .service_item_01 h3 {
            font-size: 16px;
          }
          .service_item_01 p {
            font-size: 13px;
          }
          .service_item_01 .ibMeta {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: -30px auto 12px;
          }
          .client-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .beproTab .nav-link {
            padding: 8px 18px;
            font-size: 13px;
          }
          .client-badge {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: -20px;
            padding: 16px 20px;
          }
          .client-badge h2 {
            font-size: 32px;
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
          .testiItem01 {
            padding: 20px 18px;
          }
          .accordion-header {
            font-size: 14px;
            padding: 14px 16px;
          }
          .accordion-body {
            font-size: 14px;
            padding: 0 16px 16px;
          }
          .ts_author img {
            width: 50px;
            height: 50px;
          }
          .team_01 {
            padding: 14px 10px;
          }
          .team_01 h3 {
            font-size: 15px;
          }
          .tm_social a {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
          .blogContent h3 {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .service_item_01 .siThumb {
            height: 200px;
          }
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .client-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .secTitle {
            font-size: 22px;
          }
          .beproTab .nav-link {
            padding: 6px 14px;
            font-size: 12px;
          }
          .berpo_btn {
            padding: 10px 22px;
            font-size: 13px;
          }
          .testimonial-grid {
            gap: 20px;
          }
        }
      `}</style>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding" style={{ 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#0a1922'
      }}>
        {servicesBg && (
          <div
            className="background_img"
            style={{
              backgroundImage: `url(${servicesBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0
            }}
          />
        )}
        
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center"><br /><br /><br /> <br />
            <div className="subTitle" style={{ color: '#ff6b6b' }}>Our Expertise</div>
            <h2 className="secTitle" style={{ color: '#ffffff' }}>
              Core Geospatial <span style={{ color: '#bb0b0b' }}>Services</span>
            </h2>
            <p style={{ color: '#d0d0dd' }}>
              Delivering precise, data-driven solutions for modern mapping and asset management.
            </p>
          </div>

          <div className="service-grid">
            {services.map(service => (
              <div className="service_item_01" key={service.id}>
                <div className="siThumb">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="sitem_con">
                  <div className="ibMeta">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3><Link to={service.link}>{service.title}</Link></h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/services" className="berpo_btn">
              Explore All Services <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENT ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="achievement-wrap">
            <div className="achievement-content">
              <div className="subTitle"><h1 >Our Impact</h1> </div>
              <h2 className="secTitle">Delivering Geospatial Excellence</h2>
              <p style={{ color: '#f4f4fc', marginBottom: '16px' }}>
                With over 7 years of expertise, we provide innovative GIS solutions that empower organizations to make data-driven decisions.
              </p>
              <ul className="listItem">
                <li><i className="fas fa-check-circle"></i> End-to-end GIS implementation</li>
                <li><i className="fas fa-check-circle"></i> Custom web & mobile mapping</li>
                <li><i className="fas fa-check-circle"></i> LiDAR & photogrammetry processing</li>
              </ul>
              <Link to="/contact" className="berpo_btn">Get a Consultation</Link>
            </div>
            <div className="achievement-image">
              <img src={achievementImg} alt="Achievement" />
              <div className="client-badge">
                <h2>10<sup>+</sup></h2>
                <h5>Years Experience</h5>
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
            <h2 className="secTitle">Tailored <span>GIS</span> Approaches</h2>
          </div>

          <div className="beproTab">
            <button 
              className={`nav-link ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => setActiveTab('business')}
            >
              Business Growth
            </button>
            <button 
              className={`nav-link ${activeTab === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveTab('financial')}
            >
              Financial Intelligence
            </button>
            <button 
              className={`nav-link ${activeTab === 'global' ? 'active' : ''}`}
              onClick={() => setActiveTab('global')}
            >
              Global Solutions
            </button>
          </div>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab === 'business' ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2 className="secTitle" style={{ fontSize: '28px' }}>Scalable <span>GIS</span> for Business</h2>
                  <p>Our spatial intelligence solutions help businesses optimize operations, track assets, and visualize data in real-time.</p>
                  <Link to="/contact" className="berpo_btn" style={{ marginTop: '16px' }}>Learn More</Link>
                </div>
                <div className="img-col">
                  <img src={aboutImg} alt="GIS Business" />
                </div>
              </div>
            </div>
            <div className={`tab-pane ${activeTab === 'financial' ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2 className="secTitle" style={{ fontSize: '28px' }}>Revenue <span>Intelligence</span></h2>
                  <p>Leverage spatial data for property tax assessment, revenue forecasting, and asset valuation with centimeter-level accuracy.</p>
                  <Link to="/contact" className="berpo_btn" style={{ marginTop: '16px' }}>Explore</Link>
                </div>
                <div className="img-col">
                  <img src={aboutImg} alt="Financial GIS" />
                </div>
              </div>
            </div>
            <div className={`tab-pane ${activeTab === 'global' ? 'active' : ''}`}>
              <div className="tab-content-inner">
                <div className="text-col">
                  <h2 className="secTitle" style={{ fontSize: '28px' }}>Global <span>GIS</span> Solutions</h2>
                  <p>From multinational infrastructure projects to cross-border asset mapping — our solutions scale across regions and industries.</p>
                  <Link to="/contact" className="berpo_btn" style={{ marginTop: '16px' }}>Contact Us</Link>
                </div>
                <div className="img-col">
                  <img src={aboutImg} alt="Global GIS" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ===== TESTIMONIALS + ACCORDION ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="subTitle">Testimonials</div>
            <h2 className="secTitle">What Our <span>Clients</span> Say</h2>
          </div>
          <div className="testimonial-grid">
            <div>
              <div className="accordion">
                {[
                  { id: 1, q: 'Why choose our SGT solutions?', a: 'We combine cutting-edge technology with deep domain expertise to deliver accurate, actionable spatial intelligence.' },
                  { id: 2, q: 'How do we ensure data accuracy?', a: 'We use high-precision LiDAR, DGPS, and photogrammetry with rigorous quality control at every stage.' },
                  { id: 3, q: 'What industries do we serve?', a: 'Urban planning, agriculture, real estate, infrastructure, environmental monitoring, and government.' }
                ].map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <button 
                      className={`accordion-header ${openAccordion === item.id ? 'active' : ''}`}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <span><i className="fas fa-question-circle"></i> {item.q}</span>
                      <span className="arrow"><i className="fas fa-chevron-down"></i></span>
                    </button>
                    <div className={`accordion-body ${openAccordion === item.id ? 'open' : ''}`}>
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {testimonials.map((t, idx) => (
                <div key={t.id} style={{ display: activeTestimonial === idx ? 'block' : 'none' }}>
                  <div className="testiItem01">
                    <h5>Exceptional Service</h5>
                    <p className="quotation">"{t.text}"</p>
                    <div className="ts_author">
                      <img src={t.img} alt={t.name} />
                      <div>
                        <h5>{t.name}</h5>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="testimonial-controls">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    className={activeTestimonial === idx ? 'active' : ''}
                    onClick={() => setActiveTestimonial(idx)}
                  />
                ))}
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
              <h2>Business</h2>
              <h3><span className="highlight">Solutions</span> Agency</h3>
              <p style={{ color: '#b0b0c8', margin: '16px 0 24px', maxWidth: '90%' }}>
                Ready to transform your spatial data into strategic advantage?
              </p>
              <Link to="/contact" className="berpo_btn">Start a Project</Link>
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

export default Service;