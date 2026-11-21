import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../features/auth/authSlice";

const EmployeeHeader = ({
  toggleSidebar,
  isCollapsed,
  sidebarOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Employee details
  const employeeName = user?.name || "Employee";
  const employeeEmail = user?.email || "";
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  // Logout
  const handleLogout = async () => {
    setProfileOpen(false);

    await dispatch(logoutUser());

    navigate("/login", {
      replace: true,
    });
  };

  // Toggle profile dropdown
  const toggleProfile = () => {
    setProfileOpen((prev) => !prev);
    setNotificationOpen(false);
  };

  // Toggle notification dropdown
  const toggleNotifications = () => {
    setNotificationOpen((prev) => !prev);
    setProfileOpen(false);
  };

  return (
    <header className="employee-header navbar navbar-expand-lg">

      <div className="container-fluid">

        {/* ======================================
            LEFT SIDE
        ====================================== */}

        <div className="employee-header-left">

          {/* Sidebar Toggle */}

          <button
            type="button"
            className="employee-sidebar-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <i
              className={`fas ${
                sidebarOpen
                  ? "fa-xmark"
                  : isCollapsed
                  ? "fa-bars"
                  : "fa-bars"
              }`}
            ></i>
          </button>

          {/* Page Branding */}

          <div className="employee-header-title">
            <span className="employee-header-heading">
              Employee Portal
            </span>

            <span className="employee-header-subtitle">
              SGT SOLUTIONS
            </span>
          </div>

        </div>

        {/* ======================================
            RIGHT SIDE
        ====================================== */}

        <div className="employee-header-right">

          {/* Notifications */}

          <div
            className="employee-header-dropdown notification-wrapper"
            ref={notificationRef}
          >

            <button
              type="button"
              className={`employee-notification-btn ${
                notificationOpen ? "active" : ""
              }`}
              onClick={toggleNotifications}
              aria-label="Notifications"
              aria-expanded={notificationOpen}
            >
              <i className="fas fa-bell"></i>
              <span className="notification-dot"></span>
            </button>

            {notificationOpen && (
              <div className="employee-dropdown-menu notification-menu">

                <div className="employee-dropdown-header">
                  <h6>Notifications</h6>
                  <span>Recent</span>
                </div>

                <div className="employee-notification-empty">

                  <div className="notification-empty-icon">
                    <i className="far fa-bell-slash"></i>
                  </div>

                  <p>No new notifications</p>

                  <small>
                    You're all caught up!
                  </small>

                </div>

              </div>
            )}

          </div>

          {/* Employee Profile */}

          <div
            className="employee-header-dropdown profile-wrapper"
            ref={profileRef}
          >

            <button
              type="button"
              className="employee-profile-btn"
              onClick={toggleProfile}
              aria-expanded={profileOpen}
            >

              <img
                src={profileImage}
                alt="Employee"
                className="employee-header-avatar"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=Employee&background=14532D&color=fff&size=80";
                }}
              />

              <div className="employee-profile-info">

                <span className="employee-profile-name">
                  {employeeName}
                </span>

                <small className="employee-profile-role">
                  {employeeRole}
                </small>

              </div>

              <i
                className={`fas fa-chevron-down employee-profile-arrow ${
                  profileOpen ? "rotated" : ""
                }`}
              ></i>

            </button>

            {profileOpen && (
              <div className="employee-dropdown-menu profile-menu">

                {/* Profile Details */}

                <div className="employee-dropdown-user">

                  <img
                    src={profileImage}
                    alt="Employee"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=Employee&background=14532D&color=fff&size=80";
                    }}
                  />

                  <div>
                    <h6>{employeeName}</h6>
                    <small>{employeeEmail}</small>
                  </div>

                </div>

                <div className="employee-dropdown-divider"></div>

                {/* My Profile */}

                <Link
                  to="/employee/profile"
                  className="employee-dropdown-item"
                  onClick={() => setProfileOpen(false)}
                >
                  <i className="fas fa-user"></i>
                  <span>My Profile</span>
                </Link>

                {/* Salary Details */}

                <Link
                  to="/employee/salary"
                  className="employee-dropdown-item"
                  onClick={() => setProfileOpen(false)}
                >
                  <i className="fas fa-wallet"></i>
                  <span>Salary Details</span>
                </Link>

                <div className="employee-dropdown-divider"></div>

                {/* Logout */}

                <button
                  type="button"
                  className="employee-dropdown-item logout-item"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </header>
  );
};

export default EmployeeHeader;
