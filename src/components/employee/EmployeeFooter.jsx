// src/components/employee/EmployeeFooter.jsx

import React from "react";
import { Link } from "react-router-dom";

const EmployeeFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="employee-footer">

      <div className="container-fluid">

        <div className="row align-items-center">

          {/* Copyright */}

          <div className="col-md-6">

            <p className="employee-footer-copyright mb-0">
              &copy; {currentYear} SGT SOLUTIONS.
              All rights reserved.
            </p>

          </div>

          {/* Footer Links */}

          <div className="col-md-6">

            <ul className="employee-footer-links list-inline mb-0">

              <li className="list-inline-item">
                <Link to="/employee/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="/employee/profile">
                  My Profile
                </Link>
              </li>

              <li className="list-inline-item">
                <a href="mailto:info@sgtsolutions.in">
                  Support
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default EmployeeFooter;
