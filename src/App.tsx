import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "./store/theme/selector";
import { useEffect } from "react";
import { getUser } from "./controller/userApi";
import { getBooksList } from "./controller/booksApi";
import { getResourcesList } from "./controller/resourcesApi";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "./components/theme/theme";

function App() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksList());
    dispatch(getResourcesList());
    dispatch(getUser());
  }, []);

  return (
    <ThemeProvider theme={theme == "light" ? light : dark}>
      <CssBaseline />
      <Box
        sx={{ backgroundColor: "background.default" }}
        className="lg:h-screen lg:flex"
      >
        <Sidebar />
        <NavbarMobile />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
