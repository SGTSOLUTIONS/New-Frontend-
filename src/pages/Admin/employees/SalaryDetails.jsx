import React, { useEffect, useState } from "react";
import api from "../../../api/axios";

const currency = (value) =>
    `₹${Number(value || 0).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;

const SalaryDetails = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [employee, setEmployee] = useState(null);
    const [salaries, setSalaries] = useState([]);

    const [loadingEmployees, setLoadingEmployees] = useState(true);
    const [loadingSalary, setLoadingSalary] = useState(false);
    const [error, setError] = useState("");

    // ==========================================
    // LOAD EMPLOYEES
    // ==========================================

    const loadEmployees = async () => {
        setLoadingEmployees(true);
        setError("");

        try {
            const response = await api.get("/admin/employees", {
                params: { per_page: 100 },
            });

            const result = response.data?.data;

            const records = Array.isArray(result)
                ? result
                : result?.data || [];

            setEmployees(records);

            if (records.length > 0) {
                setSelectedEmployee(String(records[0].id));
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to load employees."
            );
        } finally {
            setLoadingEmployees(false);
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    // ==========================================
    // LOAD SELECTED EMPLOYEE SALARY
    // ==========================================

    const loadSalaryDetails = async (employeeId) => {
        if (!employeeId) {
            setEmployee(null);
            setSalaries([]);
            return;
        }

        setLoadingSalary(true);
        setError("");

        try {
            const response = await api.get(
                `/admin/employees/${employeeId}`
            );

            const result = response.data?.data;

            setEmployee(result || null);

            const salaryRecords = Array.isArray(result?.salaries)
                ? result.salaries
                : [];

            setSalaries(
                salaryRecords.sort((a, b) =>
                    String(b.effective_from || "").localeCompare(
                        String(a.effective_from || "")
                    )
                )
            );
        } catch (err) {
            setEmployee(null);
            setSalaries([]);

            setError(
                err.response?.data?.message ||
                "Unable to load salary details."
            );
        } finally {
            setLoadingSalary(false);
        }
    };

    useEffect(() => {
        if (selectedEmployee) {
            loadSalaryDetails(selectedEmployee);
        }
    }, [selectedEmployee]);

    // ==========================================
    // CURRENT SALARY
    // ==========================================

    const currentSalary =
        salaries.find((salary) => {
            const today = new Date().toISOString().slice(0, 10);

            return (
                salary.effective_from <= today &&
                (!salary.effective_to || salary.effective_to >= today)
            );
        }) || salaries[0] || null;

    const totalDeductions = currentSalary
        ? Number(currentSalary.pf || 0) +
          Number(currentSalary.esi || 0) +
          Number(currentSalary.professional_tax || 0) +
          Number(currentSalary.other_deductions || 0)
        : 0;

    // ==========================================
    // DATE FORMAT
    // ==========================================

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(`${date}`.slice(0, 10) + "T00:00:00")
            .toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });
    };

    return (
        <div className="container-fluid py-3">

            {/* PAGE HEADER */}

            <div className="mb-4">
                <h4 className="fw-bold mb-1">Employee Salary Details</h4>
                <p className="text-muted mb-0">
                    View employee salary structure and salary history.
                </p>
            </div>

            {/* ERROR */}

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

            {/* EMPLOYEE SELECTION */}

            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row align-items-end g-3">

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">
                                Select Employee
                            </label>

                            <select
                                className="form-select"
                                value={selectedEmployee}
                                onChange={(e) =>
                                    setSelectedEmployee(e.target.value)
                                }
                                disabled={loadingEmployees}
                            >
                                <option value="">
                                    {loadingEmployees
                                        ? "Loading employees..."
                                        : "Select Employee"}
                                </option>

                                {employees.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.user?.name || item.name}
                                        {" - "}
                                        {item.employee_code}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-6">
                            <button
                                type="button"
                                className="btn btn-outline-success"
                                disabled={!selectedEmployee || loadingSalary}
                                onClick={() =>
                                    loadSalaryDetails(selectedEmployee)
                                }
                            >
                                <i className="fas fa-sync-alt me-2"></i>
                                Refresh Salary
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {loadingSalary ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-success"></div>
                    <p className="text-muted mt-2">
                        Loading salary details...
                    </p>
                </div>
            ) : !employee ? (
                <div className="card border-0 shadow-sm">
                    <div className="card-body text-center py-5 text-muted">
                        Select an employee to view salary details.
                    </div>
                </div>
            ) : (
                <>
                    {/* EMPLOYEE INFORMATION */}

                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <small className="text-muted">
                                        Employee Name
                                    </small>
                                    <h6 className="fw-bold mb-0">
                                        {employee.user?.name || "-"}
                                    </h6>
                                </div>

                                <div className="col-md-4">
                                    <small className="text-muted">
                                        Employee Code
                                    </small>
                                    <h6 className="fw-bold mb-0">
                                        {employee.employee_code || "-"}
                                    </h6>
                                </div>

                                <div className="col-md-4">
                                    <small className="text-muted">
                                        Department
                                    </small>
                                    <h6 className="fw-bold mb-0">
                                        {employee.department || "-"}
                                    </h6>
                                </div>

                                <div className="col-md-4">
                                    <small className="text-muted">
                                        Designation
                                    </small>
                                    <h6 className="fw-bold mb-0">
                                        {employee.designation || "-"}
                                    </h6>
                                </div>

                                <div className="col-md-4">
                                    <small className="text-muted">
                                        Email
                                    </small>
                                    <h6 className="fw-bold mb-0">
                                        {employee.user?.email || "-"}
                                    </h6>
                                </div>

                                <div className="col-md-4">
                                    <small className="text-muted">
                                        Employment Status
                                    </small>
                                    <h6 className="fw-bold mb-0">
                                        {employee.employment_status || "-"}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CURRENT SALARY SUMMARY */}

                    {currentSalary ? (
                        <>
                            <div className="row g-3 mb-4">

                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <span className="text-muted">
                                                Gross Salary
                                            </span>
                                            <h4 className="fw-bold text-success mt-2">
                                                {currency(currentSalary.gross_salary)}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <span className="text-muted">
                                                Total Deductions
                                            </span>
                                            <h4 className="fw-bold text-danger mt-2">
                                                {currency(totalDeductions)}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <span className="text-muted">
                                                Net Salary
                                            </span>
                                            <h4 className="fw-bold text-primary mt-2">
                                                {currency(currentSalary.net_salary)}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* SALARY BREAKDOWN */}

                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-white py-3">
                                    <h6 className="fw-bold mb-0">
                                        Salary Breakdown
                                    </h6>
                                </div>

                                <div className="card-body">
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <h6 className="text-success mb-3">
                                                Earnings
                                            </h6>

                                            <table className="table table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td>Basic Salary</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.basic_salary)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>HRA</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.hra)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Allowances</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.allowances)}
                                                        </td>
                                                    </tr>
                                                    <tr className="table-light">
                                                        <th>Gross Salary</th>
                                                        <th className="text-end">
                                                            {currency(currentSalary.gross_salary)}
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="col-md-6">
                                            <h6 className="text-danger mb-3">
                                                Deductions
                                            </h6>

                                            <table className="table table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td>Provident Fund (PF)</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.pf)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>ESI</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.esi)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Professional Tax</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.professional_tax)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Other Deductions</td>
                                                        <td className="text-end fw-semibold">
                                                            {currency(currentSalary.other_deductions)}
                                                        </td>
                                                    </tr>
                                                    <tr className="table-light">
                                                        <th>Total Deductions</th>
                                                        <th className="text-end">
                                                            {currency(totalDeductions)}
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                    <div className="border-top pt-3 mt-2 d-flex justify-content-between">
                                        <strong>Net Salary</strong>
                                        <strong className="text-success fs-5">
                                            {currency(currentSalary.net_salary)}
                                        </strong>
                                    </div>

                                    <p className="text-muted small mb-0 mt-3">
                                        Effective from: {formatDate(currentSalary.effective_from)}
                                        {" | "}
                                        Effective to: {formatDate(currentSalary.effective_to)}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="alert alert-info">
                            No salary record is available for this employee.
                        </div>
                    )}

                    {/* SALARY HISTORY */}

                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white py-3">
                            <h6 className="fw-bold mb-0">
                                Salary History
                            </h6>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-3">#</th>
                                        <th>Effective From</th>
                                        <th>Effective To</th>
                                        <th>Basic Salary</th>
                                        <th>Gross Salary</th>
                                        <th>Deductions</th>
                                        <th>Net Salary</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {salaries.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center text-muted py-4"
                                            >
                                                No salary history found.
                                            </td>
                                        </tr>
                                    ) : (
                                        salaries.map((salary, index) => {
                                            const deductions =
                                                Number(salary.pf || 0) +
                                                Number(salary.esi || 0) +
                                                Number(salary.professional_tax || 0) +
                                                Number(salary.other_deductions || 0);

                                            return (
                                                <tr key={salary.id}>
                                                    <td className="ps-3">
                                                        {index + 1}
                                                    </td>
                                                    <td>
                                                        {formatDate(salary.effective_from)}
                                                    </td>
                                                    <td>
                                                        {formatDate(salary.effective_to)}
                                                    </td>
                                                    <td>
                                                        {currency(salary.basic_salary)}
                                                    </td>
                                                    <td>
                                                        {currency(salary.gross_salary)}
                                                    </td>
                                                    <td>
                                                        {currency(deductions)}
                                                    </td>
                                                    <td className="fw-semibold text-success">
                                                        {currency(salary.net_salary)}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SalaryDetails;
