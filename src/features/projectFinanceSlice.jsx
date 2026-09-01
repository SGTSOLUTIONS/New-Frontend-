// features/projectFinanceSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

// ============================================================
// INVOICE THUNKS
// ============================================================
export const createInvoice = createAsyncThunk(
    'projectFinance/createInvoice',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post(
                '/project-invoices',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Create Invoice API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Something went wrong'
                }
            );
        }
    }
);

export const getProjectInvoices = createAsyncThunk(
    'projectFinance/getProjectInvoices',
    async (projectId, { rejectWithValue }) => {
        try {
            const response = await api.get(`/projects/${projectId}/invoices`);
            return response.data;
        } catch (error) {
            console.error('Get Invoices API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to fetch invoices'
                }
            );
        }
    }
);

export const updateInvoice = createAsyncThunk(
    'projectFinance/updateInvoice',
    async ({ id, invoiceData }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/project-invoices/${id}`, invoiceData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Update Invoice API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to update invoice'
                }
            );
        }
    }
);

export const deleteInvoice = createAsyncThunk(
    'projectFinance/deleteInvoice',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/project-invoices/${id}`);
            return {
                id,
                ...response.data
            };
        } catch (error) {
            console.error('Delete Invoice API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to delete invoice'
                }
            );
        }
    }
);

// ============================================================
// EXPENSE THUNKS
// ============================================================
export const createExpense = createAsyncThunk(
    'projectFinance/createExpense',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post(
                '/project-expenses',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Create Expense API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Something went wrong'
                }
            );
        }
    }
);

export const getProjectExpenses = createAsyncThunk(
    'projectFinance/getProjectExpenses',
    async (projectId, { rejectWithValue }) => {
        try {
            const response = await api.get(`/projects/${projectId}/expenses`);
            return response.data;
        } catch (error) {
            console.error('Get Expenses API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to fetch expenses'
                }
            );
        }
    }
);

export const updateExpense = createAsyncThunk(
    'projectFinance/updateExpense',
    async ({ id, expenseData }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/project-expenses/${id}`, expenseData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Update Expense API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to update expense'
                }
            );
        }
    }
);

export const deleteExpense = createAsyncThunk(
    'projectFinance/deleteExpense',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/project-expenses/${id}`);
            return {
                id,
                ...response.data
            };
        } catch (error) {
            console.error('Delete Expense API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to delete expense'
                }
            );
        }
    }
);

// ============================================================
// PAYMENT THUNKS
// ============================================================
export const createPayment = createAsyncThunk(
    'projectFinance/createPayment',
    async (paymentData, { rejectWithValue }) => {
        try {
            const response = await api.post('/project-payments', paymentData);
            return response.data;
        } catch (error) {
            console.error('Create Payment API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Something went wrong'
                }
            );
        }
    }
);

export const getProjectPayments = createAsyncThunk(
    'projectFinance/getProjectPayments',
    async (projectId, { rejectWithValue }) => {
        try {
            const response = await api.get(`/projects/${projectId}/payments`);
            return response.data;
        } catch (error) {
            console.error('Get Payments API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to fetch payments'
                }
            );
        }
    }
);

