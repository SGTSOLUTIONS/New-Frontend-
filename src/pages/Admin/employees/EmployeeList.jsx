import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

const EmployeeList = () => {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");
    const [status, setStatus] = useState("");

    const [appliedFilters, setAppliedFilters] = useState({
        search: "",
        department: "",
        status: "",
    });

    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 15,
        total: 0,
    });

    const [page, setPage] = useState(1);

    // Fetch employees from Laravel API
    const fetchEmployees = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/employees", {
                params: {
                    search: appliedFilters.search || undefined,
                    department: appliedFilters.department || undefined,
                    status: appliedFilters.status || undefined,
                    page,
                },
            });

            const paginator = response.data?.data;

            setEmployees(paginator?.data || []);

            setPagination({
                current_page: paginator?.current_page || 1,
                last_page: paginator?.last_page || 1,
                per_page: paginator?.per_page || 15,
                total: paginator?.total || 0,
            });

        } catch (err) {
            console.error("Employee fetch error:", err);

            setEmployees([]);
            setError(
                err.response?.data?.message ||
                "Unable to retrieve employees. Please try again."
            );

        } finally {
            setLoading(false);
        }
    }, [appliedFilters, page]);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    // Apply search and filters
    const handleSearch = (e) => {
        e.preventDefault();

        setPage(1);

        setAppliedFilters({
            search: search.trim(),
            department: department,
            status: status,
        });
    };

    // Reset filters
    const handleReset = () => {
        setSearch("");
        setDepartment("");
        setStatus("");
        setPage(1);

        setAppliedFilters({
            search: "",
            department: "",
            status: "",
        });
    };

    // Pagination
    const changePage = (newPage) => {
        if (
            newPage >= 1 &&
            newPage <= pagination.last_page &&
            newPage !== page
        ) {
            setPage(newPage);
        }
    };

    // Employment status badge
    const getStatusBadge = (status) => {
        const styles = {
            active: "bg-success-subtle text-success",
            inactive: "bg-secondary-subtle text-secondary",
            resigned: "bg-danger-subtle text-danger",
        };

        return styles[status?.toLowerCase()] ||
            "bg-light text-dark";
    };

    const startRecord = pagination.total === 0
        ? 0
        : (pagination.current_page - 1) * pagination.per_page + 1;

    const endRecord = Math.min(
        pagination.current_page * pagination.per_page,
        pagination.total
    );

    return (
        <div className="container-fluid py-4">

            {/* Page Header */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">

                <div>
                    <h3 className="fw-bold mb-1">
                        Employee Management
                    </h3>

                    <p className="text-muted mb-0">
                        Manage employee profiles and accounts.
                    </p>
                </div>

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => navigate("/dashboard/employees/create")}
                >
                    <i className="bi bi-person-plus me-2"></i>
                    Add Employee
                </button>

            </div>

            {/* Total Employees */}
            <div className="row g-3 mb-4">

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">

                            <div className="rounded-circle bg-success-subtle text-success p-3">
                                <i className="bi bi-people fs-4"></i>
                            </div>

                            <div>
                                <p className="text-muted mb-1">
                                    Total Employees
                                </p>

                                <h4 className="fw-bold mb-0">
                                    {pagination.total}
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">

                            <div className="rounded-circle bg-primary-subtle text-primary p-3">
                                <i className="bi bi-person-check fs-4"></i>
                            </div>

                            <div>
                                <p className="text-muted mb-1">
                                    Current Page
                                </p>

                                <h4 className="fw-bold mb-0">
                                    {pagination.current_page}
                                    <small className="text-muted fs-6">
                                        {" "} / {pagination.last_page}
                                    </small>
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">

                            <div className="rounded-circle bg-warning-subtle text-warning p-3">
                                <i className="bi bi-list-check fs-4"></i>
                            </div>

                            <div>
                                <p className="text-muted mb-1">
                                    Records Per Page
                                </p>

                                <h4 className="fw-bold mb-0">
                                    {pagination.per_page}
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Search and Filters */}
            <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-3">

                    <form onSubmit={handleSearch}>

                        <div className="row g-3 align-items-end">

                            <div className="col-lg-5 col-md-6">
                                <label className="form-label fw-semibold">
                                    Search Employees
                                </label>

                                <div className="input-group">
                                    <span className="input-group-text bg-white">
                                        <i className="bi bi-search"></i>
                                    </span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name, email, phone or employee code"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <label className="form-label fw-semibold">
                                    Department
                                </label>

                                <select
                                    className="form-select"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="">All Departments</option>
                                    <option value="GIS">GIS</option>
                                    <option value="Development">Development</option>
                                    <option value="Survey">Survey</option>
                                    <option value="Administration">Administration</option>
                                    <option value="HR">HR</option>
                                    <option value="Accounts">Accounts</option>
                                </select>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <label className="form-label fw-semibold">
                                    Employment Status
                                </label>

                                <select
                                    className="form-select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="resigned">Resigned</option>
                                </select>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-success flex-fill"
                                >
                                    <i className="bi bi-funnel me-1"></i>
                                    Apply
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={handleReset}
                                >
                                    <i className="bi bi-arrow-counterclockwise"></i>
                                </button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>

            {/* Employee Table */}
            <div className="card border-0 shadow-sm">

                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                    <h5 className="fw-bold mb-0">
                        Employee Records
                    </h5>

                    <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={fetchEmployees}
                        disabled={loading}
                    >
                        <i className={`bi bi-arrow-clockwise me-1 ${loading ? "spin" : ""}`}></i>
                        Refresh
                    </button>

                </div>

                <div className="card-body p-0">

                    {error && (
                        <div className="alert alert-danger m-3">
                            {error}
                        </div>
                    )}

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table-light">
                                <tr>
                                    <th className="ps-3">#</th>
                                    <th>Employee</th>
                                    <th>Employee Code</th>
                                    <th>Department</th>
                                    <th>Designation</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {loading ? (
                                    <tr>
                                        <td colSpan="8" className="text-center py-5">
                                            <div className="spinner-border text-success"></div>
                                            <p className="text-muted mt-2 mb-0">
                                                Loading employees...
                                            </p>
                                        </td>
                                    </tr>
                                ) : employees.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="text-center py-5">
                                            <i className="bi bi-people fs-1 text-muted"></i>

                                            <h6 className="mt-2">
                                                No Employees Found
                                            </h6>

                                            <p className="text-muted mb-3">
                                                No employee records match your search.
                                            </p>

                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() => navigate("/dashboard/employees/create")}
                                            >
                                                Add Employee
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    employees.map((employee, index) => (

                                        <tr key={employee.id}>

                                            <td className="ps-3">
                                                {startRecord + index}
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-2">

                                                    <div
                                                        className="rounded-circle bg-success-subtle text-success d-flex align-items-center justify-content-center fw-bold"
                                                        style={{
                                                            width: "40px",
                                                            height: "40px",
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        {employee.user?.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase() || "E"}
                                                    </div>

                                                    <div>
                                                        <div className="fw-semibold">
                                                            {employee.user?.name || "N/A"}
                                                        </div>

                                                        <small className="text-muted">
                                                            {employee.user?.email || "N/A"}
                                                        </small>
                                                    </div>

                                                </div>
                                            </td>

                                            <td>
                                                <span className="fw-semibold">
                                                    {employee.employee_code || "N/A"}
                                                </span>
                                            </td>

                                            <td>
                                                {employee.department || "N/A"}
                                            </td>

                                            <td>
                                                {employee.designation || "N/A"}
                                            </td>

                                            <td>
                                                {employee.user?.phone || "N/A"}
                                            </td>

                                            <td>
                                                <span className={`badge rounded-pill px-3 py-2 ${getStatusBadge(employee.employment_status)}`}>
                                                    {employee.employment_status || "Unknown"}
                                                </span>
                                            </td>

                                            <td className="text-center">

                                                <div className="d-flex justify-content-center gap-2">

                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-primary"
                                                        title="View Employee"
                                                        onClick={() => navigate(`/dashboard/employees/${employee.id}`)}
                                                    >
                                                        <i className="bi bi-eye"></i>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-success"
                                                        title="Edit Employee"
                                                        onClick={() => navigate(`/dashboard/employees/${employee.id}/edit`)}
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))
                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Pagination */}
                {!loading && employees.length > 0 && (
                    <div className="card-footer bg-white py-3">

                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

                            <small className="text-muted">
                                Showing {startRecord} to {endRecord} of {pagination.total} employees
                            </small>

                            <nav aria-label="Employee pagination">

                                <ul className="pagination pagination-sm mb-0">

                                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => changePage(1)}
                                            disabled={page === 1}
                                        >
                                            First
                                        </button>
                                    </li>

                                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => changePage(page - 1)}
                                            disabled={page === 1}
                                        >
                                            Previous
                                        </button>
                                    </li>

                                    <li className="page-item active">
                                        <span className="page-link">
                                            {page} / {pagination.last_page}
                                        </span>
                                    </li>

                                    <li className={`page-item ${page === pagination.last_page ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => changePage(page + 1)}
                                            disabled={page === pagination.last_page}
                                        >
                                            Next
                                        </button>
                                    </li>

                                    <li className={`page-item ${page === pagination.last_page ? "disabled" : ""}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => changePage(pagination.last_page)}
                                            disabled={page === pagination.last_page}
                                        >
                                            Last
                                        </button>
                                    </li>

                                </ul>

                            </nav>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default EmployeeList;
