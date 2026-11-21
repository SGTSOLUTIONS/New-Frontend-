import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import EmployeeLayout from './layouts/EmployeeLayout';
import AuthLayout from './layouts/AuthLayout';

import Preloader from './components/Preloader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ==========================================
// PUBLIC WEBSITE PAGES
// ==========================================

import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';

import './assets/css/responsive.css';

// Service pages
import WebGis from './pages/services/WebGis';
import MobileGis from './pages/services/MobileGis';
import Photogrammetry from './pages/services/Photogrammetry';
import DroneSurvey from './pages/services/DroneSurvey';
import Mapping2D from './pages/services/Mapping2D';
import Consultancy from './pages/services/Consultancy';
import WebDevelopment from './pages/services/WebDevelopment';

// Our Core Services
import AIPoweredGeospatialIntelligence from './pages/our-core-services/AIPoweredGeospatialIntelligence';
import EnterpriseGISSmartGovernance from './pages/our-core-services/EnterpriseGISSmartGovernance';
import Rainfall from './pages/our-core-services/Rainfall';
import RemoteSensingLandUseMapping from './pages/our-core-services/RemoteSensingLandUseMapping';
import SRIS from './pages/our-core-services/SRIS';
import LiDAR3DMapping from './pages/our-core-services/LiDAR3DMapping';

// ==========================================
// AUTH PAGES
// ==========================================

import Login from './pages/auth/Login';

// ==========================================
// ADMIN PAGES
// ==========================================

import AdminDashboard from './pages/Admin/Dashboard';
import Project from './pages/Admin/project';

// Admin Employee Management
import EmployeeList from './pages/Admin/employees/EmployeeList';
import EmployeeCreate from './pages/Admin/employees/EmployeeCreate';
import EmployeeDetails from './pages/Admin/employees/EmployeeDetails';
import EmployeeEdit from './pages/Admin/employees/EmployeeEdit';

import AdminAttendance from './pages/Admin/employees/Attendance';
import AdminLeaveRecords from './pages/Admin/employees/LeaveRecords';
import AdminHolidays from './pages/Admin/employees/Holidays';
import AdminDocuments from './pages/Admin/employees/Documents';
import AdminPayslips from './pages/Admin/employees/Payslips';
import SalaryDetails from './pages/Admin/employees/SalaryDetails';

// ==========================================
// EMPLOYEE PAGES
// ==========================================

import EmployeeDashboard from './pages/employee/Dashboard';
import EmployeeProfile from './pages/employee/Profile';
import EmployeeAttendance from './pages/employee/Attendance';
import EmployeeLeave from './pages/employee/Leave';
import EmployeeHolidays from './pages/employee/Holidays';
import EmployeeSalary from './pages/employee/Salary';
import EmployeePayslips from './pages/employee/Payslips';
import EmployeeDocuments from './pages/employee/Documents';


// ======================================================
// ROLE HOME PATH
// ======================================================

const getRoleHome = (role) => {
    if (['leader', 'admin'].includes(role)) {
        return '/dashboard';
    }

    if (role === 'employee') {
        return '/employee/dashboard';
    }

    return '/login';
};


// ======================================================
// PROTECTED ROUTES
// ======================================================

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


// ======================================================
// LOGIN CHECK
// ======================================================

function LoginCheck() {

    const { isAuthenticated, user } = useSelector(
        (state) => state.auth
    );

    if (isAuthenticated && user) {
        return <Navigate to={getRoleHome(user.role)} replace />;
    }

    return <AuthLayout />;
}


// ======================================================
// MAIN APP
// ======================================================

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

            <div
                style={{
                    visibility: loading ? 'hidden' : 'visible'
                }}
            >

                <Routes>

                    {/* ======================================
                        PUBLIC WEBSITE ROUTES
                    ====================================== */}

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


                        {/* OUR CORE SERVICES */}

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


                    {/* ======================================
                        AUTHENTICATION ROUTES
                    ====================================== */}

                    <Route path="/" element={<LoginCheck />}>

                        <Route path="login" element={<Login />} />

                        {/* Public registration disabled */}

                    </Route>


                    {/* ======================================
                        ADMIN ROUTES
                        Roles: leader, admin
                    ====================================== */}

                    <Route
                        element={
                            <AuthCheck allowedRoles={['leader', 'admin']} />
                        }
                    >

                        <Route path="/dashboard" element={<AdminLayout />}>

                            {/* ADMIN DASHBOARD */}

                            <Route index element={<AdminDashboard />} />

                            {/* EXISTING PROJECT PAGE */}

                            <Route path="project" element={<Project />} />


                            {/* ==================================
                                EMPLOYEE MANAGEMENT
                            ================================== */}

                            <Route
                                path="employees"
                                element={<EmployeeList />}
                            />

                            <Route
                                path="employees/create"
                                element={<EmployeeCreate />}
                            />

                            <Route
                                path="employees/:id"
                                element={<EmployeeDetails />}
                            />

                            <Route
                                path="employees/:id/edit"
                                element={<EmployeeEdit />}
                            />


                            {/* ==================================
                                ATTENDANCE MANAGEMENT
                            ================================== */}

                            <Route
                                path="attendance"
                                element={<AdminAttendance />}
                            />


                            {/* ==================================
                                LEAVE MANAGEMENT
                            ================================== */}

                            <Route
                                path="leaves"
                                element={<AdminLeaveRecords />}
                            />


                            {/* ==================================
                                HOLIDAY MANAGEMENT
                            ================================== */}

                            <Route
                                path="holidays"
                                element={<AdminHolidays />}
                            />


                            {/* ==================================
                                DOCUMENT MANAGEMENT
                            ================================== */}

                            <Route
                                path="documents"
                                element={<AdminDocuments />}
                            />


                            {/* ==================================
                                PAYSLIP MANAGEMENT
                            ================================== */}

                            <Route
                                path="payslips"
                                element={<AdminPayslips />}
                            />


                            {/* ==================================
                                SALARY DETAILS
                            ================================== */}

                            <Route
                                path="salary-details"
                                element={<SalaryDetails />}
                            />

                        </Route>

                    </Route>


                    {/* ======================================
                        EMPLOYEE ROUTES
                        Role: employee
                    ====================================== */}

                    <Route
                        element={
                            <AuthCheck allowedRoles={['employee']} />
                        }
                    >

                        <Route path="/employee" element={<EmployeeLayout />}>

                            <Route
                                path="dashboard"
                                element={<EmployeeDashboard />}
                            />

                            <Route
                                path="profile"
                                element={<EmployeeProfile />}
                            />

                            <Route
                                path="attendance"
                                element={<EmployeeAttendance />}
                            />

                            <Route
                                path="leave"
                                element={<EmployeeLeave />}
                            />

                            <Route
                                path="holidays"
                                element={<EmployeeHolidays />}
                            />

                            <Route
                                path="salary"
                                element={<EmployeeSalary />}
                            />

                            <Route
                                path="payslips"
                                element={<EmployeePayslips />}
                            />

                            <Route
                                path="documents"
                                element={<EmployeeDocuments />}
                            />

                        </Route>

                    </Route>


                    {/* ======================================
                        DEFAULT ROUTE
                    ====================================== */}

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Routes>

            </div>
        </>
    );
}

export default App;
