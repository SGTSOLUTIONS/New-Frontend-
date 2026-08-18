// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post('/login', { email, password });
      return res.data;
    } catch (err) {
      // Handle different error formats
      const errorData = err.response?.data;
      
      if (errorData?.errors && typeof errorData.errors === 'object') {
        return rejectWithValue(errorData.errors);
      }
      
      if (errorData?.message) {
        return rejectWithValue({ general: errorData.message });
      }
      
      return rejectWithValue({ general: 'Login failed. Please try again.' });
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (err) {
      const errorData = err.response?.data;
      
      if (errorData?.errors && typeof errorData.errors === 'object') {
        return rejectWithValue(errorData.errors);
      }
      
      if (errorData?.message) {
        return rejectWithValue({ general: errorData.message });
      }
      
      return rejectWithValue({ general: 'Registration failed. Please try again.' });
    }
  }
);

export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      await api.post('/forgot-password', { email });
      return { success: true };
    } catch (err) {
      const errorData = err.response?.data;
      
      if (errorData?.errors && typeof errorData.errors === 'object') {
        return rejectWithValue(errorData.errors);
      }
      
      if (errorData?.message) {
        return rejectWithValue({ general: errorData.message });
      }
      
      return rejectWithValue({ general: 'Failed to send reset email' });
    }
  }
);

export const submitOtp = createAsyncThunk(
  'auth/submitOtp',
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      await api.post('/submit-otp', { email, otp });
      return { success: true };
    } catch (err) {
      const errorData = err.response?.data;
      
      if (errorData?.errors && typeof errorData.errors === 'object') {
        return rejectWithValue(errorData.errors);
      }
      
      if (errorData?.message) {
        return rejectWithValue({ general: errorData.message });
      }
      
      return rejectWithValue({ general: 'Failed to verify OTP' });
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post('/reset-password', { email, password });
      return res.data;
    } catch (err) {
      const errorData = err.response?.data;
      
      if (errorData?.errors && typeof errorData.errors === 'object') {
        return rejectWithValue(errorData.errors);
      }
      
      if (errorData?.message) {
        return rejectWithValue({ general: errorData.message });
      }
      
      return rejectWithValue({ general: 'Password reset failed' });
    }
  }
);

export const logoutUser = () => (dispatch) => {
  sessionStorage.clear();
  dispatch(logoutSuccess());
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    token: sessionStorage.getItem('token') || null,
    isAuthenticated: !!sessionStorage.getItem('token'),
    loading: false,
    error: {}, // Always an object for consistency
  },
  reducers: {
    logoutSuccess: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    },
    clearErrors: (state) => {
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        sessionStorage.setItem('user', JSON.stringify(action.payload.user));
        sessionStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { general: 'Login failed' };
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        sessionStorage.setItem('user', JSON.stringify(action.payload.user));
        sessionStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { general: 'Registration failed' };
      })

      // Forget Password
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(forgetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { general: 'Failed to send reset email' };
      })

      // Submit OTP
      .addCase(submitOtp.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(submitOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { general: 'Failed to verify OTP' };
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { general: 'Password reset failed' };
      });
  },
});

export const { logoutSuccess, clearErrors } = authSlice.actions;
export default authSlice.reducer;