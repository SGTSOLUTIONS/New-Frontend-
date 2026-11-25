import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/css/auth/AuthLayout.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout-shell">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
