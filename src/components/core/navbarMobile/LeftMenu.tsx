import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hamburgerSelector } from "../../../store/hamburgerMenu/selector";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { closeMenu } from "../../../store/hamburgerMenu/hamburgerSlice";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

function LeftMenu() {
  const openMenu: boolean = useSelector(hamburgerSelector);
  const dispatch = useDispatch();

  return (
    <Container
      className={`w-screen h-screen bg-white absolute top-0 ${
        openMenu ? "left-0" : "left-[-100%]"
      } duration-300`}
    >
      <Box className="h-full flex flex-col justify-between">
        <Box className="flex justify-between items-center h-20">
          <Typography variant="h6" component="h1" color="#0066ff">
            STORAGE
          </Typography>
          <IconButton onClick={() => dispatch(closeMenu())}>
            <CloseIcon className="text-[#bbc3ce]" />
          </IconButton>
        </Box>
        <Box className="flex flex-col gap-5" color="#bbc3ce">
          <Link to="7" className="flex gap-2">
            <DashboardIcon />
            <Typography component="span">Dashboard</Typography>
          </Link>
          <Link to="books" className="flex gap-2">
            <MenuBookIcon />
            <Typography component="span">Books</Typography>
          </Link>
          <Link to="calendar" className="flex gap-2">
            <CalendarMonthIcon />
            <Typography component="span">Calendar</Typography>
          </Link>
          <Link to="profile" className="flex gap-2">
            <PersonIcon />
            <Typography component="span">Profile</Typography>
          </Link>
          <Link to="settings" className="flex gap-2">
            <SettingsIcon />
            <Typography component="span">Settings</Typography>
          </Link>
        </Box>
        <Box>{/* <SliderTheme/> */}Sezione Tema</Box>
        <Box color="#bbc3ce">
          <Link to="" className="flex gap-2">
            <LogoutIcon />
            <Typography component="span">Logout</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default LeftMenu;
