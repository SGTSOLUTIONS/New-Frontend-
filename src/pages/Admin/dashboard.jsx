// src/pages/Admin/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample stats data
  const stats = [
    { title: 'Total Users', value: '1,245', icon: 'fa-users', color: 'primary' },
    { title: 'Services', value: '48', icon: 'fa-cubes', color: 'success' },
    { title: 'Revenue', value: '$12,450', icon: 'fa-dollar-sign', color: 'warning' },
    { title: 'Pending Tasks', value: '12', icon: 'fa-tasks', color: 'danger' }
  ];

  // Sample recent activities
  const recentActivities = [
    { user: 'John Doe', action: 'added a new service', time: '5 minutes ago', avatar: 'JD' },
    { user: 'Jane Smith', action: 'updated user profile', time: '1 hour ago', avatar: 'JS' },
    { user: 'Mike Johnson', action: 'published a blog post', time: '3 hours ago', avatar: 'MJ' },
    { user: 'Sarah Wilson', action: 'created a new category', time: '5 hours ago', avatar: 'SW' }
  ];

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

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className={`bg-${stat.color} bg-opacity-10 rounded-3 p-3 me-3`}>
                    <i className={`fas ${stat.icon} text-${stat.color} fs-3`}></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1">{stat.title}</h6>
                    <h3 className="mb-0">{stat.value}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Recent Activities */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-bottom">
              <h5 className="mb-0">Recent Activities</h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="list-group-item d-flex align-items-center">
                    <div className="me-3">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                           style={{ width: '40px', height: '40px' }}>
                        <span className="text-white fw-bold">{activity.avatar}</span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">
                        <strong>{activity.user}</strong> {activity.action}
                      </p>
                      <small className="text-muted">{activity.time}</small>
                    </div>
                    <Link to="#" className="text-decoration-none">
                      <i className="fas fa-chevron-right text-muted"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-bottom">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-6">
                  <Link to="/dashboard/services/add" className="text-decoration-none">
                    <div className="p-3 border rounded-3 text-center hover-shadow">
                      <i className="fas fa-plus-circle text-primary fs-2 mb-2"></i>
                      <p className="mb-0 small">Add Service</p>
                    </div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/dashboard/users/add" className="text-decoration-none">
                    <div className="p-3 border rounded-3 text-center hover-shadow">
                      <i className="fas fa-user-plus text-success fs-2 mb-2"></i>
                      <p className="mb-0 small">Add User</p>
                    </div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/dashboard/content/blog" className="text-decoration-none">
                    <div className="p-3 border rounded-3 text-center hover-shadow">
                      <i className="fas fa-file-alt text-info fs-2 mb-2"></i>
                      <p className="mb-0 small">New Post</p>
                    </div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/dashboard/settings" className="text-decoration-none">
                    <div className="p-3 border rounded-3 text-center hover-shadow">
                      <i className="fas fa-cog text-warning fs-2 mb-2"></i>
                      <p className="mb-0 small">Settings</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section (Placeholder) */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-transparent border-bottom">
              <h5 className="mb-0">Monthly Statistics</h5>
            </div>
            <div className="card-body">
              <div className="text-center py-5">
                <i className="fas fa-chart-bar text-muted fs-1 mb-3"></i>
                <p className="text-muted">Chart will be displayed here</p>
                <div className="bg-light rounded-3 p-3">
                  <div className="d-flex justify-content-around align-items-end" style={{ height: '150px' }}>
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((height, index) => (
                      <div key={index} className="d-flex flex-column align-items-center">
                        <div 
                          className="bg-primary rounded-3" 
                          style={{ 
                            width: '30px', 
                            height: `${height}px`,
                            transition: 'height 0.5s ease'
                          }}
                        ></div>
                        <small className="text-muted mt-1">{`${index + 1}`}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;