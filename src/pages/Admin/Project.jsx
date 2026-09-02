import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createProject,
    clearErrors,
    clearSuccess,
    getProjects,
    deleteProject,
    updateProject
} from '../../features/projectSlice';
import ProjectIncomes from './ProjectIncomes';
import ProjectExpenses from './ProjectExpenses';

const Project = () => {
    const dispatch = useDispatch();
    const { loading, errors, projects } = useSelector((state) => state.project);

    // ============================================================
    // INITIAL FORM
    // ============================================================
    const initialFormData = {
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
        remarks: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [editingProject, setEditingProject] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editErrors, setEditErrors] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [activeTab, setActiveTab] = useState('incomes');

    // ============================================================
    // FETCH PROJECTS
    // ============================================================
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    // ============================================================
    // RESET CREATE FORM
    // ============================================================
    const resetForm = () => {
        setFormData({ ...initialFormData });
        dispatch(clearErrors());
        dispatch(clearSuccess());
    };

    // ============================================================
    // CREATE FORM BALANCE
    // ============================================================
    useEffect(() => {
        const totalAmount = parseFloat(formData.total_amount) || 0;
        const totalExpense = parseFloat(formData.total_expense) || 0;
        const balance = totalAmount - totalExpense;
        setFormData(prev => ({
            ...prev,
            balance_amount: balance >= 0 ? balance.toFixed(2) : '0.00'
        }));
    }, [formData.total_amount, formData.total_expense]);

    // ============================================================
    // EDIT FORM BALANCE
    // ============================================================
    useEffect(() => {
        if (!editingProject) return;
        const totalAmount = parseFloat(editingProject.total_amount) || 0;
        const totalExpense = parseFloat(editingProject.total_expense) || 0;
        const balance = totalAmount - totalExpense;
        const calculatedBalance = balance >= 0 ? balance.toFixed(2) : '0.00';
        if (editingProject.balance_amount !== calculatedBalance) {
            setEditingProject(prev => ({
                ...prev,
                balance_amount: calculatedBalance
            }));
        }
    }, [editingProject?.total_amount, editingProject?.total_expense]);

    // ============================================================
    // CREATE FORM CHANGE
    // ============================================================
    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        if (files && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
            return;
        }

        if (type === 'number') {
            if (name === 'work_completed_percentage' && value !== '') {
                const number = parseFloat(value);
                if (number < 0 || number > 100) return;
            }
            setFormData(prev => ({ ...prev, [name]: value }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ============================================================
    // CREATE PROJECT
    // ============================================================
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.project_name || !formData.project_name.trim()) {
            alert('Project Name is required');
            return;
        }

        const submitData = new FormData();

        const fields = [
            'project_code', 'project_name', 'project_profile', 'description',
            'client_name', 'department', 'location',
            'total_amount', 'total_income', 'total_expense', 'balance_amount',
            'work_order_no', 'work_order_date', 'work_order_amount',
            'pre_invoice_no', 'pre_invoice_date', 'pre_invoice_amount',
            'start_date', 'expected_end_date', 'actual_end_date',
            'work_completed_percentage', 'work_completed_details',
            'status', 'remarks'
        ];

        fields.forEach(field => {
            const value = formData[field];
            if (value !== null && value !== undefined && value !== '') {
                submitData.append(field, String(value));
            }
        });

        if (formData.work_order_file instanceof File) {
            submitData.append('work_order_file', formData.work_order_file);
        }

        if (formData.pre_invoice_file instanceof File) {
            submitData.append('pre_invoice_file', formData.pre_invoice_file);
        }

        try {
            await dispatch(createProject(submitData)).unwrap();
            alert('Project created successfully!');
            resetForm();
            dispatch(getProjects());
            
            const modalElement = document.getElementById('exampleModalToggle');
            if (modalElement && window.bootstrap) {
                const modal = window.bootstrap.Modal.getInstance(modalElement);
                if (modal) modal.hide();
            }
        } catch (error) {
            console.error('Create Project Error:', error);
            alert(error?.message || 'Project creation failed');
        }
    };

    // ============================================================
    // RESET CREATE MODAL WHEN CLOSED
    // ============================================================
    useEffect(() => {
        const modal = document.getElementById('exampleModalToggle');
        if (!modal) return;
        const handleModalHidden = () => resetForm();
        modal.addEventListener('hidden.bs.modal', handleModalHidden);
        return () => {
            modal.removeEventListener('hidden.bs.modal', handleModalHidden);
        };
    }, []);

    // ============================================================
    // DELETE PROJECT
    // ============================================================
    const handleDelete = async (projectId) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            await dispatch(deleteProject(projectId)).unwrap();
            alert('Project deleted successfully!');
            dispatch(getProjects());
        } catch (error) {
            console.error('Delete Project Error:', error);
            alert(error?.message || 'Unable to delete project');
        }
    };

    // ============================================================
    // FORMAT DATE FOR HTML DATE INPUT
    // ============================================================
    const formatInputDate = (date) => {
        if (!date) return '';
        return String(date).substring(0, 10);
    };

    // ============================================================
    // EDIT PROJECT
    // ============================================================
    const handleEdit = (project) => {
        setEditingProject({
            id: project.id,
            project_code: project.project_code || '',
            project_name: project.project_name || '',
            project_profile: project.project_profile || '',
            description: project.description || '',
            client_name: project.client_name || '',
            department: project.department || '',
            location: project.location || '',
            total_amount: project.total_amount ?? '',
            total_income: project.total_income ?? '',
            total_expense: project.total_expense ?? '',
            balance_amount: project.balance_amount ?? '',
            work_order_no: project.work_order_no || '',
            work_order_date: formatInputDate(project.work_order_date),
            work_order_amount: project.work_order_amount ?? '',
            work_order_file: null,
            pre_invoice_no: project.pre_invoice_no || '',
            pre_invoice_date: formatInputDate(project.pre_invoice_date),
            pre_invoice_amount: project.pre_invoice_amount ?? '',
            pre_invoice_file: null,
            start_date: formatInputDate(project.start_date),
            expected_end_date: formatInputDate(project.expected_end_date),
            actual_end_date: formatInputDate(project.actual_end_date),
            work_completed_percentage: project.work_completed_percentage ?? '',
            work_completed_details: project.work_completed_details || '',
            status: project.status || 'Pending',
            remarks: project.remarks || '',
            existing_work_order_file: project.work_order_file || '',
            existing_pre_invoice_file: project.pre_invoice_file || ''
        });
        dispatch(clearErrors());
        setEditErrors({});
        setShowEditModal(true);
    };

    // ============================================================
    // EDIT CHANGE
    // ============================================================
    const handleEditChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            setEditingProject(prev => ({ ...prev, [name]: files[0] }));
            return;
        }
        setEditingProject(prev => ({ ...prev, [name]: value }));
    };

    // ============================================================
    // UPDATE PROJECT
    // ============================================================
    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PUT');

        const fields = [
            'project_code', 'project_name', 'project_profile', 'description',
            'client_name', 'department', 'location',
            'total_amount', 'total_income', 'total_expense', 'balance_amount',
            'work_order_no', 'work_order_date', 'work_order_amount',
            'pre_invoice_no', 'pre_invoice_date', 'pre_invoice_amount',
            'start_date', 'expected_end_date', 'actual_end_date',
            'work_completed_percentage', 'work_completed_details',
            'status', 'remarks'
        ];

        fields.forEach(field => {
            const value = editingProject[field];
            if (value !== null && value !== undefined && value !== '') {
                formData.append(field, String(value));
            }
        });

        if (editingProject.work_order_file instanceof File) {
            formData.append('work_order_file', editingProject.work_order_file);
        }

        if (editingProject.pre_invoice_file instanceof File) {
            formData.append('pre_invoice_file', editingProject.pre_invoice_file);
        }

        try {
            const result = await dispatch(updateProject({
                id: editingProject.id,
                projectData: formData
            })).unwrap();

            if (result.success) {
                alert('Project updated successfully!');
                dispatch(getProjects());
                setShowEditModal(false);
                setEditingProject(null);
                setEditErrors({});
            }
        } catch (error) {
            console.error('Update error:', error);
            if (error?.errors) {
                setEditErrors(error.errors);
                const firstError = Object.values(error.errors)[0];
                if (firstError) {
                    alert(Array.isArray(firstError) ? firstError[0] : firstError);
                }
            } else {
                alert(error?.message || 'Failed to update project');
            }
        }
    };

    // ============================================================
    // VIEW PROJECT DETAILS
    // ============================================================
    const handleViewDetails = (project) => {
        setSelectedProject(project);
        setShowDetailModal(true);
        setActiveTab('incomes');
    };

    // ============================================================
    // VALIDATION
    // ============================================================
    const getValidationClass = (fieldName) => {
        if (errors && errors[fieldName]) return 'is-invalid';
        return '';
    };

    const getValidationError = (fieldName) => {
        if (errors && errors[fieldName]) {
            return Array.isArray(errors[fieldName]) ? errors[fieldName][0] : errors[fieldName];
        }
        return null;
    };

    const getEditValidationClass = (fieldName) => {
        if (editErrors && editErrors[fieldName]) return 'is-invalid';
        return '';
    };

    const getEditValidationError = (fieldName) => {
        if (editErrors && editErrors[fieldName]) {
            return Array.isArray(editErrors[fieldName]) ? editErrors[fieldName][0] : editErrors[fieldName];
        }
        return null;
    };

    // ============================================================
    // STATUS COLOR
    // ============================================================
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

    // ============================================================
    // DISPLAY DATE
    // ============================================================
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // ============================================================
    // CURRENCY
    // ============================================================
    const formatCurrency = (amount) => {
        if (amount === null || amount === undefined || amount === '') return '₹0.00';
        const number = parseFloat(amount);
        if (isNaN(number)) return '₹0.00';
        return `₹${number.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };

    // ============================================================
    // PROJECT CARD
    // ============================================================
    const ProjectCard = ({ project }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        return (
            <div className="card h-100 shadow-sm hover-shadow transition-all">
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

                <div className="card-body">
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

                    <div className="mb-2">
                        <div className="d-flex justify-content-between mb-1">
                            <span className="small text-muted">Progress</span>
                            <span className="small fw-semibold">{project.work_completed_percentage || 0}%</span>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                    width: `${project.work_completed_percentage || 0}%`,
                                    backgroundColor: project.work_completed_percentage > 80 ? '#28a745' :
                                        project.work_completed_percentage > 50 ? '#ffc107' : '#dc3545'
                                }}
                            ></div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-link text-decoration-none p-0 mt-2"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <small>{isExpanded ? '▼ Show Less' : '▶ Show More Details'}</small>
                    </button>

                    {isExpanded && (
                        <div className="mt-3 pt-3 border-top">
                            <div className="row g-2">
                                <div className="col-12"><h6 className="text-muted">Project Details</h6></div>
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

                                <div className="col-12"><h6 className="text-muted mt-2">Timeline</h6></div>
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

                                <div className="col-12"><h6 className="text-muted mt-2">Work Order</h6></div>
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

                                <div className="col-12"><h6 className="text-muted mt-2">Pre-Invoice</h6></div>
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

                <div className="card-footer bg-white border-top-0">
                    <div className="d-flex justify-content-end gap-2">
                        <button 
                            type="button" 
                            className="btn btn-sm btn-outline-info"
                            onClick={() => handleViewDetails(project)}
                        >
                            <i className="bi bi-eye"></i> Details
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(project)}>
                            <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(project.id)}>
                            <i className="bi bi-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // ============================================================
    // RENDER
    // ============================================================
    return (
        <div className="project-page">
            <div className="container-fluid">
                {/* HEADER */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0">Projects</h2>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : '+ Add New Project'}
                    </button>
                </div>

                {errors?.message && (
                    <div className="alert alert-danger">{errors.message}</div>
                )}

                {/* PROJECT GRID */}
                <div className="row g-4">
                    {projects && projects.length > 0 ? (
                        projects.map(project => (
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

            {/* ============================================================
                ADD PROJECT MODAL - SCROLLABLE
            ============================================================ */}
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={resetForm}></button>
                        </div>

                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="modal-body">
                                {errors?.message && (
                                    <div className="alert alert-danger">{errors.message}</div>
                                )}

                                {/* BASIC DETAILS */}
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
                                                disabled={loading}
                                            />
                                            {getValidationError('project_code') && (
                                                <div className="invalid-feedback">{getValidationError('project_code')}</div>
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
                                                required
                                                disabled={loading}
                                            />
                                            {getValidationError('project_name') && (
                                                <div className="invalid-feedback">{getValidationError('project_name')}</div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Project Profile</label>
                                            <input type="text" name="project_profile" value={formData.project_profile} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Client Name</label>
                                            <input type="text" name="client_name" value={formData.client_name} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Department</label>
                                            <input type="text" name="department" value={formData.department} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Location</label>
                                            <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea name="description" rows="3" value={formData.description} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                    </div>
                                </div>

                                {/* FINANCIAL */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Financial Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-3">
                                            <label className="form-label">Total Amount</label>
                                            <input type="number" step="0.01" min="0" name="total_amount" value={formData.total_amount} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Total Income</label>
                                            <input type="number" step="0.01" min="0" name="total_income" value={formData.total_income} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Total Expense</label>
                                            <input type="number" step="0.01" min="0" name="total_expense" value={formData.total_expense} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Balance Amount</label>
                                            <input type="text" value={formData.balance_amount} className="form-control" readOnly />
                                            <small className="text-muted">Total Amount - Total Expense</small>
                                        </div>
                                    </div>
                                </div>

                                {/* WORK ORDER */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Work Order Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Work Order No</label>
                                            <input type="text" name="work_order_no" value={formData.work_order_no} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Work Order Date</label>
                                            <input type="date" name="work_order_date" value={formData.work_order_date} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Work Order Amount</label>
                                            <input type="number" step="0.01" min="0" name="work_order_amount" value={formData.work_order_amount} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Work Order File</label>
                                            <input type="file" name="work_order_file" onChange={handleChange} className="form-control" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" disabled={loading} />
                                        </div>
                                    </div>
                                </div>

                                {/* PRE INVOICE */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Pre-Invoice Details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice No</label>
                                            <input type="text" name="pre_invoice_no" value={formData.pre_invoice_no} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice Date</label>
                                            <input type="date" name="pre_invoice_date" value={formData.pre_invoice_date} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice Amount</label>
                                            <input type="number" step="0.01" min="0" name="pre_invoice_amount" value={formData.pre_invoice_amount} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Pre-Invoice File</label>
                                            <input type="file" name="pre_invoice_file" onChange={handleChange} className="form-control" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" disabled={loading} />
                                        </div>
                                    </div>
                                </div>

                                {/* DATES */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Project Dates</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Start Date</label>
                                            <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expected End Date</label>
                                            <input type="date" name="expected_end_date" value={formData.expected_end_date} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Actual End Date</label>
                                            <input type="date" name="actual_end_date" value={formData.actual_end_date} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                    </div>
                                </div>

                                {/* WORK PROGRESS */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Work Progress</h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Work Completed (%)</label>
                                            <input type="number" min="0" max="100" step="0.01" name="work_completed_percentage" value={formData.work_completed_percentage} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                        <div className="col-md-8">
                                            <label className="form-label">Work Completed Details</label>
                                            <textarea name="work_completed_details" rows="2" value={formData.work_completed_details} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                    </div>
                                </div>

                                {/* STATUS */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">Project Status</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Status</label>
                                            <select name="status" value={formData.status} onChange={handleChange} className="form-select" disabled={loading}>
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                                <option value="On Hold">On Hold</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Remarks</label>
                                            <textarea name="remarks" rows="2" value={formData.remarks} onChange={handleChange} className="form-control" disabled={loading} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetForm} disabled={loading}>Cancel</button>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? (
                                        <><span className="spinner-border spinner-border-sm me-2"></span>Saving...</>
                                    ) : (
                                        'Save Project'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* ============================================================
                EDIT PROJECT MODAL - SCROLLABLE FIXED VERSION
            ============================================================ */}
            {showEditModal && editingProject && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" style={{ maxHeight: '90vh' }}>
                        <div className="modal-content" style={{ maxHeight: '90vh' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Project</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowEditModal(false);
                                        setEditingProject(null);
                                        setEditErrors({});
                                        dispatch(clearErrors());
                                    }}
                                ></button>
                            </div>

                            <form onSubmit={handleUpdate} encType="multipart/form-data" style={{ overflow: 'hidden' }}>
                                <div className="modal-body" style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 130px)' }}>
                                    {editErrors?.message && (
                                        <div className="alert alert-danger">{editErrors.message}</div>
                                    )}

                                    {Object.keys(editErrors).length > 0 && (
                                        <div className="alert alert-danger">
                                            <h6>Please fix the following errors:</h6>
                                            <ul className="mb-0">
                                                {Object.entries(editErrors).map(([field, messages]) => (
                                                    <li key={field}>
                                                        <strong>{field}:</strong> {Array.isArray(messages) ? messages.join(', ') : messages}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="row g-3">
                                        {/* Basic Info */}
                                        <div className="col-md-6">
                                            <label className="form-label">Project Name <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className={`form-control ${getEditValidationClass('project_name')}`}
                                                value={editingProject.project_name || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, project_name: e.target.value })}
                                                required
                                            />
                                            {getEditValidationError('project_name') && (
                                                <div className="invalid-feedback">{getEditValidationError('project_name')}</div>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Project Code</label>
                                            <input
                                                type="text"
                                                className={`form-control ${getEditValidationClass('project_code')}`}
                                                value={editingProject.project_code || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, project_code: e.target.value })}
                                            />
                                            {getEditValidationError('project_code') && (
                                                <div className="invalid-feedback">{getEditValidationError('project_code')}</div>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Client Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.client_name || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, client_name: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.location || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Department</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.department || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, department: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Project Profile</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.project_profile || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, project_profile: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingProject.description || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                                            />
                                        </div>

                                        {/* Financial */}
                                        <div className="col-md-4">
                                            <label className="form-label">Total Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingProject.total_amount || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, total_amount: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Total Income</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingProject.total_income || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, total_income: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Total Expense</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingProject.total_expense || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, total_expense: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Balance Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.balance_amount || '0.00'}
                                                readOnly
                                            />
                                            <small className="text-muted">Auto-calculated</small>
                                        </div>

                                        {/* Work Order */}
                                        <div className="col-md-4">
                                            <label className="form-label">Work Order No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.work_order_no || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, work_order_no: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Work Order Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingProject.work_order_date || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, work_order_date: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Work Order Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingProject.work_order_amount || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, work_order_amount: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Work Order File</label>
                                            <input
                                                type="file"
                                                className={`form-control ${getEditValidationClass('work_order_file')}`}
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        setEditingProject({ ...editingProject, work_order_file: e.target.files[0] });
                                                    }
                                                }}
                                            />
                                            {getEditValidationError('work_order_file') && (
                                                <div className="invalid-feedback">{getEditValidationError('work_order_file')}</div>
                                            )}
                                            {editingProject.existing_work_order_file && (
                                                <small className="text-muted d-block mt-1">
                                                    Current file: {editingProject.existing_work_order_file.split('/').pop()}
                                                    <br />
                                                    <span className="text-info">Upload new file to replace</span>
                                                </small>
                                            )}
                                        </div>

                                        {/* Pre Invoice */}
                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingProject.pre_invoice_no || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, pre_invoice_no: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingProject.pre_invoice_date || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, pre_invoice_date: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Pre-Invoice Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingProject.pre_invoice_amount || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, pre_invoice_amount: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Pre-Invoice File</label>
                                            <input
                                                type="file"
                                                className={`form-control ${getEditValidationClass('pre_invoice_file')}`}
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        setEditingProject({ ...editingProject, pre_invoice_file: e.target.files[0] });
                                                    }
                                                }}
                                            />
                                            {getEditValidationError('pre_invoice_file') && (
                                                <div className="invalid-feedback">{getEditValidationError('pre_invoice_file')}</div>
                                            )}
                                            {editingProject.existing_pre_invoice_file && (
                                                <small className="text-muted d-block mt-1">
                                                    Current file: {editingProject.existing_pre_invoice_file.split('/').pop()}
                                                    <br />
                                                    <span className="text-info">Upload new file to replace</span>
                                                </small>
                                            )}
                                        </div>

                                        {/* Dates */}
                                        <div className="col-md-4">
                                            <label className="form-label">Start Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingProject.start_date || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, start_date: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Expected End Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingProject.expected_end_date || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, expected_end_date: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Actual End Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingProject.actual_end_date || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, actual_end_date: e.target.value })}
                                            />
                                        </div>

                                        {/* Status and Progress */}
                                        <div className="col-md-6">
                                            <label className="form-label">Status</label>
                                            <select
                                                className="form-select"
                                                value={editingProject.status || 'Pending'}
                                                onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
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
                                                onChange={(e) => setEditingProject({ ...editingProject, work_completed_percentage: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Work Completed Details</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingProject.work_completed_details || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, work_completed_details: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingProject.remarks || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, remarks: e.target.value })}
                                            />
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
                                            setEditErrors({});
                                            dispatch(clearErrors());
                                        }}
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? (
                                            <><span className="spinner-border spinner-border-sm me-2"></span>Updating...</>
                                        ) : (
                                            'Update Project'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================================
                PROJECT DETAILS MODAL WITH INCOMES AND EXPENSES
            ============================================================ */}
            {showDetailModal && selectedProject && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" style={{ maxHeight: '90vh' }}>
                        <div className="modal-content" style={{ maxHeight: '90vh' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="bi bi-folder2-open me-2"></i>
                                    {selectedProject.project_name} - Financial Details
                                </h5>
                                <button 
                                    type="button" 
                                    className="btn-close"
                                    onClick={() => {
                                        setShowDetailModal(false);
                                        setSelectedProject(null);
                                    }}
                                ></button>
                            </div>
                            <div className="modal-body" style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 130px)' }}>
                                {/* Summary Cards */}
                                <div className="row g-3 mb-4">
                                    <div className="col-md-3">
                                        <div className="card bg-primary text-white">
                                            <div className="card-body">
                                                <h6 className="card-title">Total Budget</h6>
                                                <h4>{formatCurrency(selectedProject.total_amount)}</h4>
                                                <small>Project Budget</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card bg-success text-white">
                                            <div className="card-body">
                                                <h6 className="card-title">Total Income</h6>
                                                <h4>{formatCurrency(selectedProject.total_income)}</h4>
                                                <small>All Incomes</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card bg-danger text-white">
                                            <div className="card-body">
                                                <h6 className="card-title">Total Expense</h6>
                                                <h4>{formatCurrency(selectedProject.total_expense)}</h4>
                                                <small>All Expenses</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card bg-info text-white">
                                            <div className="card-body">
                                                <h6 className="card-title">Balance</h6>
                                                <h4>{formatCurrency(selectedProject.balance_amount)}</h4>
                                                <small>Remaining Balance</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <button 
                                            className={`nav-link ${activeTab === 'incomes' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('incomes')}
                                        >
                                            <i className="bi bi-arrow-down-circle text-success me-1"></i> 
                                            Incomes ({selectedProject.incomes?.length || 0})
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button 
                                            className={`nav-link ${activeTab === 'expenses' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('expenses')}
                                        >
                                            <i className="bi bi-arrow-up-circle text-danger me-1"></i> 
                                            Expenses ({selectedProject.expenses?.length || 0})
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content mt-3">
                                    {activeTab === 'incomes' ? (
                                        <ProjectIncomes 
                                            projectId={selectedProject.id} 
                                            onClose={() => setShowDetailModal(false)}
                                        />
                                    ) : (
                                        <ProjectExpenses projectId={selectedProject.id} />
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setShowDetailModal(false);
                                        setSelectedProject(null);
                                    }}
                                >
                                    Close
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setShowDetailModal(false);
                                        setSelectedProject(null);
                                        dispatch(getProjects());
                                    }}
                                >
                                    Refresh Data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS */}
            <style>{`
                .hover-shadow { transition: all 0.3s ease; }
                .hover-shadow:hover { transform: translateY(-4px); box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important; }
                .transition-all { transition: all 0.3s ease; }
                .card { border-radius: 10px; overflow: hidden; }
                .progress { border-radius: 10px; }
                .modal.show { background-color: rgba(0,0,0,0.5); }
                .modal-dialog-scrollable .modal-body { overflow-y: auto; }
                .nav-tabs .nav-link.active {
                    font-weight: 600;
                    border-bottom: 3px solid #0d6efd;
                }
                .card { transition: all 0.3s ease; }
                .card:hover { transform: translateY(-2px); }
            `}</style>
        </div>
    );
};

export default Project;