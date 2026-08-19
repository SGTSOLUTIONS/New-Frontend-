// src/pages/Admin/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 
  return (
    <div className="dashboard-page">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Dashboard</h4>
        <div>
          <button className="btn btn-sm btn-outline-primary me-2">
            <i className="fas fa-download me-1"></i> Export
          </button>
          <button className="btn btn-sm btn-primary">
            <i className="fas fa-plus me-1"></i> Add New
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;