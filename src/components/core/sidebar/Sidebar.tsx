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
import { useEffect } from "react";
import { ChangeMenu } from "./sidebarFunctions";
import SliderTheme from "./SliderTheme";

function Sidebar() {
  useEffect(() => {
    let sectionActive: string = window.location.pathname.replace("/", "");
    if (sectionActive === "") sectionActive = "dashboard";
    ChangeMenu(sectionActive);
  }, []);

  return (
    <Box className="h-[90%] bg-white dark:bg-[#252627] flex flex-col justify-between items-center w-32 rounded-lg m-10">
      <Box className="relative top-10">
        <Typography variant="h6" component="h1" color="#0066ff">
          STORAGE
        </Typography>
      </Box>
      <Box
        id="actionsMenu"
        className="relative flex flex-col items-center gap-2 w-[50%] text-[#e5e5e5]"
      >
        <SidebarLink id="dashboard" title="Dashboard" href="/">
          <DashboardIcon />
        </SidebarLink>
        <SidebarLink id="books" title="Books" href="books">
          <MenuBookIcon />
        </SidebarLink>
        <SidebarLink id="calendar" title="Calendar" href="calendar">
          <CalendarMonthIcon />
        </SidebarLink>
        <SidebarLink id="profile" title="Profile" href="profile">
          <PersonIcon />
        </SidebarLink>
        <SidebarLink id="settings" title="Settings" href="settings">
          <SettingsIcon />
        </SidebarLink>
        <Box
          id="sliderSections"
          className="absolute top-0 h-10 w-full bg-[#0066ff] rounded-md duration-300"
        ></Box>
      </Box>
      <Box className="relative bottom-10 w-[50%]" color="#e5e5e5">
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
