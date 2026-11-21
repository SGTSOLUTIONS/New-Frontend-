import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const EmployeeSidebar = ({
  isOpen,
  isCollapsed,
  onNavigate,
}) => {
  // Get authenticated employee details
  const { user } = useSelector((state) => state.auth);

  // Employee navigation menu
  const menuItems = [
    {
      title: "Dashboard",
      icon: "fa-gauge-high",
      path: "/employee/dashboard",
      end: true,
    },
    {
      title: "My Profile",
      icon: "fa-user",
      path: "/employee/profile",
    },
    {
      title: "Attendance",
      icon: "fa-calendar-check",
      path: "/employee/attendance",
    },
    {
      title: "Leave Management",
      icon: "fa-calendar-minus",
      path: "/employee/leave",
    },
    {
      title: "Holidays",
      icon: "fa-calendar-days",
      path: "/employee/holidays",
    },
    {
      title: "Salary Details",
      icon: "fa-wallet",
      path: "/employee/salary",
    },
    {
      title: "Payslips",
      icon: "fa-file-invoice-dollar",
      path: "/employee/payslips",
    },
    {
      title: "Documents",
      icon: "fa-folder-open",
      path: "/employee/documents",
    },
  ];

  // Employee display information
  const employeeName = user?.name || "Employee";

  const employeeRole =
    user?.employee?.designation ||
    user?.designation ||
    "Employee";

  const profileImage =
    user?.avatar ||
    user?.profile_image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      employeeName
    )}&background=14532D&color=fff&size=80`;

  return (
    <aside
      className={`employee-sidebar ${
        isOpen ? "open" : "closed"
      } ${isCollapsed ? "collapsed" : ""}`}
    >
      {/* ======================================
          SIDEBAR BRAND
      ====================================== */}

      <div className="employee-sidebar-header">

        <div className="employee-brand-wrapper">

          <div className="employee-brand-icon">
            <i className="fas fa-globe"></i>
          </div>

          {!isCollapsed && (
            <div className="employee-brand-text">
              <span>SGT SOLUTIONS</span>
              <small>Employee Portal</small>
            </div>
          )}

        </div>

      </div>

      {/* ======================================
          EMPLOYEE PROFILE
      ====================================== */}

      <div className="employee-sidebar-user">

        <img
          src={profileImage}
          alt="Employee Profile"
          className="employee-sidebar-avatar"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://ui-avatars.com/api/?name=Employee&background=14532D&color=fff&size=80";
          }}
        />

        {!isCollapsed && (
          <div className="employee-sidebar-user-details">

            <h6 title={employeeName}>
              {employeeName}
            </h6>

            <small title={employeeRole}>
              {employeeRole}
            </small>

          </div>
        )}

      </div>

      {/* ======================================
          NAVIGATION MENU
      ====================================== */}

      <nav className="employee-sidebar-nav">

        {!isCollapsed && (
          <div className="employee-menu-heading">
            MAIN MENU
          </div>
        )}

        <ul className="nav flex-column">

          {menuItems.map((item) => (
            <li
              className="nav-item"
              key={item.path}
            >

              <NavLink
                to={item.path}
                end={item.end || false}
                title={isCollapsed ? item.title : undefined}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >

                <i className={`fas ${item.icon}`}></i>

                {!isCollapsed && (
                  <span className="employee-menu-title">
                    {item.title}
                  </span>
                )}

              </NavLink>

            </li>
          ))}

        </ul>

      </nav>

      {/* ======================================
          SIDEBAR FOOTER
      ====================================== */}

      <div className="employee-sidebar-footer">

        {!isCollapsed ? (
          <div className="employee-sidebar-footer-content">

            <i className="fas fa-shield-halved"></i>

            <span>
              Secure Employee Portal
            </span>

          </div>
        ) : (
          <div
            className="employee-sidebar-footer-icon"
            title="Secure Employee Portal"
          >
            <i className="fas fa-shield-halved"></i>
          </div>
        )}

      </div>

    </aside>
  );
};

export default EmployeeSidebar;
