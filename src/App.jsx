// App.jsx
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Frontend Pages
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import './assets/css/responsive.css';

// Service pages
import WebGis from './pages/services/WebGis';
import MobileGis from './pages/services/MobileGis';
import GeoProperty from './pages/services/GeoProperty';
import Lidar from './pages/services/Lidar';
import Photogrammetry from './pages/services/Photogrammetry';
import DroneSurvey from './pages/services/DroneSurvey';
import Mapping2D from './pages/services/Mapping2D';
import Consultancy from './pages/services/Consultancy';
import WebDevelopment from './pages/services/WebDevelopment';

// Auth pages
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Resgister';

// Admin Pages
import Dashboard from './pages/Admin/Dashboard';
import Project from './pages/Admin/project';
// Add more admin pages as needed
// import Users from './pages/Admin/Users';
// import Services from './pages/Admin/Services';

function App() {
  function AuthCheck() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return <Outlet />;
  }

  function LoginCheck() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }
    return <AuthLayout />;
  }

  return (
    <Routes>
      {/* ================================
          ALL CLIENT PAGES USE MAIN LAYOUT
          ================================ */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services">
          <Route index element={<Service />} />
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

      {/* AUTH PAGES */}
      <Route path="/" element={<LoginCheck />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* ADMIN PAGES - Protected */}
      <Route element={<AuthCheck />}>

        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        
          <Route path="project" element={<Project />} />
          {/* <Route path="services" element={<Services />} /> */}
        </Route>

      </Route>
    </Routes>
  );
}

export default App;