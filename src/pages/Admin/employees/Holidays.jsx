import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";

const emptyForm = {
    holiday_name: "",
    holiday_date: "",
    holiday_type: "public",
    description: "",
};

const holidayTypeLabels = {
    public: "Public Holiday",
    company: "Company Holiday",
    optional: "Optional Holiday",
};

const normalizeHolidayType = (type) => {
    const value = String(type || "public").toLowerCase();

    if (value.includes("company")) return "company";
    if (value.includes("optional")) return "optional";

    return "public";
};

const Holidays = () => {
    const currentYear = new Date().getFullYear();

    const [holidays, setHolidays] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [year, setYear] = useState(currentYear);
    const [editingId, setEditingId] = useState(null);

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // ==========================================
    // LOAD HOLIDAYS
    // ==========================================

    const loadHolidays = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get("/admin/holidays", {
                params: { year },
            });

            const result = response.data?.data;

            setHolidays(
                Array.isArray(result)
                    ? result
                    : result?.data || []
            );
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to load company holidays."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadHolidays();
    }, [year]);

    // ==========================================
    // FORM HANDLING
    // ==========================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setForm(emptyForm);
        setEditingId(null);
        setError("");
    };

    // ==========================================
    // SAVE / UPDATE HOLIDAY
    // ==========================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSaving(true);
        setError("");
        setSuccess("");

        try {
            const payload = {
                holiday_name: form.holiday_name.trim(),
                holiday_date: form.holiday_date,
                holiday_type: form.holiday_type,
                description: form.description.trim() || null,
            };

            if (editingId) {
                await axios.put(
                    `/admin/holidays/${editingId}`,
                    payload
                );

                setSuccess("Holiday updated successfully.");
            } else {
                await axios.post(
                    "/admin/holidays",
                    payload
                );

                setSuccess("Holiday added successfully.");
            }

            const savedYear = Number(
                payload.holiday_date.substring(0, 4)
            );

            resetForm();

            // Show the year in which the holiday was saved.
            if (savedYear !== year) {
                setYear(savedYear);
            } else {
                await loadHolidays();
            }
        } catch (err) {
            const validationErrors = err.response?.data?.errors;

            if (validationErrors) {
                setError(
                    Object.values(validationErrors)
                        .flat()
                        .join(" ")
                );
            } else {
                setError(
                    err.response?.data?.message ||
                    "Unable to save holiday."
                );
            }
        } finally {
            setSaving(false);
        }
    };

    // ==========================================
    // EDIT HOLIDAY
    // ==========================================

    const handleEdit = (holiday) => {
        setEditingId(holiday.id);

        setForm({
            holiday_name: holiday.holiday_name || "",
            holiday_date: holiday.holiday_date
                ? holiday.holiday_date.substring(0, 10)
                : "",
            holiday_type: normalizeHolidayType(
                holiday.holiday_type
            ),
            description: holiday.description || "",
        });

        setError("");
        setSuccess("");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // ==========================================
    // DELETE HOLIDAY
    // ==========================================

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this holiday?"
        );

        if (!confirmed) return;

        setDeletingId(id);
        setError("");
        setSuccess("");

        try {
            await axios.delete(`/admin/holidays/${id}`);

            setSuccess("Holiday deleted successfully.");

            if (editingId === id) {
                resetForm();
            }

            await loadHolidays();
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to delete holiday."
            );
        } finally {
            setDeletingId(null);
        }
    };

    // ==========================================
    // DATE FORMATTING
    // ==========================================

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(
            `${date.substring(0, 10)}T00:00:00`
        ).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const getWeekday = (date) => {
        if (!date) return "-";

        return new Date(
            `${date.substring(0, 10)}T00:00:00`
        ).toLocaleDateString("en-IN", {
            weekday: "long",
        });
    };

    return (
        <div className="container-fluid py-3">

            {/* PAGE HEADER */}

            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-1">
                        Company Holidays
                    </h4>

                    <p className="text-muted mb-0">
                        Manage company holidays and holiday schedules.
                    </p>
                </div>

                <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
                    <label
                        htmlFor="holidayYear"
                        className="fw-semibold"
                    >
                        Year
                    </label>

                    <select
                        id="holidayYear"
                        className="form-select"
                        style={{ width: "130px" }}
                        value={year}
                        onChange={(e) =>
                            setYear(Number(e.target.value))
                        }
                    >
                        {[
                            currentYear - 1,
                            currentYear,
                            currentYear + 1,
                        ].map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* ERROR MESSAGE */}

            {error && (
                <div className="alert alert-danger alert-dismissible fade show">
                    {error}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setError("")}
                    />
                </div>
            )}

            {/* SUCCESS MESSAGE */}

            {success && (
                <div className="alert alert-success alert-dismissible fade show">
                    {success}

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSuccess("")}
                    />
                </div>
            )}

            {/* ADD / EDIT FORM */}

            <div className="card border-0 shadow-sm mb-4">

                <div className="card-header bg-white py-3">
                    <h6 className="fw-bold mb-0">
                        {editingId
                            ? "Edit Holiday"
                            : "Add New Holiday"}
                    </h6>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">
                                    Holiday Name
                                    <span className="text-danger"> *</span>
                                </label>

                                <input
                                    type="text"
                                    name="holiday_name"
                                    className="form-control"
                                    value={form.holiday_name}
                                    onChange={handleChange}
                                    placeholder="Enter holiday name"
                                    maxLength={255}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Holiday Date
                                    <span className="text-danger"> *</span>
                                </label>

                                <input
                                    type="date"
                                    name="holiday_date"
                                    className="form-control"
                                    value={form.holiday_date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Holiday Type
                                </label>

                                <select
                                    name="holiday_type"
                                    className="form-select"
                                    value={form.holiday_type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="public">
                                        Public Holiday
                                    </option>

                                    <option value="company">
                                        Company Holiday
                                    </option>

                                    <option value="optional">
                                        Optional Holiday
                                    </option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Description
                                </label>

                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Optional description"
                                />
                            </div>

                            <div className="col-12 d-flex gap-2">

                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={saving}
                                >
                                    {saving
                                        ? "Saving..."
                                        : editingId
                                        ? "Update Holiday"
                                        : "Add Holiday"}
                                </button>

                                {editingId && (
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={resetForm}
                                        disabled={saving}
                                    >
                                        Cancel
                                    </button>
                                )}

                            </div>
                        </div>
                    </form>

                </div>
            </div>

            {/* HOLIDAY LIST */}

            <div className="card border-0 shadow-sm">

                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                    <h6 className="fw-bold mb-0">
                        Holiday List - {year}
                    </h6>

                    <span className="badge bg-success">
                        {holidays.length} Holidays
                    </span>

                </div>

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table-light">
                                <tr>
                                    <th className="ps-3">#</th>
                                    <th>Holiday Name</th>
                                    <th>Date</th>
                                    <th>Day</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th className="text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-4"
                                        >
                                            <div
                                                className="spinner-border spinner-border-sm text-success me-2"
                                                role="status"
                                            />

                                            Loading holidays...
                                        </td>
                                    </tr>
                                ) : holidays.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center text-muted py-4"
                                        >
                                            No holidays found for {year}.
                                        </td>
                                    </tr>
                                ) : (
                                    holidays.map((holiday, index) => {
                                        const type = normalizeHolidayType(
                                            holiday.holiday_type
                                        );

                                        return (
                                            <tr key={holiday.id}>

                                                <td className="ps-3">
                                                    {index + 1}
                                                </td>

                                                <td className="fw-semibold">
                                                    {holiday.holiday_name}
                                                </td>

                                                <td>
                                                    {formatDate(
                                                        holiday.holiday_date
                                                    )}
                                                </td>

                                                <td>
                                                    {getWeekday(
                                                        holiday.holiday_date
                                                    )}
                                                </td>

                                                <td>
                                                    <span className="badge bg-info text-dark">
                                                        {holidayTypeLabels[type]}
                                                    </span>
                                                </td>

                                                <td>
                                                    {holiday.description || "-"}
                                                </td>

                                                <td className="text-center">
                                                    <div className="d-flex justify-content-center gap-2">

                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-primary"
                                                            onClick={() =>
                                                                handleEdit(holiday)
                                                            }
                                                        >
                                                            Edit
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    holiday.id
                                                                )
                                                            }
                                                            disabled={
                                                                deletingId === holiday.id
                                                            }
                                                        >
                                                            {deletingId === holiday.id
                                                                ? "Deleting..."
                                                                : "Delete"}
                                                        </button>

                                                    </div>
                                                </td>

                                            </tr>
                                        );
                                    })
                                )}

                            </tbody>

                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Holidays;
