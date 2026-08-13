import React, { useState } from 'react';
import ServiceDetailLayout from './ServiceDetailLayout';

const Photogrammetry = () => {
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
    setFeedback(`✅ Thanks ${name}! A photogrammetry specialist will contact ${email} within 24h.`);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowModal(false);
      setFeedback('');
    }, 2800);
  };

  const features = [
    { icon: 'fa-drone', title: 'UAV / Drone Photogrammetry', desc: 'High-resolution orthomosaics, DSMs, and 3D meshes from automated drone flights.' },
    { icon: 'fa-plane', title: 'Manned Aerial Mapping', desc: 'Large-area coverage with fixed-wing aircraft and metric cameras.' },
    { icon: 'fa-mobile-alt', title: 'Close-Range & Terrestrial', desc: 'Facade mapping, heritage documentation, and crime scene reconstruction.' },
    { icon: 'fa-map', title: 'Orthomosaics & Orthophotos', desc: 'Geometrically corrected, seamless image mosaics with true orthorectification.' },
    { icon: 'fa-cubes', title: '3D Mesh & Textured Models', desc: 'Photo-realistic 3D models for digital twins and volume visualization.' },
    { icon: 'fa-chart-line', title: 'Contour & Volumetric Analysis', desc: 'Generate contours from photogrammetric DSMs and compute cut/fill volumes.' }
  ];

  return (
    <ServiceDetailLayout
      heroIcon="fa-camera"
      heroTitle="Photogrammetry"
      heroDescription="Turn millions of overlapping images into geospatially-accurate 3D models, orthomosaics, and digital surface models — drone, aerial, and terrestrial photogrammetry for any project scale."
      sectionTitle="From Pixels to Precision Geospatial Data"
      leadText="Photogrammetry extracts 3D measurements and realistic textures from standard digital imagery. Our end-to-end pipeline delivers survey-grade outputs at a fraction of traditional surveying costs."
      features={features}
      ctaText="Request Photogrammetry Quote"
      ctaSubtext="From 5 to 500 field users — we equip your team with modern photogrammetry solutions."
      modalTitle="Photogrammetry Inquiry"
      modalDescription="Tell us about your area, required accuracy, and deliverables."
      handleSubmit={handleSubmit}
      formData={formData}
      handleInputChange={handleInputChange}
      feedback={feedback}
      showModal={showModal}
      setShowModal={setShowModal}
      brandColor="#0f7b6e"
      gradientColors="linear-gradient(100deg, #0f7b6e, #2aa58e)"
      iconBg="linear-gradient(135deg, #0f7b6e, #4BC0B0)"
    />
  );
};

export default Photogrammetry;