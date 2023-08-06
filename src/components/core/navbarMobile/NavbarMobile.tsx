import { Container, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { openMenu } from "../../../store/hamburgerMenu/hamburgerSlice";
import { useDispatch } from "react-redux";
import LeftMenu from "./LeftMenu";

function NavbarMobile() {
  const dispatch = useDispatch();

  return (
    <Box className="lg:hidden h-20 bg-white dark:bg-[#252627] rounded-lg">
      <Container className="h-full">
        <Box className="flex flex-row justify-between items-center h-full">
          <Box>
            <Typography variant="h6" component="h1" color="#0066ff">
              STORAGE
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => dispatch(openMenu())}>
              <MenuIcon className="text-[#bbc3ce]" />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <LeftMenu />
    </Box>
  );
}

export default NavbarMobile;
