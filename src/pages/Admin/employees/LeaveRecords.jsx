import React, { useCallback, useEffect, useState } from "react";
import api from "../../../api/axios";

const LeaveRecords = () => {
    const [leaves, setLeaves] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [statistics, setStatistics] = useState({
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0,
    });

    const [filters, setFilters] = useState({
        employee_id: "",
        status: "",
    });

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 15,
    });

    const [loading, setLoading] = useState(true);
    const [processingId, setProcessingId] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Fetch employees for the filter.
    const fetchEmployees = useCallback(async () => {
        try {
            const response = await api.get("/admin/employees", {
                params: { per_page: 100 },
            });

            setEmployees(response.data?.data?.data || []);
        } catch (err) {
            console.error("Employee loading error:", err);
        }
    }, []);

    // Fetch leave records.
    const fetchLeaves = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/leaves", {
                params: {
                    employee_id: filters.employee_id || undefined,
                    status: filters.status || undefined,
                    page,
                },
            });

            const result = response.data?.data;

            setLeaves(result?.data || []);

            setPagination({
                current_page: result?.current_page || 1,
                last_page: result?.last_page || 1,
                total: result?.total || 0,
                per_page: result?.per_page || 15,
            });

        } catch (err) {
            console.error("Leave records error:", err);

            setLeaves([]);

            setError(
                err.response?.data?.message ||
                "Unable to retrieve leave records."
            );
        } finally {
            setLoading(false);
        }
    }, [filters, page]);

    // Fetch leave statistics.
    const fetchStatistics = useCallback(async () => {
        try {
            const response = await api.get("/admin/leaves/statistics");

            const data = response.data?.data || {};

            setStatistics({
                total: data.total ?? data.total_leaves ?? 0,
                pending: data.pending ?? data.pending_leaves ?? 0,
                approved: data.approved ?? data.approved_leaves ?? 0,
                rejected: data.rejected ?? data.rejected_leaves ?? 0,
            });
        } catch (err) {
            console.error("Leave statistics error:", err);
        }
    }, []);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    useEffect(() => {
        fetchLeaves();
    }, [fetchLeaves]);

    useEffect(() => {
        fetchStatistics();
    }, [fetchStatistics]);

    // Change filters.
    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));

        setPage(1);
        setSuccess("");
    };

    // Reset filters.
    const resetFilters = () => {
        setFilters({
            employee_id: "",
            status: "",
        });

        setPage(1);
        setSuccess("");
    };

    // Approve or reject leave.
    const updateLeaveStatus = async (leave, status) => {
        const action = status === "approved" ? "approve" : "reject";

        const confirmed = window.confirm(
            `Are you sure you want to ${action} this leave application?`
        );

        if (!confirmed) return;

        setProcessingId(leave.id);
        setError("");
        setSuccess("");

        try {
            const response = await api.put(
                `/admin/leaves/${leave.id}`,
                { status }
            );

            if (response.data?.success !== false) {
                setSuccess(
                    response.data?.message ||
                    `Leave application ${status} successfully.`
                );

                await Promise.all([
                    fetchLeaves(),
                    fetchStatistics(),
                ]);
            }

        } catch (err) {
            console.error("Leave status update error:", err);

            setError(
                err.response?.data?.message ||
                `Unable to ${action} leave application.`
            );
        } finally {
            setProcessingId(null);
        }
    };

    // Format date.
    const formatDate = (date) => {
        if (!date) return "-";

        const parsed = new Date(`${date}T00:00:00`);

        if (Number.isNaN(parsed.getTime())) return date;

        return parsed.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    // Status badge.
    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-warning-subtle text-warning-emphasis",
            approved: "bg-success-subtle text-success",
            rejected: "bg-danger-subtle text-danger",
        };

        return styles[status?.toLowerCase()] ||
            "bg-secondary-subtle text-secondary";
    };

    // Pagination.
    const changePage = (newPage) => {
        if (
            newPage >= 1 &&
            newPage <= pagination.last_page
        ) {
            setPage(newPage);
        }
    };

    const cards = [
        {
            title: "Total Applications",
            value: statistics.total,
            icon: "bi-calendar-check",
            color: "primary",
        },
        {
            title: "Pending",
            value: statistics.pending,
            icon: "bi-hourglass-split",
            color: "warning",
        },
        {
            title: "Approved",
            value: statistics.approved,
            icon: "bi-check-circle",
            color: "success",
        },
        {
            title: "Rejected",
            value: statistics.rejected,
            icon: "bi-x-circle",
            color: "danger",
        },
    ];

    const startRecord = pagination.total
        ? (pagination.current_page - 1) * pagination.per_page + 1
        : 0;

    const endRecord = Math.min(
        pagination.current_page * pagination.per_page,
        pagination.total
    );

    return (
        <div className="container-fluid py-4">

            {/* Page Header */}
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">

                <div>
                    <h3 className="fw-bold mb-1">
                        Leave Management
                    </h3>

                    <p className="text-muted mb-0">
                        Review and manage employee leave applications.
                    </p>
                </div>

                <button
                    className="btn btn-outline-success"
                    onClick={() => {
                        fetchLeaves();
                        fetchStatistics();
                    }}
                    disabled={loading}
                >
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Refresh
                </button>

            </div>

            {/* Statistics */}
            <div className="row g-3 mb-4">

                {cards.map((card) => (
                    <div className="col-6 col-md-3" key={card.title}>
                        <div className="card border-0 shadow-sm h-100">

                            <div className="card-body d-flex align-items-center gap-3">

                                <div className={`rounded-circle bg-${card.color}-subtle text-${card.color} p-3`}>
                                    <i className={`bi ${card.icon} fs-4`}></i>
                                </div>

                                <div>
                                    <h4 className="fw-bold mb-1">
                                        {card.value}
                                    </h4>

                                    <small className="text-muted">
                                        {card.title}
                                    </small>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Alerts */}
            {success && (
                <div className="alert alert-success alert-dismissible fade show">
                    <i className="bi bi-check-circle me-2"></i>
                    {success}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSuccess("")}
                    ></button>
                </div>
            )}

            {error && (
                <div className="alert alert-danger alert-dismissible fade show">
                    {error}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setError("")}
                    ></button>
                </div>
            )}

            {/* Filters */}
            <div className="card border-0 shadow-sm mb-4">

                <div className="card-body">

                    <div className="row g-3 align-items-end">

                        <div className="col-md-5">
                            <label className="form-label fw-semibold">
                                Employee
                            </label>

                            <select
                                name="employee_id"
                                className="form-select"
                                value={filters.employee_id}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Employees</option>

                                {employees.map((employee) => (
                                    <option
                                        key={employee.id}
                                        value={employee.id}
                                    >
                                        {employee.user?.name || "Employee"}
                                        {" - "}
                                        {employee.employee_code}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">
                                Application Status
                            </label>

                            <select
                                name="status"
                                className="form-select"
                                value={filters.status}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <button
                                className="btn btn-outline-secondary w-100"
                                onClick={resetFilters}
                            >
                                <i className="bi bi-arrow-counterclockwise me-2"></i>
                                Reset Filters
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Leave Records */}
            <div className="card border-0 shadow-sm">

                <div className="card-header bg-white py-3">
                    <h5 className="fw-bold mb-0">
                        Employee Leave Applications
                    </h5>
                </div>

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-light">
                            <tr>
                                <th className="ps-3">#</th>
                                <th>Employee</th>
                                <th>Leave Type</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Days</th>
                                <th>Remarks</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {loading ? (
                                <tr>
                                    <td colSpan="9" className="text-center py-5">
                                        <div className="spinner-border text-success"></div>
                                        <p className="text-muted mt-2 mb-0">
                                            Loading leave applications...
                                        </p>
                                    </td>
                                </tr>
                            ) : leaves.length === 0 ? (
                                <tr>
                                    <td colSpan="9" className="text-center py-5">
                                        <i className="bi bi-calendar-x fs-1 text-muted"></i>

                                        <h6 className="mt-2">
                                            No Leave Applications Found
                                        </h6>

                                        <p className="text-muted mb-0">
                                            No applications match the selected filters.
                                        </p>
                                    </td>
                                </tr>
                            ) : (
                                leaves.map((leave, index) => (
                                    <tr key={leave.id}>

                                        <td className="ps-3">
                                            {startRecord + index}
                                        </td>

                                        <td>
                                            <div className="fw-semibold">
                                                {leave.employee?.user?.name ||
                                                    leave.employee?.name ||
                                                    "N/A"}
                                            </div>

                                            <small className="text-muted">
                                                {leave.employee?.employee_code || ""}
                                            </small>
                                        </td>

                                        <td>
                                            {leave.leave_type || "-"}
                                        </td>

                                        <td>
                                            {formatDate(
                                                leave.from_date || leave.start_date
                                            )}
                                        </td>

                                        <td>
                                            {formatDate(
                                                leave.to_date || leave.end_date
                                            )}
                                        </td>

                                        <td>
                                            {leave.total_days ?? "-"}
                                        </td>

                                        <td>
                                            <span
                                                title={leave.remarks || ""}
                                                className="d-inline-block text-truncate"
                                                style={{ maxWidth: "150px" }}
                                            >
                                                {leave.remarks || "-"}
                                            </span>
                                        </td>

                                        <td>
                                            <span className={`badge rounded-pill px-3 py-2 ${getStatusBadge(leave.status)}`}>
                                                {leave.status || "Unknown"}
                                            </span>
                                        </td>

                                        <td>
                                            {leave.status === "pending" ? (
                                                <div className="d-flex justify-content-center gap-2">

                                                    <button
                                                        className="btn btn-sm btn-outline-success"
                                                        title="Approve"
                                                        disabled={processingId === leave.id}
                                                        onClick={() => updateLeaveStatus(leave, "approved")}
                                                    >
                                                        {processingId === leave.id ? (
                                                            <span className="spinner-border spinner-border-sm"></span>
                                                        ) : (
                                                            <i className="bi bi-check-lg"></i>
                                                        )}
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        title="Reject"
                                                        disabled={processingId === leave.id}
                                                        onClick={() => updateLeaveStatus(leave, "rejected")}
                                                    >
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>

                                                </div>
                                            ) : (
                                                <span className="text-muted small">
                                                    No action
                                                </span>
                                            )}
                                        </td>

                                    </tr>
                                ))
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}
                {!loading && leaves.length > 0 && (
                    <div className="card-footer bg-white py-3">

                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

                            <small className="text-muted">
                                Showing {startRecord} to {endRecord} of {pagination.total} applications
                            </small>

                            <div className="btn-group btn-group-sm">

                                <button
                                    className="btn btn-outline-secondary"
                                    disabled={page <= 1}
                                    onClick={() => changePage(page - 1)}
                                >
                                    Previous
                                </button>

                                <button className="btn btn-success" disabled>
                                    {pagination.current_page} / {pagination.last_page}
                                </button>

                                <button
                                    className="btn btn-outline-secondary"
                                    disabled={page >= pagination.last_page}
                                    onClick={() => changePage(page + 1)}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default LeaveRecords;
