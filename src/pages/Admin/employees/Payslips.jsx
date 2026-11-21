import React, { useEffect, useState } from "react";
import api from "../../../api/axios";

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
];

const initialForm = {
    employee_id: "",
    month: String(new Date().getMonth() + 1),
    year: String(new Date().getFullYear()),
    gross_salary: "",
    deductions: "",
    net_salary: "",
    file: null,
};

const Payslips = () => {
    const [employees, setEmployees] = useState([]);
    const [payslips, setPayslips] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [year, setYear] = useState(String(new Date().getFullYear()));

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const loadEmployees = async () => {
        const response = await api.get("/admin/employees", {
            params: { per_page: 100 },
        });

        const result = response.data?.data;
        setEmployees(
            Array.isArray(result) ? result : result?.data || []
        );
    };

    const loadPayslips = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/payslips", {
                params: { year },
            });

            const result = response.data?.data;

            setPayslips(
                Array.isArray(result) ? result : result?.data || []
            );
        } catch (err) {
            setPayslips([]);
            setError(
                err.response?.data?.message ||
                "Unable to load payslips."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEmployees().catch(() => {
            setError("Unable to load employee list.");
        });

        loadPayslips();
    }, [year]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: name === "file" ? files?.[0] || null : value,
        }));
    };

    const calculateNetSalary = (gross, deductions) => {
        const grossValue = Number(gross) || 0;
        const deductionValue = Number(deductions) || 0;

        return Math.max(0, grossValue - deductionValue).toFixed(2);
    };

    const handleSalaryChange = (e) => {
        const { name, value } = e.target;

        setForm((previous) => {
            const updated = {
                ...previous,
                [name]: value,
            };

            if (name === "gross_salary" || name === "deductions") {
                updated.net_salary = calculateNetSalary(
                    name === "gross_salary" ? value : updated.gross_salary,
                    name === "deductions" ? value : updated.deductions
                );
            }

            return updated;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.file) {
            setError("Please select the payslip PDF.");
            return;
        }

        if (form.file.type !== "application/pdf") {
            setError("Only PDF payslips are accepted.");
            return;
        }

        setSaving(true);
        setError("");
        setSuccess("");

        try {
            const payload = new FormData();

            payload.append("employee_id", form.employee_id);
            payload.append("month", form.month);
            payload.append("year", form.year);
            payload.append("gross_salary", form.gross_salary || 0);
            payload.append("deductions", form.deductions || 0);
            payload.append("net_salary", form.net_salary || 0);
            payload.append("file", form.file);

            await api.post("/admin/payslips", payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setSuccess("Payslip uploaded successfully.");
            setForm(initialForm);
            e.target.reset();

            setYear(form.year);
            await loadPayslips();
        } catch (err) {
            const validationErrors = err.response?.data?.errors;

            setError(
                validationErrors
                    ? Object.values(validationErrors).flat().join(" ")
                    : err.response?.data?.message ||
                      "Unable to upload payslip."
            );
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this payslip?")) {
            return;
        }

        setError("");
        setSuccess("");

        try {
            await api.delete(`/admin/payslips/${id}`);
            setSuccess("Payslip deleted successfully.");
            await loadPayslips();
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to delete payslip."
            );
        }
    };

    const employeeName = (payslip) =>
        payslip.employee?.user?.name ||
        payslip.employee?.name ||
        "Employee";

    const monthName = (month) =>
        months[Number(month) - 1] || "-";

    return (
        <div className="container-fluid py-3">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-1">Employee Payslips</h4>
                    <p className="text-muted mb-0">
                        Upload and manage monthly employee payslips.
                    </p>
                </div>

                <select
                    className="form-select mt-3 mt-md-0"
                    style={{ width: "140px" }}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    {[2024, 2025, 2026, 2027, 2028].map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            {error && (
                <div className="alert alert-danger alert-dismissible">
                    {error}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setError("")}
                    />
                </div>
            )}

            {success && (
                <div className="alert alert-success alert-dismissible">
                    {success}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSuccess("")}
                    />
                </div>
            )}

            <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white py-3">
                    <h6 className="fw-bold mb-0">Upload New Payslip</h6>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Employee *</label>
                                <select
                                    name="employee_id"
                                    className="form-select"
                                    value={form.employee_id}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Employee</option>
                                    {employees.map((employee) => (
                                        <option key={employee.id} value={employee.id}>
                                            {employee.user?.name || employee.name}
                                            {" - "}
                                            {employee.employee_code}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Month *</label>
                                <select
                                    name="month"
                                    className="form-select"
                                    value={form.month}
                                    onChange={handleChange}
                                    required
                                >
                                    {months.map((month, index) => (
                                        <option key={month} value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Year *</label>
                                <input
                                    type="number"
                                    name="year"
                                    className="form-control"
                                    min="2000"
                                    max="2100"
                                    value={form.year}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Gross Salary *</label>
                                <input
                                    type="number"
                                    name="gross_salary"
                                    className="form-control"
                                    min="0"
                                    step="0.01"
                                    value={form.gross_salary}
                                    onChange={handleSalaryChange}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Deductions</label>
                                <input
                                    type="number"
                                    name="deductions"
                                    className="form-control"
                                    min="0"
                                    step="0.01"
                                    value={form.deductions}
                                    onChange={handleSalaryChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Net Salary</label>
                                <input
                                    type="number"
                                    name="net_salary"
                                    className="form-control"
                                    value={form.net_salary}
                                    readOnly
                                />
                            </div>

                            <div className="col-md-8">
                                <label className="form-label">Payslip PDF *</label>
                                <input
                                    type="file"
                                    name="file"
                                    className="form-control"
                                    accept="application/pdf,.pdf"
                                    onChange={handleChange}
                                    required
                                />
                                <small className="text-muted">
                                    Upload a PDF file.
                                </small>
                            </div>

                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={saving}
                                >
                                    {saving ? "Uploading..." : "Upload Payslip"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h6 className="fw-bold mb-0">
                        Payslip Records - {year}
                    </h6>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th className="ps-3">#</th>
                                <th>Employee</th>
                                <th>Month</th>
                                <th>Year</th>
                                <th>Gross Salary</th>
                                <th>Deductions</th>
                                <th>Net Salary</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="8" className="text-center py-4">
                                        Loading payslips...
                                    </td>
                                </tr>
                            ) : payslips.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="text-center text-muted py-4">
                                        No payslips found.
                                    </td>
                                </tr>
                            ) : (
                                payslips.map((payslip, index) => (
                                    <tr key={payslip.id}>
                                        <td className="ps-3">{index + 1}</td>
                                        <td className="fw-semibold">
                                            {employeeName(payslip)}
                                        </td>
                                        <td>{monthName(payslip.month)}</td>
                                        <td>{payslip.year}</td>
                                        <td>
                                            ₹{Number(payslip.gross_salary || 0).toLocaleString("en-IN")}
                                        </td>
                                        <td>
                                            ₹{Number(payslip.deductions || 0).toLocaleString("en-IN")}
                                        </td>
                                        <td className="fw-semibold">
                                            ₹{Number(payslip.net_salary || 0).toLocaleString("en-IN")}
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                {payslip.download_url && (
                                                    <a
                                                        href={payslip.download_url}
                                                        className="btn btn-sm btn-outline-primary"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        View
                                                    </a>
                                                )}
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(payslip.id)}
                                                >
                                                    Delete
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
        </div>
    );
};

export default Payslips;
