import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/axios";

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchEmployee = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get(`/admin/employees/${id}`);

            if (response.data?.success && response.data?.data) {
                setEmployee(response.data.data);
            } else {
                setError("Employee information not found.");
            }
        } catch (err) {
            console.error("Employee details error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to retrieve employee details."
            );
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchEmployee();
    }, [fetchEmployee]);

    const formatDate = (date) => {
        if (!date) return "Not provided";

        const parsed = new Date(date);

        if (Number.isNaN(parsed.getTime())) {
            return "Not available";
        }

        return parsed.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const formatCurrency = (amount) => {
        if (amount === null || amount === undefined) {
            return "Not available";
        }

        return Number(amount).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
        });
    };

    const getStatusClass = (status) => {
        switch (status?.toLowerCase()) {
            case "active":
                return "bg-success-subtle text-success";
            case "inactive":
                return "bg-secondary-subtle text-secondary";
            case "resigned":
                return "bg-danger-subtle text-danger";
            default:
                return "bg-light text-dark";
        }
    };

    const InfoItem = ({ label, value }) => (
        <div className="col-md-4 col-sm-6 mb-3">
            <div className="small text-muted mb-1">{label}</div>
            <div className="fw-semibold text-dark">
                {value || "Not provided"}
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="container-fluid py-5 text-center">
                <div className="spinner-border text-success"></div>
                <p className="text-muted mt-3">
                    Loading employee details...
                </p>
            </div>
        );
    }

    if (error || !employee) {
        return (
            <div className="container-fluid py-4">
                <div className="alert alert-danger">
                    {error || "Employee not found."}
                </div>

                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/dashboard/employees")}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Employees
                </button>
            </div>
        );
    }

    const user = employee.user || {};
    const salaries = employee.salaries || [];

    const initials = user.name
        ? user.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase()
        : "E";

    return (
        <div className="container-fluid py-4">

            {/* Page Header */}
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                <div>
                    <h3 className="fw-bold mb-1">
                        Employee Details
                    </h3>
                    <p className="text-muted mb-0">
                        View complete employee information.
                    </p>
                </div>

                <div className="d-flex gap-2">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => navigate("/dashboard/employees")}
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Back
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() =>
                            navigate(`/dashboard/employees/${employee.id}/edit`)
                        }
                    >
                        <i className="bi bi-pencil me-2"></i>
                        Edit Employee
                    </button>
                </div>
            </div>

            {/* Employee Profile Header */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                    <div className="d-flex flex-wrap align-items-center gap-3">

                        <div
                            className="rounded-circle bg-success-subtle text-success d-flex align-items-center justify-content-center fw-bold"
                            style={{
                                width: "85px",
                                height: "85px",
                                fontSize: "28px",
                                flexShrink: 0,
                            }}
                        >
                            {initials}
                        </div>

                        <div className="flex-grow-1">
                            <h4 className="fw-bold mb-1">
                                {user.name || "Employee"}
                            </h4>

                            <div className="text-muted mb-2">
                                {employee.designation || "Designation not provided"}
                            </div>

                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-light text-dark border">
                                    {employee.employee_code || "No employee code"}
                                </span>

                                <span className={`badge rounded-pill px-3 py-2 ${getStatusClass(employee.employment_status)}`}>
                                    {employee.employment_status || "Unknown"}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Personal Information */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3">
                    <h5 className="fw-bold mb-0">
                        <i className="bi bi-person me-2 text-success"></i>
                        Personal Information
                    </h5>
                </div>

                <div className="card-body p-4">
                    <div className="row">
                        <InfoItem label="Full Name" value={user.name} />
                        <InfoItem label="Email Address" value={user.email} />
                        <InfoItem label="Phone Number" value={user.phone} />
                        <InfoItem label="Date of Birth" value={formatDate(employee.date_of_birth)} />
                        <InfoItem label="Gender" value={employee.gender} />
                        <InfoItem label="Address" value={user.address} />
                    </div>
                </div>
            </div>

            {/* Employment Information */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3">
                    <h5 className="fw-bold mb-0">
                        <i className="bi bi-briefcase me-2 text-success"></i>
                        Employment Information
                    </h5>
                </div>

                <div className="card-body p-4">
                    <div className="row">
                        <InfoItem label="Employee Code" value={employee.employee_code} />
                        <InfoItem label="Department" value={employee.department} />
                        <InfoItem label="Designation" value={employee.designation} />
                        <InfoItem label="Joining Date" value={formatDate(employee.joining_date)} />
                        <InfoItem label="Employment Status" value={employee.employment_status} />
                        <InfoItem label="Employee ID" value={employee.id} />
                    </div>
                </div>
            </div>

            {/* Emergency Contact Information */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3">
                    <h5 className="fw-bold mb-0">
                        <i className="bi bi-telephone me-2 text-success"></i>
                        Emergency Contact Information
                    </h5>
                </div>

                <div className="card-body p-4">
                    <div className="row">

                        <InfoItem
                            label="Contact Person"
                            value={employee.emergency_contact_name}
                        />

                        <InfoItem
                            label="Contact Number"
                            value={employee.emergency_contact}
                        />

                        {/* Newly added relationship field */}
                        <InfoItem
                            label="Relationship"
                            value={employee.emergency_contact_relationship}
                        />

                        <InfoItem
                            label="Permanent Address"
                            value={employee.permanent_address}
                        />

                    </div>
                </div>
            </div>

            {/* Salary History */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3">
                    <h5 className="fw-bold mb-0">
                        <i className="bi bi-currency-rupee me-2 text-success"></i>
                        Salary History
                    </h5>
                </div>

                <div className="card-body p-0">
                    {salaries.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-wallet2 fs-1 text-muted"></i>
                            <h6 className="mt-2">
                                No Salary Records
                            </h6>
                            <p className="text-muted mb-0">
                                Salary information has not been added yet.
                            </p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-3">#</th>
                                        <th>Effective From</th>
                                        <th>Effective To</th>
                                        <th>Basic Salary</th>
                                        <th>Gross Salary</th>
                                        <th>Net Salary</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {salaries.map((salary, index) => (
                                        <tr key={salary.id}>
                                            <td className="ps-3">
                                                {index + 1}
                                            </td>

                                            <td>
                                                {formatDate(salary.effective_from)}
                                            </td>

                                            <td>
                                                {salary.effective_to
                                                    ? formatDate(salary.effective_to)
                                                    : "Currently applicable"}
                                            </td>

                                            <td>
                                                {formatCurrency(salary.basic_salary)}
                                            </td>

                                            <td>
                                                {formatCurrency(salary.gross_salary)}
                                            </td>

                                            <td className="fw-semibold text-success">
                                                {formatCurrency(salary.net_salary)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Refresh */}
            <div className="text-end mb-4">
                <button
                    className="btn btn-outline-success"
                    onClick={fetchEmployee}
                >
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Refresh Details
                </button>
            </div>

        </div>
    );
};

export default EmployeeDetails;
