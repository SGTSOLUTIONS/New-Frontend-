import React from 'react';
import { Outlet } from 'react-router-dom';
import "../assets/css/auth/AuthLayout.css";

const AuthLayout = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="logo-icon">🌍</div>
            <h2>GeoGIS</h2>
            <p>Enterprise Geospatial Solutions</p>
          </div>
          <Outlet />
        </div>
        <div className="auth-footer">
          <p>&copy; 2026 GeoGIS. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;