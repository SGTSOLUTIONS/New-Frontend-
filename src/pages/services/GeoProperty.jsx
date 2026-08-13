import React, { useState } from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

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
    <ServiceDetailLayout
      heroIcon="fa-chart-line"
      heroTitle="Spatial Revenue Intelligence System"
      heroDescription="The Spatial Revenue Intelligent System (SRIS) is a smart digital Web GIS platform developed for efficient mapping and management of municipal properties. It enables real-time visualization, monitoring, and spatial analysis of assets such as buildings, roads, water connections, tax properties, Professional Tax and UGD through an interactive map-based system."
      sectionTitle="Intelligent GIS for Urban Governance"
      leadText="SRIS empowers local bodies with a unified geospatial framework for asset inventory, revenue monitoring, and smart decision-making. From property tax to underground drainage, every asset is mapped, tracked, and analyzed."
      features={features}
      ctaText="Request SRIS Demo"
      ctaSubtext="Transform your municipality's revenue management with spatial intelligence."
      modalTitle="SRIS Implementation Inquiry"
      modalDescription="Tell us about your municipality, number of properties, and revenue management goals."
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

export default GeoProperty;