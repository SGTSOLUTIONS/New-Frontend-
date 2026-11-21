import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

const initialForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
    employee_code: "",
    date_of_birth: "",
    gender: "",
    department: "",
    designation: "",
    joining_date: "",
    emergency_contact: "",
    emergency_contact_name: "",
    emergency_contact_relationship: "",
    permanent_address: "",
};

const EmployeeCreate = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    // ======================================================
    // HANDLE INPUT CHANGE
    // ======================================================

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
    };

    // ======================================================
    // SUBMIT EMPLOYEE
    // ======================================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErrors({});
        setMessage("");

        if (form.password !== form.password_confirmation) {
            setErrors({
                password_confirmation: [
                    "Passwords do not match.",
                ],
            });

            setLoading(false);
            return;
        }

        try {
            const response = await api.post(
                "/admin/employees",
                form
            );

            if (response.data.success) {
                setMessage(
                    response.data.message ||
                    "Employee created successfully."
                );

                setForm(initialForm);
            }

        } catch (error) {
            console.error("Employee creation error:", error);

            if (error.response?.status === 422) {
                setErrors(error.response.data.errors || {});
            }

            setMessage(
                error.response?.data?.message ||
                "Unable to create employee. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    // ======================================================
    // FIELD ERROR
    // ======================================================

    const fieldError = (field) => {
        return errors[field]?.[0] || "";
    };

    // ======================================================
    // UI
    // ======================================================

    return (
        <div className="container-fluid py-4">

            {/* PAGE HEADER */}

            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">

                <div>
                    <h3 className="fw-bold mb-1">
                        Create Employee
                    </h3>

                    <p className="text-muted mb-0">
                        Add a new employee and create their login account.
                    </p>
                </div>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back
                </button>

            </div>

            {/* RESPONSE MESSAGE */}

            {message && (
                <div
                    className={`alert ${
                        Object.keys(errors).length > 0
                            ? "alert-danger"
                            : "alert-success"
                    } alert-dismissible fade show`}
                    role="alert"
                >
                    {message}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setMessage("")}
                    ></button>
                </div>
            )}

            <form onSubmit={handleSubmit}>

                {/* ==========================================
                    LOGIN ACCOUNT INFORMATION
                ========================================== */}

                <div className="card border-0 shadow-sm mb-4">

                    <div className="card-header bg-white py-3">
                        <h5 className="fw-bold mb-0">
                            <i className="bi bi-person-lock me-2 text-success"></i>
                            Login Account Information
                        </h5>
                    </div>

                    <div className="card-body p-4">

                        <div className="row g-3">

                            {/* Employee Name */}

                            <div className="col-md-6">
                                <label className="form-label">
                                    Employee Name <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className={`form-control ${fieldError("name") ? "is-invalid" : ""}`}
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter employee name"
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("name")}
                                </div>
                            </div>

                            {/* Email */}

                            <div className="col-md-6">
                                <label className="form-label">
                                    Email Address <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${fieldError("email") ? "is-invalid" : ""}`}
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="employee@example.com"
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("email")}
                                </div>
                            </div>

                            {/* Password */}

                            <div className="col-md-6">
                                <label className="form-label">
                                    Password <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    className={`form-control ${fieldError("password") ? "is-invalid" : ""}`}
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Minimum 8 characters"
                                    minLength="8"
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("password")}
                                </div>
                            </div>

                            {/* Confirm Password */}

                            <div className="col-md-6">
                                <label className="form-label">
                                    Confirm Password <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className={`form-control ${fieldError("password_confirmation") ? "is-invalid" : ""}`}
                                    value={form.password_confirmation}
                                    onChange={handleChange}
                                    placeholder="Re-enter password"
                                    minLength="8"
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("password_confirmation") ||
                                        (form.password_confirmation &&
                                        form.password !== form.password_confirmation
                                            ? "Passwords do not match."
                                            : "")}
                                </div>
                            </div>

                            {/* Phone */}

                            <div className="col-md-6">
                                <label className="form-label">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    className={`form-control ${fieldError("phone") ? "is-invalid" : ""}`}
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                />

                                <div className="invalid-feedback">
                                    {fieldError("phone")}
                                </div>
                            </div>

                            {/* Address */}

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
                                    placeholder="Enter address"
                                />
                            </div>

                        </div>

                    </div>
                </div>

                {/* ==========================================
                    EMPLOYEE INFORMATION
                ========================================== */}

                <div className="card border-0 shadow-sm mb-4">

                    <div className="card-header bg-white py-3">
                        <h5 className="fw-bold mb-0">
                            <i className="bi bi-person-badge me-2 text-success"></i>
                            Employee Information
                        </h5>
                    </div>

                    <div className="card-body p-4">

                        <div className="row g-3">

                            {/* Employee Code */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Employee Code <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="employee_code"
                                    className={`form-control ${fieldError("employee_code") ? "is-invalid" : ""}`}
                                    value={form.employee_code}
                                    onChange={handleChange}
                                    placeholder="SGT001"
                                    required
                                />

                                <div className="invalid-feedback">
                                    {fieldError("employee_code")}
                                </div>
                            </div>

                            {/* Date of Birth */}

                            <div className="col-md-4">
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

                            {/* Gender */}

                            <div className="col-md-4">
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

                            {/* Department */}

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
                                    placeholder="GIS / Development / HR"
                                />
                            </div>

                            {/* Designation */}

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
                                    placeholder="Enter designation"
                                />
                            </div>

                            {/* Joining Date */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Joining Date
                                </label>

                                <input
                                    type="date"
                                    name="joining_date"
                                    className={`form-control ${fieldError("joining_date") ? "is-invalid" : ""}`}
                                    value={form.joining_date}
                                    onChange={handleChange}
                                />

                                <div className="invalid-feedback">
                                    {fieldError("joining_date")}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* ==========================================
                    EMERGENCY CONTACT INFORMATION
                ========================================== */}

                <div className="card border-0 shadow-sm mb-4">

                    <div className="card-header bg-white py-3">
                        <h5 className="fw-bold mb-0">
                            <i className="bi bi-telephone me-2 text-success"></i>
                            Emergency Contact Information
                        </h5>
                    </div>

                    <div className="card-body p-4">

                        <div className="row g-3">

                            {/* Emergency Contact Name */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Emergency Contact Name
                                </label>

                                <input
                                    type="text"
                                    name="emergency_contact_name"
                                    className={`form-control ${fieldError("emergency_contact_name") ? "is-invalid" : ""}`}
                                    value={form.emergency_contact_name}
                                    onChange={handleChange}
                                    placeholder="Contact person's name"
                                />

                                <div className="invalid-feedback">
                                    {fieldError("emergency_contact_name")}
                                </div>
                            </div>

                            {/* Emergency Contact Number */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Emergency Contact Number
                                </label>

                                <input
                                    type="tel"
                                    name="emergency_contact"
                                    className={`form-control ${fieldError("emergency_contact") ? "is-invalid" : ""}`}
                                    value={form.emergency_contact}
                                    onChange={handleChange}
                                    placeholder="Emergency phone number"
                                />

                                <div className="invalid-feedback">
                                    {fieldError("emergency_contact")}
                                </div>
                            </div>

                            {/* NEW: Relationship */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Relationship
                                </label>

                                <select
                                    name="emergency_contact_relationship"
                                    className={`form-select ${fieldError("emergency_contact_relationship") ? "is-invalid" : ""}`}
                                    value={form.emergency_contact_relationship}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select Relationship
                                    </option>

                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Spouse">Spouse</option>
                                    <option value="Husband">Husband</option>
                                    <option value="Wife">Wife</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Son">Son</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Guardian">Guardian</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Other">Other</option>
                                </select>

                                <div className="invalid-feedback">
                                    {fieldError("emergency_contact_relationship")}
                                </div>
                            </div>

                            {/* Permanent Address */}

                            <div className="col-12">
                                <label className="form-label">
                                    Permanent Address
                                </label>

                                <textarea
                                    name="permanent_address"
                                    className={`form-control ${fieldError("permanent_address") ? "is-invalid" : ""}`}
                                    rows="3"
                                    value={form.permanent_address}
                                    onChange={handleChange}
                                    placeholder="Enter permanent address"
                                ></textarea>

                                <div className="invalid-feedback">
                                    {fieldError("permanent_address")}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* ==========================================
                    SUBMIT BUTTONS
                ========================================== */}

                <div className="d-flex justify-content-end gap-2 mb-4">

                    <button
                        type="button"
                        className="btn btn-light border"
                        onClick={() => {
                            setForm(initialForm);
                            setErrors({});
                            setMessage("");
                        }}
                        disabled={loading}
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        className="btn btn-success px-4"
                        disabled={
                            loading ||
                            form.password !== form.password_confirmation
                        }
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Creating...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-person-plus me-2"></i>
                                Create Employee
                            </>
                        )}
                    </button>

                </div>

            </form>

        </div>
    );
};

export default EmployeeCreate;
