import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import "../../assets/css/employee-payslips.css";

const Payslips = () => {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState(currentYear);
  const [payslips, setPayslips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloadingId, setDownloadingId] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Number(amount || 0));
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatMonth = (month) => {
    if (!month) return "-";

    if (!Number.isNaN(Number(month)) && Number(month) >= 1 && Number(month) <= 12) {
      return new Date(2000, Number(month) - 1, 1).toLocaleString("en-IN", {
        month: "long",
      });
    }

    return month;
  };

  const fetchPayslips = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/employee/payslips", {
        params: { year },
      });

      const result = response.data?.data;

      setPayslips(
        Array.isArray(result)
          ? result
          : Array.isArray(result?.payslips)
          ? result.payslips
          : []
      );
    } catch (err) {
      console.error("Payslip loading error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load payslips. Please try again."
      );

      setPayslips([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayslips();
  }, [year]);

  const handleDownload = async (payslip) => {
    if (!payslip?.id) {
      setError("Payslip ID is missing.");
      return;
    }

    try {
      setDownloadingId(payslip.id);
      setError("");

      const response = await api.get(
        `/employee/payslips/${payslip.id}/download`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: response.headers["content-type"] || "application/pdf",
      });

      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download =
        payslip.file_name ||
        `payslip-${payslip.month || payslip.id}.pdf`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error("Payslip download error:", err);
      setError(
        "Unable to download this payslip. Please contact your administrator."
      );
    } finally {
      setDownloadingId(null);
    }
  };

  const getStatusClass = (status) => {
    const value = String(status || "").toLowerCase();

    if (value === "paid") return "payslip-status-paid";
    if (value === "pending") return "payslip-status-pending";
    if (value === "processing") return "payslip-status-processing";

    return "payslip-status-default";
  };

  const totalPayslips = payslips.length;

  const paidPayslips = payslips.filter(
    (item) => String(item.status).toLowerCase() === "paid"
  ).length;

  const totalNetSalary = payslips.reduce(
    (total, item) => total + Number(item.net_salary || 0),
    0
  );

  return (
    <div className="employee-payslips-page">
      <div className="employee-payslips-heading">
        <div>
          <h2>My Payslips</h2>
          <p>View and download your monthly salary statements.</p>
        </div>

        <div className="payslip-year-filter">
          <label htmlFor="payslip-year">Financial Year</label>

          <select
            id="payslip-year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {[currentYear, currentYear - 1, currentYear - 2, currentYear - 3].map(
              (item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {error && (
        <div className="payslip-error">
          <i className="fas fa-exclamation-circle"></i>
          <span>{error}</span>
          <button type="button" onClick={fetchPayslips}>
            Retry
          </button>
        </div>
      )}

      <div className="payslip-summary-grid">
        <div className="payslip-summary-card">
          <div className="payslip-summary-icon payslip-icon-green">
            <i className="fas fa-file-invoice"></i>
          </div>
          <div>
            <span>Total Payslips</span>
            <h3>{loading ? "..." : totalPayslips}</h3>
          </div>
        </div>

        <div className="payslip-summary-card">
          <div className="payslip-summary-icon payslip-icon-blue">
            <i className="fas fa-check-circle"></i>
          </div>
          <div>
            <span>Paid Payslips</span>
            <h3>{loading ? "..." : paidPayslips}</h3>
          </div>
        </div>

        <div className="payslip-summary-card">
          <div className="payslip-summary-icon payslip-icon-purple">
            <i className="fas fa-wallet"></i>
          </div>
          <div>
            <span>Total Net Salary</span>
            <h3>{loading ? "..." : formatCurrency(totalNetSalary)}</h3>
          </div>
        </div>
      </div>

      <div className="payslip-list-card">
        <div className="payslip-list-header">
          <div>
            <h3>Salary Statements</h3>
            <p>Your monthly salary records for {year}</p>
          </div>

          <span className="payslip-count">
            {loading ? "Loading..." : `${totalPayslips} Records`}
          </span>
        </div>

        {loading ? (
          <div className="payslip-loading">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Loading your payslips...</p>
          </div>
        ) : payslips.length === 0 ? (
          <div className="payslip-empty">
            <div className="payslip-empty-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <h4>No Payslips Available</h4>
            <p>
              Your payslips for {year} have not been uploaded yet.
              Please contact your administrator if you need assistance.
            </p>
          </div>
        ) : (
          <div className="payslip-table-wrapper">
            <table className="payslip-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Salary Period</th>
                  <th>Gross Salary</th>
                  <th>Deductions</th>
                  <th>Net Salary</th>
                  <th>Payment Date</th>
                  <th>Status</th>
                  <th>Download</th>
                </tr>
              </thead>

              <tbody>
                {payslips.map((payslip) => (
                  <tr key={payslip.id}>
                    <td>
                      <div className="payslip-month-cell">
                        <div className="payslip-pdf-icon">
                          <i className="fas fa-file-pdf"></i>
                        </div>
                        <strong>{formatMonth(payslip.month)}</strong>
                      </div>
                    </td>

                    <td>
                      {payslip.period_start && payslip.period_end
                        ? `${formatDate(payslip.period_start)} - ${formatDate(
                            payslip.period_end
                          )}`
                        : payslip.salary_period || "-"}
                    </td>

                    <td>{formatCurrency(payslip.gross_salary)}</td>

                    <td>{formatCurrency(payslip.total_deductions)}</td>

                    <td>
                      <strong className="payslip-net-amount">
                        {formatCurrency(payslip.net_salary)}
                      </strong>
                    </td>

                    <td>{formatDate(payslip.payment_date)}</td>

                    <td>
                      <span
                        className={`payslip-status ${getStatusClass(
                          payslip.status
                        )}`}
                      >
                        {payslip.status || "Not specified"}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="payslip-download-button"
                        onClick={() => handleDownload(payslip)}
                        disabled={downloadingId === payslip.id}
                        title="Download payslip PDF"
                      >
                        {downloadingId === payslip.id ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                            <span>Downloading</span>
                          </>
                        ) : (
                          <>
                            <i className="fas fa-download"></i>
                            <span>Download PDF</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="payslip-information">
        <i className="fas fa-info-circle"></i>
        <p>
          Payslips are official salary statements issued by the company.
          If any salary information is incorrect or a payslip is missing,
          please contact your administrator.
        </p>
      </div>
    </div>
  );
};

export default Payslips;
