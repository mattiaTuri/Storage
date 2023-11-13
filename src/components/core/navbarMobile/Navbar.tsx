import { Container, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LeftMenu from "./LeftMenu";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Navbar() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Box
      sx={{ backgroundColor: "background.paper" }}
      className="lg:hidden h-20 border-[#434343] border-b"
    >
      <Container className="h-full">
        <nav className="flex flex-row justify-between items-center h-full">
          <Box>
            <Typography color="primary" variant="h6" component="h1">
              {t("storage").toUpperCase()}
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setOpenMenu(true)}>
              <MenuIcon color="secondary" />
            </IconButton>
          </Box>
        </nav>
      </Container>
      <LeftMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </Box>
  );
}

export default Navbar;
