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

function App() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksList());
    dispatch(getResourcesList());
    dispatch(getUser());
  }, []);

  const light = createTheme({
    palette: {
      background: {
        default: "#f4f4f7",
        paper: "#ffff",
      },
      text: {
        primary: "#474862",
        secondary: "#ffff", //Input bg color
      },
      primary: {
        main: "#efa135", //Primary color (button and h1 txt)
      },
      secondary: {
        main: "#474862", //Icon color
      },
      divider: "#0000001fe",
    },
  });

  const dark = createTheme({
    palette: {
      background: {
        default: "#121212",
        paper: "#262626",
      },
      text: {
        primary: "#ffff",
        secondary: "#434343", //Input bg color
      },
      primary: {
        main: "#0066ff", //Primary color (button and h1 txt)
      },
      secondary: {
        main: "#ffff", //Icon color
      },
      divider: "#c4c4c4",
    },
  });

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
