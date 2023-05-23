import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
