import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/animate.css";
import "../assets/css/base-desktop.css";
import "../assets/css/bepro-icon.css";
import "../assets/fonts/Bepro.eot";
function Header() {
    return (
        <>
            {/* Header Start */}
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
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Home</a>
                                            <div className="sub-menu mega_menu">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/">
                                                                    <img src="assets/images/h1.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>Consulting</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/index2">
                                                                    <img src="assets/images/h2.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>Corporate</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/index3">
                                                                    <img src="assets/images/h3.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>Agency</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/index4">
                                                                    <img src="assets/images/h4.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>IT Solutions</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/index5">
                                                                    <img src="assets/images/h5.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>Architecture</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/index6">
                                                                    <img src="assets/images/h6.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>Marketing</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <Link to="/index7">
                                                                    <img src="assets/images/h7.png" alt="home" />
                                                                </Link>
                                                            </div>
                                                            <h5>Home <span>Insurance</span></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4">
                                                        <div className="showcase">
                                                            <div className="showcaseThumb">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/h8.png" alt="home" />
                                                                </a>
                                                            </div>
                                                            <h5>Coming <span>Soon</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Services</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Services Page</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/service1">Service 01</Link></li>
                                                        <li><Link to="/service2">Service 02</Link></li>
                                                        <li><Link to="/service3">Service 03</Link></li>
                                                        <li><Link to="/service4">Service 04</Link></li>
                                                        <li><Link to="/service5">Service 05</Link></li>
                                                        <li><Link to="/service6">Service 06</Link></li>
                                                        <li><Link to="/service7">Service 07</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Services Details</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/single-service">Service Details 01</Link></li>
                                                        <li><Link to="/single-service2">Service Details 02</Link></li>
                                                        <li><Link to="/single-service3">Service Details 03</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Portfolio</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Portfolio Page</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/folio1">Portfolio 01</Link></li>
                                                        <li><Link to="/folio2">Portfolio 02</Link></li>
                                                        <li><Link to="/folio3">Portfolio 03</Link></li>
                                                        <li><Link to="/folio4">Portfolio 04</Link></li>
                                                        <li><Link to="/folio5">Portfolio 05</Link></li>
                                                        <li><Link to="/folio6">Portfolio 06</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Portfolio Details</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/single-folio">Portfolio Details 01</Link></li>
                                                        <li><Link to="/single-folio2">Portfolio Details 02</Link></li>
                                                        <li><Link to="/single-folio3">Portfolio Details 03</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Blogs</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Left Sidebar View</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/blog1">View Style 01</Link></li>
                                                        <li><Link to="/blog2">View Style 02</Link></li>
                                                        <li><Link to="/blog3">View Style 03</Link></li>
                                                        <li><Link to="/blog4">View Style 04</Link></li>
                                                        <li><Link to="/blog5">View Style 05</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Right Sidebar View</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/blog6">View Style 01</Link></li>
                                                        <li><Link to="/blog7">View Style 02</Link></li>
                                                        <li><Link to="/blog8">View Style 03</Link></li>
                                                        <li><Link to="/blog9">View Style 04</Link></li>
                                                        <li><Link to="/blog10">View Style 05</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Fullwidth View</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/blog11">View Style 01</Link></li>
                                                        <li><Link to="/blog12">View Style 02</Link></li>
                                                        <li><Link to="/blog13">View Style 03</Link></li>
                                                        <li><Link to="/blog14">View Style 04</Link></li>
                                                        <li><Link to="/blog15">View Style 05</Link></li>
                                                        <li><Link to="/blog16">View Style 06</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/single-blog">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Shop Page</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/shop">Product Page</Link></li>
                                                        <li><Link to="/single-product">Product Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Team View Style</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/team1">Team 01</Link></li>
                                                        <li><Link to="/team2">Team 02</Link></li>
                                                        <li><Link to="/team3">Team 03</Link></li>
                                                        <li><Link to="/team4">Team 04</Link></li>
                                                        <li><Link to="/team5">Team 05</Link></li>
                                                        <li><Link to="/team6">Team 06</Link></li>
                                                        <li><Link to="/single-team">Team Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">About Page</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/about1">About 01</Link></li>
                                                        <li><Link to="/about2">About 02</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Contact Page</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/contact">Contact 01</Link></li>
                                                        <li><Link to="/contact2">Contact 02</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
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
            {/* Header End */}

            {/* Search Popup Start */}
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
            {/* Search Popup End */}
        </>
    );
}

export default Header;