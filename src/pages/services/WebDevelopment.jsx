import React, { useState } from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const WebDevelopment = () => {
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
    setFeedback(`✅ Thanks ${name}! A web development specialist will contact ${email} within 24h with portfolio samples and a custom quote.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  const features = [
    { icon: 'fa-laptop-code', title: 'Custom Website Design', desc: 'Fully responsive, mobile-first websites that reflect your brand identity. Clean UI/UX, intuitive navigation, and conversion-focused layouts.' },
    { icon: 'fa-cart-shopping', title: 'E-Commerce Solutions', desc: 'Secure online stores with product catalogs, payment gateways, inventory management, and order tracking — built on WooCommerce or custom solutions.' },
    { icon: 'fa-database', title: 'Web GIS & Mapping Portals', desc: 'Interactive map dashboards, spatial data visualization, and location-based services using Leaflet, Mapbox GL, OpenLayers, or Esri JS API.' },
    { icon: 'fa-tachometer-alt', title: 'CMS Development', desc: 'WordPress, custom admin panels, or headless CMS — you control your content. Easy updates without touching code.' },
    { icon: 'fa-chart-line', title: 'Web Applications & Dashboards', desc: 'Custom business tools, data dashboards, client portals, and internal systems with real-time updates and role-based access.' },
    { icon: 'fa-search', title: 'SEO & Performance Optimization', desc: 'Fast load times, Core Web Vitals compliance, meta tagging, and structured data — get discovered and keep users engaged.' }
  ];

  return (
    <ServiceDetailLayout
      heroIcon="fa-code"
      heroTitle="Website Development"
      heroDescription="Custom websites, web applications, and digital platforms — modern, responsive, and built for performance. From corporate sites to complex geospatial web portals."
      sectionTitle="Digital Experiences Engineered for Impact"
      leadText="Your website is your digital headquarters. We build fast, secure, and scalable web solutions tailored to your brand and business goals. Whether you need a showcase site, an e-commerce platform, or a data-driven web GIS portal — we deliver code that works."
      features={features}
      ctaText="Start Your Web Project"
      ctaSubtext="Let's discuss your vision — from concept to launch, we build websites that deliver results."
      modalTitle="Website Development Inquiry"
      modalDescription="Tell us about your website needs — type of site, features, timeline, and budget range."
      handleSubmit={handleSubmit}
      formData={formData}
      handleInputChange={handleInputChange}
      feedback={feedback}
      showModal={showModal}
      setShowModal={setShowModal}
      brandColor="#7c3aed"
      gradientColors="linear-gradient(100deg, #5b21b6, #7c3aed)"
      iconBg="linear-gradient(135deg, #5b21b6, #a78bfa)"
    />
  );
};

export default WebDevelopment;