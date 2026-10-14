import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

// ============================================================
// GET EXPENSES
// ============================================================
export const getProjectExpenses = createAsyncThunk(
    'projectExpense/getProjectExpenses',
    async (projectId, { rejectWithValue }) => {
        try {
            const response = await api.get(`/projects/${projectId}/expenses`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Unable to fetch expenses' });
        }
    }
);

// ============================================================
// CREATE EXPENSE
// ============================================================
export const createProjectExpense = createAsyncThunk(
    'projectExpense/createProjectExpense',
    async ({ projectId, formData }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/projects/${projectId}/expenses`, formData, {
                headers: { 
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Create Expense Error:', error.response?.data);
            return rejectWithValue(error.response?.data || { message: 'Unable to create expense' });
        }
    }
);

// ============================================================
// UPDATE EXPENSE
// ============================================================
export const updateProjectExpense = createAsyncThunk(
    'projectExpense/updateProjectExpense',
    async ({ projectId, expenseId, formData }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/projects/${projectId}/expenses/${expenseId}`, formData, {
                headers: { 
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Update Expense Error:', error.response?.data);
            return rejectWithValue(error.response?.data || { message: 'Unable to update expense' });
        }
    }
);

// ============================================================
// DELETE EXPENSE
// ============================================================
export const deleteProjectExpense = createAsyncThunk(
    'projectExpense/deleteProjectExpense',
    async ({ projectId, expenseId }, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/projects/${projectId}/expenses/${expenseId}`);
            return { ...response.data, expenseId };
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Unable to delete expense' });
        }
    }
);

// ============================================================
// SLICE
// ============================================================
const projectExpenseSlice = createSlice({
    name: 'projectExpense',
    initialState: {
        expenses: [],
        loading: false,
        errors: {},
        success: false,
        message: '',
        totalExpense: 0
    },
    reducers: {
        clearExpenseErrors: (state) => {
            state.errors = {};
        },
        clearExpenseSuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // GET EXPENSES
            .addCase(getProjectExpenses.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjectExpenses.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = action.payload.expenses || [];
                state.totalExpense = action.payload.total_expense || 0;
            })
            .addCase(getProjectExpenses.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            })
            // CREATE
            .addCase(createProjectExpense.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(createProjectExpense.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                if (action.payload.expense) {
                    state.expenses.unshift(action.payload.expense);
                }
                state.totalExpense = action.payload.total_expense || 0;
            })
            .addCase(createProjectExpense.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            })
            // UPDATE
            .addCase(updateProjectExpense.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(updateProjectExpense.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                if (action.payload.expense) {
                    const index = state.expenses.findIndex(e => e.id === action.payload.expense.id);
                    if (index !== -1) {
                        state.expenses[index] = action.payload.expense;
                    }
                }
                state.totalExpense = action.payload.total_expense || 0;
            })
            .addCase(updateProjectExpense.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            })
            // DELETE
            .addCase(deleteProjectExpense.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProjectExpense.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                state.expenses = state.expenses.filter(e => e.id !== action.payload.expenseId);
                state.totalExpense = action.payload.total_expense || 0;
            })
            .addCase(deleteProjectExpense.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            });
    }
});

// Make sure these are exported correctly
export const { clearExpenseErrors, clearExpenseSuccess } = projectExpenseSlice.actions;
export default projectExpenseSlice.reducer;