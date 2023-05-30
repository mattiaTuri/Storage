import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";

function App() {

  return (
    <div className="h-screen bg-[#F3F3F3] dark:bg-[#0a0903]">
      <div className="h-full flex p-10">
      <Sidebar />
      <div className="w-full">
        <NavbarMobile/>
        <Topbar/>
        <Outlet />
      </div>
      </div>    
    </div>
  );
}

export default App;
