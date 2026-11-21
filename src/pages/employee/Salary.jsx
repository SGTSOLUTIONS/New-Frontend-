import React, { useEffect, useState } from "react";
import api from "../../api/axios";

import "../../assets/css/employee-salary.css";

const EmployeeSalary = () => {
    const currentYear = new Date().getFullYear();

    const [selectedYear, setSelectedYear] = useState(String(currentYear));

    const [salary, setSalary] = useState({
        basic_salary: 0,
        hra: 0,
        conveyance_allowance: 0,
        medical_allowance: 0,
        other_allowances: 0,
        pf_deduction: 0,
        esi_deduction: 0,
        professional_tax: 0,
        other_deductions: 0,
        gross_salary: 0,
        total_deductions: 0,
        net_salary: 0,
    });

    const [salaryHistory, setSalaryHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchSalary();
    }, [selectedYear]);

    const fetchSalary = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/salary", {
                params: {
                    year: selectedYear,
                },
            });

            const data = response.data?.data || response.data;

            setSalary((prev) => ({
                ...prev,
                ...(data.salary || {}),
            }));

            setSalaryHistory(data.salary_history || []);

        } catch (err) {
            console.error("Salary fetch error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load salary information."
            );

            setSalaryHistory([]);
        } finally {
            setLoading(false);
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
        }).format(Number(amount || 0));
    };

    const years = Array.from(
        { length: 5 },
        (_, index) => currentYear - index
    );

    const earnings = [
        { label: "Basic Salary", value: salary.basic_salary },
        { label: "House Rent Allowance (HRA)", value: salary.hra },
        { label: "Conveyance Allowance", value: salary.conveyance_allowance },
        { label: "Medical Allowance", value: salary.medical_allowance },
        { label: "Other Allowances", value: salary.other_allowances },
    ];

    const deductions = [
        { label: "Provident Fund (PF)", value: salary.pf_deduction },
        { label: "Employee State Insurance (ESI)", value: salary.esi_deduction },
        { label: "Professional Tax", value: salary.professional_tax },
        { label: "Other Deductions", value: salary.other_deductions },
    ];

    const formatMonth = (month) => {
        if (!month) return "-";

        if (typeof month === "number" || /^\d+$/.test(String(month))) {
            const date = new Date(
                Number(selectedYear),
                Number(month) - 1,
                1
            );

            return date.toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
            });
        }

        return month;
    };

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const getPaymentStatus = (status) => {
        const value = String(status || "").toLowerCase();

        if (value === "paid") return "paid";
        if (value === "pending") return "pending";
        if (value === "processing") return "processing";

        return "default";
    };

    return (
        <div className="employee-salary-page">

            {/* Page Heading */}
            <div className="employee-page-heading">
                <div>
                    <h4>Salary Details</h4>
                    <p>View your salary structure and payment history</p>
                </div>

                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={fetchSalary}
                    disabled={loading}
                >
                    <i className="fas fa-sync-alt me-2"></i>
                    Refresh
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="alert alert-warning">
                    <i className="fas fa-circle-exclamation me-2"></i>
                    {error}
                </div>
            )}

            {/* Year Filter */}
            <div className="salary-filter-card">
                <div>
                    <label htmlFor="salaryYear">Select Financial Year / Calendar Year</label>

                    <select
                        id="salaryYear"
                        className="form-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="salary-loading">
                    <div className="spinner-border text-success"></div>
                    <p>Loading salary information...</p>
                </div>
            ) : (
                <>
                    {/* Net Salary Overview */}
                    <div className="salary-highlight-card">
                        <div>
                            <span>Monthly Net Salary</span>
                            <h2>{formatCurrency(salary.net_salary)}</h2>
                            <small>
                                <i className="fas fa-wallet me-2"></i>
                                Take-home salary after deductions
                            </small>
                        </div>

                        <div className="salary-highlight-icon">
                            <i className="fas fa-indian-rupee-sign"></i>
                        </div>
                    </div>

                    {/* Salary Summary */}
                    <div className="row g-3 salary-summary-row">

                        <div className="col-md-6">
                            <div className="salary-summary-card">
                                <div className="salary-summary-icon earnings">
                                    <i className="fas fa-arrow-trend-up"></i>
                                </div>

                                <div>
                                    <span>Gross Salary</span>
                                    <h3>{formatCurrency(salary.gross_salary)}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="salary-summary-card">
                                <div className="salary-summary-icon deductions">
                                    <i className="fas fa-arrow-trend-down"></i>
                                </div>

                                <div>
                                    <span>Total Deductions</span>
                                    <h3>{formatCurrency(salary.total_deductions)}</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Salary Breakdown */}
                    <div className="row g-3">

                        {/* Earnings */}
                        <div className="col-lg-6">
                            <div className="salary-breakdown-card">
                                <div className="salary-section-heading">
                                    <div>
                                        <h5>
                                            <i className="fas fa-plus-circle me-2"></i>
                                            Earnings
                                        </h5>
                                        <p>Monthly salary components</p>
                                    </div>
                                </div>

                                <div className="salary-component-list">
                                    {earnings.map((item) => (
                                        <div className="salary-component-item" key={item.label}>
                                            <span>{item.label}</span>
                                            <strong>{formatCurrency(item.value)}</strong>
                                        </div>
                                    ))}
                                </div>

                                <div className="salary-component-total earnings-total">
                                    <span>Gross Salary</span>
                                    <strong>{formatCurrency(salary.gross_salary)}</strong>
                                </div>
                            </div>
                        </div>

                        {/* Deductions */}
                        <div className="col-lg-6">
                            <div className="salary-breakdown-card">
                                <div className="salary-section-heading">
                                    <div>
                                        <h5>
                                            <i className="fas fa-minus-circle me-2"></i>
                                            Deductions
                                        </h5>
                                        <p>Monthly statutory and other deductions</p>
                                    </div>
                                </div>

                                <div className="salary-component-list">
                                    {deductions.map((item) => (
                                        <div className="salary-component-item" key={item.label}>
                                            <span>{item.label}</span>
                                            <strong>{formatCurrency(item.value)}</strong>
                                        </div>
                                    ))}
                                </div>

                                <div className="salary-component-total deductions-total">
                                    <span>Total Deductions</span>
                                    <strong>{formatCurrency(salary.total_deductions)}</strong>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Net Salary Calculation */}
                    <div className="salary-calculation-card">
                        <div>
                            <span>Gross Salary</span>
                            <strong>{formatCurrency(salary.gross_salary)}</strong>
                        </div>

                        <div className="calculation-minus">
                            <i className="fas fa-minus"></i>
                        </div>

                        <div>
                            <span>Total Deductions</span>
                            <strong>{formatCurrency(salary.total_deductions)}</strong>
                        </div>

                        <div className="calculation-equals">
                            <i className="fas fa-equals"></i>
                        </div>

                        <div className="calculation-net">
                            <span>Net Salary</span>
                            <strong>{formatCurrency(salary.net_salary)}</strong>
                        </div>
                    </div>

                    {/* Salary History */}
                    <div className="salary-history-card">
                        <div className="salary-section-heading">
                            <div>
                                <h5>
                                    <i className="fas fa-clock-rotate-left me-2"></i>
                                    Salary Payment History
                                </h5>
                                <p>Monthly salary payment records for {selectedYear}</p>
                            </div>

                            <span className="salary-history-count">
                                {salaryHistory.length} Records
                            </span>
                        </div>

                        {salaryHistory.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table salary-history-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Month</th>
                                            <th>Gross Salary</th>
                                            <th>Deductions</th>
                                            <th>Net Salary</th>
                                            <th>Payment Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {salaryHistory.map((record, index) => (
                                            <tr key={record.id || index}>
                                                <td>
                                                    <strong>
                                                        {formatMonth(record.month)}
                                                    </strong>
                                                </td>

                                                <td>{formatCurrency(record.gross_salary)}</td>
                                                <td>{formatCurrency(record.total_deductions)}</td>
                                                <td className="salary-net-value">
                                                    {formatCurrency(record.net_salary)}
                                                </td>
                                                <td>{formatDate(record.payment_date)}</td>

                                                <td>
                                                    <span className={`salary-payment-status ${getPaymentStatus(record.status)}`}>
                                                        {record.status || "Unknown"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="salary-empty">
                                <i className="fas fa-file-invoice-dollar"></i>
                                <h6>No Salary Records</h6>
                                <p>No salary payment records found for {selectedYear}.</p>
                            </div>
                        )}
                    </div>
                </>
            )}

        </div>
    );
};

export default EmployeeSalary;
