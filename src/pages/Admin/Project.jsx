import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, clearErrors, clearSuccess, getProjects, deleteProject, updateProject } from '../../features/projectSlice';

const Project = () => {
    const dispatch = useDispatch();

    // Get Redux state
    const { loading, success, errors, message, projects } = useSelector((state) => state.project);

    const [formData, setFormData] = useState({
        project_code: '',
        project_name: '',
        project_profile: '',
        description: '',
        client_name: '',
        department: '',
        location: '',
        total_amount: '',
        total_income: '',
        total_expense: '',
        balance_amount: '',
        work_order_no: '',
        work_order_date: '',
        work_order_amount: '',
        work_order_file: null,
        pre_invoice_no: '',
        pre_invoice_date: '',
        pre_invoice_amount: '',
        pre_invoice_file: null,
        start_date: '',
        expected_end_date: '',
        actual_end_date: '',
        work_completed_percentage: '',
        work_completed_details: '',
        status: 'Pending',
        remarks: '',
    });

    // State for editing
    const [editingProject, setEditingProject] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // Fetch projects on component mount
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    // Reset form state when modal closes
    const resetForm = () => {
        setFormData({
            project_code: '',
            project_name: '',
            project_profile: '',
            description: '',
            client_name: '',
            department: '',
            location: '',
            total_amount: '',
            total_income: '',
            total_expense: '',
            balance_amount: '',
            work_order_no: '',
            work_order_date: '',
            work_order_amount: '',
            work_order_file: null,
            pre_invoice_no: '',
            pre_invoice_date: '',
            pre_invoice_amount: '',
            pre_invoice_file: null,
            start_date: '',
            expected_end_date: '',
            actual_end_date: '',
            work_completed_percentage: '',
            work_completed_details: '',
            status: 'Pending',
            remarks: '',
        });
        dispatch(clearErrors());
        dispatch(clearSuccess());
    };

    // Auto-calculate balance amount
    useEffect(() => {
        const totalAmount = parseFloat(formData.total_amount) || 0;
        const totalExpense = parseFloat(formData.total_expense) || 0;
        const balance = totalAmount - totalExpense;

        setFormData(prev => ({
            ...prev,
            balance_amount: balance > 0 ? balance.toFixed(2) : '0.00'
        }));
    }, [formData.total_amount, formData.total_expense]);

    // Close modal on success
    useEffect(() => {
        if (success) {
            const modal = document.getElementById('exampleModalToggle');
            const modalInstance = window.bootstrap?.Modal?.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
            resetForm();
            dispatch(getProjects());
            // Show success message
            alert(message || 'Project created successfully!');
        }
    }, [success, message, dispatch]);

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        if (files) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
            return;
        }

        if (type === 'number') {
            const numValue = parseFloat(value);
            if (name === 'work_completed_percentage') {
                if (numValue < 0 || numValue > 100) {
                    return;
                }
            }
            setFormData({
                ...formData,
                [name]: value === '' ? '' : numValue,
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.project_name.trim()) {
            alert('Project Name is required');
            return;
        }

        const submitData = new FormData();

        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== '') {
                if (key === 'work_order_file' || key === 'pre_invoice_file') {
                    if (formData[key] instanceof File) {
                        submitData.append(key, formData[key]);
                    }
                } else {
                    submitData.append(key, String(formData[key]));
                }
            }
        });

        dispatch(createProject(submitData));
    };

    // Handle modal close event
    useEffect(() => {
        const modal = document.getElementById('exampleModalToggle');

        const handleModalHidden = () => {
            resetForm();
        };

        if (modal) {
            modal.addEventListener('hidden.bs.modal', handleModalHidden);
        }

        return () => {
            if (modal) {
                modal.removeEventListener('hidden.bs.modal', handleModalHidden);
            }
        };
    }, [dispatch]);

    // Card Handlers
    const handleDelete = (projectId) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            dispatch(deleteProject(projectId)).then(() => {
                dispatch(getProjects());
            });
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setShowEditModal(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        
        // Check if editingProject has file uploads
        const hasFileUpload = editingProject.work_order_file instanceof File || 
                             editingProject.pre_invoice_file instanceof File;
        
        if (hasFileUpload) {
            const formData = new FormData();
            
            Object.keys(editingProject).forEach(key => {
                if (editingProject[key] !== null && editingProject[key] !== '') {
                    if (key === 'work_order_file' || key === 'pre_invoice_file') {
                        if (editingProject[key] instanceof File) {
                            formData.append(key, editingProject[key]);
                        }
                    } else {
                        formData.append(key, String(editingProject[key]));
                    }
                }
            });
            
            // Add _method for Laravel to handle PUT/PATCH
            formData.append('_method', 'PUT');
            
            dispatch(updateProject({ 
                id: editingProject.id, 
                projectData: formData 
            })).then(() => {
                dispatch(getProjects());
                setShowEditModal(false);
                setEditingProject(null);
                alert('Project updated successfully!');
            });
        } else {
            // Send as JSON
            dispatch(updateProject({ 
                id: editingProject.id, 
                projectData: editingProject 
            })).then(() => {
                dispatch(getProjects());
                setShowEditModal(false);
                setEditingProject(null);
                alert('Project updated successfully!');
            });
        }
    };

    // Validation helper for form fields
    const getValidationClass = (fieldName) => {
        if (errors && errors[fieldName]) {
            return 'is-invalid';
        }
        return '';
    };

    const getValidationError = (fieldName) => {
        if (errors && errors[fieldName]) {
            return errors[fieldName];
        }
        return null;
    };

    // Helper functions for card display
    const getStatusBadgeColor = (status) => {
        const colors = {
            'Pending': 'bg-warning',
            'In Progress': 'bg-primary',
            'Completed': 'bg-success',
            'On Hold': 'bg-secondary',
            'Cancelled': 'bg-danger'
        };
        return colors[status] || 'bg-secondary';
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatCurrency = (amount) => {
        if (!amount) return '₹0.00';
        return `₹${parseFloat(amount).toFixed(2)}`;
    };

    // ProjectCard component
    const ProjectCard = ({ project }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        return (
            <div className="card h-100 shadow-sm hover-shadow transition-all">
                {/* Card Header */}
                <div className="card-header bg-white border-bottom-0 pt-3">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 className="card-title mb-1 fw-bold">{project.project_name}</h5>
                            <span className="text-muted small">Code: {project.project_code || 'N/A'}</span>
                        </div>
                        <span className={`badge ${getStatusBadgeColor(project.status)} text-white px-3 py-2`}>
                            {project.status || 'Pending'}
                        </span>
                    </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                    {/* Quick Info */}
                    <div className="row g-2 mb-3">
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <span className="text-muted small">Client</span>
                                <span className="fw-semibold">{project.client_name || 'N/A'}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <span className="text-muted small">Location</span>
                                <span className="fw-semibold">{project.location || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="row g-2 mb-3">
                        <div className="col-4">
                            <div className="d-flex flex-column">
                                <span className="text-muted small">Total</span>
                                <span className="fw-bold text-primary">{formatCurrency(project.total_amount)}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column">
                                <span className="text-muted small">Expense</span>
                                <span className="fw-bold text-danger">{formatCurrency(project.total_expense)}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column">
                                <span className="text-muted small">Balance</span>
                                <span className="fw-bold text-success">{formatCurrency(project.balance_amount)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-2">
                        <div className="d-flex justify-content-between mb-1">
                            <span className="small text-muted">Progress</span>
                            <span className="small fw-semibold">
                                {project.work_completed_percentage || 0}%
                            </span>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${project.work_completed_percentage || 0}%`,
                                    backgroundColor: project.work_completed_percentage > 80 ? '#28a745' :
                                        project.work_completed_percentage > 50 ? '#ffc107' : '#dc3545'
                                }}
                                role="progressbar"
                            ></div>
                        </div>
                    </div>

                    {/* Expand/Collapse */}
                    <button
                        className="btn btn-link text-decoration-none p-0 mt-2"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <small>
                            {isExpanded ? '▼ Show Less' : '▶ Show More Details'}
                        </small>
                    </button>

                    {/* Expanded Details */}
                    {isExpanded && (
                        <div className="mt-3 pt-3 border-top">
                            <div className="row g-2">
                                <div className="col-12">
                                    <h6 className="text-muted mb-2">Project Details</h6>
                                </div>
                                <div className="col-6">
                                    <span className="text-muted small">Profile</span>
                                    <p className="mb-1">{project.project_profile || 'N/A'}</p>
                                </div>
                                <div className="col-6">
                                    <span className="text-muted small">Department</span>
                                    <p className="mb-1">{project.department || 'N/A'}</p>
                                </div>
                                <div className="col-12">
                                    <span className="text-muted small">Description</span>
                                    <p className="mb-2">{project.description || 'No description provided'}</p>
                                </div>

                                <div className="col-12">
                                    <h6 className="text-muted mb-2 mt-2">Timeline</h6>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Start</span>
                                    <p className="mb-1">{formatDate(project.start_date)}</p>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Expected End</span>
                                    <p className="mb-1">{formatDate(project.expected_end_date)}</p>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Actual End</span>
                                    <p className="mb-1">{formatDate(project.actual_end_date)}</p>
                                </div>

                                <div className="col-12">
                                    <h6 className="text-muted mb-2 mt-2">Work Order</h6>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Order No</span>
                                    <p className="mb-1">{project.work_order_no || 'N/A'}</p>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Date</span>
                                    <p className="mb-1">{formatDate(project.work_order_date)}</p>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Amount</span>
                                    <p className="mb-1">{formatCurrency(project.work_order_amount)}</p>
                                </div>

                                <div className="col-12">
                                    <h6 className="text-muted mb-2 mt-2">Pre-Invoice</h6>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Invoice No</span>
                                    <p className="mb-1">{project.pre_invoice_no || 'N/A'}</p>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Date</span>
                                    <p className="mb-1">{formatDate(project.pre_invoice_date)}</p>
                                </div>
                                <div className="col-4">
                                    <span className="text-muted small">Amount</span>
                                    <p className="mb-1">{formatCurrency(project.pre_invoice_amount)}</p>
                                </div>

                                {project.work_completed_details && (
                                    <div className="col-12">
                                        <span className="text-muted small">Work Details</span>
                                        <p className="mb-1">{project.work_completed_details}</p>
                                    </div>
                                )}

                                {project.remarks && (
                                    <div className="col-12">
                                        <span className="text-muted small">Remarks</span>
                                        <p className="mb-1">{project.remarks}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Card Footer - Actions */}
                <div className="card-footer bg-white border-top-0">
                    <div className="d-flex justify-content-end gap-2">
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => handleEdit(project)}
                        >
                            <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(project.id)}
                        >
                            <i className="bi bi-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="project-page">
            <div className="container-fluid">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0">Projects</h2>
                    <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : '+ Add New Project'}
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="row g-4">
                    {projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project.id} className="col-md-6 col-lg-4">
                                <ProjectCard project={project} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <div className="text-center py-5">
                                <p className="text-muted">No projects found. Click "Add New Project" to create one.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Project Modal */}
            <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                                Add New Project
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={resetForm}
                            ></button>
                        </div>

                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="modal-body">
                                {errors && errors.message && (
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        {errors.message}
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={() => dispatch(clearErrors())}
                                        ></button>
                                    </div>
                                )}

                                {/* Basic Project Details */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Basic Project Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Project Code</label>
                                            <input
                                                type="text"
                                                name="project_code"
                                                value={formData.project_code}
                                                onChange={handleChange}
                                                className={`form-control ${getValidationClass('project_code')}`}
                                                placeholder="Enter project code"
                                                disabled={loading}
                                            />
                                            {getValidationError('project_code') && (
                                                <div className="invalid-feedback">
                                                    {getValidationError('project_code')}
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-md-8">
                                            <label className="form-label">Project Name <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                name="project_name"
                                                value={formData.project_name}
                                                onChange={handleChange}
                                                className={`form-control ${getValidationClass('project_name')}`}
                                                placeholder="Enter project name"
                                                required
                                                disabled={loading}
                                            />
                                            {getValidationError('project_name') && (
                                                <div className="invalid-feedback">
                                                    {getValidationError('project_name')}
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Project Profile</label>
                                            <input
                                                type="text"
                                                name="project_profile"
                                                value={formData.project_profile}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter project profile"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Client Name</label>
                                            <input
                                                type="text"
                                                name="client_name"
                                                value={formData.client_name}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter client name"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Department</label>
                                            <input
                                                type="text"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter department"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter project location"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                className="form-control"
                                                rows="3"
                                                placeholder="Enter project description"
                                                disabled={loading}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Financial Details */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Financial Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-3">
                                            <label className="form-label">Total Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="total_amount"
                                                value={formData.total_amount}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="0.00"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label className="form-label">Total Income</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="total_income"
                                                value={formData.total_income}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="0.00"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label className="form-label">Total Expense</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="total_expense"
                                                value={formData.total_expense}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="0.00"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label className="form-label">Balance Amount</label>
                                            <input
                                                type="text"
                                                name="balance_amount"
                                                value={formData.balance_amount}
                                                className="form-control"
                                                placeholder="0.00"
                                                readOnly
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            />
                                            <small className="text-muted">Auto-calculated (Total - Expense)</small>
                                        </div>
                                    </div>
                                </div>

                                {/* Work Order */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Work Order Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Work Order No</label>
                                            <input
                                                type="text"
                                                name="work_order_no"
                                                value={formData.work_order_no}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter work order number"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Work Order Date</label>
                                            <input
                                                type="date"
                                                name="work_order_date"
                                                value={formData.work_order_date}
                                                onChange={handleChange}
                                                className="form-control"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Work Order Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="work_order_amount"
                                                value={formData.work_order_amount}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="0.00"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">Work Order File</label>
                                            <input
                                                type="file"
                                                name="work_order_file"
                                                onChange={handleChange}
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                disabled={loading}
                                            />
                                            <small className="text-muted">Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG</small>
                                        </div>
                                    </div>
                                </div>

                                {/* Pre-Invoice Details */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Pre-Invoice Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice No</label>
                                            <input
                                                type="text"
                                                name="pre_invoice_no"
                                                value={formData.pre_invoice_no}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter invoice number"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice Date</label>
                                            <input
                                                type="date"
                                                name="pre_invoice_date"
                                                value={formData.pre_invoice_date}
                                                onChange={handleChange}
                                                className="form-control"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                name="pre_invoice_amount"
                                                value={formData.pre_invoice_amount}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="0.00"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">Pre-Invoice File</label>
                                            <input
                                                type="file"
                                                name="pre_invoice_file"
                                                onChange={handleChange}
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                disabled={loading}
                                            />
                                            <small className="text-muted">Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG</small>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Dates */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Project Dates</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Start Date</label>
                                            <input
                                                type="date"
                                                name="start_date"
                                                value={formData.start_date}
                                                onChange={handleChange}
                                                className="form-control"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Expected End Date</label>
                                            <input
                                                type="date"
                                                name="expected_end_date"
                                                value={formData.expected_end_date}
                                                onChange={handleChange}
                                                className="form-control"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Actual End Date</label>
                                            <input
                                                type="date"
                                                name="actual_end_date"
                                                value={formData.actual_end_date}
                                                onChange={handleChange}
                                                className="form-control"
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Work Progress */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Work Progress</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Work Completed (%)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                step="0.01"
                                                name="work_completed_percentage"
                                                value={formData.work_completed_percentage}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="0 - 100"
                                                disabled={loading}
                                            />
                                        </div>

                                        <div className="col-md-8">
                                            <label className="form-label">Work Completed Details</label>
                                            <textarea
                                                name="work_completed_details"
                                                value={formData.work_completed_details}
                                                onChange={handleChange}
                                                className="form-control"
                                                rows="2"
                                                placeholder="Describe completed work"
                                                disabled={loading}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Project Status</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Status</label>
                                            <select
                                                name="status"
                                                value={formData.status}
                                                onChange={handleChange}
                                                className="form-select"
                                                disabled={loading}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                                <option value="On Hold">On Hold</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                name="remarks"
                                                value={formData.remarks}
                                                onChange={handleChange}
                                                className="form-control"
                                                rows="2"
                                                placeholder="Enter remarks"
                                                disabled={loading}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={resetForm}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Saving...
                                        </>
                                    ) : (
                                        'Save Project'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Edit Project Modal */}
            {showEditModal && editingProject && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Project</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowEditModal(false);
                                        setEditingProject(null);
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="modal-body">
                                    {errors && errors.message && (
                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            {errors.message}
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() => dispatch(clearErrors())}
                                            ></button>
                                        </div>
                                    )}

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Project Name <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.project_name || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    project_name: e.target.value
                                                })}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Project Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.project_code || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    project_code: e.target.value
                                                })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Client Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.client_name || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    client_name: e.target.value
                                                })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.location || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    location: e.target.value
                                                })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Total Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={editingProject.total_amount || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    total_amount: e.target.value
                                                })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Total Expense</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={editingProject.total_expense || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    total_expense: e.target.value
                                                })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Status</label>
                                            <select
                                                className="form-select"
                                                value={editingProject.status || 'Pending'}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    status: e.target.value
                                                })}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                                <option value="On Hold">On Hold</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Progress (%)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                min="0"
                                                max="100"
                                                value={editingProject.work_completed_percentage || 0}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    work_completed_percentage: e.target.value
                                                })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Work Order File</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    work_order_file: e.target.files[0]
                                                })}
                                            />
                                            {editingProject.work_order_file && typeof editingProject.work_order_file === 'string' && (
                                                <small className="text-muted">Current: {editingProject.work_order_file}</small>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Pre-Invoice File</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    pre_invoice_file: e.target.files[0]
                                                })}
                                            />
                                            {editingProject.pre_invoice_file && typeof editingProject.pre_invoice_file === 'string' && (
                                                <small className="text-muted">Current: {editingProject.pre_invoice_file}</small>
                                            )}
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={editingProject.remarks || ''}
                                                onChange={(e) => setEditingProject({
                                                    ...editingProject,
                                                    remarks: e.target.value
                                                })}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setShowEditModal(false);
                                            setEditingProject(null);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? 'Saving...' : 'Update Project'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS Styles */}
            <style jsx>{`
                .hover-shadow {
                    transition: all 0.3s ease;
                }

                .hover-shadow:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                }

                .transition-all {
                    transition: all 0.3s ease;
                }

                .card {
                    border-radius: 10px;
                    overflow: hidden;
                }

                .progress {
                    border-radius: 10px;
                }

                .modal.show {
                    background-color: rgba(0, 0, 0, 0.5);
                }
            `}</style>
        </div>
    );
};

export default Project;