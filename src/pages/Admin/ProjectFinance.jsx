// components/ProjectFinance.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createInvoice,
    getProjectInvoices,
    updateInvoice,
    deleteInvoice,
    createExpense,
    getProjectExpenses,
    updateExpense,
    deleteExpense,
    createPayment,
    getProjectPayments,
    deletePayment,
    clearErrors,
    clearSuccess,
    clearAll
} from '../../features/projectFinanceSlice';

const ProjectFinance = ({ projectId, projectName }) => {
    const dispatch = useDispatch();
    const { invoices, expenses, payments, loading, errors, success } = useSelector(
        (state) => state.projectFinance
    );

    // ============================================================
    // STATE
    // ============================================================
    const [activeTab, setActiveTab] = useState('invoices');
    const [showInvoiceModal, setShowInvoiceModal] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [editingInvoice, setEditingInvoice] = useState(null);
    const [editingExpense, setEditingExpense] = useState(null);
    const [editErrors, setEditErrors] = useState({});

    // ============================================================
    // INITIAL FORM DATA
    // ============================================================
    const initialInvoiceData = {
        project_id: projectId,
        invoice_no: '',
        invoice_date: '',
        invoice_amount: '',
        received_amount: '',
        pending_amount: '',
        invoice_file: null,
        payment_status: 'unpaid',
        payment_date: '',
        payment_mode: '',
        payment_reference: '',
        bank_name: '',
        cheque_no: '',
        description: '',
        remarks: '',
        is_active: true
    };

    const initialExpenseData = {
        project_id: projectId,
        expense_category: '',
        expense_date: '',
        expense_amount: '',
        expense_type: 'direct',
        vendor_name: '',
        bill_no: '',
        bill_date: '',
        bill_file: null,
        payment_status: 'unpaid',
        payment_date: '',
        payment_mode: '',
        payment_reference: '',
        description: '',
        remarks: '',
        is_active: true
    };

    const initialPaymentData = {
        project_id: projectId,
        project_invoice_id: '',
        amount: '',
        payment_date: '',
        payment_type: 'income',
        payment_mode: 'cash',
        reference_no: '',
        bank_name: '',
        cheque_no: '',
        description: '',
        remarks: ''
    };

    const [invoiceForm, setInvoiceForm] = useState(initialInvoiceData);
    const [expenseForm, setExpenseForm] = useState(initialExpenseData);
    const [paymentForm, setPaymentForm] = useState(initialPaymentData);

    // ============================================================
    // FETCH DATA
    // ============================================================
    useEffect(() => {
        if (projectId) {
            dispatch(getProjectInvoices(projectId));
            dispatch(getProjectExpenses(projectId));
            dispatch(getProjectPayments(projectId));
        }
        return () => {
            dispatch(clearAll());
        };
    }, [dispatch, projectId]);

    // ============================================================
    // AUTO-CALCULATE PENDING AMOUNT
    // ============================================================
    useEffect(() => {
        const invoiceAmount = parseFloat(invoiceForm.invoice_amount) || 0;
        const receivedAmount = parseFloat(invoiceForm.received_amount) || 0;
        const pending = invoiceAmount - receivedAmount;
        setInvoiceForm(prev => ({
            ...prev,
            pending_amount: pending >= 0 ? pending.toFixed(2) : '0.00'
        }));
    }, [invoiceForm.invoice_amount, invoiceForm.received_amount]);

    // ============================================================
    // INVOICE HANDLERS
    // ============================================================
    const handleInvoiceChange = (e) => {
        const { name, value, files, type } = e.target;
        if (files && files.length > 0) {
            setInvoiceForm(prev => ({ ...prev, [name]: files[0] }));
            return;
        }
        setInvoiceForm(prev => ({ ...prev, [name]: value }));
    };

    const handleInvoiceSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(invoiceForm).forEach(key => {
            if (key === 'invoice_file' && invoiceForm[key] instanceof File) {
                formData.append(key, invoiceForm[key]);
            } else if (key !== 'invoice_file' && invoiceForm[key] !== null && invoiceForm[key] !== '') {
                formData.append(key, String(invoiceForm[key]));
            }
        });

        try {
            await dispatch(createInvoice(formData)).unwrap();
            alert('Invoice created successfully!');
            setInvoiceForm(initialInvoiceData);
            setShowInvoiceModal(false);
            dispatch(getProjectInvoices(projectId));
        } catch (error) {
            console.error('Create Invoice Error:', error);
            alert(error?.message || 'Invoice creation failed');
        }
    };

    const handleEditInvoice = (invoice) => {
        setEditingInvoice({
            ...invoice,
            invoice_date: formatInputDate(invoice.invoice_date),
            payment_date: formatInputDate(invoice.payment_date)
        });
        setEditErrors({});
    };

    const handleUpdateInvoice = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(editingInvoice).forEach(key => {
            if (key === 'invoice_file' && editingInvoice[key] instanceof File) {
                formData.append(key, editingInvoice[key]);
            } else if (key !== 'invoice_file' && key !== 'existing_file' && editingInvoice[key] !== null && editingInvoice[key] !== '') {
                formData.append(key, String(editingInvoice[key]));
            }
        });

        try {
            await dispatch(updateInvoice({
                id: editingInvoice.id,
                invoiceData: formData
            })).unwrap();
            alert('Invoice updated successfully!');
            setEditingInvoice(null);
            setEditErrors({});
            dispatch(getProjectInvoices(projectId));
        } catch (error) {
            console.error('Update Invoice Error:', error);
            if (error?.errors) {
                setEditErrors(error.errors);
            }
            alert(error?.message || 'Failed to update invoice');
        }
    };

    const handleDeleteInvoice = async (id) => {
        if (!window.confirm('Are you sure you want to delete this invoice?')) return;
        try {
            await dispatch(deleteInvoice(id)).unwrap();
            alert('Invoice deleted successfully!');
            dispatch(getProjectInvoices(projectId));
        } catch (error) {
            alert(error?.message || 'Unable to delete invoice');
        }
    };

    // ============================================================
    // EXPENSE HANDLERS
    // ============================================================
    const handleExpenseChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            setExpenseForm(prev => ({ ...prev, [name]: files[0] }));
            return;
        }
        setExpenseForm(prev => ({ ...prev, [name]: value }));
    };

    const handleExpenseSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(expenseForm).forEach(key => {
            if (key === 'bill_file' && expenseForm[key] instanceof File) {
                formData.append(key, expenseForm[key]);
            } else if (key !== 'bill_file' && expenseForm[key] !== null && expenseForm[key] !== '') {
                formData.append(key, String(expenseForm[key]));
            }
        });

        try {
            await dispatch(createExpense(formData)).unwrap();
            alert('Expense created successfully!');
            setExpenseForm(initialExpenseData);
            setShowExpenseModal(false);
            dispatch(getProjectExpenses(projectId));
        } catch (error) {
            console.error('Create Expense Error:', error);
            alert(error?.message || 'Expense creation failed');
        }
    };

    const handleEditExpense = (expense) => {
        setEditingExpense({
            ...expense,
            expense_date: formatInputDate(expense.expense_date),
            bill_date: formatInputDate(expense.bill_date),
            payment_date: formatInputDate(expense.payment_date)
        });
        setEditErrors({});
    };

    const handleUpdateExpense = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(editingExpense).forEach(key => {
            if (key === 'bill_file' && editingExpense[key] instanceof File) {
                formData.append(key, editingExpense[key]);
            } else if (key !== 'bill_file' && key !== 'existing_file' && editingExpense[key] !== null && editingExpense[key] !== '') {
                formData.append(key, String(editingExpense[key]));
            }
        });

        try {
            await dispatch(updateExpense({
                id: editingExpense.id,
                expenseData: formData
            })).unwrap();
            alert('Expense updated successfully!');
            setEditingExpense(null);
            setEditErrors({});
            dispatch(getProjectExpenses(projectId));
        } catch (error) {
            console.error('Update Expense Error:', error);
            if (error?.errors) {
                setEditErrors(error.errors);
            }
            alert(error?.message || 'Failed to update expense');
        }
    };

    const handleDeleteExpense = async (id) => {
        if (!window.confirm('Are you sure you want to delete this expense?')) return;
        try {
            await dispatch(deleteExpense(id)).unwrap();
            alert('Expense deleted successfully!');
            dispatch(getProjectExpenses(projectId));
        } catch (error) {
            alert(error?.message || 'Unable to delete expense');
        }
    };

    // ============================================================
    // PAYMENT HANDLERS
    // ============================================================
    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentForm(prev => ({ ...prev, [name]: value }));
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createPayment(paymentForm)).unwrap();
            alert('Payment recorded successfully!');
            setPaymentForm(initialPaymentData);
            setShowPaymentModal(false);
            dispatch(getProjectPayments(projectId));
            dispatch(getProjectInvoices(projectId));
        } catch (error) {
            console.error('Create Payment Error:', error);
            alert(error?.message || 'Payment recording failed');
        }
    };

    const handleDeletePayment = async (id) => {
        if (!window.confirm('Are you sure you want to delete this payment?')) return;
        try {
            await dispatch(deletePayment(id)).unwrap();
            alert('Payment deleted successfully!');
            dispatch(getProjectPayments(projectId));
        } catch (error) {
            alert(error?.message || 'Unable to delete payment');
        }
    };

    // ============================================================
    // UTILITY FUNCTIONS
    // ============================================================
    const formatInputDate = (date) => {
        if (!date) return '';
        return String(date).substring(0, 10);
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
        if (amount === null || amount === undefined || amount === '') return '₹0.00';
        const number = parseFloat(amount);
        if (isNaN(number)) return '₹0.00';
        return `₹${number.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };

    const getStatusBadge = (status) => {
        const colors = {
            'paid': 'success',
            'partial': 'warning',
            'unpaid': 'danger'
        };
        return colors[status] || 'secondary';
    };

    const getPaymentTypeBadge = (type) => {
        return type === 'income' ? 'success' : 'danger';
    };

    // ============================================================
    // RENDER FUNCTIONS
    // ============================================================
    const renderInvoiceCard = (invoice) => (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h6 className="card-title mb-1">{invoice.invoice_no}</h6>
                        <small className="text-muted">Date: {formatDate(invoice.invoice_date)}</small>
                    </div>
                    <span className={`badge bg-${getStatusBadge(invoice.payment_status)}`}>
                        {invoice.payment_status?.toUpperCase() || 'UNPAID'}
                    </span>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <small className="text-muted d-block">Amount</small>
                        <strong>{formatCurrency(invoice.invoice_amount)}</strong>
                    </div>
                    <div className="col-4">
                        <small className="text-muted d-block">Received</small>
                        <strong>{formatCurrency(invoice.received_amount)}</strong>
                    </div>
                    <div className="col-4">
                        <small className="text-muted d-block">Pending</small>
                        <strong className="text-danger">{formatCurrency(invoice.pending_amount)}</strong>
                    </div>
                </div>
                {invoice.description && (
                    <p className="mb-2 mt-2"><small>{invoice.description}</small></p>
                )}
                <div className="mt-2">
                    <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditInvoice(invoice)}
                    >
                        <i className="bi bi-pencil"></i> Edit
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteInvoice(invoice.id)}
                    >
                        <i className="bi bi-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    );

    const renderExpenseCard = (expense) => (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h6 className="card-title mb-1">{expense.expense_category}</h6>
                        <small className="text-muted">Date: {formatDate(expense.expense_date)}</small>
                    </div>
                    <span className={`badge bg-${getStatusBadge(expense.payment_status)}`}>
                        {expense.payment_status?.toUpperCase() || 'UNPAID'}
                    </span>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <small className="text-muted d-block">Amount</small>
                        <strong className="text-danger">{formatCurrency(expense.expense_amount)}</strong>
                    </div>
                    <div className="col-6">
                        <small className="text-muted d-block">Vendor</small>
                        <strong>{expense.vendor_name || 'N/A'}</strong>
                    </div>
                </div>
                {expense.description && (
                    <p className="mb-2 mt-2"><small>{expense.description}</small></p>
                )}
                <div className="mt-2">
                    <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditExpense(expense)}
                    >
                        <i className="bi bi-pencil"></i> Edit
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteExpense(expense.id)}
                    >
                        <i className="bi bi-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    );

    const renderPaymentCard = (payment) => (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h6 className="card-title mb-1">
                            {payment.payment_type === 'income' ? '💰 Income' : '💳 Expense'}
                        </h6>
                        <small className="text-muted">Date: {formatDate(payment.payment_date)}</small>
                    </div>
                    <span className={`badge bg-${getPaymentTypeBadge(payment.payment_type)}`}>
                        {payment.payment_mode?.toUpperCase() || 'CASH'}
                    </span>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <small className="text-muted d-block">Amount</small>
                        <strong className={payment.payment_type === 'income' ? 'text-success' : 'text-danger'}>
                            {formatCurrency(payment.amount)}
                        </strong>
                    </div>
                    <div className="col-6">
                        <small className="text-muted d-block">Reference</small>
                        <strong>{payment.reference_no || 'N/A'}</strong>
                    </div>
                </div>
                {payment.description && (
                    <p className="mb-2 mt-2"><small>{payment.description}</small></p>
                )}
                <div className="mt-2">
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeletePayment(payment.id)}
                    >
                        <i className="bi bi-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    );

    // ============================================================
    // MAIN RENDER
    // ============================================================
    return (
        <div className="project-finance">
            <div className="container-fluid">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h4 className="mb-0">Financial Management</h4>
                        <small className="text-muted">{projectName}</small>
                    </div>
                    <div>
                        {activeTab === 'invoices' && (
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowInvoiceModal(true)}
                                disabled={loading}
                            >
                                <i className="bi bi-plus-circle"></i> Add Invoice
                            </button>
                        )}
                        {activeTab === 'expenses' && (
                            <button
                                className="btn btn-danger"
                                onClick={() => setShowExpenseModal(true)}
                                disabled={loading}
                            >
                                <i className="bi bi-plus-circle"></i> Add Expense
                            </button>
                        )}
                        {activeTab === 'payments' && (
                            <button
                                className="btn btn-success"
                                onClick={() => setShowPaymentModal(true)}
                                disabled={loading}
                            >
                                <i className="bi bi-plus-circle"></i> Add Payment
                            </button>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <ul className="nav nav-tabs mb-4">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'invoices' ? 'active' : ''}`}
                            onClick={() => setActiveTab('invoices')}
                        >
                            <i className="bi bi-receipt"></i> Invoices ({invoices.length})
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'expenses' ? 'active' : ''}`}
                            onClick={() => setActiveTab('expenses')}
                        >
                            <i className="bi bi-wallet2"></i> Expenses ({expenses.length})
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'payments' ? 'active' : ''}`}
                            onClick={() => setActiveTab('payments')}
                        >
                            <i className="bi bi-credit-card"></i> Payments ({payments.length})
                        </button>
                    </li>
                </ul>

                {/* Loading */}
                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {/* Content */}
                {!loading && (
                    <>
                        {activeTab === 'invoices' && (
                            <div>
                                {invoices.length === 0 ? (
                                    <div className="text-center py-5">
                                        <p className="text-muted">No invoices found. Add your first invoice!</p>
                                    </div>
                                ) : (
                                    <div className="row">
                                        {invoices.map(invoice => (
                                            <div key={invoice.id} className="col-md-6 col-lg-4">
                                                {renderInvoiceCard(invoice)}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'expenses' && (
                            <div>
                                {expenses.length === 0 ? (
                                    <div className="text-center py-5">
                                        <p className="text-muted">No expenses found. Add your first expense!</p>
                                    </div>
                                ) : (
                                    <div className="row">
                                        {expenses.map(expense => (
                                            <div key={expense.id} className="col-md-6 col-lg-4">
                                                {renderExpenseCard(expense)}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'payments' && (
                            <div>
                                {payments.length === 0 ? (
                                    <div className="text-center py-5">
                                        <p className="text-muted">No payments recorded. Add your first payment!</p>
                                    </div>
                                ) : (
                                    <div className="row">
                                        {payments.map(payment => (
                                            <div key={payment.id} className="col-md-6 col-lg-4">
                                                {renderPaymentCard(payment)}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* ============================================================
                INVOICE MODAL
            ============================================================ */}
            {showInvoiceModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Invoice</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowInvoiceModal(false);
                                        setInvoiceForm(initialInvoiceData);
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleInvoiceSubmit} encType="multipart/form-data">
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Invoice No <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                name="invoice_no"
                                                className="form-control"
                                                value={invoiceForm.invoice_no}
                                                onChange={handleInvoiceChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Invoice Date <span className="text-danger">*</span></label>
                                            <input
                                                type="date"
                                                name="invoice_date"
                                                className="form-control"
                                                value={invoiceForm.invoice_date}
                                                onChange={handleInvoiceChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Invoice Amount <span className="text-danger">*</span></label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="invoice_amount"
                                                className="form-control"
                                                value={invoiceForm.invoice_amount}
                                                onChange={handleInvoiceChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Received Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="received_amount"
                                                className="form-control"
                                                value={invoiceForm.received_amount}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Pending Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={invoiceForm.pending_amount}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Status</label>
                                            <select
                                                name="payment_status"
                                                className="form-select"
                                                value={invoiceForm.payment_status}
                                                onChange={handleInvoiceChange}
                                            >
                                                <option value="unpaid">Unpaid</option>
                                                <option value="partial">Partial</option>
                                                <option value="paid">Paid</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Mode</label>
                                            <select
                                                name="payment_mode"
                                                className="form-select"
                                                value={invoiceForm.payment_mode}
                                                onChange={handleInvoiceChange}
                                            >
                                                <option value="">Select</option>
                                                <option value="cash">Cash</option>
                                                <option value="bank">Bank Transfer</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Date</label>
                                            <input
                                                type="date"
                                                name="payment_date"
                                                className="form-control"
                                                value={invoiceForm.payment_date}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Reference</label>
                                            <input
                                                type="text"
                                                name="payment_reference"
                                                className="form-control"
                                                value={invoiceForm.payment_reference}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Bank Name</label>
                                            <input
                                                type="text"
                                                name="bank_name"
                                                className="form-control"
                                                value={invoiceForm.bank_name}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Cheque No</label>
                                            <input
                                                type="text"
                                                name="cheque_no"
                                                className="form-control"
                                                value={invoiceForm.cheque_no}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice File</label>
                                            <input
                                                type="file"
                                                name="invoice_file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="2"
                                                value={invoiceForm.description}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="2"
                                                value={invoiceForm.remarks}
                                                onChange={handleInvoiceChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setShowInvoiceModal(false);
                                            setInvoiceForm(initialInvoiceData);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Saving...' : 'Save Invoice'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================================
                EDIT INVOICE MODAL
            ============================================================ */}
            {editingInvoice && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Invoice</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setEditingInvoice(null);
                                        setEditErrors({});
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleUpdateInvoice} encType="multipart/form-data">
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Invoice No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingInvoice.invoice_no || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, invoice_no: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Invoice Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingInvoice.invoice_date || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, invoice_date: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Invoice Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingInvoice.invoice_amount || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, invoice_amount: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Received Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingInvoice.received_amount || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, received_amount: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Pending Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingInvoice.pending_amount || '0.00'}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Status</label>
                                            <select
                                                className="form-select"
                                                value={editingInvoice.payment_status || 'unpaid'}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, payment_status: e.target.value })}
                                            >
                                                <option value="unpaid">Unpaid</option>
                                                <option value="partial">Partial</option>
                                                <option value="paid">Paid</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Mode</label>
                                            <select
                                                className="form-select"
                                                value={editingInvoice.payment_mode || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, payment_mode: e.target.value })}
                                            >
                                                <option value="">Select</option>
                                                <option value="cash">Cash</option>
                                                <option value="bank">Bank Transfer</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingInvoice.payment_date || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, payment_date: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Reference</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingInvoice.payment_reference || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, payment_reference: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Bank Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingInvoice.bank_name || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, bank_name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Cheque No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingInvoice.cheque_no || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, cheque_no: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice File</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        setEditingInvoice({ ...editingInvoice, invoice_file: e.target.files[0] });
                                                    }
                                                }}
                                            />
                                            {editingInvoice.invoice_file && typeof editingInvoice.invoice_file === 'string' && (
                                                <small className="text-muted d-block mt-1">
                                                    Current file: {editingInvoice.invoice_file.split('/').pop()}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingInvoice.description || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, description: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingInvoice.remarks || ''}
                                                onChange={(e) => setEditingInvoice({ ...editingInvoice, remarks: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setEditingInvoice(null);
                                            setEditErrors({});
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Updating...' : 'Update Invoice'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================================
                EXPENSE MODAL
            ============================================================ */}
            {showExpenseModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Expense</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowExpenseModal(false);
                                        setExpenseForm(initialExpenseData);
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleExpenseSubmit} encType="multipart/form-data">
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Category <span className="text-danger">*</span></label>
                                            <select
                                                name="expense_category"
                                                className="form-select"
                                                value={expenseForm.expense_category}
                                                onChange={handleExpenseChange}
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                <option value="material">Material</option>
                                                <option value="labor">Labor</option>
                                                <option value="transport">Transport</option>
                                                <option value="equipment">Equipment</option>
                                                <option value="subcontractor">Subcontractor</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Date <span className="text-danger">*</span></label>
                                            <input
                                                type="date"
                                                name="expense_date"
                                                className="form-control"
                                                value={expenseForm.expense_date}
                                                onChange={handleExpenseChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Amount <span className="text-danger">*</span></label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="expense_amount"
                                                className="form-control"
                                                value={expenseForm.expense_amount}
                                                onChange={handleExpenseChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Type</label>
                                            <select
                                                name="expense_type"
                                                className="form-select"
                                                value={expenseForm.expense_type}
                                                onChange={handleExpenseChange}
                                            >
                                                <option value="direct">Direct</option>
                                                <option value="indirect">Indirect</option>
                                                <option value="overhead">Overhead</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Vendor Name</label>
                                            <input
                                                type="text"
                                                name="vendor_name"
                                                className="form-control"
                                                value={expenseForm.vendor_name}
                                                onChange={handleExpenseChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Bill No</label>
                                            <input
                                                type="text"
                                                name="bill_no"
                                                className="form-control"
                                                value={expenseForm.bill_no}
                                                onChange={handleExpenseChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Bill Date</label>
                                            <input
                                                type="date"
                                                name="bill_date"
                                                className="form-control"
                                                value={expenseForm.bill_date}
                                                onChange={handleExpenseChange}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Status</label>
                                            <select
                                                name="payment_status"
                                                className="form-select"
                                                value={expenseForm.payment_status}
                                                onChange={handleExpenseChange}
                                            >
                                                <option value="unpaid">Unpaid</option>
                                                <option value="partial">Partial</option>
                                                <option value="paid">Paid</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Mode</label>
                                            <select
                                                name="payment_mode"
                                                className="form-select"
                                                value={expenseForm.payment_mode}
                                                onChange={handleExpenseChange}
                                            >
                                                <option value="">Select</option>
                                                <option value="cash">Cash</option>
                                                <option value="bank">Bank Transfer</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Bill File</label>
                                            <input
                                                type="file"
                                                name="bill_file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={handleExpenseChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="2"
                                                value={expenseForm.description}
                                                onChange={handleExpenseChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="2"
                                                value={expenseForm.remarks}
                                                onChange={handleExpenseChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setShowExpenseModal(false);
                                            setExpenseForm(initialExpenseData);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-danger" disabled={loading}>
                                        {loading ? 'Saving...' : 'Save Expense'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================================
                EDIT EXPENSE MODAL
            ============================================================ */}
            {editingExpense && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Expense</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setEditingExpense(null);
                                        setEditErrors({});
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handleUpdateExpense} encType="multipart/form-data">
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Category</label>
                                            <select
                                                className="form-select"
                                                value={editingExpense.expense_category || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, expense_category: e.target.value })}
                                            >
                                                <option value="">Select Category</option>
                                                <option value="material">Material</option>
                                                <option value="labor">Labor</option>
                                                <option value="transport">Transport</option>
                                                <option value="equipment">Equipment</option>
                                                <option value="subcontractor">Subcontractor</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingExpense.expense_date || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, expense_date: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Amount</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                value={editingExpense.expense_amount || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, expense_amount: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Expense Type</label>
                                            <select
                                                className="form-select"
                                                value={editingExpense.expense_type || 'direct'}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, expense_type: e.target.value })}
                                            >
                                                <option value="direct">Direct</option>
                                                <option value="indirect">Indirect</option>
                                                <option value="overhead">Overhead</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Vendor Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingExpense.vendor_name || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, vendor_name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Bill No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editingExpense.bill_no || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, bill_no: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Bill Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={editingExpense.bill_date || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, bill_date: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Status</label>
                                            <select
                                                className="form-select"
                                                value={editingExpense.payment_status || 'unpaid'}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, payment_status: e.target.value })}
                                            >
                                                <option value="unpaid">Unpaid</option>
                                                <option value="partial">Partial</option>
                                                <option value="paid">Paid</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Payment Mode</label>
                                            <select
                                                className="form-select"
                                                value={editingExpense.payment_mode || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, payment_mode: e.target.value })}
                                            >
                                                <option value="">Select</option>
                                                <option value="cash">Cash</option>
                                                <option value="bank">Bank Transfer</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Bill File</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        setEditingExpense({ ...editingExpense, bill_file: e.target.files[0] });
                                                    }
                                                }}
                                            />
                                            {editingExpense.bill_file && typeof editingExpense.bill_file === 'string' && (
                                                <small className="text-muted d-block mt-1">
                                                    Current file: {editingExpense.bill_file.split('/').pop()}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingExpense.description || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, description: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                value={editingExpense.remarks || ''}
                                                onChange={(e) => setEditingExpense({ ...editingExpense, remarks: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setEditingExpense(null);
                                            setEditErrors({});
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-danger" disabled={loading}>
                                        {loading ? 'Updating...' : 'Update Expense'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================================
                PAYMENT MODAL
            ============================================================ */}
            {showPaymentModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Record Payment</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => {
                                        setShowPaymentModal(false);
                                        setPaymentForm(initialPaymentData);
                                    }}
                                ></button>
                            </div>
                            <form onSubmit={handlePaymentSubmit}>
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Payment Type <span className="text-danger">*</span></label>
                                            <select
                                                name="payment_type"
                                                className="form-select"
                                                value={paymentForm.payment_type}
                                                onChange={handlePaymentChange}
                                                required
                                            >
                                                <option value="income">Income</option>
                                                <option value="expense">Expense</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Amount <span className="text-danger">*</span></label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="amount"
                                                className="form-control"
                                                value={paymentForm.amount}
                                                onChange={handlePaymentChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Payment Date <span className="text-danger">*</span></label>
                                            <input
                                                type="date"
                                                name="payment_date"
                                                className="form-control"
                                                value={paymentForm.payment_date}
                                                onChange={handlePaymentChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Payment Mode <span className="text-danger">*</span></label>
                                            <select
                                                name="payment_mode"
                                                className="form-select"
                                                value={paymentForm.payment_mode}
                                                onChange={handlePaymentChange}
                                                required
                                            >
                                                <option value="cash">Cash</option>
                                                <option value="bank">Bank Transfer</option>
                                                <option value="cheque">Cheque</option>
                                                <option value="online">Online</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Reference No</label>
                                            <input
                                                type="text"
                                                name="reference_no"
                                                className="form-control"
                                                value={paymentForm.reference_no}
                                                onChange={handlePaymentChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="2"
                                                value={paymentForm.description}
                                                onChange={handlePaymentChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Remarks</label>
                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="2"
                                                value={paymentForm.remarks}
                                                onChange={handlePaymentChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setShowPaymentModal(false);
                                            setPaymentForm(initialPaymentData);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-success" disabled={loading}>
                                        {loading ? 'Saving...' : 'Record Payment'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS */}
            <style>{`
                .project-finance .modal.show {
                    background-color: rgba(0,0,0,0.5);
                }
                .project-finance .card {
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }
                .project-finance .card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1) !important;
                }
                .project-finance .nav-tabs .nav-link {
                    border: none;
                    color: #6c757d;
                    padding: 10px 20px;
                    font-weight: 500;
                }
                .project-finance .nav-tabs .nav-link.active {
                    border-bottom: 3px solid #0d6efd;
                    color: #0d6efd;
                    background: transparent;
                }
                .project-finance .nav-tabs .nav-link:hover {
                    color: #0d6efd;
                    border-bottom: 3px solid #0d6efd;
                }
            `}</style>
        </div>
    );
};

export default ProjectFinance;