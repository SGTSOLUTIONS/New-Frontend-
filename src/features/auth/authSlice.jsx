import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

// ======================================================
// STORAGE HELPERS
// ======================================================

const getStoredUser = () => {
    try {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        sessionStorage.removeItem('user');
        return null;
    }
};

const getStoredToken = () => {
    return sessionStorage.getItem('token') || null;
};

const getErrorResponse = (err, fallbackMessage) => {
    const errorData = err.response?.data;

    if (errorData?.errors) {
        return errorData.errors;
    }

    if (errorData?.message) {
        return {
            general: errorData.message,
        };
    }

    return {
        general: fallbackMessage,
    };
};


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

            const { token, user } = res.data || {};

            if (!token || !user) {
                return rejectWithValue({
                    general: 'Invalid login response from server.',
                });
            }

            if (!user.role) {
                return rejectWithValue({
                    general: 'User role is missing. Contact administrator.',
                });
            }

            // Save authentication details
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('token', token);

            return {
                token,
                user,
            };

        } catch (err) {
            return rejectWithValue(
                getErrorResponse(err, 'Login failed. Please try again.')
            );
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
            return rejectWithValue(
                getErrorResponse(err, 'Failed to send reset email.')
            );
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
            return rejectWithValue(
                getErrorResponse(err, 'Failed to verify OTP.')
            );
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
            return rejectWithValue(
                getErrorResponse(err, 'Password reset failed.')
            );
        }
    }
);


// ======================================================
// LOGOUT
// ======================================================

export const logoutUser = () => async (dispatch) => {
    try {
        // Revoke the current Sanctum token
        await api.post('/logout');

    } catch (error) {
        console.error('Logout API error:', error);

    } finally {
        // Clear browser authentication
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');

        dispatch(logoutSuccess());
    }
};


// ======================================================
// INITIAL AUTH STATE
// ======================================================

const storedUser = getStoredUser();
const storedToken = getStoredToken();

const initialState = {
    user: storedUser,
    token: storedToken,

    // Both user and token must exist
    isAuthenticated: Boolean(storedUser && storedToken),

    loading: false,
    error: {},
};


// ======================================================
// AUTH SLICE
// ======================================================

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {

        // LOGOUT STATE
        logoutSuccess: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = {};
        },

        // CLEAR ERRORS
        clearErrors: (state) => {
            state.error = {};
        },

    },

    extraReducers: (builder) => {

        builder

            // ==========================================
            // LOGIN
            // ==========================================

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = {};
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;

                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;

                state.error = {};
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;

                state.error = action.payload || {
                    general: 'Login failed.',
                };

                state.isAuthenticated = false;
            })


            // ==========================================
            // FORGOT PASSWORD
            // ==========================================

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


            // ==========================================
            // SUBMIT OTP
            // ==========================================

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


            // ==========================================
            // RESET PASSWORD
            // ==========================================

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
