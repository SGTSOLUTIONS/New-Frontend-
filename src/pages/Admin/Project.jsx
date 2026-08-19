import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, clearErrors, clearSuccess } from '../../features/projectSlice';

const Project = () => {
    const dispatch = useDispatch();
    
    // Get Redux state
    const { loading, success, errors, message } = useSelector((state) => state.project);

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
            // Close modal
            const modal = document.getElementById('exampleModalToggle');
            const modalInstance = window.bootstrap?.Modal?.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
            resetForm();
            
            // Show success toast/notification (optional)
            alert(message || 'Project created successfully!');
        }
    }, [success, message]);

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        // Handle file inputs
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
            return;
        }

        // Handle number inputs with validation
        if (type === 'number') {
            const numValue = parseFloat(value);
            if (name === 'work_completed_percentage') {
                if (numValue < 0 || numValue > 100) {
                    return; // Prevent invalid percentage values
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

        // Validation
        if (!formData.project_name.trim()) {
            alert('Project Name is required');
            return;
        }

        // Prepare FormData for API
        const submitData = new FormData();
        
        // Append all form fields
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== '') {
                // For file fields, append as Blob
                if (key === 'work_order_file' || key === 'pre_invoice_file') {
                    if (formData[key] instanceof File) {
                        submitData.append(key, formData[key]);
                    }
                } else {
                    submitData.append(key, String(formData[key]));
                }
            }
        });

        // Dispatch action
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

    return (
        <div className="project-page">
            {/* Add Project Button */}
            <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Add New Project'}
            </button>

            {/* Project Modal */}
            <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalToggleLabel"
                            >
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

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="modal-body">
                                {/* Error Display */}
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
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Basic Project Details
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">
                                                Project Code
                                            </label>
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
                                            <label className="form-label">
                                                Project Name <span className="text-danger">*</span>
                                            </label>
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
                                            <label className="form-label">
                                                Project Profile
                                            </label>
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
                                            <label className="form-label">
                                                Client Name
                                            </label>
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
                                            <label className="form-label">
                                                Department
                                            </label>
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
                                            <label className="form-label">
                                                Location
                                            </label>
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
                                            <label className="form-label">
                                                Description
                                            </label>
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
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Financial Details
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-3">
                                            <label className="form-label">
                                                Total Amount
                                            </label>
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
                                            <label className="form-label">
                                                Total Income
                                            </label>
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
                                            <label className="form-label">
                                                Total Expense
                                            </label>
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
                                            <label className="form-label">
                                                Balance Amount
                                            </label>
                                            <input
                                                type="text"
                                                name="balance_amount"
                                                value={formData.balance_amount}
                                                className="form-control"
                                                placeholder="0.00"
                                                readOnly
                                                style={{ backgroundColor: '#f8f9fa' }}
                                            />
                                            <small className="text-muted">
                                                Auto-calculated (Total - Expense)
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* Work Order */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Work Order Details
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">
                                                Work Order No
                                            </label>
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
                                            <label className="form-label">
                                                Work Order Date
                                            </label>
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
                                            <label className="form-label">
                                                Work Order Amount
                                            </label>
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
                                            <label className="form-label">
                                                Work Order File
                                            </label>
                                            <input
                                                type="file"
                                                name="work_order_file"
                                                onChange={handleChange}
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                disabled={loading}
                                            />
                                            <small className="text-muted">
                                                Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* Pre-Invoice Details */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Pre-Invoice Details
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">
                                                Pre-Invoice No
                                            </label>
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
                                            <label className="form-label">
                                                Pre-Invoice Date
                                            </label>
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
                                            <label className="form-label">
                                                Pre-Invoice Amount
                                            </label>
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
                                            <label className="form-label">
                                                Pre-Invoice File
                                            </label>
                                            <input
                                                type="file"
                                                name="pre_invoice_file"
                                                onChange={handleChange}
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                disabled={loading}
                                            />
                                            <small className="text-muted">
                                                Allowed: PDF, DOC, DOCX, JPG, JPEG, PNG
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Dates */}
                                <div className="mb-4">
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Project Dates
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">
                                                Start Date
                                            </label>
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
                                            <label className="form-label">
                                                Expected End Date
                                            </label>
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
                                            <label className="form-label">
                                                Actual End Date
                                            </label>
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
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Work Progress
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">
                                                Work Completed (%)
                                            </label>
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
                                            <label className="form-label">
                                                Work Completed Details
                                            </label>
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
                                    <h5 className="border-bottom pb-2 mb-3">
                                        Project Status
                                    </h5>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Status
                                            </label>
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
                                            <label className="form-label">
                                                Remarks
                                            </label>
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

                            {/* Footer */}
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
        </div>
    );
};

export default Project;