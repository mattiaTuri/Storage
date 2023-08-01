import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import Topbar from "./components/core/topbar/Topbar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import Footer from "./components/core/footer/Footer";
import { useSelector } from "react-redux";
import { themeSelector } from "./store/theme/selector";
import { GlobalStyles, dark, light } from "./components/theme/theme";
import { ThemeProvider } from "styled-components";


function App() {
  const theme = useSelector(themeSelector)
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <div className="h-screen bg-[#f4f4f7] dark:bg-[#252627]">  
        <div className="h-full flex">
          <Sidebar />
          <div className="flex flex-col w-full p-10">
            <NavbarMobile />
            {/* <Topbar /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
