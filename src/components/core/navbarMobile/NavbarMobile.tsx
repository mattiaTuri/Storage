import { Container, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { openMenu } from "../../../store/hamburgerMenu/hamburgerSlice";
import { useDispatch } from "react-redux";
import LeftMenu from "./LeftMenu";

function NavbarMobile() {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{ backgroundColor: "background.paper" }}
      className="lg:hidden h-20 border-[#434343] border-b"
    >
      <Container className="h-full">
        <nav className="flex flex-row justify-between items-center h-full">
          <Box>
            <Typography color="primary" variant="h6" component="h1">
              STORAGE
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => dispatch(openMenu())}>
              <MenuIcon color="secondary" />
            </IconButton>
          </Box>
        </nav>
      </Container>
      <LeftMenu />
    </Box>
  );
}

export default NavbarMobile;
