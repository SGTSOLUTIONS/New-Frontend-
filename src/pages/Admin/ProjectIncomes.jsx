import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProjectIncomes,
    createProjectIncome,
    updateProjectIncome,
    deleteProjectIncome,
    clearIncomeErrors,
    clearIncomeSuccess
} from '../../features/projectIncomeSlice';

const ProjectIncomes = ({ projectId, onClose }) => {
    const dispatch = useDispatch();
    const { incomes, loading, errors, success, totalIncome } = useSelector(state => state.projectIncome);

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingIncome, setEditingIncome] = useState(null);
    const [formData, setFormData] = useState({
        income_title: '',
        description: '',
        amount: '',
        income_date: '',
        invoice_no: '',
        invoice_date: '',
        invoice_file: null,
        payment_status: 'pending',
        payment_date: '',
        payment_reference: '',
        payment_mode: '',
        received_from: '',
        remarks: ''
    });

    useEffect(() => {
        if (projectId) {
            dispatch(getProjectIncomes(projectId));
        }
    }, [projectId, dispatch]);

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;
        if (files && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData({
            income_title: '',
            description: '',
            amount: '',
            income_date: '',
            invoice_no: '',
            invoice_date: '',
            invoice_file: null,
            payment_status: 'pending',
            payment_date: '',
            payment_reference: '',
            payment_mode: '',
            received_from: '',
            remarks: ''
        });
        dispatch(clearIncomeErrors());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitData = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== undefined && formData[key] !== '') {
                submitData.append(key, formData[key]);
            }
        });

        try {
            if (editingIncome) {
                await dispatch(updateProjectIncome({
                    projectId,
                    incomeId: editingIncome.id,
                    formData: submitData
                })).unwrap();
                alert('Income updated successfully!');
            } else {
                await dispatch(createProjectIncome({
                    projectId,
                    formData: submitData
                })).unwrap();
                alert('Income added successfully!');
            }
            resetForm();
            setShowAddModal(false);
            setEditingIncome(null);
            dispatch(getProjectIncomes(projectId));
        } catch (error) {
            console.error('Error:', error);
            alert(error?.message || 'Operation failed');
        }
    };

    const handleDelete = async (incomeId) => {
        if (!window.confirm('Are you sure you want to delete this income?')) return;
        try {
            await dispatch(deleteProjectIncome({ projectId, incomeId })).unwrap();
            alert('Income deleted successfully!');
            dispatch(getProjectIncomes(projectId));
        } catch (error) {
            alert(error?.message || 'Delete failed');
        }
    };

    const handleEdit = (income) => {
        setEditingIncome(income);
        setFormData({
            income_title: income.income_title || '',
            description: income.description || '',
            amount: income.amount || '',
            income_date: income.income_date || '',
            invoice_no: income.invoice_no || '',
            invoice_date: income.invoice_date || '',
            invoice_file: null,
            payment_status: income.payment_status || 'pending',
            payment_date: income.payment_date || '',
            payment_reference: income.payment_reference || '',
            payment_mode: income.payment_mode || '',
            received_from: income.received_from || '',
            remarks: income.remarks || ''
        });
        setShowAddModal(true);
    };

    const formatCurrency = (amount) => {
        if (!amount) return '₹0.00';
        return `₹${Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    };

    const formatDate = (date) => {
        if (!date) return 'N/A';
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getStatusBadge = (status) => {
        const colors = {
            'pending': 'bg-warning',
            'paid': 'bg-success',
            'partial': 'bg-info',
            'overdue': 'bg-danger'
        };
        return colors[status] || 'bg-secondary';
    };

    return (
        <div className="project-incomes">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Incomes</h5>
                <div>
                    <span className="badge bg-success me-2">
                        Total: {formatCurrency(totalIncome)}
                    </span>
                    <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                            resetForm();
                            setEditingIncome(null);
                            setShowAddModal(true);
                        }}
                    >
                        + Add Income
                    </button>
                </div>
            </div>

            {loading && <div className="text-center py-3">Loading...</div>}

            {incomes && incomes.length > 0 ? (
                <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table className="table table-hover table-sm">
                        <thead style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Invoice</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomes.map(income => (
                                <tr key={income.id}>
                                    <td>
                                        <div className="fw-bold">{income.income_title}</div>
                                        <small className="text-muted">{income.received_from || 'N/A'}</small>
                                    </td>
                                    <td className="fw-bold text-success">
                                        {formatCurrency(income.amount)}
                                    </td>
                                    <td>{formatDate(income.income_date)}</td>
                                    <td>
                                        {income.invoice_no && (
                                            <div>
                                                <span className="badge bg-info">{income.invoice_no}</span>
                                                {income.invoice_file && (
                                                    <a 
                                                        href={`/storage/${income.invoice_file}`} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="ms-1 text-decoration-none"
                                                    >
                                                        <i className="bi bi-file-earmark-pdf"></i>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        <span className={`badge ${getStatusBadge(income.payment_status)}`}>
                                            {income.payment_status || 'pending'}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-outline-primary me-1"
                                            onClick={() => handleEdit(income)}
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDelete(income.id)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-3 text-muted">
                    No incomes recorded yet
                </div>
            )}

            {/* Add/Edit Modal - FIXED SCROLLING */}
            {showAddModal && (
                <div 
                    className="modal show d-block" 
                    style={{ 
                        backgroundColor: 'rgba(0,0,0,0.5)', 
                        zIndex: 1050,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'auto'
                    }}
                >
                    <div 
                        className="modal-dialog modal-dialog-scrollable" 
                        style={{ 
                            margin: '1.75rem auto',
                            maxWidth: '800px',
                            maxHeight: 'calc(100vh - 3.5rem)'
                        }}
                    >
                        <div className="modal-content" style={{ maxHeight: 'calc(100vh - 3.5rem)' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {editingIncome ? 'Edit Income' : 'Add New Income'}
                                </h5>
                                <button 
                                    type="button" 
                                    className="btn-close"
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setEditingIncome(null);
                                        resetForm();
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
                                <div className="modal-body" style={{ overflowY: 'auto', flex: '1 1 auto' }}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Income Title *</label>
                                            <input
                                                type="text"
                                                name="income_title"
                                                className="form-control"
                                                value={formData.income_title}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Amount *</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="amount"
                                                className="form-control"
                                                value={formData.amount}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Income Date</label>
                                            <input
                                                type="date"
                                                name="income_date"
                                                className="form-control"
                                                value={formData.income_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Received From</label>
                                            <input
                                                type="text"
                                                name="received_from"
                                                className="form-control"
                                                value={formData.received_from}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Invoice No</label>
                                            <input
                                                type="text"
                                                name="invoice_no"
                                                className="form-control"
                                                value={formData.invoice_no}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Invoice Date</label>
                                            <input
                                                type="date"
                                                name="invoice_date"
                                                className="form-control"
                                                value={formData.invoice_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice File</label>
                                            <input
                                                type="file"
                                                name="invoice_file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={handleChange}
                                            />
                                            {editingIncome?.invoice_file && (
                                                <small className="text-muted d-block mt-1">
                                                    Current: {editingIncome.invoice_file.split('/').pop()}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Payment Status</label>
                                            <select
                                                name="payment_status"
                                                className="form-select"
                                                value={formData.payment_status}
                                                onChange={handleChange}
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="paid">Paid</option>
                                                <option value="partial">Partial</option>
                                                <option value="overdue">Overdue</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Payment Date</label>
                                            <input
                                                type="date"
                                                name="payment_date"
                                                className="form-control"
                                                value={formData.payment_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Payment Mode</label>
                                            <input
                                                type="text"
                                                name="payment_mode"
                                                className="form-control"
                                                value={formData.payment_mode}
                                                onChange={handleChange}
                                                placeholder="Bank Transfer, Cash, Cheque, etc."
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Payment Reference</label>
                                            <input
                                                type="text"
                                                name="payment_reference"
                                                className="form-control"
                                                value={formData.payment_reference}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="2"
                                                value={formData.description}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="2"
                                                value={formData.remarks}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setShowAddModal(false);
                                            setEditingIncome(null);
                                            resetForm();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? 'Saving...' : editingIncome ? 'Update' : 'Add Income'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectIncomes;