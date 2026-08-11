import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Service from './pages/Service';

// Import all service detail pages
import WebGis from "./pages/services/WebGis";
import MobileGis from "./pages/services/MobileGis";
import GeoProperty from "./pages/services/GeoProperty";
import Lidar from "./pages/services/Lidar";
import Photogrammetry from "./pages/services/Photogrammetry";
import DroneSurvey from "./pages/services/DroneSurvey";
import Mapping2D from "./pages/services/Mapping2D";
import Consultancy from "./pages/services/Consultancy";
import WebDevelopment from "./pages/services/WebDevelopment";

function App() {
  return (
    <Routes>
      {/* Home with MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      
      {/* Services list with MainLayout */}
      <Route path="/services" element={<MainLayout />}>
        <Route index element={<Service />} />
      </Route>
      
      {/* Redirect /service to /services */}
      <Route path="/service" element={<Navigate to="/services" replace />} />
      
      {/* Individual service pages WITHOUT MainLayout - they have their own headers */}
      <Route path="/services/web-gis" element={<WebGis />} />
      <Route path="/services/mobile-gis" element={<MobileGis />} />
      <Route path="/services/geo-property" element={<GeoProperty />} />
      <Route path="/services/lidar" element={<Lidar />} />
      <Route path="/services/photogrammetry" element={<Photogrammetry />} />
      <Route path="/services/drone-survey" element={<DroneSurvey />} />
      <Route path="/services/2d-mapping" element={<Mapping2D />} />
      <Route path="/services/consultancy" element={<Consultancy />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
    </Routes>
  );
}

export default App;