// src/components/Header.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";



// Import menu images
import h1 from "../assets/images/h1.png";
import h2 from "../assets/images/h2.png";
import h3 from "../assets/images/h3.png";
import h4 from "../assets/images/h4.png";
import h5 from "../assets/images/h5.png";
import h6 from "../assets/images/h6.png";
import h7 from "../assets/images/h7.png";
import h8 from "../assets/images/h8.png";

// =========================================================
// SERVICES
// =========================================================

const services = [
    {
        id: 1,
        title: "Web GIS",
        link: "/services/web-gis",
        image: h1,
    },
    {
        id: 2,
        title: "Mobile GIS",
        link: "/services/mobile-gis",
        image: h2,
    },
    {
        id: 3,
        title: "Spatial Revenue Intelligence",
        link: "/services/geo-property",
        image: h3,
    },
    {
        id: 4,
        title: "LiDAR",
        link: "/services/lidar",
        image: h4,
    },
    {
        id: 5,
        title: "Photogrammetry",
        link: "/services/photogrammetry",
        image: h5,
    },
    {
        id: 6,
        title: "Drone & DGPS Survey",
        link: "/services/drone-survey",
        image: h6,
    },
    {
        id: 7,
        title: "2D Mapping",
        link: "/services/2d-mapping",
        image: h7,
    },
    {
        id: 8,
        title: "Consultancy Services",
        link: "/services/consultancy",
        image: h8,
    },
    {
        id: 9,
        title: "Website Development",
        link: "/services/web-development",
        image: h1,
    },
];


// =========================================================
// HEADER
// =========================================================

function Header() {

    // Mobile main menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Services dropdown
    const [servicesOpen, setServicesOpen] = useState(false);


    // =====================================================
    // TOGGLE MOBILE MENU
    // =====================================================

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);

        // Close service dropdown when opening/closing menu
        setServicesOpen(false);
    };


    // =====================================================
    // TOGGLE SERVICES - FIXED FOR SERVICE PAGES
    // =====================================================

    const toggleServices = (e) => {
        // Prevent default behavior and stop propagation
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Toggle the services dropdown
        setServicesOpen((prev) => !prev);
    };


    // =====================================================
    // CLOSE MENU
    // =====================================================

    const closeMenu = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };


    return (
        <>
            {/* =================================================
                HEADER
            ================================================= */}

            <header className="header01 isSticky">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="navbar01">


                                {/* =================================
                                    LOGO
                                ================================= */}

                                <div className="logo">

                                    <Link
                                        to="/"
                                        onClick={closeMenu}
                                    >

                                        <img
                                            src={logo}
                                            alt="SGT Solutions"
                                        />

                                    </Link>

                                </div>


                                {/* =================================
                                    MOBILE MENU BUTTON
                                ================================= */}

                                <button
                                    type="button"
                                    className={`menu_btn ${menuOpen ? "active" : ""
                                        }`}
                                    onClick={toggleMenu}
                                    aria-label="Toggle navigation menu"
                                    aria-expanded={menuOpen}
                                >

                                    <i
                                        className={
                                            menuOpen
                                                ? "twi-times"
                                                : "twi-bars2"
                                        }
                                    ></i>

                                </button>


                                {/* =================================
                                    MAIN MENU
                                ================================= */}

                                <nav
                                    className={`mainMenu ${menuOpen
                                        ? "mobileMenuOpen"
                                        : ""
                                        }`}
                                >

                                    <ul>


                                        {/* =============================
                                            HOME
                                        ============================= */}

                                        <li className="menu-item">

                                            <Link
                                                to="/"
                                                onClick={closeMenu}
                                            >
                                                Home
                                            </Link>

                                        </li>


                                        {/* =============================
                                            SERVICE - FIXED TOGGLE (Looks like a link)
                                        ============================= */}

                                        <li
                                            className={`menu-item menu-item-has-children ${servicesOpen
                                                ? "servicesOpen"
                                                : ""
                                                }`}
                                        >

                                            <div className="serviceMenuLink">

                                                {/* SERVICE TEXT - Using span that looks like a link */}
                                                <span
                                                    className="serviceLabel"
                                                    onClick={toggleServices}
                                                    onTouchEnd={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setServicesOpen((prev) => !prev);
                                                    }}
                                                >
                                                    Service
                                                </span>

                                                {/* SERVICE ARROW - Small indicator */}
                                                <span
                                                    className={`serviceArrow ${servicesOpen ? 'open' : ''}`}
                                                    onClick={toggleServices}
                                                    onTouchEnd={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setServicesOpen((prev) => !prev);
                                                    }}
                                                >
                                                    ▾
                                                </span>

                                            </div>


                                            {/* =========================
                                                SERVICE SUB MENU
                                            ========================= */}

                                            <ul className="sub-menu">

                                                {services.map(
                                                    (service) => (

                                                        <li
                                                            key={
                                                                service.id
                                                            }
                                                            className="menu-item"
                                                        >

                                                            <Link
                                                                to={
                                                                    service.link
                                                                }
                                                                onClick={
                                                                    closeMenu
                                                                }
                                                            >

                                                                {
                                                                    service.title
                                                                }

                                                            </Link>

                                                        </li>

                                                    )
                                                )}

                                            </ul>

                                        </li>


                                        {/* =============================
                                            ABOUT
                                        ============================= */}

                                        <li className="menu-item">

                                            <Link
                                                to="/about"
                                                onClick={closeMenu}
                                            >
                                                About
                                            </Link>

                                        </li>


                                        {/* =============================
                                            CONTACT
                                        ============================= */}

                                        <li className="menu-item">

                                            <Link
                                                to="/contact"
                                                onClick={closeMenu}
                                            >
                                                Contact
                                            </Link>

                                        </li>
                                       
                                    </ul>
 <div className="accessNav">
                                          
                                            <Link className="berpo_btn" to="/login">
                                              
                                                <span className="bp-text">login</span>
                                            </Link>
                                        </div>
                                </nav>


                                {/* =================================
                                    RIGHT SIDE
                                ================================= */}




                            </div>

                        </div>

                    </div>

                </div>

            </header>


            {/* =================================================
                SEARCH POPUP
            ================================================= */}

            <section className="popup_search_sec">

                <div className="popup_search_overlay"></div>


                <div className="pop_search_background">

                    <div className="middle_search">

                        <div className="container">

                            <div className="row">

                                <div className="col-lg-12 text-center">

                                    <div className="popup_search_form">

                                        <form
                                            method="get"
                                            action="#"
                                            autoComplete="off"
                                        >

                                            <input
                                                autoComplete="off"
                                                type="search"
                                                name="s"
                                                id="s"
                                                placeholder="Type Words and Hit Enter"
                                            />


                                            <button type="submit">

                                                <i className="twi-search1"></i>

                                            </button>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}


export default Header;