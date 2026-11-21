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
        emergency_contact_relationship: "",
        permanent_address: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // ======================================================
    // FETCH EMPLOYEE DETAILS
    // ======================================================

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

                // NEW: Emergency contact relationship
                emergency_contact_relationship:
                    employee.emergency_contact_relationship || "",

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

    // ======================================================
    // HANDLE INPUT CHANGES
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
        setErrorMessage("");
    };

    // ======================================================
    // SUBMIT EMPLOYEE UPDATE
    // ======================================================

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

                // Refresh form with saved information
                await fetchEmployee();
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

    // ======================================================
    // FIELD ERROR
    // ======================================================

    const fieldError = (field) => errors[field]?.[0] || "";

    // ======================================================
    // LOADING
    // ======================================================

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

    // ======================================================
    // FETCH ERROR
    // ======================================================

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

    // ======================================================
    // UI
    // ======================================================

    return (
        <div className="container-fluid py-4">

            {/* HEADER */}

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

            {/* SUCCESS MESSAGE */}

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

            {/* ERROR MESSAGE */}

            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>

                {/* ==========================================
                    PERSONAL INFORMATION
                ========================================== */}

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

                {/* ==========================================
                    EMPLOYMENT INFORMATION
                ========================================== */}

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

                {/* ==========================================
                    EMERGENCY CONTACT
                ========================================== */}

                <div className="card border-0 shadow-sm mb-4">

                    <div className="card-header bg-white py-3">
                        <h5 className="fw-bold mb-0">
                            <i className="bi bi-telephone me-2 text-success"></i>
                            Emergency Contact
                        </h5>
                    </div>

                    <div className="card-body p-4">

                        <div className="row g-3">

                            {/* CONTACT PERSON */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Contact Person
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

                            {/* CONTACT NUMBER */}

                            <div className="col-md-4">
                                <label className="form-label">
                                    Contact Number
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

                            {/* NEW: RELATIONSHIP */}

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

                            {/* PERMANENT ADDRESS */}

                            <div className="col-12">
                                <label className="form-label">
                                    Permanent Address
                                </label>

                                <textarea
                                    name="permanent_address"
                                    rows="3"
                                    className={`form-control ${fieldError("permanent_address") ? "is-invalid" : ""}`}
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
                    ACTIONS
                ========================================== */}

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
