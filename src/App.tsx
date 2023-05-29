import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";

function App() {

  return (
    <div className="h-screen bg-[#F3F3F3] dark:bg-[#0a0903]">
      <div className="h-full flex p-10">
      <Sidebar />
      <div className="w-full">
        <Topbar/>
        <Outlet />
      </div>
      </div>    
    </div>
  );
}

export default App;
