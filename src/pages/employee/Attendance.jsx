import React, { useEffect, useState } from "react";
import api from "../../api/axios";

import "../../assets/css/employee-attendance.css";

const EmployeeAttendance = () => {
    const today = new Date();

    const [selectedMonth, setSelectedMonth] = useState(
        String(today.getMonth() + 1).padStart(2, "0")
    );

    const [selectedYear, setSelectedYear] = useState(
        String(today.getFullYear())
    );

    const [attendance, setAttendance] = useState([]);
    const [summary, setSummary] = useState({
        total_days: 0,
        present: 0,
        absent: 0,
        late: 0,
        half_day: 0,
        leave: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchAttendance();
    }, [selectedMonth, selectedYear]);

    const fetchAttendance = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/attendance", {
                params: {
                    month: selectedMonth,
                    year: selectedYear,
                },
            });

            const data = response.data?.data || response.data;

            setAttendance(data.attendance || []);
            setSummary({
                total_days: data.summary?.total_days || 0,
                present: data.summary?.present || 0,
                absent: data.summary?.absent || 0,
                late: data.summary?.late || 0,
                half_day: data.summary?.half_day || 0,
                leave: data.summary?.leave || 0,
            });

        } catch (err) {
            console.error("Attendance error:", err);

            setAttendance([]);
            setError(
                err.response?.data?.message ||
                "Unable to load attendance information."
            );
        } finally {
            setLoading(false);
        }
    };

    const months = [
        { value: "01", label: "January" },
        { value: "02", label: "February" },
        { value: "03", label: "March" },
        { value: "04", label: "April" },
        { value: "05", label: "May" },
        { value: "06", label: "June" },
        { value: "07", label: "July" },
        { value: "08", label: "August" },
        { value: "09", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
    ];

    const currentYear = today.getFullYear();

    const years = Array.from(
        { length: 5 },
        (_, index) => currentYear - index
    );

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const formatTime = (time) => {
        if (!time) return "-";

        const parts = String(time).split(":");

        if (parts.length < 2) return time;

        const date = new Date();
        date.setHours(Number(parts[0]), Number(parts[1]), 0);

        return date.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    const getStatusClass = (status) => {
        const value = String(status || "").toLowerCase().replace(/[\s_-]/g, "");

        switch (value) {
            case "present":
                return "present";

            case "absent":
                return "absent";

            case "late":
                return "late";

            case "halfday":
                return "half-day";

            case "leave":
                return "leave";

            case "holiday":
                return "holiday";

            default:
                return "default";
        }
    };

    const summaryCards = [
        {
            title: "Present Days",
            value: summary.present,
            icon: "fa-calendar-check",
            color: "success",
        },
        {
            title: "Absent Days",
            value: summary.absent,
            icon: "fa-calendar-xmark",
            color: "danger",
        },
        {
            title: "Late Arrivals",
            value: summary.late,
            icon: "fa-clock",
            color: "warning",
        },
        {
            title: "Leave Days",
            value: summary.leave,
            icon: "fa-calendar-minus",
            color: "info",
        },
    ];

    return (
        <div className="employee-attendance-page">

            {/* Page Heading */}
            <div className="employee-page-heading">
                <div>
                    <h4>My Attendance</h4>
                    <p>View your attendance records and working hours</p>
                </div>

                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={fetchAttendance}
                    disabled={loading}
                >
                    <i className="fas fa-sync-alt me-2"></i>
                    Refresh
                </button>
            </div>

            {/* Month and Year Filter */}
            <div className="attendance-filter-card">
                <div>
                    <label htmlFor="attendanceMonth">Select Month</label>
                    <select
                        id="attendanceMonth"
                        className="form-select"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        {months.map((month) => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="attendanceYear">Select Year</label>
                    <select
                        id="attendanceYear"
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

                <div className="attendance-filter-info">
                    <i className="fas fa-calendar-days"></i>
                    Attendance Summary
                </div>
            </div>

            {/* Summary Cards */}
            <div className="row g-3 attendance-summary-row">
                {summaryCards.map((card) => (
                    <div className="col-xl-3 col-md-6" key={card.title}>
                        <div className="attendance-summary-card">
                            <div className={`attendance-summary-icon ${card.color}`}>
                                <i className={`fas ${card.icon}`}></i>
                            </div>

                            <div>
                                <span>{card.title}</span>
                                <h3>{card.value}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Attendance Table */}
            <div className="attendance-table-card">

                <div className="attendance-table-heading">
                    <div>
                        <h5>Attendance History</h5>
                        <p>
                            {months.find((m) => m.value === selectedMonth)?.label}
                            {" "}{selectedYear}
                        </p>
                    </div>

                    <span className="attendance-total-badge">
                        Total Records: {attendance.length}
                    </span>
                </div>

                {error && (
                    <div className="alert alert-warning m-3">
                        <i className="fas fa-circle-exclamation me-2"></i>
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="attendance-loading">
                        <div className="spinner-border text-success"></div>
                        <p>Loading attendance records...</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table attendance-table align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Day</th>
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                    <th>Working Hours</th>
                                    <th>Status</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>

                            <tbody>
                                {attendance.length > 0 ? (
                                    attendance.map((record, index) => (
                                        <tr key={record.id || index}>
                                            <td>
                                                <strong>
                                                    {formatDate(record.date)}
                                                </strong>
                                            </td>

                                            <td>
                                                {record.day ||
                                                    (record.date
                                                        ? new Date(
                                                            `${record.date}T00:00:00`
                                                        ).toLocaleDateString(
                                                            "en-IN",
                                                            { weekday: "short" }
                                                        )
                                                        : "-")}
                                            </td>

                                            <td>
                                                {formatTime(record.check_in)}
                                            </td>

                                            <td>
                                                {formatTime(record.check_out)}
                                            </td>

                                            <td>
                                                {record.working_hours || "-"}
                                            </td>

                                            <td>
                                                <span className={`attendance-status ${getStatusClass(record.status)}`}>
                                                    {record.status || "Not Marked"}
                                                </span>
                                            </td>

                                            <td>
                                                {record.remarks || "-"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">
                                            <div className="attendance-empty">
                                                <i className="fas fa-calendar-xmark"></i>
                                                <h6>No Attendance Records</h6>
                                                <p>
                                                    No attendance records found
                                                    for the selected month.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Attendance Legend */}
            <div className="attendance-legend-card">
                <h6>Attendance Status Legend</h6>

                <div className="attendance-legend-list">
                    <span>
                        <i className="legend-dot present"></i>
                        Present
                    </span>

                    <span>
                        <i className="legend-dot absent"></i>
                        Absent
                    </span>

                    <span>
                        <i className="legend-dot late"></i>
                        Late
                    </span>

                    <span>
                        <i className="legend-dot half-day"></i>
                        Half Day
                    </span>

                    <span>
                        <i className="legend-dot leave"></i>
                        Leave
                    </span>

                    <span>
                        <i className="legend-dot holiday"></i>
                        Holiday
                    </span>
                </div>
            </div>

        </div>
    );
};

export default EmployeeAttendance;
