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
    <Box className="h-full bg-white dark:bg-[#252627] lg:flex flex-col justify-between items-center w-60 border-r hidden">
      <Box className="relative top-10">
        <Typography variant="h6" component="h2" color="#efa135">
          STORAGE
        </Typography>
      </Box>
      <Box
        id="actionsMenu"
        className="relative flex flex-col gap-2 w-[80%]"
        color="#bbc3ce"
      >
        <SidebarLink id="dashboard" href="/" link="Dashboard">
          <DashboardIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="books" href="books" link="Books">
          <MenuBookIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="schedule" href="schedule" link="Schedule">
          <CalendarMonthIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="profile" href="profile" link="Profile">
          <PersonIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="settings" href="settings" link="Settings">
          <SettingsIcon className="ml-2" />
        </SidebarLink>
        <Box
          id="sliderActions"
          className="absolute top-0 h-10 w-full bg-[#efa135] rounded-md duration-300"
        ></Box>
      </Box>
      <Box className="relative bottom-10 w-[80%]" color="#bbc3ce">
        <Link
          to="/"
          className="flex items-center gap-2 h-10 hover:text-[#efa135] dark:hover:text-white duration-300"
        >
          <LogoutIcon className="ml-2" />
          <Typography component="span">Logout</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
