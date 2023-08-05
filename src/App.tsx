import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "./store/theme/selector";
import { GlobalStyles, dark, light } from "./components/theme/theme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { getResourcesList } from "./store/resourcesList/resourcesListSlice";
import { getBooksList } from "./store/booksList/booksListSlice";

function App() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksList("books"));
    dispatch(getResourcesList("resources"));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <div className="lg:h-screen bg-[#f4f4f7] dark:bg-[#121212]">
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
