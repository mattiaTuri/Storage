import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import MenuLink from "../../shared/MenuLink";
import { useTranslation } from "react-i18next";
import { ChangeMenu } from "./sidebarFunctions";

function Sidebar() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{ backgroundColor: "background.paper" }}
      className="h-full lg:flex flex-col justify-between items-center w-72 border-[#434343] border-r hidden"
    >
      <Box className="relative top-10">
        <Typography color="primary" variant="h6" component="h2">
          {t("storage").toUpperCase()}
        </Typography>
      </Box>
      <Box id="actionsMenu" className="relative flex flex-col gap-2 w-[80%]">
        <MenuLink
          id="dashboard"
          href="/"
          link="Dashboard"
          fontSize={16}
          clickFunction={() => ChangeMenu("dashboard")}
        >
          <DashboardIcon className="ml-2" />
        </MenuLink>
        <MenuLink
          id="storage"
          href="storage"
          link={t("storage")}
          fontSize={16}
          clickFunction={() => ChangeMenu("storage")}
        >
          <MenuBookIcon className="ml-2" />
        </MenuLink>
        <MenuLink
          id="settings"
          href="settings"
          link={t("settings")}
          fontSize={16}
          clickFunction={() => ChangeMenu("settings")}
        >
          <SettingsIcon className="ml-2" />
        </MenuLink>
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
