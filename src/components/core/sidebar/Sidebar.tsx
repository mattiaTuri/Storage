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
    <Box className="h-screen w-48 bg-white dark:bg-black flex justify-center">
      <Box className="h-full flex flex-col items-center justify-between w-[80%]">
        <Box className="relative top-10">
          <Typography variant="h5" component="h1" color="#0066ff">
            STORAGE
          </Typography>
        </Box>
        <Box id="actionsMenu" className="w-full">
          <Box
            id="sectionsMenu"
            className="flex flex-col relative text-[#cfcde7]"
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
              className="absolute h-10 w-full bg-[#0066ff] rounded-md duration-300"
            ></Box>
          </Box>
          <SliderTheme />
        </Box>
        <Box className="relative bottom-10 w-full text-[#cfcde7]">
          <Link
            to="/"
            className="flex items-center gap-2 h-10 pl-2 hover:text-[#0066ff] duration-300"
          >
            <LogoutIcon />
            <Typography variant="body1" component="span">
              Logout
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
