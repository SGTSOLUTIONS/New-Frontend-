import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../api/axios";

import "../../assets/css/employee-dashboard.css";

const EmployeeDashboard = () => {
    const { user } = useSelector((state) => state.auth);

    const [dashboard, setDashboard] = useState({
        employee: null,
        attendance: {
            present: 0,
            absent: 0,
            late: 0,
            total_days: 0,
        },
        leave: {
            total: 0,
            used: 0,
            remaining: 0,
            pending: 0,
        },
        salary: {
            monthly_salary: 0,
            last_paid: null,
        },
        recent_activities: [],
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/dashboard");

            if (response.data?.success) {
                setDashboard((prev) => ({
                    ...prev,
                    ...response.data.data,
                }));
            } else if (response.data?.data) {
                setDashboard((prev) => ({
                    ...prev,
                    ...response.data.data,
                }));
            }
        } catch (err) {
            console.error("Employee dashboard error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load dashboard information."
            );
        } finally {
            setLoading(false);
        }
    };

    const employee = dashboard.employee || user || {};

    const employeeName = employee.name || "Employee";
    const employeeCode = employee.employee_code || "Not Assigned";
    const designation = employee.designation || employee.employee?.designation || "Employee";
    const department = employee.department || employee.employee?.department || "Not Assigned";

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(Number(amount || 0));
    };

    const formatDate = (date) => {
        if (!date) return "Not available";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const summaryCards = [
        {
            title: "Present Days",
            value: dashboard.attendance.present,
            subtitle: "Attendance recorded",
            icon: "fa-calendar-check",
            color: "success",
        },
        {
            title: "Absent Days",
            value: dashboard.attendance.absent,
            subtitle: "Attendance summary",
            icon: "fa-calendar-xmark",
            color: "danger",
        },
        {
            title: "Leave Balance",
            value: dashboard.leave.remaining,
            subtitle: "Available leave days",
            icon: "fa-calendar-minus",
            color: "warning",
        },
        {
            title: "Pending Leaves",
            value: dashboard.leave.pending,
            subtitle: "Awaiting approval",
            icon: "fa-hourglass-half",
            color: "info",
        },
    ];

    if (loading) {
        return (
            <div className="employee-dashboard-loading">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading employee dashboard...</p>
            </div>
        );
    }

    return (
        <div className="employee-dashboard">

            {/* Page Heading */}
            <div className="employee-page-heading">
                <div>
                    <h4>Employee Dashboard</h4>
                    <p>Welcome back, {employeeName}!</p>
                </div>

                <div className="employee-dashboard-date">
                    <i className="fas fa-calendar-day"></i>
                    {new Date().toLocaleDateString("en-IN", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </div>
            </div>

            {error && (
                <div className="alert alert-warning" role="alert">
                    <i className="fas fa-circle-exclamation me-2"></i>
                    {error}
                    <button
                        className="btn btn-sm btn-outline-dark ms-3"
                        onClick={fetchDashboard}
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Employee Welcome Card */}
            <div className="employee-welcome-card">
                <div className="employee-welcome-content">
                    <div className="employee-welcome-icon">
                        <i className="fas fa-user-tie"></i>
                    </div>

                    <div>
                        <span className="employee-welcome-label">
                            EMPLOYEE PROFILE
                        </span>

                        <h3>{employeeName}</h3>

                        <p>
                            {designation} · {department}
                        </p>

                        <span className="employee-code">
                            Employee ID: {employeeCode}
                        </span>
                    </div>
                </div>

                <Link
                    to="/employee/profile"
                    className="btn employee-profile-action"
                >
                    View Profile
                    <i className="fas fa-arrow-right ms-2"></i>
                </Link>
            </div>

            {/* Summary Cards */}
            <div className="row g-3 employee-summary-row">
                {summaryCards.map((card, index) => (
                    <div className="col-xl-3 col-md-6" key={index}>
                        <div className="employee-summary-card">
                            <div className={`summary-icon ${card.color}`}>
                                <i className={`fas ${card.icon}`}></i>
                            </div>

                            <div className="summary-information">
                                <span>{card.title}</span>
                                <h3>{card.value ?? 0}</h3>
                                <small>{card.subtitle}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Dashboard Sections */}
            <div className="row g-3 mt-1">

                {/* Attendance Overview */}
                <div className="col-lg-6">
                    <div className="employee-dashboard-card h-100">
                        <div className="employee-card-heading">
                            <div>
                                <h5>Attendance Overview</h5>
                                <p>Your attendance summary</p>
                            </div>

                            <Link to="/employee/attendance">
                                View All
                                <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>

                        <div className="attendance-overview">
                            <div className="attendance-total">
                                <h2>
                                    {dashboard.attendance.total_days ?? 0}
                                </h2>
                                <span>Total Working Days</span>
                            </div>

                            <div className="attendance-details">
                                <div>
                                    <span className="attendance-dot present"></span>
                                    <span>Present</span>
                                    <strong>
                                        {dashboard.attendance.present ?? 0}
                                    </strong>
                                </div>

                                <div>
                                    <span className="attendance-dot absent"></span>
                                    <span>Absent</span>
                                    <strong>
                                        {dashboard.attendance.absent ?? 0}
                                    </strong>
                                </div>

                                <div>
                                    <span className="attendance-dot late"></span>
                                    <span>Late</span>
                                    <strong>
                                        {dashboard.attendance.late ?? 0}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leave Overview */}
                <div className="col-lg-6">
                    <div className="employee-dashboard-card h-100">
                        <div className="employee-card-heading">
                            <div>
                                <h5>Leave Overview</h5>
                                <p>Your leave information</p>
                            </div>

                            <Link to="/employee/leave">
                                View Details
                                <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>

                        <div className="leave-overview">
                            <div className="leave-balance">
                                <h2>{dashboard.leave.remaining ?? 0}</h2>
                                <span>Available Leave Days</span>
                            </div>

                            <div className="leave-information">
                                <div>
                                    <span>Total Leave</span>
                                    <strong>{dashboard.leave.total ?? 0}</strong>
                                </div>

                                <div>
                                    <span>Used Leave</span>
                                    <strong>{dashboard.leave.used ?? 0}</strong>
                                </div>

                                <div>
                                    <span>Pending Requests</span>
                                    <strong>{dashboard.leave.pending ?? 0}</strong>
                                </div>
                            </div>

                            <Link
                                to="/employee/leave"
                                className="btn btn-success btn-sm mt-3"
                            >
                                <i className="fas fa-plus me-2"></i>
                                Apply for Leave
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Salary Summary */}
                <div className="col-lg-6">
                    <div className="employee-dashboard-card h-100">
                        <div className="employee-card-heading">
                            <div>
                                <h5>Salary Information</h5>
                                <p>Your latest salary details</p>
                            </div>

                            <Link to="/employee/salary">
                                View Salary
                                <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>

                        <div className="salary-overview">
                            <span>Monthly Salary</span>

                            <h2>
                                {formatCurrency(
                                    dashboard.salary.monthly_salary
                                )}
                            </h2>

                            <div className="salary-last-paid">
                                <i className="fas fa-calendar-check me-2"></i>
                                Last Paid: {formatDate(dashboard.salary.last_paid)}
                            </div>

                            <Link
                                to="/employee/payslips"
                                className="btn btn-outline-success btn-sm mt-3"
                            >
                                <i className="fas fa-file-invoice me-2"></i>
                                View Payslips
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-lg-6">
                    <div className="employee-dashboard-card h-100">
                        <div className="employee-card-heading">
                            <div>
                                <h5>Quick Access</h5>
                                <p>Frequently used employee services</p>
                            </div>
                        </div>

                        <div className="employee-quick-links">
                            <Link to="/employee/attendance">
                                <i className="fas fa-calendar-check"></i>
                                <span>Attendance</span>
                                <i className="fas fa-chevron-right"></i>
                            </Link>

                            <Link to="/employee/leave">
                                <i className="fas fa-calendar-minus"></i>
                                <span>Apply Leave</span>
                                <i className="fas fa-chevron-right"></i>
                            </Link>

                            <Link to="/employee/payslips">
                                <i className="fas fa-file-invoice-dollar"></i>
                                <span>Download Payslip</span>
                                <i className="fas fa-chevron-right"></i>
                            </Link>

                            <Link to="/employee/documents">
                                <i className="fas fa-folder-open"></i>
                                <span>My Documents</span>
                                <i className="fas fa-chevron-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Recent Activities */}
            <div className="employee-dashboard-card mt-3">
                <div className="employee-card-heading">
                    <div>
                        <h5>Recent Activities</h5>
                        <p>Your latest employee activities</p>
                    </div>
                </div>

                {dashboard.recent_activities?.length > 0 ? (
                    <div className="employee-activity-list">
                        {dashboard.recent_activities.map((activity, index) => (
                            <div className="employee-activity-item" key={activity.id || index}>
                                <div className="employee-activity-icon">
                                    <i className={`fas ${activity.icon || "fa-circle-info"}`}></i>
                                </div>

                                <div className="employee-activity-content">
                                    <strong>{activity.title}</strong>
                                    <p>{activity.description}</p>
                                </div>

                                <small>{formatDate(activity.created_at)}</small>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="employee-empty-activities">
                        <i className="fas fa-clock"></i>
                        <p>No recent activities available.</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default EmployeeDashboard;
