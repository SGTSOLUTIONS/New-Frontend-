import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SearchPopup from "../components/SearchPopup";
import Preloader from "../components/Preloader";

function MainLayout() {
  return (
    <>
      <Preloader />
      <SearchPopup />
      <Header />

      <main>
        <Outlet />
      </main>

    </>
  );
}

export default MainLayout;