// src/components/Header.jsx
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// Import all menu images
import h1 from "../assets/images/h1.png";
import h2 from "../assets/images/h2.png";
import h3 from "../assets/images/h3.png";
import h4 from "../assets/images/h4.png";
import h5 from "../assets/images/h5.png";
import h6 from "../assets/images/h6.png";
import h7 from "../assets/images/h7.png";
import h8 from "../assets/images/h8.png";

function Header() {
    return (
        <>
            <header className="header01 isSticky">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navbar01">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="berpo" />
                                    </Link>
                                </div>
                                <a href="javascript:void(0)" className="menu_btn">
                                    <i className="twi-bars2"></i>
                                </a>
                                <nav className="mainMenu">
                                    <ul>
                                        <li className="menu-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/service">Service</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/">About</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/">contact</Link>
                                        </li>
                                        {/* Rest of your menu items... */}
                                    </ul>
                                </nav>
                                <div className="accessNav">
                                    <a className="search_btn" href="javascript:void(0);">
                                        <i className="twi-search1"></i>
                                    </a>
                                    <div className="shoping_cart">
                                        <a className="cartBtn" href="javascript:void(0);">
                                            <i className="twi-shopping-bag1"></i>
                                            <span>4</span>
                                        </a>
                                    </div>
                                    <Link className="berpo_btn" to="/contact">
                                        <span className="bp-shape"></span>
                                        <span className="bp-shape"></span>
                                        <span className="bp-shape"></span>
                                        <span className="bp-shape"></span>
                                        <span className="bp-text">Get A Quote</span>
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
                                        <form method="get" action="#" autoComplete="off">
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