export const deletePayment = createAsyncThunk(
    'projectFinance/deletePayment',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/project-payments/${id}`);
            return {
                id,
                ...response.data
            };
        } catch (error) {
            console.error('Delete Payment API Error:', error.response?.data);
            return rejectWithValue(
                error.response?.data || {
                    message: 'Unable to delete payment'
                }
            );
        }
    }
);

// ============================================================
// SLICE
// ============================================================
const initialState = {
    invoices: [],
    expenses: [],
    payments: [],
    currentInvoice: null,
    currentExpense: null,
    loading: false,
    errors: {},
    success: false,
    message: ''
};

const projectFinanceSlice = createSlice({
    name: 'projectFinance',
    initialState,
    reducers: {
        clearErrors: (state) => {
            state.errors = {};
        },
        clearSuccess: (state) => {
            state.success = false;
        },
        clearMessage: (state) => {
            state.message = '';
        },
        clearAll: (state) => {
            state.invoices = [];
            state.expenses = [];
            state.payments = [];
            state.currentInvoice = null;
            state.currentExpense = null;
            state.errors = {};
            state.loading = false;
            state.success = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // ============================================================
            // INVOICE REDUCERS
            // ============================================================
            // CREATE INVOICE
            .addCase(createInvoice.pending, (state) => {
                state.loading = true;
                state.errors = {};
                state.success = false;
            })
            .addCase(createInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Invoice created successfully';
                if (action.payload?.invoice) {
                    state.invoices.unshift(action.payload.invoice);
                }
            })
            .addCase(createInvoice.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Invoice creation failed'
                };
            })
            // GET INVOICES
            .addCase(getProjectInvoices.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(getProjectInvoices.fulfilled, (state, action) => {
                state.loading = false;
                state.invoices = action.payload?.invoices || action.payload || [];
            })
            .addCase(getProjectInvoices.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Unable to fetch invoices'
                };
            })
            // UPDATE INVOICE
            .addCase(updateInvoice.pending, (state) => {
                state.loading = true;
                state.errors = {};
                state.success = false;
            })
            .addCase(updateInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Invoice updated successfully';
                if (action.payload?.invoice) {
                    const updatedInvoice = action.payload.invoice;
                    const index = state.invoices.findIndex(
                        invoice => invoice.id === updatedInvoice.id
                    );
                    if (index !== -1) {
                        state.invoices[index] = updatedInvoice;
                    }
                }
            })
            .addCase(updateInvoice.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload || {
                    message: 'Unable to update invoice'
                };
            })
            // DELETE INVOICE
            .addCase(deleteInvoice.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(deleteInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Invoice deleted successfully';
                state.invoices = state.invoices.filter(
                    invoice => invoice.id !== action.payload.id
                );
            })
            .addCase(deleteInvoice.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Unable to delete invoice'
                };
            })

            // ============================================================
            // EXPENSE REDUCERS
            // ============================================================
            // CREATE EXPENSE
            .addCase(createExpense.pending, (state) => {
                state.loading = true;
                state.errors = {};
                state.success = false;
            })
            .addCase(createExpense.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Expense created successfully';
                if (action.payload?.expense) {
                    state.expenses.unshift(action.payload.expense);
                }
            })
            .addCase(createExpense.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Expense creation failed'
                };
            })
            // GET EXPENSES
            .addCase(getProjectExpenses.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(getProjectExpenses.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = action.payload?.expenses || action.payload || [];
            })
            .addCase(getProjectExpenses.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Unable to fetch expenses'
                };
            })
            // UPDATE EXPENSE
            .addCase(updateExpense.pending, (state) => {
                state.loading = true;
                state.errors = {};
                state.success = false;
            })
            .addCase(updateExpense.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Expense updated successfully';
                if (action.payload?.expense) {
                    const updatedExpense = action.payload.expense;
                    const index = state.expenses.findIndex(
                        expense => expense.id === updatedExpense.id
                    );
                    if (index !== -1) {
                        state.expenses[index] = updatedExpense;
                    }
                }
            })
            .addCase(updateExpense.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload || {
                    message: 'Unable to update expense'
                };
            })
            // DELETE EXPENSE
            .addCase(deleteExpense.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(deleteExpense.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Expense deleted successfully';
                state.expenses = state.expenses.filter(
                    expense => expense.id !== action.payload.id
                );
            })
            .addCase(deleteExpense.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Unable to delete expense'
                };
            })

            // ============================================================
            // PAYMENT REDUCERS
            // ============================================================
            // CREATE PAYMENT
            .addCase(createPayment.pending, (state) => {
                state.loading = true;
                state.errors = {};
                state.success = false;
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Payment recorded successfully';
                if (action.payload?.payment) {
                    state.payments.unshift(action.payload.payment);
                }
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Payment recording failed'
                };
            })
            // GET PAYMENTS
            .addCase(getProjectPayments.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(getProjectPayments.fulfilled, (state, action) => {
                state.loading = false;
                state.payments = action.payload?.payments || action.payload || [];
            })
            .addCase(getProjectPayments.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Unable to fetch payments'
                };
            })
            // DELETE PAYMENT
            .addCase(deletePayment.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(deletePayment.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload?.message || 'Payment deleted successfully';
                state.payments = state.payments.filter(
                    payment => payment.id !== action.payload.id
                );
            })
            .addCase(deletePayment.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.errors = action.payload?.errors || {
                    message: action.payload?.message || 'Unable to delete payment'
                };
            });
    }
});

export const {
    clearErrors,
    clearSuccess,
    clearMessage,
    clearAll
} = projectFinanceSlice.actions;

export default projectFinanceSlice.reducer;