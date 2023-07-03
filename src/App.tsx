import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import Footer from "./components/core/footer/Footer";

function App() {
  return (
    <div className="h-screen bg-[#F3F3F3] dark:bg-[#0a0903]">
      <div className="h-full flex p-10">
        <Sidebar />
        <div className="w-full flex flex-col">
          <NavbarMobile />
          <Topbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
