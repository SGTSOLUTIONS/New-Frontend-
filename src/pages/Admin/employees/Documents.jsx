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
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const loadEmployees = async () => {
        try {
            const response = await api.get("/admin/employees", {
                params: { per_page: 100 },
            });

            const result = response.data?.data;
            setEmployees(
                Array.isArray(result) ? result : result?.data || []
            );
        } catch (err) {
            setError("Unable to load employees.");
        }
    };

    const loadDocuments = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get("/admin/documents");
            const result = response.data?.data;

            setDocuments(
                Array.isArray(result) ? result : result?.data || []
            );
        } catch (err) {
            setDocuments([]);
            setError(
                err.response?.data?.message ||
                "Unable to load employee documents. Check the Admin document API."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEmployees();
        loadDocuments();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: name === "file" ? files?.[0] || null : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this employee document?")) return;

        setError("");
        setSuccess("");

        try {
            await api.delete(`/admin/documents/${id}`);
            setSuccess("Document deleted successfully.");
            await loadDocuments();
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to delete document."
            );
        }
    };

    const getEmployeeName = (document) =>
        document.employee?.user?.name ||
        document.employee?.name ||
        "Employee";

    const getDownloadUrl = (document) =>
        document.download_url ||
        `/admin/documents/${document.id}/download`;

    return (
        <div className="container-fluid py-3">
            <div className="mb-4">
                <h4 className="fw-bold mb-1">Employee Documents</h4>
                <p className="text-muted mb-0">
                    Upload and manage employee documents.
                </p>
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
                    <h6 className="fw-bold mb-0">Upload Employee Document</h6>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
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
                                    <option value="">Select Employee</option>
                                    {employees.map((employee) => (
                                        <option
                                            key={employee.id}
                                            value={employee.id}
                                        >
                                            {employee.user?.name || employee.name}
                                            {" - "}
                                            {employee.employee_code}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Document Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    name="document_name"
                                    className="form-control"
                                    value={form.document_name}
                                    onChange={handleChange}
                                    placeholder="e.g. Aadhaar Card"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Document Type</label>
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
                                    <option value="Appointment Letter">Appointment Letter</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

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
                            </div>

                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={saving}
                                >
                                    {saving ? "Uploading..." : "Upload Document"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h6 className="fw-bold mb-0">Document Records</h6>
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
                                        Loading documents...
                                    </td>
                                </tr>
                            ) : documents.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted py-4">
                                        No documents found.
                                    </td>
                                </tr>
                            ) : (
                                documents.map((document, index) => (
                                    <tr key={document.id}>
                                        <td className="ps-3">{index + 1}</td>
                                        <td>{getEmployeeName(document)}</td>
                                        <td className="fw-semibold">
                                            {document.document_name}
                                        </td>
                                        <td>{document.document_type || "Other"}</td>
                                        <td>
                                            {document.created_at
                                                ? new Date(document.created_at).toLocaleDateString("en-IN")
                                                : "-"}
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center gap-2">
                                                <a
                                                    href={getDownloadUrl(document)}
                                                    className="btn btn-sm btn-outline-primary"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    View
                                                </a>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(document.id)}
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

export default Documents;
