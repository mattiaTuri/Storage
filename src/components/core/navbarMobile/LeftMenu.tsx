import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";

interface leftMenuProps {
  openMenu: boolean;
  setOpenMenu: (action: boolean) => void;
}

function LeftMenu({ openMenu, setOpenMenu }: leftMenuProps) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ backgroundColor: "background.paper" }}
      id="leftMenu"
      className={`fixed h-screen w-screen z-50 top-0 duration-300 ${
        openMenu ? "left-0" : "left-[-100%]"
      }`}
    >
      <Container className="h-full">
        <Box className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center pt-5">
            <Typography color="primary" variant="h6" component="h1">
              {t("storage").toUpperCase()}
            </Typography>
            <IconButton onClick={() => setOpenMenu(false)}>
              <CloseIcon color="secondary" />
            </IconButton>
          </div>
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setOpenMenu(false)}
            >
              <DashboardIcon />
              <Typography component="span" sx={{ fontSize: 25 }}>
                {t("dashboard")}
              </Typography>
            </Link>
            <Link
              to="storage"
              className="flex items-center gap-2"
              onClick={() => setOpenMenu(false)}
            >
              <MenuBookIcon />
              <Typography component="span" sx={{ fontSize: 25 }}>
                {t("storage")}
              </Typography>
            </Link>
            <Link
              to="settings"
              className="flex items-center gap-2"
              onClick={() => setOpenMenu(false)}
            >
              <SettingsIcon />
              <Typography component="span" sx={{ fontSize: 25 }}>
                {t("settings")}
              </Typography>
            </Link>
          </div>
          <div className="pb-5" color="#bbc3ce">
            <Link to="" className="flex items-center gap-2">
              <LogoutIcon />
              <Typography component="span" sx={{ fontSize: 25 }}>
                Logout
              </Typography>
            </Link>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

export default LeftMenu;
