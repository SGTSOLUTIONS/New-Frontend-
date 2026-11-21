import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/css/auth/AuthLayout.css";

import {
  loginUser,
  clearErrors,
} from "../../features/auth/authSlice";

// ======================================================
// ROLE-BASED REDIRECTION
// ======================================================

const getDashboardPath = (role) => {
  if (role === "leader" || role === "admin") {
    return "/dashboard";
  }

  if (role === "employee") {
    return "/employee/dashboard";
  }

  return "/login";
};

// ======================================================
// LOGIN COMPONENT
// ======================================================

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading,
    error,
    isAuthenticated,
    user,
  } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  // ======================================================
  // REDIRECT AUTHENTICATED USERS
  // ======================================================

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(getDashboardPath(user.role), {
        replace: true,
      });
    }
  }, [isAuthenticated, user, navigate]);

  // ======================================================
  // HANDLE INPUT CHANGE
  // ======================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error && Object.keys(error).length > 0) {
      dispatch(clearErrors());
    }
  };

  // ======================================================
  // LOGIN SUBMIT
  // ======================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(clearErrors());

    await dispatch(
      loginUser({
        email: formData.email.trim(),
        password: formData.password,
      })
    );
  };

  // ======================================================
  // FIELD ERROR HANDLING
  // ======================================================

  const getFieldError = (fieldName) => {
    if (typeof error === "string") {
      return fieldName === "general" ? error : null;
    }

    if (error && typeof error === "object" && error[fieldName]) {
      const fieldError = error[fieldName];

      return Array.isArray(fieldError)
        ? fieldError[0]
        : fieldError;
    }

    return null;
  };

  const generalError = getFieldError("general");

  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
        noValidate
      >

        <h3>Welcome Back</h3>

        <p className="login-subtitle">
          Sign in to access your account
        </p>

        {/* EMAIL / EMPLOYEE CODE */}

        <div className="form-group">

          <label htmlFor="email">
            Email Address / Employee Code
            <span className="required"> *</span>
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
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18" />
                <path d="M8 4v5" />
              </svg>
            </span>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email or employee code"
              value={formData.email}
              onChange={handleChange}
              className={getFieldError("email") ? "error" : ""}
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              required
              aria-invalid={!!getFieldError("email")}
              aria-describedby="email-error"
            />

          </div>

          {getFieldError("email") && (
            <span id="email-error" className="error-message">
              {getFieldError("email")}
            </span>
          )}

        </div>

        {/* PASSWORD */}

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
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="11"
                  rx="2"
                  ry="2"
                />
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
              className={getFieldError("password") ? "error" : ""}
              autoComplete="current-password"
              required
              aria-invalid={!!getFieldError("password")}
              aria-describedby="password-error"
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
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

          {getFieldError("password") && (
            <span id="password-error" className="error-message">
              {getFieldError("password")}
            </span>
          )}

        </div>

        {/* GENERAL ERROR */}

        {generalError && (
          <div className="login-error" role="alert">
            {generalError}
          </div>
        )}

        {/* REMEMBER ME / FORGOT PASSWORD */}

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

          <Link
            to="/forgot-password"
            className="forgot-link"
          >
            Forgot Password?
          </Link>

        </div>

        {/* LOGIN BUTTON */}

        <button
          type="submit"
          className="login-btn"
          disabled={loading}
        >

          {loading ? (
            <>
              <span
                className="spinner"
                aria-hidden="true"
              />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}

        </button>

        {/* DIVIDER */}

        <div className="divider">
          <span>or</span>
        </div>

        {/* REGISTRATION MESSAGE */}

        <p className="signup-text">
          Don't have an account? Contact your administrator.
        </p>

      </form>

    </div>
  );
};

export default Login;
