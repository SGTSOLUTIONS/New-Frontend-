import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import EmployeeLayout from './layouts/EmployeeLayout';
import AuthLayout from './layouts/AuthLayout';

import Preloader from './components/Preloader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/responsive.css';

// ==========================================
// LAZY LOADED PAGES
// ==========================================

// Public pages
const Home = lazy(() => import('./pages/Home'));
const Service = lazy(() => import('./pages/Service'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Service pages
const WebGis = lazy(() => import('./pages/services/WebGis'));
const MobileGis = lazy(() => import('./pages/services/MobileGis'));
const Photogrammetry = lazy(() => import('./pages/services/Photogrammetry'));
const DroneSurvey = lazy(() => import('./pages/services/DroneSurvey'));
const Mapping2D = lazy(() => import('./pages/services/Mapping2D'));
const Consultancy = lazy(() => import('./pages/services/Consultancy'));
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'));

// Core services
const AIPoweredGeospatialIntelligence = lazy(() => import('./pages/our-core-services/AIPoweredGeospatialIntelligence'));
const EnterpriseGISSmartGovernance = lazy(() => import('./pages/our-core-services/EnterpriseGISSmartGovernance'));
const Rainfall = lazy(() => import('./pages/our-core-services/Rainfall'));
const RemoteSensingLandUseMapping = lazy(() => import('./pages/our-core-services/RemoteSensingLandUseMapping'));
const SRIS = lazy(() => import('./pages/our-core-services/SRIS'));
const LiDAR3DMapping = lazy(() => import('./pages/our-core-services/LiDAR3DMapping'));

// Authentication
const Login = lazy(() => import('./pages/auth/Login'));

// Admin
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard'));
const Project = lazy(() => import('./pages/Admin/project'));

const EmployeeList = lazy(() => import('./pages/Admin/employees/EmployeeList'));
const EmployeeCreate = lazy(() => import('./pages/Admin/employees/EmployeeCreate'));
const EmployeeDetails = lazy(() => import('./pages/Admin/employees/EmployeeDetails'));
const EmployeeEdit = lazy(() => import('./pages/Admin/employees/EmployeeEdit'));

const AdminAttendance = lazy(() => import('./pages/Admin/employees/Attendance'));
const AdminLeaveRecords = lazy(() => import('./pages/Admin/employees/LeaveRecords'));
const AdminHolidays = lazy(() => import('./pages/Admin/employees/Holidays'));
const AdminDocuments = lazy(() => import('./pages/Admin/employees/Documents'));
const AdminPayslips = lazy(() => import('./pages/Admin/employees/Payslips'));
const SalaryDetails = lazy(() => import('./pages/Admin/employees/SalaryDetails'));

// Employee
const EmployeeDashboard = lazy(() => import('./pages/employee/Dashboard'));
const EmployeeProfile = lazy(() => import('./pages/employee/Profile'));
const EmployeeAttendance = lazy(() => import('./pages/employee/Attendance'));
const EmployeeLeave = lazy(() => import('./pages/employee/Leave'));
const EmployeeHolidays = lazy(() => import('./pages/employee/Holidays'));
const EmployeeSalary = lazy(() => import('./pages/employee/Salary'));
const EmployeePayslips = lazy(() => import('./pages/employee/Payslips'));
const EmployeeDocuments = lazy(() => import('./pages/employee/Documents'));

// ==========================================
// ROLE HOME
// ==========================================

const getRoleHome = (role) => {
    if (['leader', 'admin'].includes(role)) {
        return '/dashboard';
    }

    if (role === 'employee') {
        return '/employee/dashboard';
    }

    return '/login';
};

// ==========================================
// AUTH CHECK
// ==========================================

function AuthCheck({ allowedRoles = [] }) {
    const { isAuthenticated, user } = useSelector(
        (state) => state.auth
    );

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to={getRoleHome(user.role)} replace />;
    }

    return <Outlet />;
}

// ==========================================
// LOGIN CHECK
// ==========================================

function LoginCheck() {
    const { isAuthenticated, user } = useSelector(
        (state) => state.auth
    );

    if (isAuthenticated && user) {
        return <Navigate to={getRoleHome(user.role)} replace />;
    }

    return <AuthLayout />;
}

// ==========================================
// MAIN APP
// ==========================================

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Preloader />}

            <div style={{
                visibility: loading ? 'hidden' : 'visible'
            }}>

                <Suspense fallback={<Preloader />}>

                    <Routes>

                        {/* PUBLIC WEBSITE */}

                        <Route path="/" element={<MainLayout />}>

                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />

                            <Route path="services">
                                <Route index element={<Service />} />
                                <Route path="web-gis" element={<WebGis />} />
                                <Route path="mobile-gis" element={<MobileGis />} />
                                <Route path="photogrammetry" element={<Photogrammetry />} />
                                <Route path="drone-survey" element={<DroneSurvey />} />
                                <Route path="2d-mapping" element={<Mapping2D />} />
                                <Route path="consultancy" element={<Consultancy />} />
                                <Route path="web-development" element={<WebDevelopment />} />
                            </Route>

                            <Route path="our-core-services">

                                <Route
                                    path="ai-powered-geospatial-intelligence"
                                    element={<AIPoweredGeospatialIntelligence />}
                                />

                                <Route
                                    path="enterprise-gis-smart-governance"
                                    element={<EnterpriseGISSmartGovernance />}
                                />

                                <Route
                                    path="rainfall-land-use-population"
                                    element={<Rainfall />}
                                />

                                <Route
                                    path="remote-sensing-land-use-mapping"
                                    element={<RemoteSensingLandUseMapping />}
                                />

                                <Route path="sris" element={<SRIS />} />

                                <Route
                                    path="lidar-3d-mapping"
                                    element={<LiDAR3DMapping />}
                                />

                            </Route>

                        </Route>

                        {/* AUTHENTICATION */}

                        <Route path="/" element={<LoginCheck />}>
                            <Route path="login" element={<Login />} />
                        </Route>

                        {/* ADMIN */}

                        <Route element={
                            <AuthCheck allowedRoles={['leader', 'admin']} />
                        }>

                            <Route path="/dashboard" element={<AdminLayout />}>

                                <Route index element={<AdminDashboard />} />
                                <Route path="project" element={<Project />} />

                                <Route path="employees" element={<EmployeeList />} />
                                <Route path="employees/create" element={<EmployeeCreate />} />
                                <Route path="employees/:id" element={<EmployeeDetails />} />
                                <Route path="employees/:id/edit" element={<EmployeeEdit />} />

                                <Route path="attendance" element={<AdminAttendance />} />
                                <Route path="leaves" element={<AdminLeaveRecords />} />
                                <Route path="holidays" element={<AdminHolidays />} />
                                <Route path="documents" element={<AdminDocuments />} />
                                <Route path="payslips" element={<AdminPayslips />} />
                                <Route path="salary-details" element={<SalaryDetails />} />

                            </Route>

                        </Route>

                        {/* EMPLOYEE */}

                        <Route element={
                            <AuthCheck allowedRoles={['employee']} />
                        }>

                            <Route path="/employee" element={<EmployeeLayout />}>

                                <Route path="dashboard" element={<EmployeeDashboard />} />
                                <Route path="profile" element={<EmployeeProfile />} />
                                <Route path="attendance" element={<EmployeeAttendance />} />
                                <Route path="leave" element={<EmployeeLeave />} />
                                <Route path="holidays" element={<EmployeeHolidays />} />
                                <Route path="salary" element={<EmployeeSalary />} />
                                <Route path="payslips" element={<EmployeePayslips />} />
                                <Route path="documents" element={<EmployeeDocuments />} />

                            </Route>

                        </Route>

                        {/* DEFAULT */}

                        <Route path="*" element={<Navigate to="/" replace />} />

                    </Routes>

                </Suspense>

            </div>
        </>
    );
}

export default App;
