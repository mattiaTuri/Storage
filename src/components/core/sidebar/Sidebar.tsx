import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import SidebarLink from "./SidebarLink";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{ backgroundColor: "background.paper" }}
      className="h-full lg:flex flex-col justify-between items-center w-60 border-[#434343] border-r hidden"
    >
      <Box className="relative top-10">
        <Typography color="primary" variant="h6" component="h2">
          {t("storage").toUpperCase()}
        </Typography>
      </Box>
      <Box id="actionsMenu" className="relative flex flex-col gap-2 w-[80%]">
        <SidebarLink id="dashboard" href="/" link="Dashboard">
          <DashboardIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="storage" href="storage" link={t("storage")}>
          <MenuBookIcon className="ml-2" />
        </SidebarLink>
        <SidebarLink id="settings" href="settings" link={t("settings")}>
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
        <Link
          to="/"
          className="flex items-center gap-2 h-10 duration-300 pointer-events-none line-through opacity-50"
        >
          <LogoutIcon className="ml-2" />
          <Typography component="span">Logout</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
