import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

// ============================================================
// GET INCOMES
// ============================================================
export const getProjectIncomes = createAsyncThunk(
    'projectIncome/getProjectIncomes',
    async (projectId, { rejectWithValue }) => {
        try {
            const response = await api.get(`/projects/${projectId}/incomes`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Unable to fetch incomes' });
        }
    }
);

// ============================================================
// CREATE INCOME
// ============================================================
export const createProjectIncome = createAsyncThunk(
    'projectIncome/createProjectIncome',
    async ({ projectId, formData }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/projects/${projectId}/incomes`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Unable to create income' });
        }
    }
);

// ============================================================
// UPDATE INCOME
// ============================================================
export const updateProjectIncome = createAsyncThunk(
    'projectIncome/updateProjectIncome',
    async ({ projectId, incomeId, formData }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/projects/${projectId}/incomes/${incomeId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Unable to update income' });
        }
    }
);

// ============================================================
// DELETE INCOME
// ============================================================
export const deleteProjectIncome = createAsyncThunk(
    'projectIncome/deleteProjectIncome',
    async ({ projectId, incomeId }, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/projects/${projectId}/incomes/${incomeId}`);
            return { ...response.data, incomeId };
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Unable to delete income' });
        }
    }
);

// ============================================================
// SLICE
// ============================================================
const projectIncomeSlice = createSlice({
    name: 'projectIncome',
    initialState: {
        incomes: [],
        loading: false,
        errors: {},
        success: false,
        message: '',
        totalIncome: 0
    },
    reducers: {
        clearIncomeErrors: (state) => {
            state.errors = {};
        },
        clearIncomeSuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // GET
            .addCase(getProjectIncomes.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjectIncomes.fulfilled, (state, action) => {
                state.loading = false;
                state.incomes = action.payload.incomes || [];
                state.totalIncome = action.payload.total_income || 0;
            })
            .addCase(getProjectIncomes.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            })
            // CREATE
            .addCase(createProjectIncome.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(createProjectIncome.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                if (action.payload.income) {
                    state.incomes.unshift(action.payload.income);
                }
                state.totalIncome = action.payload.total_income || 0;
            })
            .addCase(createProjectIncome.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            })
            // UPDATE
            .addCase(updateProjectIncome.pending, (state) => {
                state.loading = true;
                state.errors = {};
            })
            .addCase(updateProjectIncome.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                if (action.payload.income) {
                    const index = state.incomes.findIndex(i => i.id === action.payload.income.id);
                    if (index !== -1) {
                        state.incomes[index] = action.payload.income;
                    }
                }
                state.totalIncome = action.payload.total_income || 0;
            })
            .addCase(updateProjectIncome.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            })
            // DELETE
            .addCase(deleteProjectIncome.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProjectIncome.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                state.incomes = state.incomes.filter(i => i.id !== action.payload.incomeId);
                state.totalIncome = action.payload.total_income || 0;
            })
            .addCase(deleteProjectIncome.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload?.errors || { message: action.payload?.message };
            });
    }
});

// Make sure these are exported correctly
export const { clearIncomeErrors, clearIncomeSuccess } = projectIncomeSlice.actions;
export default projectIncomeSlice.reducer;