// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import projectReducer from "../features/projectSlice";
import projectIncomeReducer from "../features/projectIncomeSlice";
import projectExpenseReducer from "../features/projectExpenseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    projectIncome: projectIncomeReducer,
    projectExpense: projectExpenseReducer,
  },
});