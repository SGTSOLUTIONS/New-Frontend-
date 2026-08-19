import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
// In your App.js or main component
import './assets/css/responsive.css';

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
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Resgister";

function App() {

  function AuthCheck() {

    const isAuthenticated = useSelector(
      (state) => state.auth.isAuthenticated
    );

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  }
  function LoginCheck() {

    const isAuthenticated = useSelector(
      (state) => state.auth.isAuthenticated
    );

    if (isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }

    return <AuthLayout />;
  }


  return (
    <Routes>

      {/* ================================
          ALL client  PAGES USE MAIN LAYOUT
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



      {/* auth pages  */}
      <Route path="/" element={<LoginCheck />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route> <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      {/* COMMON AUTH CHECK */}

      <Route element={<AuthCheck />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/users" element={<Users />} />

      </Route>
    </Routes>
  );
}

export default App;