import React, { useState } from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const WebGis = () => {
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
    setFeedback(`✅ Thanks ${name}! A Web GIS specialist will contact ${email} within 24h with portfolio examples and a custom proposal.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  const features = [
    { icon: 'fa-layer-group', title: 'Interactive Map Portals', desc: 'Custom web maps with pan, zoom, layer toggles, pop-up attributes, and search functionality — intuitive for non-GIS users.' },
    { icon: 'fa-database', title: 'Spatial Data Publishing', desc: 'Publish shapefiles, GeoJSON, rasters, and tile layers as OGC compliant WMS, WMTS, WFS, or vector tiles. Seamless integration.' },
    { icon: 'fa-draw-polygon', title: 'Feature Editing & Data Collection', desc: 'Web-based digitizing, form-based attribute entry, and geometry editing — perfect for collaborative mapping projects.' },
    { icon: 'fa-chart-simple', title: 'Location Analytics Dashboards', desc: 'Combine maps with charts, filters, and summary statistics. Identify hotspots, clusters, and spatial patterns at a glance.' },
    { icon: 'fa-route', title: 'Routing & Geocoding', desc: 'Address search, reverse geocoding, point-to-point routing, and isochrone analysis — turn locations into insights.' },
    { icon: 'fa-users', title: 'Multi-User & Role-Based Access', desc: 'Secure login, user roles, and data-level permissions. Share sensitive layers only with authorized teams.' }
  ];

  return (
    <ServiceDetailLayout
      heroIcon="fa-map-marked-alt"
      heroTitle="Web GIS • Spatial Data Platforms"
      heroDescription="Interactive mapping portals, location intelligence dashboards, and geospatial data publishing — put your maps and analysis in the hands of every stakeholder, anywhere."
      sectionTitle="Maps That Work Across Your Organization"
      leadText="Web GIS transforms static spatial data into dynamic, interactive experiences. We build custom web mapping platforms that enable data visualization, querying, editing, and collaboration — accessible on desktop, tablet, and mobile without any GIS software required."
      features={features}
      ctaText="Start Your Web GIS Project"
      ctaSubtext="Let's discuss your data and users — we'll build a Web GIS platform that turns location data into decisions."
      modalTitle="Web GIS Project Inquiry"
      modalDescription="Tell us about your spatial data, target users, required functionality, and timeline."
      handleSubmit={handleSubmit}
      formData={formData}
      handleInputChange={handleInputChange}
      feedback={feedback}
      showModal={showModal}
      setShowModal={setShowModal}
      brandColor="#0891b2"
      gradientColors="linear-gradient(100deg, #0e7490, #0891b2)"
      iconBg="linear-gradient(135deg, #0e7490, #22d3ee)"
    />
  );
};

export default WebGis;