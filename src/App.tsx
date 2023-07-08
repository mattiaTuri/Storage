import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import Footer from "./components/core/footer/Footer";

function App() {
  return (
    <div className="h-screen bg-[#f4f4f7] dark:bg-[#0a0903]">
      <div className="h-full flex">
        <Sidebar />
        <div className="flex flex-col w-full p-10">
          <NavbarMobile />
          {/* <Topbar /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
