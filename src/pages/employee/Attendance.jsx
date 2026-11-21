import React, { useEffect, useState, useCallback } from "react";
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
        holiday: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ======================================================
    // EXTRACT TIME INTO MINUTES
    // Supports HH:mm, HH:mm:ss and SQL datetime values
    // ======================================================

    const extractMinutes = (value) => {
        if (!value) return null;

        const match = String(value).match(
            /(?:T|\s)?(\d{1,2}):(\d{2})(?::(\d{2}))?/
        );

        if (!match) return null;

        const hours = Number(match[1]);
        const minutes = Number(match[2]);

        if (
            hours < 0 ||
            hours > 23 ||
            minutes < 0 ||
            minutes > 59
        ) {
            return null;
        }

        return hours * 60 + minutes;
    };

    // ======================================================
    // FORMAT TIME
    // ======================================================

    const formatTime = (time) => {
        if (!time) return "-";

        const totalMinutes = extractMinutes(time);

        if (totalMinutes === null) return "-";

        let hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        const period = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${String(hours).padStart(2, "0")}:${String(
            minutes
        ).padStart(2, "0")} ${period}`;
    };

    // ======================================================
    // CALCULATE WORKING HOURS
    // ======================================================

    const calculateWorkingHours = (checkIn, checkOut) => {
        if (!checkIn || !checkOut) return "-";

        const start = extractMinutes(checkIn);
        const end = extractMinutes(checkOut);

        if (start === null || end === null) return "-";

        let difference = end - start;

        // Supports overnight shifts
        if (difference < 0) {
            difference += 24 * 60;
        }

        const hours = Math.floor(difference / 60);
        const minutes = difference % 60;

        return `${hours}h ${String(minutes).padStart(2, "0")}m`;
    };

    // ======================================================
    // FETCH ATTENDANCE
    // ======================================================

    const fetchAttendance = useCallback(async () => {
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

            const records = Array.isArray(data.records)
                ? data.records
                : Array.isArray(data.attendance)
                    ? data.attendance
                    : [];

            const normalizedRecords = records.map((record) => {
                const attendanceDate =
                    record.attendance_date ||
                    record.date ||
                    null;

                const checkIn =
                    record.check_in ||
                    record.checkin ||
                    record.check_in_time ||
                    null;

                const checkOut =
                    record.check_out ||
                    record.checkout ||
                    record.check_out_time ||
                    null;

                const workingHours =
                    record.working_hours ||
                    calculateWorkingHours(checkIn, checkOut);

                let day = "-";

                if (attendanceDate) {
                    const dateOnly = String(attendanceDate).substring(0, 10);
                    const parsedDate = new Date(`${dateOnly}T00:00:00`);

                    if (!Number.isNaN(parsedDate.getTime())) {
                        day = parsedDate.toLocaleDateString("en-IN", {
                            weekday: "long",
                        });
                    }
                }

                return {
                    ...record,
                    date: attendanceDate,
                    check_in: checkIn,
                    check_out: checkOut,
                    working_hours: workingHours,
                    day: record.day || day,
                };
            });

            setAttendance(normalizedRecords);

            setSummary({
                total_days:
                    data.summary?.total_days ??
                    normalizedRecords.length,

                present: data.summary?.present ?? 0,
                absent: data.summary?.absent ?? 0,
                late: data.summary?.late ?? 0,
                half_day: data.summary?.half_day ?? 0,
                leave: data.summary?.leave ?? 0,
                holiday: data.summary?.holiday ?? 0,
            });

        } catch (err) {
            console.error("Attendance error:", err);

            setAttendance([]);

            setSummary({
                total_days: 0,
                present: 0,
                absent: 0,
                late: 0,
                half_day: 0,
                leave: 0,
                holiday: 0,
            });

            setError(
                err.response?.data?.message ||
                "Unable to load attendance information."
            );

        } finally {
            setLoading(false);
        }
    }, [selectedMonth, selectedYear]);

    useEffect(() => {
        fetchAttendance();
    }, [fetchAttendance]);

    // ======================================================
    // MONTHS AND YEARS
    // ======================================================

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

    // ======================================================
    // FORMAT DATE
    // ======================================================

    const formatDate = (date) => {
        if (!date) return "-";

        const dateOnly = String(date).substring(0, 10);
        const parsedDate = new Date(`${dateOnly}T00:00:00`);

        if (Number.isNaN(parsedDate.getTime())) return "-";

        return parsedDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    // ======================================================
    // STATUS CLASS
    // ======================================================

    const getStatusClass = (status) => {
        const value = String(status || "")
            .toLowerCase()
            .replace(/[\s_-]/g, "");

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

    // ======================================================
    // SUMMARY CARDS
    // ======================================================

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

    // ======================================================
    // UI
    // ======================================================

    return (
        <div className="employee-attendance-page">

            {/* PAGE HEADING */}

            <div className="employee-page-heading">
                <div>
                    <h4>My Attendance</h4>
                    <p>
                        View your attendance records and working hours
                    </p>
                </div>

                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={fetchAttendance}
                    disabled={loading}
                >
                    <i className="fas fa-sync-alt me-2"></i>
                    {loading ? "Loading..." : "Refresh"}
                </button>
            </div>

            {/* MONTH AND YEAR FILTER */}

            <div className="attendance-filter-card">

                <div>
                    <label htmlFor="attendanceMonth">
                        Select Month
                    </label>

                    <select
                        id="attendanceMonth"
                        className="form-select"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        {months.map((month) => (
                            <option
                                key={month.value}
                                value={month.value}
                            >
                                {month.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="attendanceYear">
                        Select Year
                    </label>

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

            {/* SUMMARY CARDS */}

            <div className="row g-3 attendance-summary-row">

                {summaryCards.map((card) => (
                    <div
                        className="col-xl-3 col-md-6"
                        key={card.title}
                    >
                        <div className="attendance-summary-card">

                            <div
                                className={`attendance-summary-icon ${card.color}`}
                            >
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

            {/* ATTENDANCE TABLE */}

            <div className="attendance-table-card">

                <div className="attendance-table-heading">

                    <div>
                        <h5>Attendance History</h5>

                        <p>
                            {months.find(
                                (month) => month.value === selectedMonth
                            )?.label}{" "}
                            {selectedYear}
                        </p>
                    </div>

                    <span className="attendance-total-badge">
                        Total Records: {summary.total_days}
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

                                            <td>{record.day || "-"}</td>

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
                                                <span
                                                    className={`attendance-status ${getStatusClass(record.status)}`}
                                                >
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

            {/* ATTENDANCE STATUS LEGEND */}

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
