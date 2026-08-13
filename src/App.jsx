import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";

// Service pages
import WebGis from "./pages/services/WebGis";
import MobileGis from "./pages/services/MobileGis";
import GeoProperty from "./pages/services/GeoProperty";
import Lidar from "./pages/services/Lidar";
import Photogrammetry from "./pages/services/Photogrammetry";
import DroneSurvey from "./pages/services/DroneSurvey";
import Mapping2D from "./pages/services/Mapping2D";
import Consultancy from "./pages/services/Consultancy";
import WebDevelopment from "./pages/services/WebDevelopment";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      {/* ================================
          ALL PAGES USE MAIN LAYOUT
          ================================ */}
      <Route path="/" element={<MainLayout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* About */}
        <Route path="about" element={<About />} />
         {/* contact */}
        <Route path="contact" element={<Contact />} />
        {/* Services */}
        <Route path="services">
          <Route index element={<Service />} />
         
      
         

          {/* Individual Services */}
          <Route path="web-gis" element={<WebGis />} />
          <Route path="mobile-gis" element={<MobileGis />} />
          <Route path="geo-property" element={<GeoProperty />} />
          <Route path="lidar" element={<Lidar />} />
          <Route path="photogrammetry" element={<Photogrammetry />} />
          <Route path="drone-survey" element={<DroneSurvey />} />
          <Route path="2d-mapping" element={<Mapping2D />} />
          <Route path="consultancy" element={<Consultancy />} />
          <Route path="web-development" element={<WebDevelopment />} />
        </Route>

      </Route>

      {/* Old /service URL → /services */}
      <Route
        path="/service"
        element={<Navigate to="/services" replace />}
      />

      {/* Unknown URL → Home */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;