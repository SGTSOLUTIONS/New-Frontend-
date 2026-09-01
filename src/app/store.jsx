// store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import projectReducer from "../features/projectSlice";
import projectFinanceReducer from "../features/projectFinanceSlice"; // Import the finance slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    projectFinance: projectFinanceReducer, // Add the finance reducer
  },
});