import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "./store/theme/selector";
import { GlobalStyles, dark, light } from "./components/theme/theme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { getUser } from "./controller/userApi";
import { getBooksList } from "./controller/booksApi";
import { getResourcesList } from "./controller/resourcesApi";

function App() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksList());
    dispatch(getResourcesList());
    dispatch(getUser());
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <div className="bg-[#f4f4f7] dark:bg-[#121212] lg:h-screen lg:flex">
        <Sidebar />
        <NavbarMobile />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
