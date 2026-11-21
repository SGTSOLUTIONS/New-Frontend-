import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/axios";

import "../../assets/css/employee-profile.css";

const EmployeeProfile = () => {
    const { user } = useSelector((state) => state.auth);

    const [profile, setProfile] = useState(user || {});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProfile();
    }, []);

    // ======================================================
    // FETCH EMPLOYEE PROFILE
    // ======================================================

    const fetchProfile = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/profile");

            const profileData = response.data?.data || response.data;

            setProfile(
                profileData?.employee
                    ? { ...profileData, ...profileData.employee }
                    : profileData
            );

        } catch (err) {
            console.error("Employee profile error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load complete profile information."
            );
        } finally {
            setLoading(false);
        }
    };

    // ======================================================
    // FORMAT DATE
    // ======================================================

    const formatDate = (date) => {
        if (!date) return "Not provided";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    // ======================================================
    // PROFILE DETAILS
    // ======================================================

    const employeeName = profile?.name || user?.name || "Employee";

    const profileImage =
        profile?.profile_image ||
        profile?.avatar ||
        user?.profile_image ||
        user?.avatar ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(employeeName)}&background=14532D&color=fff&size=200`;

    // Reusable detail component
    const DetailItem = ({ label, value, icon }) => (
        <div className="profile-detail-item">
            <div className="profile-detail-icon">
                <i className={`fas ${icon}`}></i>
            </div>

            <div className="profile-detail-content">
                <span>{label}</span>
                <strong>{value || "Not provided"}</strong>
            </div>
        </div>
    );

    // ======================================================
    // LOADING
    // ======================================================

    if (loading) {
        return (
            <div className="employee-profile-loading">
                <div className="spinner-border text-success"></div>
                <p>Loading employee profile...</p>
            </div>
        );
    }

    // ======================================================
    // PROFILE UI
    // ======================================================

    return (
        <div className="employee-profile-page">

            {/* PAGE HEADING */}

            <div className="employee-page-heading">
                <div>
                    <h4>My Profile</h4>
                    <p>View your personal and employment information</p>
                </div>

                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={fetchProfile}
                >
                    <i className="fas fa-sync-alt me-2"></i>
                    Refresh
                </button>
            </div>

            {/* ERROR MESSAGE */}

            {error && (
                <div className="alert alert-warning">
                    <i className="fas fa-circle-exclamation me-2"></i>
                    {error}
                </div>
            )}

            {/* PROFILE OVERVIEW */}

            <div className="profile-overview-card">
                <div className="profile-overview-content">

                    <div className="profile-image-wrapper">
                        <img
                            src={profileImage}
                            alt="Employee"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                    `https://ui-avatars.com/api/?name=${encodeURIComponent(employeeName)}&background=14532D&color=fff&size=200`;
                            }}
                        />
                    </div>

                    <div className="profile-overview-details">

                        <span className="profile-status">
                            <i className="fas fa-circle"></i>
                            {profile.employment_status || "Employee"}
                        </span>

                        <h3>{employeeName}</h3>

                        <p>
                            {profile.designation || "Designation not assigned"}
                        </p>

                        <div className="profile-overview-meta">

                            <span>
                                <i className="fas fa-building"></i>
                                {profile.department || "Department not assigned"}
                            </span>

                            <span>
                                <i className="fas fa-id-card"></i>
                                {profile.employee_code || "Employee ID not assigned"}
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            {/* PERSONAL INFORMATION */}

            <div className="profile-information-card">

                <div className="profile-section-heading">
                    <div>
                        <h5>
                            <i className="fas fa-user me-2"></i>
                            Personal Information
                        </h5>

                        <p>Your basic personal details</p>
                    </div>
                </div>

                <div className="row g-3">

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Full Name"
                            value={profile.name}
                            icon="fa-user"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Email Address"
                            value={profile.email}
                            icon="fa-envelope"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Phone Number"
                            value={profile.phone}
                            icon="fa-phone"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Date of Birth"
                            value={formatDate(profile.date_of_birth || profile.dob)}
                            icon="fa-calendar"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Gender"
                            value={profile.gender}
                            icon="fa-venus-mars"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Address"
                            value={profile.address || profile.permanent_address}
                            icon="fa-location-dot"
                        />
                    </div>

                </div>
            </div>

            {/* EMPLOYMENT INFORMATION */}

            <div className="profile-information-card">

                <div className="profile-section-heading">
                    <div>
                        <h5>
                            <i className="fas fa-briefcase me-2"></i>
                            Employment Information
                        </h5>

                        <p>Your company and job details</p>
                    </div>
                </div>

                <div className="row g-3">

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Employee ID"
                            value={profile.employee_code}
                            icon="fa-id-badge"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Department"
                            value={profile.department}
                            icon="fa-building"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Designation"
                            value={profile.designation}
                            icon="fa-user-tie"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Joining Date"
                            value={formatDate(profile.joining_date)}
                            icon="fa-calendar-check"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Employment Status"
                            value={profile.employment_status}
                            icon="fa-circle-check"
                        />
                    </div>

                </div>
            </div>

            {/* EMERGENCY CONTACT */}

            <div className="profile-information-card">

                <div className="profile-section-heading">
                    <div>
                        <h5>
                            <i className="fas fa-phone-volume me-2"></i>
                            Emergency Contact
                        </h5>

                        <p>Emergency contact information</p>
                    </div>
                </div>

                <div className="row g-3">

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Contact Person"
                            value={profile.emergency_contact_name}
                            icon="fa-user"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Contact Number"
                            value={profile.emergency_contact}
                            icon="fa-phone"
                        />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <DetailItem
                            label="Relationship"
                            value={profile.emergency_contact_relationship}
                            icon="fa-people-arrows"
                        />
                    </div>

                </div>
            </div>

            {/* PROFILE NOTE */}

            <div className="profile-note">
                <i className="fas fa-info-circle me-2"></i>
                If any employee information is incorrect, please contact the
                HR or Administrator to request an update.
            </div>

        </div>
    );
};

export default EmployeeProfile;
