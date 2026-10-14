import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProjectExpenses,
    createProjectExpense,
    updateProjectExpense,
    deleteProjectExpense,
    clearExpenseErrors
} from '../../features/projectExpenseSlice';

const ProjectExpenses = ({ projectId }) => {
    const dispatch = useDispatch();
    const { expenses, loading, errors, totalExpense } = useSelector(state => state.projectExpense);

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingExpense, setEditingExpense] = useState(null);
    const [formData, setFormData] = useState({
        expense_title: '',
        description: '',
        amount: '',
        expense_date: '',
        category: '',
        sub_category: '',
        vendor_name: '',
        vendor_contact: '',
        bill_no: '',
        bill_date: '',
        bill_file: null,
        payment_status: 'pending',
        payment_date: '',
        payment_reference: '',
        payment_mode: '',
        remarks: ''
    });

    // Default categories - hardcoded
    const defaultCategories = [
        'Material',
        'Labor', 
        'Equipment',
        'Travel',
        'Subcontract',
        'Utilities',
        'Insurance',
        'Taxes',
        'Maintenance',
        'Office Expenses',
        'Software',
        'Training',
        'Consultancy',
        'Rent',
        'Communication',
        'Transport',
        'Other'
    ];

    useEffect(() => {
        if (projectId) {
            dispatch(getProjectExpenses(projectId));
        }
    }, [projectId, dispatch]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData({
            expense_title: '',
            description: '',
            amount: '',
            expense_date: '',
            category: '',
            sub_category: '',
            vendor_name: '',
            vendor_contact: '',
            bill_no: '',
            bill_date: '',
            bill_file: null,
            payment_status: 'pending',
            payment_date: '',
            payment_reference: '',
            payment_mode: '',
            remarks: ''
        });
        dispatch(clearExpenseErrors());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.expense_title || !formData.expense_title.trim()) {
            alert('Expense Title is required');
            return;
        }

        if (!formData.amount || parseFloat(formData.amount) <= 0) {
            alert('Amount is required and must be greater than 0');
            return;
        }

        // Create FormData and explicitly append all fields
        const submitData = new FormData();
        
        // CRITICAL: Append required fields first with proper values
        submitData.append('expense_title', formData.expense_title.trim());
        submitData.append('amount', formData.amount.toString());
        
        // Append all other fields
        submitData.append('description', formData.description || '');
        submitData.append('expense_date', formData.expense_date || '');
        submitData.append('category', formData.category || '');
        submitData.append('sub_category', formData.sub_category || '');
        submitData.append('vendor_name', formData.vendor_name || '');
        submitData.append('vendor_contact', formData.vendor_contact || '');
        submitData.append('bill_no', formData.bill_no || '');
        submitData.append('bill_date', formData.bill_date || '');
        submitData.append('payment_status', formData.payment_status || 'pending');
        submitData.append('payment_date', formData.payment_date || '');
        submitData.append('payment_reference', formData.payment_reference || '');
        submitData.append('payment_mode', formData.payment_mode || '');
        submitData.append('remarks', formData.remarks || '');

        // Append file if exists
        if (formData.bill_file instanceof File) {
            submitData.append('bill_file', formData.bill_file);
        }

        // Log FormData contents for debugging
        console.log('FormData entries:');
        for (let pair of submitData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        try {
            if (editingExpense) {
                await dispatch(updateProjectExpense({
                    projectId,
                    expenseId: editingExpense.id,
                    formData: submitData
                })).unwrap();
                alert('Expense updated successfully!');
            } else {
                await dispatch(createProjectExpense({
                    projectId,
                    formData: submitData
                })).unwrap();
                alert('Expense added successfully!');
            }
            resetForm();
            setShowAddModal(false);
            setEditingExpense(null);
            dispatch(getProjectExpenses(projectId));
        } catch (error) {
            console.error('Error:', error);
            if (error?.errors) {
                const errorMessages = Object.values(error.errors).flat().join('\n');
                alert(errorMessages);
            } else {
                alert(error?.message || 'Operation failed');
            }
        }
    };

    const handleDelete = async (expenseId) => {
        if (!window.confirm('Are you sure you want to delete this expense?')) return;
        try {
            await dispatch(deleteProjectExpense({ projectId, expenseId })).unwrap();
            alert('Expense deleted successfully!');
            dispatch(getProjectExpenses(projectId));
        } catch (error) {
            alert(error?.message || 'Delete failed');
        }
    };

    const handleEdit = (expense) => {
        setEditingExpense(expense);
        setFormData({
            expense_title: expense.expense_title || '',
            description: expense.description || '',
            amount: expense.amount || '',
            expense_date: expense.expense_date || '',
            category: expense.category || '',
            sub_category: expense.sub_category || '',
            vendor_name: expense.vendor_name || '',
            vendor_contact: expense.vendor_contact || '',
            bill_no: expense.bill_no || '',
            bill_date: expense.bill_date || '',
            bill_file: null,
            payment_status: expense.payment_status || 'pending',
            payment_date: expense.payment_date || '',
            payment_reference: expense.payment_reference || '',
            payment_mode: expense.payment_mode || '',
            remarks: expense.remarks || ''
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
            'partial': 'bg-info'
        };
        return colors[status] || 'bg-secondary';
    };

    const getCategoryBadge = (category) => {
        const colors = {
            'Material': 'bg-primary',
            'Labor': 'bg-success',
            'Equipment': 'bg-warning',
            'Travel': 'bg-info',
            'Subcontract': 'bg-danger',
            'Utilities': 'bg-secondary',
            'Insurance': 'bg-dark',
            'Taxes': 'bg-danger',
            'Maintenance': 'bg-warning',
            'Office Expenses': 'bg-info',
            'Software': 'bg-primary',
            'Training': 'bg-success',
            'Consultancy': 'bg-info',
            'Rent': 'bg-warning',
            'Communication': 'bg-success',
            'Transport': 'bg-primary',
            'Other': 'bg-secondary'
        };
        return colors[category] || 'bg-secondary';
    };

    return (
        <div className="project-expenses">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Expenses</h5>
                <div>
                    <span className="badge bg-danger me-2">
                        Total: {formatCurrency(totalExpense)}
                    </span>
                    <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                            resetForm();
                            setEditingExpense(null);
                            setShowAddModal(true);
                        }}
                    >
                        + Add Expense
                    </button>
                </div>
            </div>

            {loading && <div className="text-center py-3">Loading...</div>}

            {errors && Object.keys(errors).length > 0 && (
                <div className="alert alert-danger">
                    <h6>Please fix the following errors:</h6>
                    <ul className="mb-0">
                        {Object.entries(errors).map(([field, messages]) => (
                            <li key={field}>
                                <strong>{field}:</strong> {Array.isArray(messages) ? messages.join(', ') : messages}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {expenses && expenses.length > 0 ? (
                <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table className="table table-hover table-sm">
                        <thead style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Vendor</th>
                                <th>Bill</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(expense => (
                                <tr key={expense.id}>
                                    <td>
                                        <div className="fw-bold">{expense.expense_title}</div>
                                        <small className="text-muted">{expense.description || ''}</small>
                                    </td>
                                    <td>
                                        {expense.category && (
                                            <span className={`badge ${getCategoryBadge(expense.category)}`}>
                                                {expense.category}
                                            </span>
                                        )}
                                        {expense.sub_category && (
                                            <small className="text-muted d-block">{expense.sub_category}</small>
                                        )}
                                    </td>
                                    <td className="fw-bold text-danger">
                                        {formatCurrency(expense.amount)}
                                    </td>
                                    <td>{formatDate(expense.expense_date)}</td>
                                    <td>
                                        {expense.vendor_name && (
                                            <div>
                                                <div>{expense.vendor_name}</div>
                                                <small className="text-muted">{expense.vendor_contact || ''}</small>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {expense.bill_no && (
                                            <div>
                                                <span className="badge bg-info">{expense.bill_no}</span>
                                                {expense.bill_file && (
                                                    <a 
                                                        href={`/storage/${expense.bill_file}`} 
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
                                        <span className={`badge ${getStatusBadge(expense.payment_status)}`}>
                                            {expense.payment_status || 'pending'}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-outline-primary me-1"
                                            onClick={() => handleEdit(expense)}
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDelete(expense.id)}
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
                    No expenses recorded yet
                </div>
            )}

            {/* Add/Edit Modal */}
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
                                    {editingExpense ? 'Edit Expense' : 'Add New Expense'}
                                </h5>
                                <button 
                                    type="button" 
                                    className="btn-close"
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setEditingExpense(null);
                                        resetForm();
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
                                <div className="modal-body" style={{ overflowY: 'auto', flex: '1 1 auto' }}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Expense Title <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                name="expense_title"
                                                className="form-control"
                                                value={formData.expense_title}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter expense title"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Amount <span className="text-danger">*</span></label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="amount"
                                                className="form-control"
                                                value={formData.amount}
                                                onChange={handleChange}
                                                required
                                                placeholder="0.00"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Expense Date</label>
                                            <input
                                                type="date"
                                                name="expense_date"
                                                className="form-control"
                                                value={formData.expense_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Category</label>
                                            <select
                                                name="category"
                                                className="form-select"
                                                value={formData.category}
                                                onChange={handleChange}
                                            >
                                                <option value="">-- Select Category --</option>
                                                {defaultCategories.map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Sub Category</label>
                                            <input
                                                type="text"
                                                name="sub_category"
                                                className="form-control"
                                                value={formData.sub_category}
                                                onChange={handleChange}
                                                placeholder="Enter sub category"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Vendor Name</label>
                                            <input
                                                type="text"
                                                name="vendor_name"
                                                className="form-control"
                                                value={formData.vendor_name}
                                                onChange={handleChange}
                                                placeholder="Enter vendor name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Vendor Contact</label>
                                            <input
                                                type="text"
                                                name="vendor_contact"
                                                className="form-control"
                                                value={formData.vendor_contact}
                                                onChange={handleChange}
                                                placeholder="Enter vendor contact"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Bill No</label>
                                            <input
                                                type="text"
                                                name="bill_no"
                                                className="form-control"
                                                value={formData.bill_no}
                                                onChange={handleChange}
                                                placeholder="Enter bill number"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Bill Date</label>
                                            <input
                                                type="date"
                                                name="bill_date"
                                                className="form-control"
                                                value={formData.bill_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Bill File</label>
                                            <input
                                                type="file"
                                                name="bill_file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={handleChange}
                                            />
                                            {editingExpense?.bill_file && (
                                                <small className="text-muted d-block mt-1">
                                                    Current: {editingExpense.bill_file.split('/').pop()}
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
                                                placeholder="Enter payment reference"
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
                                                placeholder="Enter description"
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
                                                placeholder="Enter remarks"
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
                                            setEditingExpense(null);
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
                                        {loading ? 'Saving...' : editingExpense ? 'Update' : 'Add Expense'}
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

export default ProjectExpenses;