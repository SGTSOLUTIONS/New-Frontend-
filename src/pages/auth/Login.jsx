// src/pages/auth/Login.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/css/auth/AuthLayout.css";

import {
  loginUser,
  clearErrors,
} from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [isAuthenticated, navigate]);

  // Show/hide password
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear Redux error
    if (error && Object.keys(error).length > 0) {
      dispatch(clearErrors());
    }
  };

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    dispatch(clearErrors());

    // Redux login
    const result = await dispatch(
      loginUser({
        email: formData.email,
        password: formData.password,
        remember: formData.remember,
      })
    );

    // Login successful
    if (loginUser.fulfilled.match(result)) {
      navigate("/dashboard");
    }
    // Login failed - error will be in Redux state
  };

  // Helper to display error messages from Redux
  const getFieldError = (fieldName) => {
    // Check if error is a string (general error)
    if (typeof error === 'string') {
      return fieldName === 'general' ? error : null;
    }
    
    // Check if error object has field-specific message
    if (error && typeof error === 'object' && error[fieldName]) {
      return error[fieldName];
    }
    
    return null;
  };

  const generalError = getFieldError('general') || 
                       (typeof error === 'string' ? error : null);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>

        {/* Heading */}
        <h3>Welcome Back</h3>

        <p className="login-subtitle">
          Sign in to access your account
        </p>

        {/* ================= EMAIL ================= */}
        <div className="form-group">
          <label htmlFor="email">
            Email Address <span className="required">*</span>
          </label>

          <div className="input-wrapper">
            <span className="input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4
                  c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={getFieldError('email') ? "error" : ""}
              autoComplete="email"
              aria-invalid={!!getFieldError('email')}
              aria-describedby="email-error"
            />
          </div>

          {getFieldError('email') && (
            <span id="email-error" className="error-message">
              {getFieldError('email')}
            </span>
          )}
        </div>

        {/* ================= PASSWORD ================= */}
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>

          <div className="input-wrapper">
            <span className="input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </span>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={getFieldError('password') ? "error" : ""}
              autoComplete="current-password"
              aria-invalid={!!getFieldError('password')}
              aria-describedby="password-error"
            />

            {/* Show / Hide Password */}
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex="-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M17.94 17.94A10.07 10.07 0 0112 20
                    c-7 0-11-8-11-8
                    a18.45 18.45 0 015.06-5.94
                    M9.9 4.24A9.12 9.12 0 0112 4
                    c7 0 11 8 11 8
                    a18.5 18.5 0 01-2.16 3.19
                    m-6.72-1.07a3 3 0 11-4.24-4.24"
                  />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          {getFieldError('password') && (
            <span id="password-error" className="error-message">
              {getFieldError('password')}
            </span>
          )}
        </div>

        {/* ================= GENERAL REDUX ERROR ================= */}
        {generalError && (
          <div className="login-error" role="alert">
            {generalError}
          </div>
        )}

        {/* ================= REMEMBER / FORGOT ================= */}
        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>

          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        {/* ================= LOGIN BUTTON ================= */}
        <button
          type="submit"
          className="login-btn"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner" aria-hidden="true"></span>
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>

        {/* ================= DIVIDER ================= */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* ================= SIGN UP ================= */}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register">
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;