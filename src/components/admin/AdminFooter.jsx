// src/components/admin/AdminFooter.jsx
import React from 'react';

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="admin-footer">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; {currentYear} SGT SOLUTIONS. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <ul className="footer-links list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;