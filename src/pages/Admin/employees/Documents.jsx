import React, { useEffect, useState } from "react";
import api from "../../../api/axios";

const Documents = () => {
    const [employees, setEmployees] = useState([]);
    const [documents, setDocuments] = useState([]);

    const [form, setForm] = useState({
        employee_id: "",
        document_name: "",
        document_type: "Other",
        file: null,
    });

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [downloadingId, setDownloadingId] = useState(null);
    const [deletingId, setDeletingId] = useState(null);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Load employees
    const loadEmployees = async () => {
        try {
            const response = await api.get("/admin/employees", {
                params: { per_page: 100 },
            });

            const result = response.data?.data;

            const employeeList = Array.isArray(result)
                ? result
                : result?.data || result?.employees || [];

            setEmployees(employeeList);
        } catch (err) {
            console.error("Employee loading error:", err);
            setError(
                err.response?.data?.message ||
                "Unable to load employees."
            );
        }
    };

    // Load documents
    const loadDocuments = async () => {
        setLoading(true);

        try {
            const response = await api.get("/admin/documents");

            const result = response.data?.data;

            const documentList = Array.isArray(result)
                ? result
                : result?.documents || result?.data || [];

            setDocuments(documentList);
        } catch (err) {
            console.error("Document loading error:", err);

            setDocuments([]);

            setError(
                err.response?.data?.message ||
                "Unable to load employee documents."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEmployees();
        loadDocuments();
    }, []);

    // Form input handling
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: name === "file"
                ? files?.[0] || null
                : value,
        }));
    };

    // Upload document
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.employee_id) {
            setError("Please select an employee.");
            return;
        }

        if (!form.file) {
            setError("Please select a document to upload.");
            return;
        }

        setSaving(true);
        setError("");
        setSuccess("");

        try {
            const payload = new FormData();

            payload.append("employee_id", form.employee_id);
            payload.append("document_name", form.document_name);
            payload.append("document_type", form.document_type);
            payload.append("file", form.file);

            await api.post("/admin/documents", payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setSuccess("Document uploaded successfully.");

            setForm({
                employee_id: "",
                document_name: "",
                document_type: "Other",
                file: null,
            });

            e.target.reset();

            await loadDocuments();
        } catch (err) {
            console.error("Document upload error:", err);

            const validationErrors = err.response?.data?.errors;

            setError(
                validationErrors
                    ? Object.values(validationErrors).flat().join(" ")
                    : err.response?.data?.message ||
                      "Unable to upload document."
            );
        } finally {
            setSaving(false);
        }
    };

    // Download document using authenticated Axios request
    const handleDownload = async (document) => {
        setDownloadingId(document.id);
        setError("");

        try {
            const response = await api.get(
                `/admin/documents/${document.id}/download`,
                {
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data]);

            const blobUrl = window.URL.createObjectURL(blob);

            const link = window.document.createElement("a");

            link.href = blobUrl;
            link.download = document.document_name || "employee-document";

            window.document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Document download error:", err);

            setError(
                "Unable to download document. Please check whether the file exists."
            );
        } finally {
            setDownloadingId(null);
        }
    };

    // Delete document
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this document?")) {
            return;
        }

        setDeletingId(id);
        setError("");
        setSuccess("");

        try {
            await api.delete(`/admin/documents/${id}`);

            setSuccess("Document deleted successfully.");

            await loadDocuments();
        } catch (err) {
            console.error("Document delete error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to delete document."
            );
        } finally {
            setDeletingId(null);
        }
    };

    // Employee name
    const getEmployeeName = (document) => {
        return (
            document.employee?.user?.name ||
            document.employee?.name ||
            "Employee"
        );
    };

    // Employee code
    const getEmployeeCode = (document) => {
        return document.employee?.employee_code || "-";
    };

    // Date formatting
    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="container-fluid py-3">

            {/* Page Header */}
            <div className="mb-4">
                <h4 className="fw-bold mb-1">
                    Employee Documents
                </h4>

                <p className="text-muted mb-0">
                    Upload and manage employee documents.
                </p>
            </div>

            {/* Error Message */}
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

            {/* Success Message */}
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

            {/* Upload Form */}
            <div className="card border-0 shadow-sm mb-4">

                <div className="card-header bg-white py-3">
                    <h6 className="fw-bold mb-0">
                        Upload Employee Document
                    </h6>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">

                            {/* Employee */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Employee <span className="text-danger">*</span>
                                </label>

                                <select
                                    name="employee_id"
                                    className="form-select"
                                    value={form.employee_id}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select Employee
                                    </option>

                                    {employees.map((employee) => (
                                        <option
                                            key={employee.id}
                                            value={employee.id}
                                        >
                                            {employee.user?.name || employee.name}
                                            {" - "}
                                            {employee.employee_code || "N/A"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Document Name */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Document Name <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="document_name"
                                    className="form-control"
                                    value={form.document_name}
                                    onChange={handleChange}
                                    placeholder="e.g. Aadhaar Card"
                                    required
                                />
                            </div>

                            {/* Document Type */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Document Type
                                </label>

                                <select
                                    name="document_type"
                                    className="form-select"
                                    value={form.document_type}
                                    onChange={handleChange}
                                >
                                    <option value="Identity">Identity</option>
                                    <option value="Education">Education</option>
                                    <option value="Experience">Experience</option>
                                    <option value="Address Proof">Address Proof</option>
                                    <option value="Appointment Letter">
                                        Appointment Letter
                                    </option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* File */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Select File <span className="text-danger">*</span>
                                </label>

                                <input
                                    type="file"
                                    name="file"
                                    className="form-control"
                                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                    onChange={handleChange}
                                    required
                                />

                                <small className="text-muted">
                                    PDF, JPG, JPEG, PNG, DOC, DOCX. Maximum 10 MB.
                                </small>
                            </div>

                            {/* Submit */}
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={saving || employees.length === 0}
                                >
                                    {saving ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" />
                                            Uploading...
                                        </>
                                    ) : (
                                        "Upload Document"
                                    )}
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

            {/* Document Records */}
            <div className="card border-0 shadow-sm">

                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold mb-0">
                        Document Records
                    </h6>

                    <span className="badge bg-success">
                        {documents.length} Documents
                    </span>
                </div>

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-light">
                            <tr>
                                <th className="ps-3">#</th>
                                <th>Employee</th>
                                <th>Document</th>
                                <th>Type</th>
                                <th>Uploaded</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-4">
                                        <div className="spinner-border spinner-border-sm text-success me-2" />
                                        Loading documents...
                                    </td>
                                </tr>
                            ) : documents.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center text-muted py-4"
                                    >
                                        No documents found.
                                    </td>
                                </tr>
                            ) : (
                                documents.map((document, index) => (
                                    <tr key={document.id}>

                                        <td className="ps-3">
                                            {index + 1}
                                        </td>

                                        <td>
                                            <div className="fw-semibold">
                                                {getEmployeeName(document)}
                                            </div>

                                            <small className="text-muted">
                                                {getEmployeeCode(document)}
                                            </small>
                                        </td>

                                        <td className="fw-semibold">
                                            {document.document_name}
                                        </td>

                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                {document.document_type || "Other"}
                                            </span>
                                        </td>

                                        <td>
                                            {formatDate(document.created_at)}
                                        </td>

                                        <td className="text-center">
                                            <div className="d-flex justify-content-center gap-2">

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => handleDownload(document)}
                                                    disabled={downloadingId === document.id}
                                                >
                                                    {downloadingId === document.id
                                                        ? "Downloading..."
                                                        : "Download"}
                                                </button>

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(document.id)}
                                                    disabled={deletingId === document.id}
                                                >
                                                    {deletingId === document.id
                                                        ? "Deleting..."
                                                        : "Delete"}
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

export default Documents;
