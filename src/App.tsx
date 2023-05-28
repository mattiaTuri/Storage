import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";

function App() {
  return (
    <div className="h-screen flex bg-[#F3F3F3] dark:bg-[#0a0903]">
      <Sidebar />
      <div>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
