// src/components/admin/AdminHeader.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AdminHeader = ({ toggleSidebar, isCollapsed }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    // dispatch logout action
    // dispatch(logout());
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  return (
    <nav className="admin-header navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        {/* Sidebar Toggle Button */}
        <button
          className="btn btn-link sidebar-toggle"
          onClick={toggleSidebar}
          type="button"
        >
          <i className={`fas ${isCollapsed ? 'fa-bars' : 'fa-chevron-left'}`}></i>
        </button>

        {/* Brand/Logo */}
        <Link to="/dashboard" className="navbar-brand d-lg-none">
          <span className="brand-text">Admin</span>
        </Link>

        {/* Right Side Controls */}
        <div className="ms-auto d-flex align-items-center">
          {/* Search Bar */}
          <div className="search-wrapper me-3 d-none d-md-block">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary btn-sm" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

         

          {/* User Profile Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle user-profile-btn"
              onClick={toggleDropdown}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <img
                src={user?.avatar || 'https://ui-avatars.com/api/?name=Admin+User&background=0D6EFD&color=fff&size=32'}
                alt="User"
                className="rounded-circle me-2"
                width="32"
                height="32"
              />
              <span className="d-none d-md-inline">{user?.name || 'Admin'}</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu dropdown-menu-end show">
                <div className="dropdown-header">
                  <h6 className="mb-0">{user?.name || 'Admin User'}</h6>
                  <small className="text-muted">{user?.email || 'admin@example.com'}</small>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/dashboard/profile" className="dropdown-item">
                  <i className="fas fa-user me-2"></i> Profile
                </Link>
                <Link to="/dashboard/settings" className="dropdown-item">
                  <i className="fas fa-cog me-2"></i> Settings
                </Link>
                <Link to="/dashboard/activity" className="dropdown-item">
                  <i className="fas fa-clock me-2"></i> Activity Log
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item text-danger" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt me-2"></i> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;