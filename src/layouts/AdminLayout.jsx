// src/layouts/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminFooter from '../components/admin/AdminFooter';
import '../assets/css/admin-layout.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="admin-layout">
      <AdminSidebar isOpen={sidebarOpen} isCollapsed={sidebarCollapsed} />
      <div className={`admin-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <AdminHeader toggleSidebar={toggleSidebar} isCollapsed={sidebarCollapsed} />
        <div className="admin-content-wrapper">
          <div className="admin-content">
            <Outlet />
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;