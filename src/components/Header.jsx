// src/components/Header.jsx

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// Import menu images
import h1 from "../assets/images/h1.png";
import h2 from "../assets/images/h2.png";
import h3 from "../assets/images/h3.png";
import h4 from "../assets/images/h4.png";
import h5 from "../assets/images/h5.png";
import h6 from "../assets/images/h6.png";
import h7 from "../assets/images/h7.png";
import h8 from "../assets/images/h8.png";

// Services
const services = [
    {
        id: 1,
        title: "Web GIS",
        link: "/services/web-gis",
        image: h1
    },
    {
        id: 2,
        title: "Mobile GIS",
        link: "/services/mobile-gis",
        image: h2
    },
    {
        id: 3,
        title: "Spatial Revenue Intelligence",
        link: "/services/geo-property",
        image: h3
    },
    {
        id: 4,
        title: "LiDAR",
        link: "/services/lidar",
        image: h4
    },
    {
        id: 5,
        title: "Photogrammetry",
        link: "/services/photogrammetry",
        image: h5
    },
    {
        id: 6,
        title: "Drone & DGPS Survey",
        link: "/services/drone-survey",
        image: h6
    },
    {
        id: 7,
        title: "2D Mapping",
        link: "/services/2d-mapping",
        image: h7
    },
    {
        id: 8,
        title: "Consultancy Services",
        link: "/services/consultancy",
        image: h8
    },
    {
        id: 9,
        title: "Website Development",
        link: "/services/web-development",
        image: h1
    }
];

function Header() {

    return (
        <>
            <header className="header01 isSticky">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="navbar01">

                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="SGT Solutions" />
                                    </Link>
                                </div>

                                {/* Mobile Menu Button */}
                                <a
                                    href="#"
                                    className="menu_btn"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="twi-bars2"></i>
                                </a>

                                {/* Main Menu */}
                                <nav className="mainMenu">
                                    <ul>

                                        {/* Home */}
                                        <li className="menu-item">
                                            <Link to="/">Home</Link>
                                        </li>

                                        {/* Service Dropdown */}
                                        <li className="menu-item menu-item-has-children">

                                            <Link to="/service">
                                                Service
                                                <span className="dropdown-arrow"></span>
                                            </Link>

                                            <ul className="sub-menu">

                                                {services.map((service) => (
                                                    <li
                                                        key={service.id}
                                                        className="menu-item"
                                                    >
                                                        <Link to={service.link}>
                                                            {service.title}
                                                        </Link>
                                                    </li>
                                                ))}

                                            </ul>

                                        </li>

                                        {/* About */}
                                        <li className="menu-item">
                                            <Link to="/about">
                                                About
                                            </Link>
                                        </li>

                                        {/* Contact */}
                                        <li className="menu-item">
                                            <Link to="/contact">
                                                Contact
                                            </Link>
                                        </li>

                                    </ul>
                                </nav>

                                {/* Right Side */}
                                <div className="accessNav">

                                    {/* Search */}
                                    <a
                                        className="search_btn"
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="twi-search1"></i>
                                    </a>

                                    {/* Cart */}
                                    <div className="shoping_cart">
                                        <a
                                            className="cartBtn"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="twi-shopping-bag1"></i>
                                            <span>4</span>
                                        </a>
                                    </div>

                                    {/* Get Quote */}
                                    <Link
                                        className="berpo_btn"
                                        to="/contact"
                                    >
                                        <span className="bp-shape"></span>
                                        <span className="bp-shape"></span>
                                        <span className="bp-shape"></span>
                                        <span className="bp-shape"></span>

                                        <span className="bp-text">
                                            Get A Quote
                                        </span>
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Popup */}
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