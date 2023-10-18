import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/sidebar/Sidebar";
import NavbarMobile from "./components/core/navbarMobile/NavbarMobile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./controller/userApi";
import { getBooksList } from "./controller/booksApi";
import { getResourcesList } from "./controller/resourcesApi";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "./components/theme/theme";
import { userSelector } from "./store/user/selector";
import Loader from "./components/shared/Loader";
import { getItemsList } from "./controller/boardsApi";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(getBooksList());
    dispatch(getResourcesList());
    dispatch(getItemsList())
    dispatch(getUser());
  }, []);

  if (user.loading) {
    return (
      <ThemeProvider theme={user.currentUser.theme === "light" ? light : dark}>
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
  } else {
    return <Loader size={50} color="#0066ff" />;
  }
}

export default App;
