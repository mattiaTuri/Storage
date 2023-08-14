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
    <Box
      sx={{ backgroundColor: "background.paper" }}
      className="h-full lg:flex flex-col justify-between items-center w-60 border-[#434343] border-r hidden"
    >
      <Box className="relative top-10">
        <Typography color="primary" variant="h6" component="h2">
          STORAGE
        </Typography>
      </Box>
      <Box id="actionsMenu" className="relative flex flex-col gap-2 w-[80%]">
        <SidebarLink id="dashboard" href="/" link="Dashboard" disabled={false}>
          <DashboardIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink
          id="storage"
          href="storage/books"
          link="Storage"
          disabled={false}
        >
          <MenuBookIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink
          id="scheduler"
          href="scheduler"
          link="Scheduler"
          disabled={true}
        >
          <CalendarMonthIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="profile" href="profile" link="Profile" disabled={true}>
          <PersonIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink
          id="settings"
          href="settings"
          link="Settings"
          disabled={false}
        >
          <SettingsIcon className="ml-2" />
        </SidebarLink>
        <Box
          id="sliderActions"
          sx={{ backgroundColor: "primary.main" }}
          className="absolute top-0 h-10 w-full rounded-md duration-300"
        ></Box>
      </Box>
      <Box
        className="relative bottom-10 w-[80%] text-[#c4c4c4]"
        sx={{ "&:hover": { color: "primary.main" } }}
      >
        <Link to="/" className="flex items-center gap-2 h-10 duration-300">
          <LogoutIcon className="ml-2" />
          <Typography component="span">Logout</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
