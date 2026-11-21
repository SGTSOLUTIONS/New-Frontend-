// src/layouts/EmployeeLayout.jsx

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import EmployeeHeader from "../components/employee/EmployeeHeader";
import EmployeeSidebar from "../components/employee/EmployeeSidebar";
import EmployeeFooter from "../components/employee/EmployeeFooter";

import "../assets/css/employee-layout.css";

const EmployeeLayout = () => {
  // Desktop sidebar state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close mobile sidebar when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Desktop sidebar collapse
  const toggleSidebar = () => {
    if (window.innerWidth <= 992) {
      setSidebarOpen((prev) => !prev);
    } else {
      setSidebarCollapsed((prev) => !prev);
    }
  };

  // Close sidebar after selecting a menu item on mobile
  const closeSidebar = () => {
    if (window.innerWidth <= 992) {
      setSidebarOpen(false);
    }
  };

  return (
    <div
      className={`employee-layout ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="employee-sidebar-overlay active"
          onClick={closeSidebar}
        />
      )}

      {/* Employee Sidebar */}
      <EmployeeSidebar
        isOpen={sidebarOpen}
        isCollapsed={sidebarCollapsed}
        onNavigate={closeSidebar}
      />

      {/* Main Content */}
      <div
        className={`employee-main ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >

        {/* Employee Header */}
        <EmployeeHeader
          toggleSidebar={toggleSidebar}
          isCollapsed={sidebarCollapsed}
          sidebarOpen={sidebarOpen}
        />

        {/* Page Content */}
        <div className="employee-content-wrapper">
          <div className="employee-content">
            <Outlet />
          </div>
        </div>

        {/* Employee Footer */}
        <EmployeeFooter />

      </div>
    </div>
  );
};

export default EmployeeLayout;
