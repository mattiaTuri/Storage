import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
