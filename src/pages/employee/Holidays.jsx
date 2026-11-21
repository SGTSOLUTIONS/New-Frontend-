import React, { useEffect, useState } from "react";
import api from "../../api/axios";

import "../../assets/css/employee-holidays.css";

const EmployeeHolidays = () => {
    const currentYear = new Date().getFullYear();

    const [selectedYear, setSelectedYear] = useState(String(currentYear));
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchHolidays();
    }, [selectedYear]);

    const fetchHolidays = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/holidays", {
                params: {
                    year: selectedYear,
                },
            });

            const data = response.data?.data || response.data;

            setHolidays(data.holidays || []);

        } catch (err) {
            console.error("Holiday fetch error:", err);

            setHolidays([]);
            setError(
                err.response?.data?.message ||
                "Unable to load holiday information."
            );
        } finally {
            setLoading(false);
        }
    };

    const years = Array.from(
        { length: 5 },
        (_, index) => currentYear - 2 + index
    );

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(`${date}`.slice(0, 10) + "T00:00:00")
            .toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            });
    };

    const getDay = (date) => {
        if (!date) return "-";

        return new Date(`${date}`.slice(0, 10) + "T00:00:00")
            .toLocaleDateString("en-IN", {
                weekday: "long",
            });
    };

    const getMonth = (date) => {
        if (!date) return "";

        return new Date(`${date}`.slice(0, 10) + "T00:00:00")
            .toLocaleDateString("en-IN", {
                month: "long",
            });
    };

    const groupedHolidays = holidays.reduce((groups, holiday) => {
        const month = getMonth(holiday.date);

        if (!groups[month]) {
            groups[month] = [];
        }

        groups[month].push(holiday);

        return groups;
    }, {});

    const upcomingHolidays = holidays.filter((holiday) => {
        const holidayDate = new Date(`${holiday.date}`.slice(0, 10) + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return holidayDate >= today;
    });

    return (
        <div className="employee-holidays-page">

            {/* Page Heading */}
            <div className="employee-page-heading">
                <div>
                    <h4>Holiday Calendar</h4>
                    <p>View company holidays and important dates</p>
                </div>

                <button
                    className="btn btn-outline-success btn-sm"
                    onClick={fetchHolidays}
                    disabled={loading}
                >
                    <i className="fas fa-sync-alt me-2"></i>
                    Refresh
                </button>
            </div>

            {/* Holiday Summary */}
            <div className="row g-3 holiday-summary-row">

                <div className="col-md-4">
                    <div className="holiday-summary-card">
                        <div className="holiday-summary-icon green">
                            <i className="fas fa-calendar-days"></i>
                        </div>

                        <div>
                            <span>Total Holidays</span>
                            <h3>{holidays.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="holiday-summary-card">
                        <div className="holiday-summary-icon blue">
                            <i className="fas fa-calendar-check"></i>
                        </div>

                        <div>
                            <span>Upcoming Holidays</span>
                            <h3>{upcomingHolidays.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="holiday-summary-card">
                        <div className="holiday-summary-icon orange">
                            <i className="fas fa-calendar-week"></i>
                        </div>

                        <div>
                            <span>Selected Year</span>
                            <h3>{selectedYear}</h3>
                        </div>
                    </div>
                </div>

            </div>

            {/* Year Filter */}
            <div className="holiday-filter-card">
                <div>
                    <label htmlFor="holidayYear">Select Calendar Year</label>

                    <select
                        id="holidayYear"
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

                <div className="holiday-filter-note">
                    <i className="fas fa-info-circle"></i>
                    Company holiday schedule
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="alert alert-warning">
                    <i className="fas fa-circle-exclamation me-2"></i>
                    {error}
                </div>
            )}

            {/* Holiday Calendar */}
            <div className="holiday-calendar-card">

                <div className="holiday-calendar-heading">
                    <div>
                        <h5>
                            <i className="fas fa-calendar-alt me-2"></i>
                            Holiday List
                        </h5>

                        <p>Official company holidays for {selectedYear}</p>
                    </div>

                    <span className="holiday-count">
                        {holidays.length} Holidays
                    </span>
                </div>

                {loading ? (
                    <div className="holiday-loading">
                        <div className="spinner-border text-success"></div>
                        <p>Loading holiday calendar...</p>
                    </div>
                ) : holidays.length > 0 ? (

                    <div className="holiday-month-list">

                        {Object.entries(groupedHolidays).map(([month, records]) => (
                            <div className="holiday-month-section" key={month}>

                                <div className="holiday-month-heading">
                                    <h6>{month}</h6>
                                    <span>{records.length} Holidays</span>
                                </div>

                                <div className="table-responsive">
                                    <table className="table holiday-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Day</th>
                                                <th>Holiday Name</th>
                                                <th>Category</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {records.map((holiday) => (
                                                <tr key={holiday.id || holiday.date + holiday.name}>
                                                    <td>
                                                        <strong>
                                                            {formatDate(holiday.date)}
                                                        </strong>
                                                    </td>

                                                    <td>{getDay(holiday.date)}</td>

                                                    <td className="holiday-name">
                                                        {holiday.name}
                                                    </td>

                                                    <td>
                                                        <span className="holiday-category">
                                                            {holiday.category || "General"}
                                                        </span>
                                                    </td>

                                                    <td>
                                                        {holiday.description || "-"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        ))}

                    </div>

                ) : (
                    <div className="holiday-empty">
                        <i className="fas fa-calendar-xmark"></i>
                        <h6>No Holidays Found</h6>
                        <p>No company holidays are available for {selectedYear}.</p>
                    </div>
                )}

            </div>

            {/* Holiday Information */}
            <div className="holiday-information-note">
                <i className="fas fa-circle-info"></i>
                <div>
                    <strong>Important Information</strong>
                    <p>
                        This calendar displays holidays published by the
                        company. Please contact HR or the Administrator
                        if you have questions about the holiday schedule.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default EmployeeHolidays;
