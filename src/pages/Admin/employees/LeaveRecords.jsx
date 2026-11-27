import React, { useCallback, useEffect, useState } from "react";
import api from "../../../api/axios";

const initialForm = {
    employee_id: "",
    leave_type: "Casual Leave",
    leave_category: "",
    from_date: "",
    to_date: "",
    status: "approved",
    remarks: "",
};

const LeaveRecords = () => {
    const [leaves, setLeaves] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [statistics, setStatistics] = useState({
        total: 0,
        pending: 0,
        approved: 0,
        rejected: 0,
        paid_leave_days: 0,
        unpaid_leave_days: 0,
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

    const [form, setForm] = useState(initialForm);
    const [editingLeave, setEditingLeave] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [processingId, setProcessingId] = useState(null);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // --------------------------------------------------
    // FETCH EMPLOYEES
    // --------------------------------------------------

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

    // --------------------------------------------------
    // FETCH LEAVE RECORDS
    // --------------------------------------------------

    const fetchLeaves = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/leaves", {
                params: {
                    employee_id: filters.employee_id || undefined,
                    status: filters.status || undefined,
                    page,
                    per_page: 15,
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

    // --------------------------------------------------
    // FETCH STATISTICS
    // --------------------------------------------------

    const fetchStatistics = useCallback(async () => {
        try {
            const response = await api.get("/admin/leaves/statistics", {
                params: {
                    employee_id: filters.employee_id || undefined,
                },
            });

            const data = response.data?.data || {};

            setStatistics({
                total: data.total ?? data.total_records ?? 0,
                pending: data.pending ?? data.pending_leaves ?? 0,
                approved: data.approved ?? data.approved_leaves ?? 0,
                rejected: data.rejected ?? data.rejected_leaves ?? 0,
                paid_leave_days: data.paid_leave_days ?? 0,
                unpaid_leave_days: data.unpaid_leave_days ?? 0,
            });

        } catch (err) {
            console.error("Leave statistics error:", err);
        }
    }, [filters.employee_id]);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    useEffect(() => {
        fetchLeaves();
    }, [fetchLeaves]);

    useEffect(() => {
        fetchStatistics();
    }, [fetchStatistics]);

    // --------------------------------------------------
    // REFRESH DATA
    // --------------------------------------------------

    const refreshData = async () => {
        await Promise.all([
            fetchLeaves(),
            fetchStatistics(),
        ]);
    };

    // --------------------------------------------------
    // FORM HANDLING
    // --------------------------------------------------

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const openAddModal = () => {
        setEditingLeave(null);

        setForm({
            ...initialForm,
            employee_id: filters.employee_id || "",
        });

        setError("");
        setShowModal(true);
    };

    const openEditModal = (leave, approve = false) => {
        setEditingLeave(leave);

        setForm({
            employee_id: String(leave.employee_id || ""),
            leave_type: leave.leave_type || "Casual Leave",
            leave_category: leave.leave_category || "",
            from_date: leave.from_date
                ? String(leave.from_date).substring(0, 10)
                : "",
            to_date: leave.to_date
                ? String(leave.to_date).substring(0, 10)
                : "",
            status: approve ? "approved" : leave.status,
            remarks: leave.remarks || "",
        });

        setError("");
        setShowModal(true);
    };

    const closeModal = () => {
        if (saving) return;

        setShowModal(false);
        setEditingLeave(null);
        setForm(initialForm);
        setError("");
    };

    // --------------------------------------------------
    // CALCULATE LEAVE DAYS
    // --------------------------------------------------

    const calculateDays = () => {
        if (!form.from_date || !form.to_date) {
            return 0;
        }

        const from = new Date(`${form.from_date}T00:00:00`);
        const to = new Date(`${form.to_date}T00:00:00`);

        if (to < from) {
            return 0;
        }

        return Math.round(
            (to - from) / (1000 * 60 * 60 * 24)
        ) + 1;
    };

    // --------------------------------------------------
    // ERROR MESSAGE
    // --------------------------------------------------

    const getErrorMessage = (err) => {
        const validationErrors = err.response?.data?.errors;

        if (validationErrors) {
            return Object.values(validationErrors)
                .flat()
                .join(" ");
        }

        return err.response?.data?.message ||
            "Something went wrong. Please try again.";
    };

    // --------------------------------------------------
    // CREATE / UPDATE LEAVE
    // --------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!form.employee_id) {
            setError("Please select an employee.");
            return;
        }

        if (!form.leave_category) {
            setError("Please select Paid or Unpaid leave.");
            return;
        }

        if (!form.from_date || !form.to_date) {
            setError("Please select both leave dates.");
            return;
        }

        if (form.to_date < form.from_date) {
            setError("To date must be on or after From date.");
            return;
        }

        const payload = {
            leave_type: form.leave_type,
            leave_category: form.leave_category,
            from_date: form.from_date,
            to_date: form.to_date,
            status: form.status,
            remarks: form.remarks || null,
        };

        setSaving(true);

        try {
            if (editingLeave) {
                await api.put(
                    `/admin/leaves/${editingLeave.id}`,
                    payload
                );

                setSuccess("Leave record updated successfully.");

            } else {
                await api.post("/admin/leaves", {
                    employee_id: Number(form.employee_id),
                    ...payload,
                });

                setSuccess("Leave record created successfully.");
            }

            setShowModal(false);
            setEditingLeave(null);
            setForm(initialForm);

            if (page !== 1) {
                setPage(1);
            } else {
                await fetchLeaves();
            }

            await fetchStatistics();

        } catch (err) {
            console.error("Leave save error:", err);
            setError(getErrorMessage(err));
        } finally {
            setSaving(false);
        }
    };

    // --------------------------------------------------
    // REJECT LEAVE
    // --------------------------------------------------

    const rejectLeave = async (leave) => {
        const confirmed = window.confirm(
            "Are you sure you want to reject this leave application?"
        );

        if (!confirmed) return;

        setProcessingId(leave.id);
        setError("");
        setSuccess("");

        try {
            await api.put(`/admin/leaves/${leave.id}`, {
                status: "rejected",
            });

            setSuccess("Leave application rejected successfully.");

            await refreshData();

        } catch (err) {
            console.error("Leave rejection error:", err);
            setError(getErrorMessage(err));
        } finally {
            setProcessingId(null);
        }
    };

    // --------------------------------------------------
    // DELETE LEAVE
    // --------------------------------------------------

    const deleteLeave = async (leave) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this leave record?"
        );

        if (!confirmed) return;

        setProcessingId(leave.id);
        setError("");
        setSuccess("");

        try {
            await api.delete(`/admin/leaves/${leave.id}`);

            setSuccess("Leave record deleted successfully.");

            if (leaves.length === 1 && page > 1) {
                setPage((prev) => prev - 1);
            } else {
                await fetchLeaves();
            }

            await fetchStatistics();

        } catch (err) {
            console.error("Leave deletion error:", err);
            setError(getErrorMessage(err));
        } finally {
            setProcessingId(null);
        }
    };

    // --------------------------------------------------
    // FILTERS
    // --------------------------------------------------

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));

        setPage(1);
        setSuccess("");
    };

    const resetFilters = () => {
        setFilters({
            employee_id: "",
            status: "",
        });

        setPage(1);
        setSuccess("");
    };

    // --------------------------------------------------
    // HELPERS
    // --------------------------------------------------

    const formatDate = (date) => {
        if (!date) return "-";

        const parsed = new Date(
            `${String(date).substring(0, 10)}T00:00:00`
        );

        if (Number.isNaN(parsed.getTime())) return date;

        return parsed.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-warning-subtle text-warning-emphasis",
            approved: "bg-success-subtle text-success",
            rejected: "bg-danger-subtle text-danger",
        };

        return styles[status?.toLowerCase()] ||
            "bg-secondary-subtle text-secondary";
    };

    const getCategoryBadge = (category) => {
        if (category === "paid") {
            return "bg-success-subtle text-success";
        }

        if (category === "unpaid") {
            return "bg-danger-subtle text-danger";
        }

        return "bg-secondary-subtle text-secondary";
    };

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

    // --------------------------------------------------
    // UI
    // --------------------------------------------------

    return (
        <div className="container-fluid py-4">

            {/* PAGE HEADER */}

            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">

                <div>
                    <h3 className="fw-bold mb-1">
                        Leave Management
                    </h3>

                    <p className="text-muted mb-0">
                        Review and manage employee leave applications.
                    </p>
                </div>

                <div className="d-flex gap-2">

                    <button
                        className="btn btn-outline-success"
                        onClick={refreshData}
                        disabled={loading}
                    >
                        <i className="bi bi-arrow-clockwise me-2"></i>
                        Refresh
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={openAddModal}
                    >
                        <i className="bi bi-plus-lg me-2"></i>
                        Add Leave
                    </button>

                </div>
            </div>

            {/* STATISTICS */}

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

            {/* PAID / UNPAID SUMMARY */}

            <div className="row g-3 mb-4">

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <small className="text-muted">
                                    Approved Paid Leave
                                </small>

                                <h4 className="fw-bold text-success mb-0">
                                    {statistics.paid_leave_days} Days
                                </h4>
                            </div>

                            <i className="bi bi-calendar-check fs-2 text-success"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <small className="text-muted">
                                    Approved Unpaid Leave (LOP)
                                </small>

                                <h4 className="fw-bold text-danger mb-0">
                                    {statistics.unpaid_leave_days} Days
                                </h4>
                            </div>

                            <i className="bi bi-calendar-x fs-2 text-danger"></i>
                        </div>
                    </div>
                </div>

            </div>

            {/* ALERTS */}

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

            {error && !showModal && (
                <div className="alert alert-danger alert-dismissible fade show">
                    {error}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setError("")}
                    ></button>
                </div>
            )}

            {/* FILTERS */}

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

            {/* LEAVE RECORDS */}

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
                                <th>Category</th>
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
                                    <td colSpan="10" className="text-center py-5">
                                        <div className="spinner-border text-success"></div>

                                        <p className="text-muted mt-2 mb-0">
                                            Loading leave applications...
                                        </p>
                                    </td>
                                </tr>
                            ) : leaves.length === 0 ? (
                                <tr>
                                    <td colSpan="10" className="text-center py-5">
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
                                            <span className={`badge rounded-pill px-3 py-2 ${getCategoryBadge(leave.leave_category)}`}>
                                                {leave.leave_category
                                                    ? leave.leave_category.toUpperCase()
                                                    : "Not Classified"}
                                            </span>
                                        </td>

                                        <td>
                                            {formatDate(leave.from_date || leave.start_date)}
                                        </td>

                                        <td>
                                            {formatDate(leave.to_date || leave.end_date)}
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
                                            <div className="d-flex justify-content-center gap-2">

                                                {leave.status === "pending" && (
                                                    <>
                                                        <button
                                                            className="btn btn-sm btn-outline-success"
                                                            title="Approve and classify"
                                                            disabled={processingId === leave.id}
                                                            onClick={() => openEditModal(leave, true)}
                                                        >
                                                            <i className="bi bi-check-lg"></i>
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            title="Reject"
                                                            disabled={processingId === leave.id}
                                                            onClick={() => rejectLeave(leave)}
                                                        >
                                                            <i className="bi bi-x-lg"></i>
                                                        </button>
                                                    </>
                                                )}

                                                <button
                                                    className="btn btn-sm btn-outline-primary"
                                                    title="Edit"
                                                    disabled={processingId === leave.id}
                                                    onClick={() => openEditModal(leave)}
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    title="Delete"
                                                    disabled={processingId === leave.id}
                                                    onClick={() => deleteLeave(leave)}
                                                >
                                                    {processingId === leave.id ? (
                                                        <span className="spinner-border spinner-border-sm"></span>
                                                    ) : (
                                                        <i className="bi bi-trash"></i>
                                                    )}
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}

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

            {/* ADD / EDIT MODAL */}

            {showModal && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 1055,
                    }}
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content border-0 shadow">

                            <div className="modal-header">
                                <h5 className="modal-title fw-bold">
                                    {editingLeave
                                        ? "Edit Leave Record"
                                        : "Add Leave Record"}
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                    disabled={saving}
                                ></button>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="modal-body">

                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}

                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Employee *
                                            </label>

                                            <select
                                                name="employee_id"
                                                className="form-select"
                                                value={form.employee_id}
                                                onChange={handleFormChange}
                                                required
                                                disabled={!!editingLeave}
                                            >
                                                <option value="">
                                                    Select Employee
                                                </option>

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

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Leave Type *
                                            </label>

                                            <select
                                                name="leave_type"
                                                className="form-select"
                                                value={form.leave_type}
                                                onChange={handleFormChange}
                                                required
                                            >
                                                <option value="Casual Leave">Casual Leave</option>
                                                <option value="Sick Leave">Sick Leave</option>
                                                <option value="Earned Leave">Earned Leave</option>
                                                <option value="Annual Leave">Annual Leave</option>
                                                <option value="Personal Leave">Personal Leave</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Leave Classification *
                                            </label>

                                            <select
                                                name="leave_category"
                                                className="form-select"
                                                value={form.leave_category}
                                                onChange={handleFormChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Classification
                                                </option>
                                                <option value="paid">Paid Leave</option>
                                                <option value="unpaid">Unpaid Leave (LOP)</option>
                                            </select>

                                            <small className="text-muted">
                                                Select the applicable leave classification.
                                            </small>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Status *
                                            </label>

                                            <select
                                                name="status"
                                                className="form-select"
                                                value={form.status}
                                                onChange={handleFormChange}
                                                required
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="approved">Approved</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                From Date *
                                            </label>

                                            <input
                                                type="date"
                                                name="from_date"
                                                className="form-control"
                                                value={form.from_date}
                                                onChange={handleFormChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                To Date *
                                            </label>

                                            <input
                                                type="date"
                                                name="to_date"
                                                className="form-control"
                                                value={form.to_date}
                                                min={form.from_date || undefined}
                                                onChange={handleFormChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Total Leave Days
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control bg-light"
                                                value={calculateDays()}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Remarks
                                            </label>

                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="3"
                                                placeholder="Enter remarks..."
                                                value={form.remarks}
                                                onChange={handleFormChange}
                                            ></textarea>
                                        </div>

                                    </div>
                                </div>

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={closeModal}
                                        disabled={saving}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={saving}
                                    >
                                        {saving ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-check-circle me-2"></i>
                                                {editingLeave
                                                    ? "Update Leave"
                                                    : "Save Leave"}
                                            </>
                                        )}
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default LeaveRecords;
