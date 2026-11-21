import React, { useEffect, useState } from "react";
import api from "../../api/axios";

import "../../assets/css/employee-leave.css";

const EmployeeLeave = () => {
    const [leaveApplications, setLeaveApplications] = useState([]);

    const [summary, setSummary] = useState({
        total: 0,
        used: 0,
        remaining: 0,
        pending: 0,
    });

    const [form, setForm] = useState({
        leave_type: "",
        start_date: "",
        end_date: "",
        reason: "",
    });

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        fetchLeaves();
    }, []);

    const fetchLeaves = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/leaves");

            const data = response.data?.data || response.data;

            setLeaveApplications(data.leaves || []);

            setSummary({
                total: data.summary?.total || 0,
                used: data.summary?.used || 0,
                remaining: data.summary?.remaining || 0,
                pending: data.summary?.pending || 0,
            });

        } catch (err) {
            console.error("Leave fetch error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load leave information."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const calculateDays = () => {
        if (!form.start_date || !form.end_date) return 0;

        const start = new Date(`${form.start_date}T00:00:00`);
        const end = new Date(`${form.end_date}T00:00:00`);

        const difference = end - start;

        if (difference < 0) return 0;

        return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!form.leave_type || !form.start_date || !form.end_date || !form.reason.trim()) {
            setError("Please complete all leave application fields.");
            return;
        }

        if (form.end_date < form.start_date) {
            setError("End date cannot be earlier than start date.");
            return;
        }

        try {
            setSubmitting(true);

            await api.post("/employee/leaves", {
                leave_type: form.leave_type,
                start_date: form.start_date,
                end_date: form.end_date,
                reason: form.reason.trim(),
            });

            setSuccess("Your leave application has been submitted successfully.");

            setForm({
                leave_type: "",
                start_date: "",
                end_date: "",
                reason: "",
            });

            await fetchLeaves();

        } catch (err) {
            console.error("Leave submission error:", err);

            const validationErrors = err.response?.data?.errors;

            if (validationErrors) {
                setError(
                    Object.values(validationErrors).flat().join(" ")
                );
            } else {
                setError(
                    err.response?.data?.message ||
                    "Unable to submit leave application."
                );
            }
        } finally {
            setSubmitting(false);
        }
    };

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(`${date}`.slice(0, 10) + "T00:00:00")
            .toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });
    };

    const getStatusClass = (status) => {
        const value = String(status || "").toLowerCase();

        switch (value) {
            case "approved":
                return "approved";
            case "rejected":
                return "rejected";
            case "pending":
                return "pending";
            case "cancelled":
                return "cancelled";
            default:
                return "default";
        }
    };

    const leaveCards = [
        {
            title: "Total Leave",
            value: summary.total,
            icon: "fa-calendar-days",
            color: "primary",
        },
        {
            title: "Used Leave",
            value: summary.used,
            icon: "fa-calendar-check",
            color: "warning",
        },
        {
            title: "Available Balance",
            value: summary.remaining,
            icon: "fa-calendar-plus",
            color: "success",
        },
        {
            title: "Pending Requests",
            value: summary.pending,
            icon: "fa-hourglass-half",
            color: "info",
        },
    ];

    return (
        <div className="employee-leave-page">

            {/* Page Heading */}
            <div className="employee-page-heading">
                <div>
                    <h4>Leave Management</h4>
                    <p>Apply for leave and track your applications</p>
                </div>

                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={fetchLeaves}
                    disabled={loading}
                >
                    <i className="fas fa-sync-alt me-2"></i>
                    Refresh
                </button>
            </div>

            {/* Alerts */}
            {error && (
                <div className="alert alert-danger">
                    <i className="fas fa-circle-exclamation me-2"></i>
                    {error}
                </div>
            )}

            {success && (
                <div className="alert alert-success">
                    <i className="fas fa-check-circle me-2"></i>
                    {success}
                </div>
            )}

            {/* Leave Summary */}
            <div className="row g-3 leave-summary-row">
                {leaveCards.map((card) => (
                    <div className="col-xl-3 col-md-6" key={card.title}>
                        <div className="leave-summary-card">
                            <div className={`leave-summary-icon ${card.color}`}>
                                <i className={`fas ${card.icon}`}></i>
                            </div>

                            <div>
                                <span>{card.title}</span>
                                <h3>{card.value}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-3">

                {/* Apply Leave Form */}
                <div className="col-lg-5">
                    <div className="leave-application-card">
                        <div className="leave-section-heading">
                            <div>
                                <h5>
                                    <i className="fas fa-file-circle-plus me-2"></i>
                                    Apply for Leave
                                </h5>
                                <p>Submit a new leave request</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label htmlFor="leave_type">
                                    Leave Type <span>*</span>
                                </label>

                                <select
                                    id="leave_type"
                                    name="leave_type"
                                    className="form-select"
                                    value={form.leave_type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Leave Type</option>
                                    <option value="Casual Leave">Casual Leave</option>
                                    <option value="Sick Leave">Sick Leave</option>
                                    <option value="Earned Leave">Earned Leave</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="row g-3">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="start_date">
                                        Start Date <span>*</span>
                                    </label>

                                    <input
                                        type="date"
                                        id="start_date"
                                        name="start_date"
                                        className="form-control"
                                        value={form.start_date}
                                        min={new Date().toISOString().split("T")[0]}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="end_date">
                                        End Date <span>*</span>
                                    </label>

                                    <input
                                        type="date"
                                        id="end_date"
                                        name="end_date"
                                        className="form-control"
                                        value={form.end_date}
                                        min={form.start_date || new Date().toISOString().split("T")[0]}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="leave-days-preview">
                                <i className="fas fa-calendar-check"></i>
                                <span>Requested Duration</span>
                                <strong>
                                    {calculateDays()} {calculateDays() === 1 ? "Day" : "Days"}
                                </strong>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="reason">
                                    Reason for Leave <span>*</span>
                                </label>

                                <textarea
                                    id="reason"
                                    name="reason"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Enter your reason for leave..."
                                    value={form.reason}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane me-2"></i>
                                        Submit Leave Application
                                    </>
                                )}
                            </button>

                        </form>
                    </div>
                </div>

                {/* Leave History */}
                <div className="col-lg-7">
                    <div className="leave-history-card">
                        <div className="leave-section-heading">
                            <div>
                                <h5>
                                    <i className="fas fa-clock-rotate-left me-2"></i>
                                    Leave Application History
                                </h5>
                                <p>Track your previous leave requests</p>
                            </div>

                            <span className="leave-record-count">
                                {leaveApplications.length} Records
                            </span>
                        </div>

                        {loading ? (
                            <div className="leave-loading">
                                <div className="spinner-border text-success"></div>
                                <p>Loading leave records...</p>
                            </div>
                        ) : leaveApplications.length > 0 ? (
                            <div className="leave-history-list">
                                {leaveApplications.map((leave, index) => (
                                    <div
                                        className="leave-history-item"
                                        key={leave.id || index}
                                    >
                                        <div className="leave-history-icon">
                                            <i className="fas fa-calendar-day"></i>
                                        </div>

                                        <div className="leave-history-details">
                                            <strong>{leave.leave_type}</strong>

                                            <span>
                                                {formatDate(leave.start_date)}
                                                {" - "}
                                                {formatDate(leave.end_date)}
                                            </span>

                                            <small>
                                                {leave.total_days ?? "-"} Days
                                            </small>

                                            {leave.reason && (
                                                <p>{leave.reason}</p>
                                            )}

                                            {leave.admin_remarks && (
                                                <p className="leave-admin-remarks">
                                                    Admin Remarks: {leave.admin_remarks}
                                                </p>
                                            )}
                                        </div>

                                        <span className={`leave-status ${getStatusClass(leave.status)}`}>
                                            {leave.status || "Unknown"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="leave-empty">
                                <i className="fas fa-calendar-minus"></i>
                                <h6>No Leave Applications</h6>
                                <p>You haven't submitted any leave requests yet.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmployeeLeave;
