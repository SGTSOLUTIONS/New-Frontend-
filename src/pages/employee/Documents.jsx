import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import "../../assets/css/employee-documents.css";

const Documents = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [downloadingId, setDownloadingId] = useState(null);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Fetch employee documents
    const fetchDocuments = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/employee/documents");

            const result = response.data?.data;

            const documentList = Array.isArray(result)
                ? result
                : Array.isArray(result?.documents)
                    ? result.documents
                    : [];

            setDocuments(documentList);
        } catch (err) {
            console.error("Document loading error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to load documents. Please try again."
            );

            setDocuments([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    // Check actual file availability
    const isDocumentAvailable = (item) => {
        if (typeof item.file_available === "boolean") {
            return item.file_available;
        }

        return ["available", "active", "published"].includes(
            String(item.status || "").toLowerCase()
        );
    };

    // Format date
    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    // File icon
    const getFileIcon = (fileType, fileName) => {
        const type = String(fileType || "").toLowerCase();
        const name = String(fileName || "").toLowerCase();

        if (type.includes("pdf") || name.endsWith(".pdf")) {
            return {
                icon: "fa-file-pdf",
                className: "document-icon-pdf",
            };
        }

        if (
            type.includes("word") ||
            name.endsWith(".doc") ||
            name.endsWith(".docx")
        ) {
            return {
                icon: "fa-file-word",
                className: "document-icon-word",
            };
        }

        if (
            type.includes("excel") ||
            name.endsWith(".xls") ||
            name.endsWith(".xlsx")
        ) {
            return {
                icon: "fa-file-excel",
                className: "document-icon-excel",
            };
        }

        if (
            type.includes("image") ||
            name.endsWith(".jpg") ||
            name.endsWith(".jpeg") ||
            name.endsWith(".png")
        ) {
            return {
                icon: "fa-file-image",
                className: "document-icon-image",
            };
        }

        return {
            icon: "fa-file-alt",
            className: "document-icon-default",
        };
    };

    // Download employee document using authenticated Axios
    const handleDownload = async (documentItem) => {
        if (!documentItem?.id) {
            setError("Document ID is missing.");
            return;
        }

        if (!isDocumentAvailable(documentItem)) {
            setError("This document is currently unavailable.");
            return;
        }

        try {
            setDownloadingId(documentItem.id);
            setError("");

            const response = await api.get(
                `/employee/documents/${documentItem.id}/download`,
                {
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data], {
                type:
                    response.headers["content-type"] ||
                    "application/octet-stream",
            });

            const downloadUrl = window.URL.createObjectURL(blob);

            const link = window.document.createElement("a");

            link.href = downloadUrl;

            link.download =
                documentItem.file_name ||
                documentItem.original_name ||
                documentItem.title ||
                `document-${documentItem.id}`;

            window.document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(downloadUrl);

        } catch (err) {
            console.error("Document download error:", err);

            setError(
                "Unable to download this document. Please contact your administrator."
            );
        } finally {
            setDownloadingId(null);
        }
    };

    // Document categories
    const categories = [
        "All",
        ...new Set(
            documents
                .map((item) => item.category)
                .filter((category) => category)
        ),
    ];

    // Search and category filtering
    const filteredDocuments = documents.filter((item) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
            String(item.title || item.name || "")
                .toLowerCase()
                .includes(searchText) ||
            String(item.description || "")
                .toLowerCase()
                .includes(searchText) ||
            String(item.category || "")
                .toLowerCase()
                .includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Available documents count
    const publishedDocuments = documents.filter(
        (item) => isDocumentAvailable(item)
    ).length;

    return (
        <div className="employee-documents-page">

            {/* Page Heading */}
            <div className="employee-documents-heading">
                <div>
                    <h2>My Documents</h2>
                    <p>
                        Access and download documents shared by SGT SOLUTIONS.
                    </p>
                </div>

                <button
                    type="button"
                    className="document-refresh-button"
                    onClick={fetchDocuments}
                    disabled={loading}
                >
                    <i
                        className={`fas fa-sync-alt ${
                            loading ? "fa-spin" : ""
                        }`}
                    ></i>
                    Refresh
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="document-error">
                    <i className="fas fa-exclamation-circle"></i>

                    <span>{error}</span>

                    <button
                        type="button"
                        onClick={fetchDocuments}
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Summary Cards */}
            <div className="document-summary-grid">

                <div className="document-summary-card">
                    <div className="document-summary-icon document-summary-green">
                        <i className="fas fa-folder-open"></i>
                    </div>

                    <div>
                        <span>Total Documents</span>
                        <h3>{loading ? "..." : documents.length}</h3>
                    </div>
                </div>

                <div className="document-summary-card">
                    <div className="document-summary-icon document-summary-blue">
                        <i className="fas fa-check-circle"></i>
                    </div>

                    <div>
                        <span>Available Documents</span>
                        <h3>{loading ? "..." : publishedDocuments}</h3>
                    </div>
                </div>

                <div className="document-summary-card">
                    <div className="document-summary-icon document-summary-purple">
                        <i className="fas fa-layer-group"></i>
                    </div>

                    <div>
                        <span>Categories</span>
                        <h3>
                            {loading
                                ? "..."
                                : Math.max(categories.length - 1, 0)}
                        </h3>
                    </div>
                </div>

            </div>

            {/* Document List */}
            <div className="document-list-card">

                <div className="document-list-header">
                    <div>
                        <h3>Company Documents</h3>
                        <p>
                            Documents made available to your employee account
                        </p>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="document-filters">

                    <div className="document-search-box">
                        <i className="fas fa-search"></i>

                        <input
                            type="text"
                            placeholder="Search documents..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <select
                        value={selectedCategory}
                        onChange={(e) =>
                            setSelectedCategory(e.target.value)
                        }
                        aria-label="Filter documents by category"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                </div>

                {/* Loading */}
                {loading ? (
                    <div className="document-loading">
                        <i className="fas fa-spinner fa-spin"></i>
                        <p>Loading documents...</p>
                    </div>

                ) : filteredDocuments.length === 0 ? (

                    /* Empty State */
                    <div className="document-empty">

                        <div className="document-empty-icon">
                            <i className="fas fa-folder-open"></i>
                        </div>

                        <h4>
                            {documents.length === 0
                                ? "No Documents Available"
                                : "No Matching Documents"}
                        </h4>

                        <p>
                            {documents.length === 0
                                ? "Documents shared by your administrator will appear here."
                                : "Try changing your search text or selected category."}
                        </p>

                    </div>

                ) : (

                    /* Document Cards */
                    <div className="document-grid">

                        {filteredDocuments.map((item) => {

                            const fileInfo = getFileIcon(
                                item.mime_type || item.file_type,
                                item.file_name || item.original_name
                            );

                            const isAvailable = isDocumentAvailable(item);

                            return (
                                <div
                                    className="employee-document-card"
                                    key={item.id}
                                >

                                    <div className="document-card-top">

                                        <div
                                            className={`document-file-icon ${fileInfo.className}`}
                                        >
                                            <i className={`fas ${fileInfo.icon}`}></i>
                                        </div>

                                        <span className="document-category">
                                            {item.category || "General"}
                                        </span>

                                    </div>

                                    <div className="document-card-content">

                                        <h4>
                                            {item.title ||
                                                item.name ||
                                                "Untitled Document"}
                                        </h4>

                                        <p className="document-description">
                                            {item.description ||
                                                "No description provided."}
                                        </p>

                                        <div className="document-meta">

                                            <span>
                                                <i className="fas fa-calendar-alt"></i>

                                                {formatDate(
                                                    item.created_at ||
                                                    item.uploaded_at
                                                )}
                                            </span>

                                            <span>
                                                <i className="fas fa-file"></i>
                                                {item.file_size || "File"}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="document-card-footer">

                                        <span
                                            className={`document-availability ${
                                                isAvailable
                                                    ? "document-available"
                                                    : "document-unavailable"
                                            }`}
                                        >
                                            <i className="fas fa-circle"></i>

                                            {isAvailable
                                                ? "Available"
                                                : "Unavailable"}
                                        </span>

                                        <button
                                            type="button"
                                            className="document-download-button"
                                            onClick={() =>
                                                handleDownload(item)
                                            }
                                            disabled={
                                                !isAvailable ||
                                                downloadingId === item.id
                                            }
                                        >
                                            {downloadingId === item.id ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin"></i>
                                                    Downloading
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-download"></i>
                                                    Download
                                                </>
                                            )}
                                        </button>

                                    </div>

                                </div>
                            );
                        })}

                    </div>
                )}

            </div>

            {/* Information */}
            <div className="document-information">
                <i className="fas fa-info-circle"></i>

                <p>
                    These documents are provided by the company for employee
                    reference. Contact your administrator if you cannot access
                    a required document.
                </p>
            </div>

        </div>
    );
};

export default Documents;
