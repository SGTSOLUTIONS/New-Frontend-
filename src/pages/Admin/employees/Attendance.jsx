import React, { useCallback, useEffect, useState } from "react";
import api from "../../../api/axios";

const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const initialForm = {
    employee_id: "",
    attendance_date: getToday(),
    status: "present",
    check_in: "",
    check_out: "",
    remarks: "",
};

const Attendance = () => {
    const [records, setRecords] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [statistics, setStatistics] = useState({
        total: 0,
        present: 0,
        absent: 0,
        half_day: 0,
        leave: 0,
        holiday: 0,
    });

    const [filters, setFilters] = useState({
        employee_id: "",
        date: "",
        status: "",
    });

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 20,
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formErrors, setFormErrors] = useState({});

    // Modal
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(initialForm);

    // ======================================================
    // FETCH EMPLOYEES
    // ======================================================

    const fetchEmployees = useCallback(async () => {
        try {
            const response = await api.get("/admin/employees", {
                params: {
                    per_page: 100,
                    status: "active",
                },
            });

            setEmployees(response.data?.data?.data || []);
        } catch (err) {
            console.error("Employee dropdown error:", err);
        }
    }, []);

    // ======================================================
    // FETCH ATTENDANCE
    // ======================================================

    const fetchAttendance = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/attendance", {
                params: {
                    employee_id: filters.employee_id || undefined,
                    date: filters.date || undefined,
                    status: filters.status || undefined,
                    page,
                },
            });

            const result = response.data?.data;

            setRecords(result?.data || []);

            setPagination({
                current_page: result?.current_page || 1,
                last_page: result?.last_page || 1,
                total: result?.total || 0,
                per_page: result?.per_page || 20,
            });

        } catch (err) {
            console.error("Attendance error:", err);

            setRecords([]);

            setError(
                err.response?.data?.message ||
                "Unable to load attendance records."
            );

        } finally {
            setLoading(false);
        }
    }, [filters, page]);

    // ======================================================
    // FETCH STATISTICS
    // ======================================================

    const fetchStatistics = useCallback(async () => {
        try {
            const response = await api.get(
                "/admin/attendance/statistics"
            );

            const data = response.data?.data || {};

            setStatistics({
                total: data.total_records || 0,
                present: data.present || 0,
                absent: data.absent || 0,
                half_day: data.half_day || 0,
                leave: data.leave || 0,
                holiday: data.holiday || 0,
            });

        } catch (err) {
            console.error("Attendance statistics error:", err);
        }
    }, []);

    // ======================================================
    // INITIAL LOAD
    // ======================================================

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    useEffect(() => {
        fetchAttendance();
    }, [fetchAttendance]);

    useEffect(() => {
        fetchStatistics();
    }, [fetchStatistics]);

    // ======================================================
    // REFRESH
    // ======================================================

    const refreshAll = () => {
        fetchAttendance();
        fetchStatistics();
        fetchEmployees();
    };

    // ======================================================
    // FILTERS
    // ======================================================

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));

        setPage(1);
    };

    const resetFilters = () => {
        setFilters({
            employee_id: "",
            date: "",
            status: "",
        });

        setPage(1);
    };

    // ======================================================
    // FORM HANDLING
    // ======================================================

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setFormErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setError("");
    };

    const openCreateModal = () => {
        setEditingId(null);
        setForm({
            ...initialForm,
            attendance_date: filters.date || getToday(),
            employee_id: filters.employee_id || "",
        });
        setFormErrors({});
        setError("");
        setSuccess("");
        setModalOpen(true);
    };

    const openEditModal = (record) => {
        setEditingId(record.id);

        setForm({
            employee_id: String(record.employee_id || record.employee?.id || ""),
            attendance_date: String(
                record.attendance_date || record.date || ""
            ).substring(0, 10),
            status: record.status || "present",
            check_in: record.check_in
                ? String(record.check_in).substring(0, 5)
                : "",
            check_out: record.check_out
                ? String(record.check_out).substring(0, 5)
                : "",
            remarks: record.remarks || "",
        });

        setFormErrors({});
        setError("");
        setSuccess("");
        setModalOpen(true);
    };

    const closeModal = () => {
        if (saving) return;

        setModalOpen(false);
        setEditingId(null);
        setForm(initialForm);
        setFormErrors({});
    };

    // ======================================================
    // SAVE ATTENDANCE
    // ======================================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSaving(true);
        setError("");
        setSuccess("");
        setFormErrors({});

        if (
            form.check_in &&
            form.check_out &&
            form.check_out <= form.check_in
        ) {
            setFormErrors({
                check_out: [
                    "Check-out time must be later than check-in time.",
                ],
            });

            setSaving(false);
            return;
        }

        try {
            const payload = {
                employee_id: Number(form.employee_id),
                attendance_date: form.attendance_date,
                status: form.status,
                check_in: form.check_in || null,
                check_out: form.check_out || null,
                remarks: form.remarks || null,
            };

            let response;

            if (editingId) {
                response = await api.put(
                    `/admin/attendance/${editingId}`,
                    payload
                );
            } else {
                response = await api.post(
                    "/admin/attendance",
                    payload
                );
            }

            setSuccess(
                response.data?.message ||
                "Attendance saved successfully."
            );

            setModalOpen(false);
            setEditingId(null);
            setForm(initialForm);

            await Promise.all([
                fetchAttendance(),
                fetchStatistics(),
            ]);

        } catch (err) {
            console.error("Attendance save error:", err);

            if (err.response?.status === 422) {
                setFormErrors(err.response.data.errors || {});
            }

            setError(
                err.response?.data?.message ||
                "Unable to save attendance. Please try again."
            );

        } finally {
            setSaving(false);
        }
    };

    // ======================================================
    // DELETE ATTENDANCE
    // ======================================================

    const deleteAttendance = async (record) => {
        const employeeName =
            record.employee?.user?.name || "this employee";

        const confirmed = window.confirm(
            `Delete attendance record for ${employeeName} on ${record.attendance_date}?`
        );

        if (!confirmed) return;

        setError("");
        setSuccess("");

        try {
            const response = await api.delete(
                `/admin/attendance/${record.id}`
            );

            setSuccess(
                response.data?.message ||
                "Attendance deleted successfully."
            );

            await Promise.all([
                fetchAttendance(),
                fetchStatistics(),
            ]);

        } catch (err) {
            console.error("Attendance delete error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to delete attendance record."
            );
        }
    };

    // ======================================================
    // FORMATTERS
    // ======================================================

    const statusBadge = (status) => {
        const styles = {
            present: "bg-success-subtle text-success",
            absent: "bg-danger-subtle text-danger",
            half_day: "bg-warning-subtle text-warning-emphasis",
            leave: "bg-primary-subtle text-primary",
            holiday: "bg-info-subtle text-info-emphasis",
        };

        return styles[status?.toLowerCase()] || "bg-light text-dark";
    };

    const formatTime = (time) => {
        if (!time) return "-";

        const match = String(time).match(/^(\d{1,2}):(\d{2})/);

        if (match) {
            const date = new Date();
            date.setHours(Number(match[1]), Number(match[2]), 0);

            return date.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
            });
        }

        return time;
    };

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

    const getFieldError = (field) => {
        return formErrors[field]?.[0] || "";
    };

    // ======================================================
    // STATISTICS CARDS
    // ======================================================

    const cards = [
        {
            label: "Total Records",
            value: statistics.total,
            icon: "bi-calendar-check",
            color: "primary",
        },
        {
            label: "Present",
            value: statistics.present,
            icon: "bi-person-check",
            color: "success",
        },
        {
            label: "Absent",
            value: statistics.absent,
            icon: "bi-person-x",
            color: "danger",
        },
        {
            label: "Half Day",
            value: statistics.half_day,
            icon: "bi-clock-history",
            color: "warning",
        },
        {
            label: "Leave",
            value: statistics.leave,
            icon: "bi-calendar-minus",
            color: "info",
        },
        {
            label: "Holiday",
            value: statistics.holiday,
            icon: "bi-calendar-event",
            color: "secondary",
        },
    ];

    const startRecord = pagination.total
        ? (pagination.current_page - 1) * pagination.per_page + 1
        : 0;

    const endRecord = Math.min(
        pagination.current_page * pagination.per_page,
        pagination.total
    );

    // ======================================================
    // UI
    // ======================================================

    return (
        <div className="container-fluid py-4">

            {/* HEADER */}

            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">

                <div>
                    <h3 className="fw-bold mb-1">
                        Attendance Management
                    </h3>

                    <p className="text-muted mb-0">
                        Monitor, mark and manage employee attendance.
                    </p>
                </div>

                <div className="d-flex gap-2">

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={openCreateModal}
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Mark Attendance
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={refreshAll}
                        disabled={loading}
                    >
                        <i className="bi bi-arrow-clockwise me-2"></i>
                        Refresh
                    </button>

                </div>
            </div>

            {/* SUCCESS */}

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

            {/* ERROR */}

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

            {/* STATISTICS */}

            <div className="row g-3 mb-4">

                {cards.map((card) => (
                    <div
                        className="col-6 col-md-4 col-xl-2"
                        key={card.label}
                    >
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">

                                <div className={`text-${card.color} mb-2`}>
                                    <i className={`bi ${card.icon} fs-3`}></i>
                                </div>

                                <h4 className="fw-bold mb-1">
                                    {card.value}
                                </h4>

                                <small className="text-muted">
                                    {card.label}
                                </small>

                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* FILTERS */}

            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">

                    <div className="row g-3 align-items-end">

                        <div className="col-md-4">
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

                        <div className="col-md-3">
                            <label className="form-label fw-semibold">
                                Attendance Date
                            </label>

                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={filters.date}
                                onChange={handleFilterChange}
                            />
                        </div>

                        <div className="col-md-3">
                            <label className="form-label fw-semibold">
                                Status
                            </label>

                            <select
                                name="status"
                                className="form-select"
                                value={filters.status}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Status</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                                <option value="half_day">Half Day</option>
                                <option value="leave">Leave</option>
                                <option value="holiday">Holiday</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <button
                                type="button"
                                className="btn btn-outline-secondary w-100"
                                onClick={resetFilters}
                            >
                                <i className="bi bi-arrow-counterclockwise me-1"></i>
                                Reset
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* ATTENDANCE RECORDS */}

            <div className="card border-0 shadow-sm">

                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                    <h5 className="fw-bold mb-0">
                        Attendance Records
                    </h5>

                    <span className="badge bg-light text-dark border">
                        {pagination.total} Records
                    </span>

                </div>

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-light">
                            <tr>
                                <th className="ps-3">#</th>
                                <th>Employee</th>
                                <th>Employee Code</th>
                                <th>Date</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Status</th>
                                <th>Remarks</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {loading ? (
                                <tr>
                                    <td colSpan="9" className="text-center py-5">
                                        <div className="spinner-border text-success"></div>
                                        <p className="text-muted mt-2 mb-0">
                                            Loading attendance...
                                        </p>
                                    </td>
                                </tr>
                            ) : records.length === 0 ? (
                                <tr>
                                    <td colSpan="9" className="text-center py-5">

                                        <i className="bi bi-calendar-x fs-1 text-muted"></i>

                                        <h6 className="mt-2">
                                            No Attendance Records
                                        </h6>

                                        <p className="text-muted">
                                            No records match the selected filters.
                                        </p>

                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={openCreateModal}
                                        >
                                            <i className="bi bi-plus-circle me-2"></i>
                                            Mark Attendance
                                        </button>

                                    </td>
                                </tr>
                            ) : (
                                records.map((record, index) => (
                                    <tr key={record.id}>

                                        <td className="ps-3">
                                            {startRecord + index}
                                        </td>

                                        <td className="fw-semibold">
                                            {record.employee?.user?.name ||
                                                record.employee?.name ||
                                                "N/A"}
                                        </td>

                                        <td>
                                            {record.employee?.employee_code || "N/A"}
                                        </td>

                                        <td>
                                            {formatDate(
                                                record.attendance_date || record.date
                                            )}
                                        </td>

                                        <td>
                                            {formatTime(record.check_in)}
                                        </td>

                                        <td>
                                            {formatTime(record.check_out)}
                                        </td>

                                        <td>
                                            <span className={`badge rounded-pill px-3 py-2 ${statusBadge(record.status)}`}>
                                                {record.status?.replace("_", " ") || "N/A"}
                                            </span>
                                        </td>

                                        <td>
                                            {record.remarks || "-"}
                                        </td>

                                        <td className="text-center">

                                            <div className="btn-group btn-group-sm">

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary"
                                                    title="Edit Attendance"
                                                    onClick={() => openEditModal(record)}
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </button>

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                    title="Delete Attendance"
                                                    onClick={() => deleteAttendance(record)}
                                                >
                                                    <i className="bi bi-trash"></i>
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

                {!loading && records.length > 0 && (
                    <div className="card-footer bg-white py-3">

                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

                            <small className="text-muted">
                                Showing {startRecord} to {endRecord} of {pagination.total} records
                            </small>

                            <div className="btn-group btn-group-sm">

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    disabled={page <= 1}
                                    onClick={() => setPage(page - 1)}
                                >
                                    Previous
                                </button>

                                <button className="btn btn-success" disabled>
                                    {pagination.current_page} / {pagination.last_page}
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    disabled={page >= pagination.last_page}
                                    onClick={() => setPage(page + 1)}
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>

            {/* ==========================================
                MARK / EDIT ATTENDANCE MODAL
            ========================================== */}

            {modalOpen && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 1060,
                        overflowY: "auto",
                    }}
                >

                    <div className="modal-dialog modal-lg modal-dialog-centered">

                        <div className="modal-content border-0 shadow">

                            <form onSubmit={handleSubmit}>

                                <div className="modal-header">

                                    <div>
                                        <h5 className="modal-title fw-bold">
                                            {editingId
                                                ? "Update Attendance"
                                                : "Mark Attendance"}
                                        </h5>

                                        <small className="text-muted">
                                            Record employee attendance details.
                                        </small>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeModal}
                                        disabled={saving}
                                    ></button>

                                </div>

                                <div className="modal-body p-4">

                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}

                                    <div className="row g-3">

                                        {/* EMPLOYEE */}

                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Employee <span className="text-danger">*</span>
                                            </label>

                                            <select
                                                name="employee_id"
                                                className={`form-select ${getFieldError("employee_id") ? "is-invalid" : ""}`}
                                                value={form.employee_id}
                                                onChange={handleFormChange}
                                                disabled={!!editingId}
                                                required
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

                                            <div className="invalid-feedback">
                                                {getFieldError("employee_id")}
                                            </div>

                                        </div>

                                        {/* DATE */}

                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Attendance Date <span className="text-danger">*</span>
                                            </label>

                                            <input
                                                type="date"
                                                name="attendance_date"
                                                className={`form-control ${getFieldError("attendance_date") ? "is-invalid" : ""}`}
                                                value={form.attendance_date}
                                                onChange={handleFormChange}
                                                required
                                            />

                                            <div className="invalid-feedback">
                                                {getFieldError("attendance_date")}
                                            </div>

                                        </div>

                                        {/* STATUS */}

                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Attendance Status <span className="text-danger">*</span>
                                            </label>

                                            <select
                                                name="status"
                                                className={`form-select ${getFieldError("status") ? "is-invalid" : ""}`}
                                                value={form.status}
                                                onChange={handleFormChange}
                                                required
                                            >
                                                <option value="present">Present</option>
                                                <option value="absent">Absent</option>
                                                <option value="half_day">Half Day</option>
                                                <option value="leave">Leave</option>
                                                <option value="holiday">Holiday</option>
                                            </select>

                                            <div className="invalid-feedback">
                                                {getFieldError("status")}
                                            </div>

                                        </div>

                                        {/* CHECK IN */}

                                        <div className="col-md-3">

                                            <label className="form-label fw-semibold">
                                                Check In
                                            </label>

                                            <input
                                                type="time"
                                                name="check_in"
                                                className={`form-control ${getFieldError("check_in") ? "is-invalid" : ""}`}
                                                value={form.check_in}
                                                onChange={handleFormChange}
                                            />

                                            <div className="invalid-feedback">
                                                {getFieldError("check_in")}
                                            </div>

                                        </div>

                                        {/* CHECK OUT */}

                                        <div className="col-md-3">

                                            <label className="form-label fw-semibold">
                                                Check Out
                                            </label>

                                            <input
                                                type="time"
                                                name="check_out"
                                                className={`form-control ${getFieldError("check_out") ? "is-invalid" : ""}`}
                                                value={form.check_out}
                                                onChange={handleFormChange}
                                            />

                                            <div className="invalid-feedback">
                                                {getFieldError("check_out")}
                                            </div>

                                        </div>

                                        {/* REMARKS */}

                                        <div className="col-12">

                                            <label className="form-label fw-semibold">
                                                Remarks
                                            </label>

                                            <textarea
                                                name="remarks"
                                                className={`form-control ${getFieldError("remarks") ? "is-invalid" : ""}`}
                                                rows="3"
                                                value={form.remarks}
                                                onChange={handleFormChange}
                                                placeholder="Enter attendance remarks..."
                                            ></textarea>

                                            <div className="invalid-feedback">
                                                {getFieldError("remarks")}
                                            </div>

                                        </div>

                                    </div>

                                    <div className="alert alert-info mt-3 mb-0">
                                        <i className="bi bi-info-circle me-2"></i>

                                        One attendance record is allowed per employee per day.
                                        Saving an existing employee/date combination updates that record.
                                    </div>

                                </div>

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-light border"
                                        onClick={closeModal}
                                        disabled={saving}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-success px-4"
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
                                                {editingId
                                                    ? "Update Attendance"
                                                    : "Save Attendance"}
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

export default Attendance;
