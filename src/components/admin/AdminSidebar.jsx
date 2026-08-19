// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = ({ isOpen, isCollapsed }) => {
  const menuItems = [
    {
      title: 'Dashboard',
      icon: 'fa-dashboard',
      path: '/dashboard',
      exact: true
    },
    {
      title: 'Projects',
      icon: 'fa-cubes',
      path: '/dashboard/project',
      exact: true
    },
    {
      title: 'Users',
      icon: 'fa-users',
      path: '/dashboard/users',
      children: [
        { title: 'All Users', path: '/dashboard/users' },
        { title: 'Add User', path: '/dashboard/users/add' },
        { title: 'Roles', path: '/dashboard/users/roles' }
      ]
    },
    {
      title: 'Content',
      icon: 'fa-file-alt',
      path: '/dashboard/content',
      children: [
        { title: 'Pages', path: '/dashboard/content/pages' },
        { title: 'Blog Posts', path: '/dashboard/content/blog' },
        { title: 'Media', path: '/dashboard/content/media' }
      ]
    },
    {
      title: 'Analytics',
      icon: 'fa-chart-line',
      path: '/dashboard/analytics'
    },
    {
      title: 'Settings',
      icon: 'fa-cog',
      path: '/dashboard/settings',
      children: [
        { title: 'General', path: '/dashboard/settings' },
        { title: 'Security', path: '/dashboard/settings/security' },
        { title: 'Backup', path: '/dashboard/settings/backup' }
      ]
    }
  ];

  const renderMenuItem = (item, index) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <li key={index} className={`nav-item ${hasChildren ? 'has-dropdown' : ''}`}>
        {hasChildren ? (
          <>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed' : ''}`
              }
              data-bs-toggle={!isCollapsed ? 'collapse' : undefined}
              data-bs-target={`#menu-${index}`}
              aria-expanded="false"
              aria-controls={`menu-${index}`}
            >
              <i className={`fas ${item.icon}`}></i>
              {!isCollapsed && (
                <>
                  <span className="menu-title">{item.title}</span>
                  <span className="menu-arrow">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </>
              )}
            </NavLink>
            {!isCollapsed && (
              <ul className="collapse sub-menu" id={`menu-${index}`}>
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className="nav-item">
                    <NavLink
                      to={child.path}
                      className={({ isActive }) => 
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      <span className="menu-title">{child.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <NavLink
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <i className={`fas ${item.icon}`}></i>
            {!isCollapsed && <span className="menu-title">{item.title}</span>}
          </NavLink>
        )}
      </li>
    );
  };

  return (
    <aside className={`admin-sidebar ${isOpen ? 'open' : 'closed'} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="brand-wrapper">
          <i className="fas fa-cube brand-icon"></i>
          {!isCollapsed && (
            <span className="brand-text">SGT SOLUTIONS</span>
          )}
        </div>
        {isCollapsed && (
          <div className="brand-icon-small">
            <i className="fas fa-cube"></i>
          </div>
        )}
      </div>

      <div className="sidebar-user-info">
        <img
          src="https://ui-avatars.com/api/?name=Admin+User&background=0D6EFD&color=fff&size=40"
          alt="User"
          className="rounded-circle"
          width="40"
          height="40"
        />
        {!isCollapsed && (
          <div className="user-details">
            <h6 className="mb-0">Admin User</h6>
            <small className="text-muted">Administrator</small>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        {!isCollapsed ? (
          <div className="sidebar-footer-content">
            <i className="fas fa-copyright me-1"></i>
            <span>2026 Admin Panel</span>
          </div>
        ) : (
          <div className="sidebar-footer-icon">
            <i className="fas fa-copyright"></i>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;