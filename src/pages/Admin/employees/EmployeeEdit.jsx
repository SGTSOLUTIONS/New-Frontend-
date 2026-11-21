import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/axios";

const EmployeeEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        employee_code: "",
        date_of_birth: "",
        gender: "",
        department: "",
        designation: "",
        joining_date: "",
        employment_status: "active",
        emergency_contact: "",
        emergency_contact_name: "",
        permanent_address: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Fetch employee details
    const fetchEmployee = useCallback(async () => {
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await api.get(`/admin/employees/${id}`);

            const employee = response.data?.data;

            if (!employee) {
                throw new Error("Employee information not found.");
            }

            setForm({
                name: employee.user?.name || "",
                email: employee.user?.email || "",
                phone: employee.user?.phone || "",
                address: employee.user?.address || "",

                employee_code: employee.employee_code || "",
                date_of_birth: employee.date_of_birth
                    ? employee.date_of_birth.substring(0, 10)
                    : "",
                gender: employee.gender || "",
                department: employee.department || "",
                designation: employee.designation || "",
                joining_date: employee.joining_date
                    ? employee.joining_date.substring(0, 10)
                    : "",
                employment_status: employee.employment_status || "active",

                emergency_contact: employee.emergency_contact || "",
                emergency_contact_name: employee.emergency_contact_name || "",
                permanent_address: employee.permanent_address || "",
            });

        } catch (error) {
            console.error("Employee fetch error:", error);

            setErrorMessage(
                error.response?.data?.message ||
                error.message ||
                "Unable to load employee details."
            );

        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchEmployee();
    }, [fetchEmployee]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

        setMessage("");
        setErrorMessage("");
    };

    // Submit employee update
    const handleSubmit = async (e) => {
        e.preventDefault();

        setSaving(true);
        setErrors({});
        setMessage("");
        setErrorMessage("");

        try {
            const response = await api.put(
                `/admin/employees/${id}`,
                form
            );

            if (response.data?.success) {
                setMessage(
                    response.data.message ||
                    "Employee updated successfully."
                );
            }

        } catch (error) {
            console.error("Employee update error:", error);

            if (error.response?.status === 422) {
                setErrors(error.response.data.errors || {});
            }

            setErrorMessage(
                error.response?.data?.message ||
                "Unable to update employee. Please try again."
            );

        } finally {
            setSaving(false);
        }
    };

    const fieldError = (field) => errors[field]?.[0] || "";

    if (loading) {
        return (
            <div className="container-fluid py-5 text-center">
                <div className="spinner-border text-success"></div>
                <p className="text-muted mt-3">
                    Loading employee information...
                </p>
            </div>
        );
    }

    if (errorMessage && !form.name && !form.email) {
        return (
            <div className="container-fluid py-4">
                <div className="alert alert-danger">
                    {errorMessage}
                </div>

                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/dashboard/employees")}
                >
                    Back to Employees
                </button>
            </div>
        );
    }

    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">

                <div>
                    <h3 className="fw-bold mb-1">
                        Edit Employee
                    </h3>

                    <p className="text-muted mb-0">
                        Update employee profile and employment information.
                    </p>
                </div>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/dashboard/employees")}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back
                </button>

            </div>

            {/* Success Message */}
            {message && (
                <div className="alert alert-success alert-dismissible fade show">
                    <i className="bi bi-check-circle me-2"></i>
                    {message}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setMessage("")}
                    ></button>
                </div>
            )}

            {/* Error Message */}
            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>

                {/* Personal Information */}
                <div className="card border-0 shadow-sm mb-4">

                    <div className="card-header bg-white py-3">
                        <h5 className="fw-bold mb-0">
                            <i className="bi bi-person me-2 text-success"></i>
                            Personal Information
                        </h5>
                    </div>

                    <div className="card-body p-4">
                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className={`form-control ${fieldError("name") ? "is-invalid" : ""}`}
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("name")}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Email Address *
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${fieldError("email") ? "is-invalid" : ""}`}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("email")}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="date_of_birth"
                                    className={`form-control ${fieldError("date_of_birth") ? "is-invalid" : ""}`}
                                    value={form.date_of_birth}
                                    onChange={handleChange}
                                />

                                <div className="invalid-feedback">
                                    {fieldError("date_of_birth")}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Gender
                                </label>

                                <select
                                    name="gender"
                                    className="form-select"
                                    value={form.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Address
                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={form.address}
                                    onChange={handleChange}
                                />
                            </div>

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
                        <div className="row g-3">

                            <div className="col-md-4">
                                <label className="form-label">
                                    Employee Code
                                </label>

                                <input
                                    type="text"
                                    name="employee_code"
                                    className="form-control"
                                    value={form.employee_code}
                                    disabled
                                />

                                <small className="text-muted">
                                    Employee code cannot be changed here.
                                </small>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Department
                                </label>

                                <input
                                    type="text"
                                    name="department"
                                    className="form-control"
                                    value={form.department}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Designation
                                </label>

                                <input
                                    type="text"
                                    name="designation"
                                    className="form-control"
                                    value={form.designation}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Joining Date
                                </label>

                                <input
                                    type="date"
                                    name="joining_date"
                                    className="form-control"
                                    value={form.joining_date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Employment Status
                                </label>

                                <select
                                    name="employment_status"
                                    className={`form-select ${fieldError("employment_status") ? "is-invalid" : ""}`}
                                    value={form.employment_status}
                                    onChange={handleChange}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="resigned">Resigned</option>
                                </select>

                                <div className="invalid-feedback">
                                    {fieldError("employment_status")}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="card border-0 shadow-sm mb-4">

                    <div className="card-header bg-white py-3">
                        <h5 className="fw-bold mb-0">
                            <i className="bi bi-telephone me-2 text-success"></i>
                            Emergency Contact
                        </h5>
                    </div>

                    <div className="card-body p-4">
                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">
                                    Contact Person
                                </label>

                                <input
                                    type="text"
                                    name="emergency_contact_name"
                                    className="form-control"
                                    value={form.emergency_contact_name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Contact Number
                                </label>

                                <input
                                    type="tel"
                                    name="emergency_contact"
                                    className="form-control"
                                    value={form.emergency_contact}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">
                                    Permanent Address
                                </label>

                                <textarea
                                    name="permanent_address"
                                    rows="3"
                                    className="form-control"
                                    value={form.permanent_address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="d-flex justify-content-end gap-2 mb-4">

                    <button
                        type="button"
                        className="btn btn-light border"
                        onClick={() => navigate("/dashboard/employees")}
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
                                Updating...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check-circle me-2"></i>
                                Update Employee
                            </>
                        )}
                    </button>

                </div>

            </form>

        </div>
    );
};

export default EmployeeEdit;
