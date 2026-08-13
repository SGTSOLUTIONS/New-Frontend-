import React, { useState } from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const Mapping2D = () => {
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
    setFeedback(`✅ Thanks ${name}! A mapping specialist will contact ${email} within 24h with sample map products and a custom quote.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  const features = [
    { icon: 'fa-draw-polygon', title: 'Planimetric Mapping', desc: 'Roads, buildings, water bodies, vegetation, and utility networks extracted from high-res imagery. Clean, editable vector layers for CAD and GIS.' },
    { icon: 'fa-chart-line', title: 'Topographic Contour Mapping', desc: '1m, 2m, or 5m contours derived from photogrammetry or LiDAR. Ideal for civil design, flood modeling, and site grading analysis.' },
    { icon: 'fa-satellite-dish', title: 'Satellite & Aerial Orthomosaics', desc: 'High-resolution seamless orthophotos (5cm to 50cm GSD) from drones, aircraft, or satellites. Georeferenced and ready for overlay.' },
    { icon: 'fa-layer-group', title: 'Thematic & Land Use Mapping', desc: 'Land cover classification, zoning maps, agricultural field boundaries, and environmental sensitivity layers — customized to your schema.' },
    { icon: 'fa-building', title: 'Infrastructure & Utility Mapping', desc: 'Gas, water, electric, and telecom networks mapped as accurate 2D features with attribution (diameter, material, ownership).' },
    { icon: 'fa-water', title: 'Hydrographic & Flood Mapping', desc: 'River centerlines, floodplain extents, drainage networks, and wetland boundaries from imagery and field-verified data.' }
  ];

  return (
    <ServiceDetailLayout
      heroIcon="fa-map"
      heroTitle="2D Mapping • Planimetric & Thematic"
      heroDescription="Precision orthomosaics, topographic base maps, land cover classification, and infrastructure plans — accurate 2D geospatial data from aerial imagery, satellite, and field surveys."
      sectionTitle="Cartographic Excellence, Geospatial Precision"
      leadText="2D mapping remains the backbone of planning, engineering, and environmental management. We produce high-fidelity planimetric maps, topographic sheets, thematic layers, and orthorectified imagery — all with survey-grade accuracy and rich attribution."
      features={features}
      ctaText="Request 2D Mapping Quote"
      ctaSubtext="From 10-hectare forest plots to 100km transmission lines — we deploy the right LiDAR platform for your accuracy and budget."
      modalTitle="2D Mapping Inquiry"
      modalDescription="Tell us about your area, required accuracy, and deliverables."
      handleSubmit={handleSubmit}
      formData={formData}
      handleInputChange={handleInputChange}
      feedback={feedback}
      showModal={showModal}
      setShowModal={setShowModal}
      brandColor="#2c6e9e"
      gradientColors="linear-gradient(100deg, #1e4a76, #2c6e9e)"
      iconBg="linear-gradient(135deg, #1e4a76, #4a8fc7)"
    />
  );
};

export default Mapping2D;