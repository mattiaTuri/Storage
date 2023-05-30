import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <Box className="h-full bg-white dark:bg-[#252627] lg:flex flex-col justify-between items-center w-32 rounded-lg hidden">
      <Box className="relative top-10">
        <Typography variant="h6" component="h1" color="#0066ff">
          STORAGE
        </Typography>
      </Box>
      <Box
        id="actionsMenu"
        className="relative flex flex-col items-center gap-2 w-[50%]" color="#bbc3ce"
      >
        <SidebarLink id="dashboard" href="/">
          <DashboardIcon />
        </SidebarLink>
        <SidebarLink id="books" href="books">
          <MenuBookIcon />
        </SidebarLink>
        <SidebarLink id="calendar" href="calendar">
          <CalendarMonthIcon />
        </SidebarLink>
        <SidebarLink id="profile" href="profile">
          <PersonIcon />
        </SidebarLink>
        <SidebarLink id="settings" href="settings">
          <SettingsIcon />
        </SidebarLink>
        <Box
          id="sliderSections"
          className="absolute top-0 h-10 w-full bg-[#0066ff] rounded-md duration-300"
        ></Box>
      </Box>
      <Box className="relative bottom-10 w-[50%]" color="#bbc3ce">
        <Link
          to="/"
          className="flex justify-center items-center h-10 hover:text-[#0066ff] dark:hover:text-white duration-300"
        >
          <LogoutIcon />
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;

