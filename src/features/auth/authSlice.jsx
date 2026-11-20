import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

// ======================================================
// LOGIN
// ======================================================

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await api.post('/login', {
                email,
                password,
            });

            return res.data;

        } catch (err) {
            const errorData = err.response?.data;

            if (errorData?.errors) {
                return rejectWithValue(errorData.errors);
            }

            if (errorData?.message) {
                return rejectWithValue({
                    general: errorData.message,
                });
            }

            return rejectWithValue({
                general: 'Login failed. Please try again.',
            });
        }
    }
);


// ======================================================
// FORGOT PASSWORD
// ======================================================

export const forgetPassword = createAsyncThunk(
    'auth/forgetPassword',
    async ({ email }, { rejectWithValue }) => {
        try {
            await api.post('/forgot-password', { email });

            return { success: true };

        } catch (err) {
            const errorData = err.response?.data;

            if (errorData?.errors) {
                return rejectWithValue(errorData.errors);
            }

            if (errorData?.message) {
                return rejectWithValue({
                    general: errorData.message,
                });
            }

            return rejectWithValue({
                general: 'Failed to send reset email.',
            });
        }
    }
);


// ======================================================
// SUBMIT OTP
// ======================================================

export const submitOtp = createAsyncThunk(
    'auth/submitOtp',
    async ({ email, otp }, { rejectWithValue }) => {
        try {
            await api.post('/submit-otp', {
                email,
                otp,
            });

            return { success: true };

        } catch (err) {
            const errorData = err.response?.data;

            if (errorData?.errors) {
                return rejectWithValue(errorData.errors);
            }

            if (errorData?.message) {
                return rejectWithValue({
                    general: errorData.message,
                });
            }

            return rejectWithValue({
                general: 'Failed to verify OTP.',
            });
        }
    }
);


// ======================================================
// RESET PASSWORD
// ======================================================

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await api.post('/reset-password', {
                email,
                password,
            });

            return res.data;

        } catch (err) {
            const errorData = err.response?.data;

            if (errorData?.errors) {
                return rejectWithValue(errorData.errors);
            }

            if (errorData?.message) {
                return rejectWithValue({
                    general: errorData.message,
                });
            }

            return rejectWithValue({
                general: 'Password reset failed.',
            });
        }
    }
);


// ======================================================
// LOGOUT
// ======================================================

export const logoutUser = () => async (dispatch) => {
    try {
        // Revoke current Sanctum token
        await api.post('/logout');

    } catch (error) {
        console.error('Logout API error:', error);

    } finally {
        // Clear local authentication even if API fails
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');

        dispatch(logoutSuccess());
    }
};


// ======================================================
// INITIAL AUTH STATE
// ======================================================

const getStoredUser = () => {
    try {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch {
        sessionStorage.removeItem('user');
        return null;
    }
};


// ======================================================
// AUTH SLICE
// ======================================================

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: getStoredUser(),
        token: sessionStorage.getItem('token') || null,
        isAuthenticated: !!sessionStorage.getItem('token'),
        loading: false,
        error: {},
    },

    reducers: {

        // Logout state
        logoutSuccess: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = {};

            sessionStorage.removeItem('user');
            sessionStorage.removeItem('token');
        },

        // Clear errors
        clearErrors: (state) => {
            state.error = {};
        },

    },

    extraReducers: (builder) => {

        builder

            // ==================================================
            // LOGIN
            // ==================================================

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = {};
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;

                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;

                sessionStorage.setItem(
                    'user',
                    JSON.stringify(action.payload.user)
                );

                sessionStorage.setItem(
                    'token',
                    action.payload.token
                );
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || {
                    general: 'Login failed.',
                };
            })


            // ==================================================
            // FORGOT PASSWORD
            // ==================================================

            .addCase(forgetPassword.pending, (state) => {
                state.loading = true;
                state.error = {};
            })

            .addCase(forgetPassword.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(forgetPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || {
                    general: 'Failed to send reset email.',
                };
            })


            // ==================================================
            // SUBMIT OTP
            // ==================================================

            .addCase(submitOtp.pending, (state) => {
                state.loading = true;
                state.error = {};
            })

            .addCase(submitOtp.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(submitOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || {
                    general: 'OTP verification failed.',
                };
            })


            // ==================================================
            // RESET PASSWORD
            // ==================================================

            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.error = {};
            })

            .addCase(resetPassword.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || {
                    general: 'Password reset failed.',
                };
            });

    },
});


// ======================================================
// EXPORTS
// ======================================================

export const {
    logoutSuccess,
    clearErrors,
} = authSlice.actions;

export default authSlice.reducer;
