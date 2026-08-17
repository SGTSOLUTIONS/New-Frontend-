// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import SearchPopup from "../components/SearchPopup";
// import Preloader from "../components/Preloader";
import Footer from "../components/Footer";

// Import CSS
import "../assets/css/bootstrap.css";
import "../assets/css/animate.css";
import "../assets/css/themewar-font.css";
import "../assets/css/bepro-icon.css";
import "../assets/css/slick.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/nice-select.css";
import "../assets/css/lightcase.css";
import "../assets/css/lightslider.css";
import "../assets/css/jquery.mCustomScrollbar.css";
import "../assets/css/settings.css";
import "../assets/css/preset.css";
import "../assets/css/ignore_for_wp.css";
import "../assets/css/theme.css";
import "../assets/css/responsive.css";
import '../assets/css/header-fixes.css';


function MainLayout(){


  return (
    <>
      {/* <Preloader /> */}
      <SearchPopup />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </>
  );
}

export default MainLayout;