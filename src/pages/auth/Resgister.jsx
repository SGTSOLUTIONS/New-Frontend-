// src/pages/auth/Login.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/css/auth/AuthLayout.css";
import { clearErrors, registerUser } from "../../features/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    name: "",
    phone: "",
    profile: null,
    address: "",
  });

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // File preview state
  const [profilePreview, setProfilePreview] = useState(null);

  // General error state
  const [generalError, setGeneralError] = useState("");

  // Clear general error on input change
  useEffect(() => {
    if (generalError) {
      setGeneralError("");
    }
  }, [formData]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Update form data with file
      setFormData((prev) => ({
        ...prev,
        profile: file
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({
        ...prev,
        profile: null
      }));
      setProfilePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    dispatch(clearErrors());
    setGeneralError("");

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('remember', formData.remember);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('name', formData.name);
      
      // Append file if it exists
      if (formData.profile) {
        formDataToSend.append('profile', formData.profile);
      }

      // Redux register with FormData
      const result = await dispatch(
        registerUser(formDataToSend)
      );

      // Registration successful
      if (registerUser.fulfilled.match(result)) {
        navigate("/dashboard");
      } else if (registerUser.rejected.match(result)) {
        // Registration failed - handle error
        setGeneralError(result.payload?.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setGeneralError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        {/* Heading */}
        <h3>Create Account</h3>

        <p className="login-subtitle">
          Sign Up to create your account
        </p>

        {/* ================= NAME ================= */}
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required">*</span>
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
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

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
              autoComplete="email"
            />
          </div>
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
              autoComplete="current-password"
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
        </div>

        {/* ================= ADDRESS ================= */}
        <div className="form-group">
          <label htmlFor="address">
            Address <span className="required">*</span>
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
                <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>

            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ================= PROFILE (File Upload) ================= */}
        <div className="form-group">
          <label htmlFor="profile">
            Profile Image <span className="required">*</span>
          </label>

          <div className="file-upload-wrapper">
            <div className="file-upload-area">
              {profilePreview ? (
                <div className="profile-preview">
                  <img src={profilePreview} alt="Profile preview" />
                  <button
                    type="button"
                    className="remove-image"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, profile: null }));
                      setProfilePreview(null);
                      // Reset file input
                      const fileInput = document.getElementById('profile');
                      if (fileInput) fileInput.value = '';
                    }}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="file-upload-placeholder">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <p>Click to upload profile image</p>
                  <span className="file-types">JPEG, PNG, JPG, GIF (Max 5MB)</span>
                </div>
              )}
              <input
                type="file"
                id="profile"
                name="profile"
                accept="image/jpeg,image/png,image/jpg,image/gif"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        {/* ================= PHONE ================= */}
        <div className="form-group">
          <label htmlFor="phone">
            Phone <span className="required">*</span>
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  A19.79 19.79 0 0 1 2.12 4.18
                  2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </span>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
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

        {/* ================= REGISTER BUTTON ================= */}
        <button
          type="submit"
          className="login-btn"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner" aria-hidden="true"></span>
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        {/* ================= DIVIDER ================= */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* ================= SIGN IN ================= */}
        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;